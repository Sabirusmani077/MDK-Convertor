import { jsPDF } from 'jspdf';
import { PdfOptions } from '../types';

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error(`Failed to read file: ${file.name}`));
    reader.readAsDataURL(file);
  });
}

function getImageDimensions(dataUrl: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth || img.width, height: img.naturalHeight || img.height });
    img.onerror = () => reject(new Error('Failed to load image metadata'));
    img.src = dataUrl;
  });
}

/**
 * Converts single or multiple image files into a single PDF document
 * Supports custom page sizing in mm, cm, or px
 */
export async function convertImagesToPdf(
  files: File[],
  options: PdfOptions = { orientation: 'auto', margin: 'small', pageSize: 'a4' },
  onProgress?: (current: number, total: number) => void
): Promise<{ blob: Blob; fileName: string }> {
  if (!files || files.length === 0) {
    throw new Error('No files provided for PDF conversion.');
  }

  // Standard A4 dimensions in mm
  const A4_WIDTH = 210;
  const A4_HEIGHT = 297;

  // Margin sizes in mm
  let marginMm = 0;
  if (options.margin === 'small') marginMm = 8;
  if (options.margin === 'normal') marginMm = 15;

  let doc: jsPDF | null = null;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (onProgress) {
      onProgress(i + 1, files.length);
    }

    const dataUrl = await readFileAsDataUrl(file);
    const { width: imgPxWidth, height: imgPxHeight } = await getImageDimensions(dataUrl);

    // Detect format
    let imgFormat: 'JPEG' | 'PNG' | 'WEBP' = 'JPEG';
    if (file.type.includes('png')) {
      imgFormat = 'PNG';
    } else if (file.type.includes('webp')) {
      imgFormat = 'WEBP';
    }

    // Determine page dimensions in mm
    let pageWidthMm: number;
    let pageHeightMm: number;
    let pageOrientation: 'p' | 'l' = 'p';

    if (
      options.customDimensions?.enabled &&
      options.customDimensions.width > 0 &&
      options.customDimensions.height > 0
    ) {
      // Custom dimensions specified (mm, cm, or px)
      const { unit, width, height } = options.customDimensions;
      if (unit === 'cm') {
        pageWidthMm = width * 10;
        pageHeightMm = height * 10;
      } else if (unit === 'px') {
        pageWidthMm = width * 0.264583;
        pageHeightMm = height * 0.264583;
      } else {
        // mm
        pageWidthMm = width;
        pageHeightMm = height;
      }
      pageOrientation = pageWidthMm > pageHeightMm ? 'l' : 'p';
    } else if (options.pageSize === 'fit') {
      // In "fit" mode, page matches image aspect ratio exactly
      const pxToMm = 0.264583;
      const maxDim = 297;
      const scale = Math.min(maxDim / (imgPxWidth * pxToMm), maxDim / (imgPxHeight * pxToMm), 1);
      pageWidthMm = (imgPxWidth * pxToMm) * scale + (marginMm * 2);
      pageHeightMm = (imgPxHeight * pxToMm) * scale + (marginMm * 2);
      pageOrientation = pageWidthMm > pageHeightMm ? 'l' : 'p';
    } else {
      // Standard A4
      const isLandscape = imgPxWidth > imgPxHeight;
      if (options.orientation === 'auto') {
        pageOrientation = isLandscape ? 'l' : 'p';
      } else if (options.orientation === 'landscape') {
        pageOrientation = 'l';
      } else {
        pageOrientation = 'p';
      }

      pageWidthMm = pageOrientation === 'l' ? A4_HEIGHT : A4_WIDTH;
      pageHeightMm = pageOrientation === 'l' ? A4_WIDTH : A4_HEIGHT;
    }

    // Initialize or add page
    if (!doc) {
      doc = new jsPDF({
        orientation: pageOrientation,
        unit: 'mm',
        format: [pageWidthMm, pageHeightMm]
      });
    } else {
      doc.addPage([pageWidthMm, pageHeightMm], pageOrientation);
    }

    // Available area inside margins
    const usableWidth = Math.max(pageWidthMm - (marginMm * 2), 5);
    const usableHeight = Math.max(pageHeightMm - (marginMm * 2), 5);

    // Compute scale to fit inside usable area while preserving aspect ratio
    const widthScale = usableWidth / imgPxWidth;
    const heightScale = usableHeight / imgPxHeight;
    const fitScale = Math.min(widthScale, heightScale);

    const renderWidthMm = imgPxWidth * fitScale;
    const renderHeightMm = imgPxHeight * fitScale;

    // Centered placement
    const posX = marginMm + (usableWidth - renderWidthMm) / 2;
    const posY = marginMm + (usableHeight - renderHeightMm) / 2;

    doc.addImage(dataUrl, imgFormat, posX, posY, renderWidthMm, renderHeightMm, undefined, 'FAST');
  }

  if (!doc) {
    throw new Error('Failed to generate PDF document.');
  }

  const pdfBlob = doc.output('blob');

  // Filename creation
  let fileName = 'mdk_document.pdf';
  if (files.length === 1) {
    const base = files[0].name.substring(0, files[0].name.lastIndexOf('.')) || files[0].name;
    fileName = `${base}.pdf`;
  } else {
    fileName = `mdk_converted_${files.length}_images.pdf`;
  }

  return {
    blob: pdfBlob,
    fileName
  };
}
