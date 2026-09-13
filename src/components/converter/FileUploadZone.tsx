import React, { useRef, useState } from 'react';
import { UploadCloud, FileType, Plus, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FileUploadZoneProps {
  onFilesSelected: (files: File[]) => void;
  acceptMimeTypes?: string;
  allowMultiple?: boolean;
  isCompact?: boolean;
  disabled?: boolean;
}

export const FileUploadZone: React.FC<FileUploadZoneProps> = ({
  onFilesSelected,
  acceptMimeTypes = 'image/jpeg,image/png,image/webp,application/pdf',
  allowMultiple = true,
  isCompact = false,
  disabled = false
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (disabled) return;
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (disabled) return;

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      onFilesSelected(droppedFiles);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selected = Array.from(e.target.files);
      onFilesSelected(selected);
      // Reset input value so re-selecting same file triggers change
      e.target.value = '';
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => {
        if (!disabled && fileInputRef.current) {
          fileInputRef.current.click();
        }
      }}
      className={`relative cursor-pointer transition-all duration-300 rounded-2xl border-2 border-dashed text-center flex flex-col items-center justify-center select-none ${
        isDragOver
          ? 'border-brand-500 bg-brand-50/80 scale-[1.01] shadow-glow'
          : 'border-slate-300 hover:border-brand-400 bg-gradient-to-b from-white to-slate-50/60 hover:bg-brand-50/30 shadow-xs'
      } ${isCompact ? 'p-6' : 'p-8 sm:p-12'}`}
    >
      <input
        ref={fileInputRef}
        type="file"
        multiple={allowMultiple}
        accept={acceptMimeTypes}
        onChange={handleFileInputChange}
        className="hidden"
        disabled={disabled}
      />

      {/* Floating Animated Icon */}
      <div
        className={`rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/25 transition-transform duration-300 group-hover:scale-110 ${
          isCompact ? 'w-12 h-12 mb-3' : 'w-16 h-16 sm:w-20 sm:h-20 mb-5'
        }`}
      >
        <UploadCloud className={`${isCompact ? 'w-6 h-6' : 'w-8 h-8 sm:w-10 sm:h-10'} animate-pulse-subtle`} />
      </div>

      {/* Main Action Labels */}
      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight mb-2">
        Drop your file here
      </h3>
      <p className="text-slate-500 text-sm sm:text-base font-normal mb-5 max-w-md">
        or{' '}
        <span className="inline-block px-4 py-1.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-sm transition-all">
          Choose File
        </span>
      </p>

      {/* Supported formats indicator */}
      <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-white/80 border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
        <FileType className="w-3.5 h-3.5 text-brand-600" />
        <span>Supports PNG, JPG, JPEG and PDF</span>
      </div>

      {/* In-Browser Privacy Guarantee Badge */}
      <div className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-400">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>Your files are processed securely and automatically removed after conversion.</span>
      </div>
    </div>
  );
};
