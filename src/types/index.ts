export type SupportedSourceFormat = 'png' | 'jpg' | 'jpeg' | 'webp' | 'pdf' | 'all';
export type SupportedTargetFormat = 'jpg' | 'png' | 'pdf' | 'webp';

export interface UploadedFileItem {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  previewUrl: string;
  status: 'idle' | 'converting' | 'completed' | 'error';
  progress: number;
  convertedBlob?: Blob;
  convertedUrl?: string;
  convertedName?: string;
  errorMessage?: string;
}

export type DimensionUnit = 'px' | 'cm' | 'mm';

export interface CustomDimensionOptions {
  enabled: boolean;
  unit: DimensionUnit;
  width: number;
  height: number;
  keepAspectRatio: boolean;
  dpi?: number; // e.g. 300 for high-res print, 96 for screen
}

export interface PdfOptions {
  orientation: 'portrait' | 'landscape' | 'auto';
  margin: 'none' | 'small' | 'normal';
  pageSize: 'a4' | 'fit' | 'custom';
  customDimensions?: CustomDimensionOptions;
}

export interface ImageOptions {
  quality: number; // 0.1 to 1.0
  backgroundColor: string; // for PNG to JPG transparency replacement
  customDimensions?: CustomDimensionOptions;
}

export interface ToolConfig {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge?: string;
  sourceFormat: SupportedSourceFormat;
  targetFormat: SupportedTargetFormat;
  headline: string;
  subheadline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  features: {
    title: string;
    description: string;
  }[];
  steps: {
    step: string;
    title: string;
    desc: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  allowMultiple: boolean;
  acceptMimeTypes: string;
}
