import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  SupportedSourceFormat,
  SupportedTargetFormat,
  UploadedFileItem,
  PdfOptions,
  ImageOptions,
  CustomDimensionOptions,
  DimensionUnit
} from '../../types';
import { FileUploadZone } from './FileUploadZone';
import { FilePreviewList } from './FilePreviewList';
import { ConversionProgress } from './ConversionProgress';
import { DownloadArea } from './DownloadArea';
import { convertSingleImage } from '../../services/imageConverter';
import { convertImagesToPdf } from '../../services/pdfConverter';
import { convertPdfToJpgPages, RenderedPdfPage } from '../../services/pdfRenderer';
import {
  Settings,
  ArrowRight,
  AlertCircle,
  FileCheck,
  Maximize2,
  Sparkles,
  Layers,
  Crop,
  Link2,
  Unlink
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface UniversalConverterProps {
  initialSource?: SupportedSourceFormat;
  initialTarget?: SupportedTargetFormat;
  titleOverride?: string;
  isCompact?: boolean;
}

export const UniversalConverter: React.FC<UniversalConverterProps> = ({
  initialSource = 'jpg',
  initialTarget = 'pdf',
  titleOverride,
  isCompact = false
}) => {
  const { recordConversion } = useAuth();
  const [sourceFormat, setSourceFormat] = useState<SupportedSourceFormat>(initialSource);
  const [targetFormat, setTargetFormat] = useState<SupportedTargetFormat>(initialTarget);
  const [files, setFiles] = useState<UploadedFileItem[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionProgress, setConversionProgress] = useState(0);
  const [progressStatus, setProgressStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Result states
  const [isCompleted, setIsCompleted] = useState(false);
  const [singleResult, setSingleResult] = useState<{
    blob: Blob;
    url: string;
    fileName: string;
    size: number;
  } | undefined>(undefined);
  const [pdfPagesResult, setPdfPagesResult] = useState<RenderedPdfPage[] | undefined>(undefined);
  const [zipResult, setZipResult] = useState<{
    blob: Blob;
    url: string;
    fileName: string;
  } | undefined>(undefined);

  // Advanced Options
  const [pdfOptions, setPdfOptions] = useState<PdfOptions>({
    orientation: 'auto',
    margin: 'small',
    pageSize: 'a4'
  });
  const [imageQuality, setImageQuality] = useState(0.92);

  // Custom Dimensions state (px, cm, mm)
  const [customDimensions, setCustomDimensions] = useState<CustomDimensionOptions>({
    enabled: false,
    unit: 'px',
    width: 1920,
    height: 1080,
    keepAspectRatio: true,
    dpi: 300
  });
  const [naturalDimensions, setNaturalDimensions] = useState<{ width: number; height: number } | null>(null);

  // Sync if props change
  useEffect(() => {
    setSourceFormat(initialSource);
    setTargetFormat(initialTarget);
  }, [initialSource, initialTarget]);

  // Determine accept MIME types
  const getAcceptMimeTypes = () => {
    if (sourceFormat === 'pdf') return 'application/pdf';
    if (sourceFormat === 'png') return 'image/png';
    if (sourceFormat === 'jpg' || sourceFormat === 'jpeg') return 'image/jpeg,image/jpg';
    return 'image/jpeg,image/png,image/webp,image/jpg,application/pdf';
  };

  const handleFilesSelected = (newFiles: File[]) => {
    setErrorMessage(null);

    // Filter valid files
    const validFiles = newFiles.filter((f) => {
      if (sourceFormat === 'pdf') {
        return f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf');
      }
      if (sourceFormat === 'png') {
        return f.type === 'image/png' || f.name.toLowerCase().endsWith('.png');
      }
      if (sourceFormat === 'jpg' || sourceFormat === 'jpeg') {
        return (
          f.type === 'image/jpeg' ||
          f.name.toLowerCase().endsWith('.jpg') ||
          f.name.toLowerCase().endsWith('.jpeg')
        );
      }
      return f.type.startsWith('image/') || f.type === 'application/pdf';
    });

    if (validFiles.length === 0) {
      setErrorMessage(`Please upload a valid ${sourceFormat.toUpperCase()} file.`);
      return;
    }

    const first = validFiles[0];

    // Detect natural dimensions of image
    if (first.type.startsWith('image/')) {
      const img = new Image();
      img.onload = () => {
        const nw = img.naturalWidth || img.width;
        const nh = img.naturalHeight || img.height;
        setNaturalDimensions({ width: nw, height: nh });
        setCustomDimensions((prev) => ({
          ...prev,
          width: prev.enabled ? prev.width : nw,
          height: prev.enabled ? prev.height : nh
        }));
      };
      img.src = URL.createObjectURL(first);
    }

    // Auto-detect format if user drops something different on homepage
    if (first.type === 'application/pdf' && targetFormat !== 'jpg') {
      setSourceFormat('pdf');
      setTargetFormat('jpg');
    } else if (first.type === 'image/png' && sourceFormat === 'jpg') {
      setSourceFormat('png');
    }

    const items: UploadedFileItem[] = validFiles.map((file) => ({
      id: Math.random().toString(36).substring(2, 9),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : '',
      status: 'idle',
      progress: 0
    }));

    if (sourceFormat === 'pdf' || targetFormat !== 'pdf') {
      setFiles(items);
    } else {
      setFiles((prev) => [...prev, ...items]);
    }
  };

  const handleRemoveFile = (id: string) => {
    setFiles((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setFiles([]);
    setErrorMessage(null);
    setNaturalDimensions(null);
  };

  const resetAll = () => {
    setFiles([]);
    setIsCompleted(false);
    setSingleResult(undefined);
    setPdfPagesResult(undefined);
    setZipResult(undefined);
    setConversionProgress(0);
    setProgressStatus('');
    setErrorMessage(null);
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // fallback silent
    }
  };

  // Dimension Handlers
  const handleUnitChange = (newUnit: DimensionUnit) => {
    const dpi = customDimensions.dpi || 300;
    let widthInMm = customDimensions.width;
    let heightInMm = customDimensions.height;

    // 1. Convert current to mm
    if (customDimensions.unit === 'px') {
      widthInMm = (customDimensions.width * 25.4) / dpi;
      heightInMm = (customDimensions.height * 25.4) / dpi;
    } else if (customDimensions.unit === 'cm') {
      widthInMm = customDimensions.width * 10;
      heightInMm = customDimensions.height * 10;
    }

    // 2. Convert mm to newUnit
    let newW = widthInMm;
    let newH = heightInMm;
    if (newUnit === 'px') {
      newW = Math.round((widthInMm * dpi) / 25.4);
      newH = Math.round((heightInMm * dpi) / 25.4);
    } else if (newUnit === 'cm') {
      newW = parseFloat((widthInMm / 10).toFixed(2));
      newH = parseFloat((heightInMm / 10).toFixed(2));
    } else {
      newW = Math.round(widthInMm);
      newH = Math.round(heightInMm);
    }

    setCustomDimensions((prev) => ({
      ...prev,
      unit: newUnit,
      width: newW,
      height: newH
    }));
  };

  const handleWidthChange = (val: number) => {
    const ratio = naturalDimensions
      ? naturalDimensions.width / naturalDimensions.height
      : customDimensions.width / (customDimensions.height || 1);

    if (customDimensions.keepAspectRatio && ratio) {
      const newH = parseFloat((val / ratio).toFixed(customDimensions.unit === 'px' ? 0 : 2));
      setCustomDimensions((prev) => ({ ...prev, width: val, height: newH }));
    } else {
      setCustomDimensions((prev) => ({ ...prev, width: val }));
    }
  };

  const handleHeightChange = (val: number) => {
    const ratio = naturalDimensions
      ? naturalDimensions.width / naturalDimensions.height
      : customDimensions.width / (customDimensions.height || 1);

    if (customDimensions.keepAspectRatio && ratio) {
      const newW = parseFloat((val * ratio).toFixed(customDimensions.unit === 'px' ? 0 : 2));
      setCustomDimensions((prev) => ({ ...prev, height: val, width: newW }));
    } else {
      setCustomDimensions((prev) => ({ ...prev, height: val }));
    }
  };

  const applyPreset = (type: 'passport' | 'a4' | 'photo4x6' | 'instagram' | 'fhd' | 'original') => {
    if (type === 'passport') {
      setCustomDimensions({
        enabled: true,
        unit: 'mm',
        width: 35,
        height: 45,
        keepAspectRatio: false,
        dpi: 300
      });
    } else if (type === 'a4') {
      setCustomDimensions({
        enabled: true,
        unit: 'mm',
        width: 210,
        height: 297,
        keepAspectRatio: false,
        dpi: 300
      });
    } else if (type === 'photo4x6') {
      setCustomDimensions({
        enabled: true,
        unit: 'cm',
        width: 10,
        height: 15,
        keepAspectRatio: false,
        dpi: 300
      });
    } else if (type === 'instagram') {
      setCustomDimensions({
        enabled: true,
        unit: 'px',
        width: 1080,
        height: 1080,
        keepAspectRatio: false,
        dpi: 96
      });
    } else if (type === 'fhd') {
      setCustomDimensions({
        enabled: true,
        unit: 'px',
        width: 1920,
        height: 1080,
        keepAspectRatio: false,
        dpi: 96
      });
    } else if (type === 'original' && naturalDimensions) {
      setCustomDimensions({
        enabled: false,
        unit: 'px',
        width: naturalDimensions.width,
        height: naturalDimensions.height,
        keepAspectRatio: true,
        dpi: 300
      });
    }
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      setErrorMessage('Please select at least one file to convert.');
      return;
    }

    setErrorMessage(null);
    setIsConverting(true);
    setConversionProgress(15);
    setProgressStatus('Initializing conversion engine...');

    try {
      // 1. PDF to JPG conversion
      if (sourceFormat === 'pdf' || (files.length === 1 && files[0].file.type === 'application/pdf')) {
        setProgressStatus('Parsing PDF pages...');
        setConversionProgress(30);

        const result = await convertPdfToJpgPages(files[0].file, (current, total) => {
          const pct = Math.round(30 + (current / total) * 55);
          setConversionProgress(pct);
          setProgressStatus(`Rendering page ${current} of ${total}...`);
        });

        setPdfPagesResult(result.pages);

        if (result.zipBlob && result.zipFileName) {
          const zipUrl = URL.createObjectURL(result.zipBlob);
          setZipResult({
            blob: result.zipBlob,
            url: zipUrl,
            fileName: result.zipFileName
          });
        }

        if (result.pages.length === 1) {
          const p = result.pages[0];
          setSingleResult({
            blob: p.blob,
            url: URL.createObjectURL(p.blob),
            fileName: p.fileName,
            size: p.blob.size
          });
        }

        recordConversion(files[0].name, 'jpg');
        setConversionProgress(100);
        setIsCompleted(true);
        triggerConfetti();
        return;
      }

      // 2. Images to PDF conversion (single or multiple)
      if (targetFormat === 'pdf') {
        setProgressStatus('Compiling images into PDF document...');
        setConversionProgress(35);

        const fileList = files.map((f) => f.file);
        const result = await convertImagesToPdf(
          fileList,
          { ...pdfOptions, customDimensions },
          (cur, tot) => {
            const pct = Math.round(35 + (cur / tot) * 55);
            setConversionProgress(pct);
            setProgressStatus(`Processing photo ${cur} of ${tot}...`);
          }
        );

        const url = URL.createObjectURL(result.blob);
        setSingleResult({
          blob: result.blob,
          url,
          fileName: result.fileName,
          size: result.blob.size
        });

        recordConversion(result.fileName, 'pdf');
        setConversionProgress(100);
        setIsCompleted(true);
        triggerConfetti();
        return;
      }

      // 3. Single / Batch Image to Image conversion (PNG to JPG, JPG to PNG, etc.)
      setProgressStatus('Processing image format transformation...');
      setConversionProgress(40);

      // Handle first or primary image
      const primaryFile = files[0].file;
      const targetFmt = targetFormat === 'jpg' ? 'jpg' : targetFormat === 'png' ? 'png' : 'webp';

      const converted = await convertSingleImage(primaryFile, {
        targetFormat: targetFmt,
        quality: imageQuality,
        customDimensions
      });

      setConversionProgress(85);
      setProgressStatus('Finalizing image payload...');

      const url = URL.createObjectURL(converted.blob);
      setSingleResult({
        blob: converted.blob,
        url,
        fileName: converted.fileName,
        size: converted.blob.size
      });

      recordConversion(converted.fileName, targetFmt);
      setConversionProgress(100);
      setIsCompleted(true);
      triggerConfetti();
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'An error occurred during conversion. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Top Format Selector Bar */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-soft mb-6 transition-all">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            {/* From Format */}
            <div className="flex-1 sm:flex-initial">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                From
              </label>
              <select
                value={sourceFormat}
                onChange={(e) => {
                  const val = e.target.value as SupportedSourceFormat;
                  setSourceFormat(val);
                  if (val === 'pdf') setTargetFormat('jpg');
                  if (val === 'png' && targetFormat === 'png') setTargetFormat('jpg');
                  if (val === 'jpg' && targetFormat === 'jpg') setTargetFormat('pdf');
                  resetAll();
                }}
                className="w-full sm:w-36 bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="jpg">JPG / JPEG</option>
                <option value="png">PNG</option>
                <option value="pdf">PDF Document</option>
                <option value="all">Any Image</option>
              </select>
            </div>

            <div className="pt-5 text-slate-400">
              <ArrowRight className="w-5 h-5" />
            </div>

            {/* To Target Format */}
            <div className="flex-1 sm:flex-initial">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                To
              </label>
              <select
                value={targetFormat}
                onChange={(e) => {
                  setTargetFormat(e.target.value as SupportedTargetFormat);
                  resetAll();
                }}
                className="w-full sm:w-36 bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                {sourceFormat === 'pdf' ? (
                  <option value="jpg">JPG Image</option>
                ) : (
                  <>
                    <option value="pdf">PDF Document</option>
                    <option value="jpg">JPG Image</option>
                    <option value="png">PNG Image</option>
                  </>
                )}
              </select>
            </div>
          </div>

          {/* Quick preset pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto justify-start sm:justify-end">
            <button
              onClick={() => {
                setSourceFormat('jpg');
                setTargetFormat('pdf');
                resetAll();
              }}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
                sourceFormat === 'jpg' && targetFormat === 'pdf'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-semibold'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              JPG to PDF
            </button>
            <button
              onClick={() => {
                setSourceFormat('png');
                setTargetFormat('jpg');
                resetAll();
              }}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
                sourceFormat === 'png' && targetFormat === 'jpg'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-semibold'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              PNG to JPG
            </button>
            <button
              onClick={() => {
                setSourceFormat('jpg');
                setTargetFormat('png');
                resetAll();
              }}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
                sourceFormat === 'jpg' && targetFormat === 'png'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-semibold'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              JPG to PNG
            </button>
          </div>
        </div>
      </div>

      {/* Main Converter Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft-xl relative overflow-hidden">
        {/* Subtle top decoration */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600" />

        {/* Error Notification */}
        {errorMessage && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3 text-rose-800 text-sm animate-fade-in">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-600 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold">Conversion Note</p>
              <p className="text-rose-700 text-xs mt-0.5">{errorMessage}</p>
            </div>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-rose-400 hover:text-rose-700 text-xs font-bold px-2 py-1"
            >
              ✕
            </button>
          </div>
        )}

        {/* State 1: Active Progress */}
        {isConverting && (
          <ConversionProgress progress={conversionProgress} statusText={progressStatus} />
        )}

        {/* State 2: Conversion Completed */}
        {!isConverting && isCompleted && (
          <DownloadArea
            singleDownload={singleResult}
            pdfPages={pdfPagesResult}
            zipDownload={zipResult}
            onConvertAnother={resetAll}
          />
        )}

        {/* State 3: Upload & File Preview Screen */}
        {!isConverting && !isCompleted && (
          <div className="space-y-6">
            {files.length === 0 ? (
              <FileUploadZone
                onFilesSelected={handleFilesSelected}
                acceptMimeTypes={getAcceptMimeTypes()}
                allowMultiple={targetFormat === 'pdf'}
                isCompact={isCompact}
              />
            ) : (
              <div className="space-y-6">
                <FilePreviewList
                  items={files}
                  onRemoveItem={handleRemoveFile}
                  onClearAll={handleClearAll}
                  onAddMore={() => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.multiple = true;
                    input.accept = getAcceptMimeTypes();
                    input.onchange = (e: any) => {
                      if (e.target.files) {
                        handleFilesSelected(Array.from(e.target.files));
                      }
                    };
                    input.click();
                  }}
                  allowMultiple={targetFormat === 'pdf'}
                />

                {/* PDF Configuration Options (Orientation & Margins) */}
                {targetFormat === 'pdf' && (
                  <div className="p-4 bg-slate-50/90 rounded-2xl border border-slate-200 text-left space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <Settings className="w-3.5 h-3.5 text-slate-600" />
                        PDF Document Settings
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      {/* Orientation */}
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">
                          Page Orientation
                        </label>
                        <select
                          value={pdfOptions.orientation}
                          onChange={(e) =>
                            setPdfOptions({
                              ...pdfOptions,
                              orientation: e.target.value as any
                            })
                          }
                          className="w-full bg-white border border-slate-200 rounded-lg p-2 font-medium text-slate-800"
                        >
                          <option value="auto">Auto (Match Image Ratio)</option>
                          <option value="portrait">Portrait</option>
                          <option value="landscape">Landscape</option>
                        </select>
                      </div>

                      {/* Margins */}
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">
                          Page Margins
                        </label>
                        <select
                          value={pdfOptions.margin}
                          onChange={(e) =>
                            setPdfOptions({
                              ...pdfOptions,
                              margin: e.target.value as any
                            })
                          }
                          className="w-full bg-white border border-slate-200 rounded-lg p-2 font-medium text-slate-800"
                        >
                          <option value="small">Small Margins (Clean)</option>
                          <option value="none">No Margins (Full Bleed)</option>
                          <option value="normal">Normal Margins (Standard)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* NEW: Dimension & Size Customization Panel (px, cm, mm) */}
                {sourceFormat !== 'pdf' && (
                  <div className="p-4 bg-slate-50/90 rounded-2xl border border-slate-200 text-left space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Crop className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          Resize &amp; Dimensions (px, cm, mm)
                        </span>
                      </div>
                      <label className="flex items-center gap-1.5 cursor-pointer select-none text-xs font-semibold text-emerald-700">
                        <input
                          type="checkbox"
                          checked={customDimensions.enabled}
                          onChange={(e) =>
                            setCustomDimensions({ ...customDimensions, enabled: e.target.checked })
                          }
                          className="w-4 h-4 accent-emerald-600 rounded cursor-pointer"
                        />
                        <span>Custom Size</span>
                      </label>
                    </div>

                    {customDimensions.enabled && (
                      <div className="space-y-3 pt-2 border-t border-slate-200/70 animate-fade-in text-xs">
                        {/* Presets */}
                        <div>
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                            Quick Presets
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            <button
                              type="button"
                              onClick={() => applyPreset('passport')}
                              className="px-2.5 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 rounded-lg text-slate-600 font-medium transition-colors"
                            >
                              📸 Passport (35×45 mm)
                            </button>
                            <button
                              type="button"
                              onClick={() => applyPreset('a4')}
                              className="px-2.5 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 rounded-lg text-slate-600 font-medium transition-colors"
                            >
                              📄 A4 Document (210×297 mm)
                            </button>
                            <button
                              type="button"
                              onClick={() => applyPreset('photo4x6')}
                              className="px-2.5 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 rounded-lg text-slate-600 font-medium transition-colors"
                            >
                              🖼️ Photo 4×6 (10×15 cm)
                            </button>
                            <button
                              type="button"
                              onClick={() => applyPreset('instagram')}
                              className="px-2.5 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 rounded-lg text-slate-600 font-medium transition-colors"
                            >
                              📱 Square (1080×1080 px)
                            </button>
                            <button
                              type="button"
                              onClick={() => applyPreset('fhd')}
                              className="px-2.5 py-1 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 rounded-lg text-slate-600 font-medium transition-colors"
                            >
                              💻 Full HD (1920×1080 px)
                            </button>
                            {naturalDimensions && (
                              <button
                                type="button"
                                onClick={() => applyPreset('original')}
                                className="px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-500 font-medium transition-colors"
                              >
                                🔄 Original ({naturalDimensions.width}×{naturalDimensions.height} px)
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Dimension Inputs */}
                        <div className="grid grid-cols-12 gap-2 items-end pt-1">
                          {/* Width */}
                          <div className="col-span-4 sm:col-span-4">
                            <label className="block text-slate-600 font-semibold mb-1">
                              Width ({customDimensions.unit})
                            </label>
                            <input
                              type="number"
                              min="1"
                              step={customDimensions.unit === 'px' ? '1' : '0.1'}
                              value={customDimensions.width || ''}
                              onChange={(e) => handleWidthChange(parseFloat(e.target.value) || 0)}
                              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-semibold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            />
                          </div>

                          {/* Aspect Ratio Lock */}
                          <div className="col-span-1 sm:col-span-1 flex items-center justify-center pb-2">
                            <button
                              type="button"
                              onClick={() =>
                                setCustomDimensions({
                                  ...customDimensions,
                                  keepAspectRatio: !customDimensions.keepAspectRatio
                                })
                              }
                              title={
                                customDimensions.keepAspectRatio
                                  ? 'Aspect Ratio Locked (Click to unlock)'
                                  : 'Aspect Ratio Unlocked (Click to lock)'
                              }
                              className={`p-2 rounded-lg border transition-all ${
                                customDimensions.keepAspectRatio
                                  ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
                                  : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                              }`}
                            >
                              {customDimensions.keepAspectRatio ? (
                                <Link2 className="w-4 h-4" />
                              ) : (
                                <Unlink className="w-4 h-4" />
                              )}
                            </button>
                          </div>

                          {/* Height */}
                          <div className="col-span-4 sm:col-span-4">
                            <label className="block text-slate-600 font-semibold mb-1">
                              Height ({customDimensions.unit})
                            </label>
                            <input
                              type="number"
                              min="1"
                              step={customDimensions.unit === 'px' ? '1' : '0.1'}
                              value={customDimensions.height || ''}
                              onChange={(e) => handleHeightChange(parseFloat(e.target.value) || 0)}
                              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-semibold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            />
                          </div>

                          {/* Unit Selector */}
                          <div className="col-span-3 sm:col-span-3">
                            <label className="block text-slate-600 font-semibold mb-1">Unit</label>
                            <select
                              value={customDimensions.unit}
                              onChange={(e) => handleUnitChange(e.target.value as DimensionUnit)}
                              className="w-full bg-white border border-slate-200 rounded-xl px-2 py-2 text-slate-900 font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            >
                              <option value="px">Pixels (px)</option>
                              <option value="mm">Millimeters (mm)</option>
                              <option value="cm">Centimeters (cm)</option>
                            </select>
                          </div>
                        </div>

                        {/* Resolution note */}
                        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                          <span>
                            Resolution: <strong className="text-slate-600">{customDimensions.dpi || 300} DPI</strong> (High-Quality Print)
                          </span>
                          <span>
                            {customDimensions.keepAspectRatio ? '✓ Proportions preserved' : 'Free custom scale'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* PNG to JPG Quality slider */}
                {targetFormat === 'jpg' && sourceFormat !== 'pdf' && (
                  <div className="p-4 bg-slate-50/90 rounded-2xl border border-slate-200 text-left space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">JPEG Output Quality</span>
                      <span className="font-bold text-emerald-600">
                        {Math.round(imageQuality * 100)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.4"
                      max="1.0"
                      step="0.05"
                      value={imageQuality}
                      onChange={(e) => setImageQuality(parseFloat(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Smaller File</span>
                      <span>Maximum Quality</span>
                    </div>
                  </div>
                )}

                {/* Main Convert Action Button */}
                <div className="pt-2">
                  <button
                    onClick={handleConvert}
                    className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-base sm:text-lg rounded-2xl shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all flex items-center justify-center gap-3 active:scale-[0.99]"
                  >
                    <Sparkles className="w-5 h-5 text-emerald-200" />
                    <span>
                      Convert to {targetFormat.toUpperCase()} ({files.length}{' '}
                      {files.length === 1 ? 'file' : 'files'})
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
