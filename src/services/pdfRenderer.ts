import * as pdfjsLib from 'pdfjs-dist';
import JSZip from 'jszip';

// Configure PDF.js worker
if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
}

export interface RenderedPdfPage {
  pageNumber: number;
  blob: Blob;
  dataUrl: string;
  fileName: string;
}

export async function convertPdfToJpgPages(
  file: File,
  onProgress?: (current: number, total: number) => void
): Promise<{
  pages: RenderedPdfPage[];
  zipBlob?: Blob;
  zipFileName?: string;
}> {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdfDoc = await loadingTask.promise;
  const numPages = pdfDoc.numPages;

  const renderedPages: RenderedPdfPage[] = [];
  const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || 'document';

  for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    if (onProgress) {
      onProgress(pageNum, numPages);
    }

    const page = await pdfDoc.getPage(pageNum);
    // Render at 2.0x scale for crisp high-dpi text and graphics
    const viewport = page.getViewport({ scale: 2.0 });

    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error(`Failed to create 2D canvas for PDF page ${pageNum}`);
    }

    // Fill white background for PDF
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };

    await page.render(renderContext).promise;

    const pageBlob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (b) => {
          if (b) resolve(b);
          else reject(new Error(`Failed to convert page ${pageNum} to JPG blob`));
        },
        'image/jpeg',
        0.92
      );
    });

    const pageDataUrl = canvas.toDataURL('image/jpeg', 0.92);
    const pageFileName = `${baseName}_page_${pageNum}.jpg`;

    renderedPages.push({
      pageNumber: pageNum,
      blob: pageBlob,
      dataUrl: pageDataUrl,
      fileName: pageFileName
    });
  }

  // If more than 1 page, bundle into a ZIP
  let zipBlob: Blob | undefined;
  let zipFileName: string | undefined;

  if (renderedPages.length > 1) {
    const zip = new JSZip();
    renderedPages.forEach((p) => {
      zip.file(p.fileName, p.blob);
    });
    zipBlob = await zip.generateAsync({ type: 'blob' });
    zipFileName = `${baseName}_all_pages_jpg.zip`;
  }

  return {
    pages: renderedPages,
    zipBlob,
    zipFileName
  };
}
