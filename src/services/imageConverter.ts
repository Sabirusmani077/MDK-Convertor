/**
 * High-performance client-side image converter using HTML5 Canvas API
 * Supports custom size and dimensions in Pixels (px), Centimeters (cm), and Millimeters (mm)
 */

import { CustomDimensionOptions } from '../types';

export interface ConvertImageOptions {
  targetFormat: 'jpg' | 'png' | 'webp';
  quality?: number; // 0.1 to 1.0 (default 0.92)
  backgroundColor?: string; // defaults to #FFFFFF for transparent to JPEG
  customDimensions?: CustomDimensionOptions;
}

export async function convertSingleImage(
  file: File,
  options: ConvertImageOptions
): Promise<{ blob: Blob; fileName: string; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        try {
          const naturalW = img.naturalWidth || img.width;
          const naturalH = img.naturalHeight || img.height;

          let targetW = naturalW;
          let targetH = naturalH;

          // Process custom dimensions (px, cm, mm)
          if (
            options.customDimensions?.enabled &&
            options.customDimensions.width > 0 &&
            options.customDimensions.height > 0
          ) {
            const { unit, width, height, dpi = 300 } = options.customDimensions;

            if (unit === 'px') {
              targetW = Math.round(width);
              targetH = Math.round(height);
            } else if (unit === 'mm') {
              // 1 inch = 25.4 mm
              targetW = Math.round((width * dpi) / 25.4);
              targetH = Math.round((height * dpi) / 25.4);
            } else if (unit === 'cm') {
              // 1 cm = 10 mm
              targetW = Math.round((width * 10 * dpi) / 25.4);
              targetH = Math.round((height * 10 * dpi) / 25.4);
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = Math.max(targetW, 1);
          canvas.height = Math.max(targetH, 1);

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Failed to create canvas 2D rendering context'));
            return;
          }

          // Enable high-quality bicubic interpolation
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';

          // If converting to JPEG or solid background is required, fill canvas
          if (options.targetFormat === 'jpg') {
            ctx.fillStyle = options.backgroundColor || '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

          // Draw the image onto canvas
          if (options.customDimensions?.enabled && options.customDimensions.keepAspectRatio) {
            const scale = Math.min(canvas.width / naturalW, canvas.height / naturalH);
            const drawW = naturalW * scale;
            const drawH = naturalH * scale;
            const offsetX = (canvas.width - drawW) / 2;
            const offsetY = (canvas.height - drawH) / 2;
            ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
          } else {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          }

          let mimeType = 'image/jpeg';
          let extension = 'jpg';

          if (options.targetFormat === 'png') {
            mimeType = 'image/png';
            extension = 'png';
          } else if (options.targetFormat === 'webp') {
            mimeType = 'image/webp';
            extension = 'webp';
          }

          const quality = options.quality !== undefined ? options.quality : 0.92;

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Failed to generate converted image blob'));
                return;
              }

              // Extract base filename without extension
              const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
              const outputName = `${baseName}_converted.${extension}`;

              resolve({
                blob,
                fileName: outputName,
                width: canvas.width,
                height: canvas.height
              });
            },
            mimeType,
            quality
          );
        } catch (err) {
          reject(err);
        }
      };

      img.onerror = () => {
        reject(new Error('Unable to decode image file. Please check if the file is valid.'));
      };

      img.src = reader.result as string;
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file from disk.'));
    };

    reader.readAsDataURL(file);
  });
}
