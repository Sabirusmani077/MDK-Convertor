import React from 'react';
import { Download, RefreshCw, CheckCircle, FileText, Image as ImageIcon, Archive } from 'lucide-react';
import { RenderedPdfPage } from '../../services/pdfRenderer';

interface DownloadAreaProps {
  singleDownload?: {
    blob: Blob;
    url: string;
    fileName: string;
    size: number;
  };
  pdfPages?: RenderedPdfPage[];
  zipDownload?: {
    blob: Blob;
    url: string;
    fileName: string;
  };
  onConvertAnother: () => void;
}

export const DownloadArea: React.FC<DownloadAreaProps> = ({
  singleDownload,
  pdfPages,
  zipDownload,
  onConvertAnother
}) => {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const triggerDownload = (url: string, fileName: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="p-6 sm:p-10 bg-white rounded-2xl border border-slate-200 shadow-soft text-center animate-slide-up">
      {/* Success Badge */}
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-sm">
        <CheckCircle className="w-9 h-9" />
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-1">
        Conversion Completed!
      </h3>
      <p className="text-sm text-slate-500 mb-6 font-medium">
        Your converted file is ready for download.
      </p>

      {/* Single File Output */}
      {singleDownload && (
        <div className="max-w-md mx-auto mb-8 p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-3 text-left overflow-hidden">
            <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0">
              {singleDownload.fileName.endsWith('.pdf') ? (
                <FileText className="w-5 h-5 text-rose-500" />
              ) : (
                <ImageIcon className="w-5 h-5 text-brand-600" />
              )}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-slate-800 truncate" title={singleDownload.fileName}>
                {singleDownload.fileName}
              </p>
              <p className="text-xs text-slate-400">
                {formatFileSize(singleDownload.size)} • Ready
              </p>
            </div>
          </div>

          <button
            onClick={() => triggerDownload(singleDownload.url, singleDownload.fileName)}
            className="flex items-center gap-2 bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-brand-500/20 hover:shadow-lg transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      )}

      {/* Multi-page PDF to JPG output */}
      {pdfPages && pdfPages.length > 0 && (
        <div className="space-y-6 mb-8 text-left">
          {zipDownload && (
            <div className="max-w-md mx-auto p-4 bg-indigo-50/70 border border-indigo-100 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Archive className="w-6 h-6 text-indigo-600" />
                <div>
                  <p className="text-sm font-bold text-slate-900">All {pdfPages.length} Pages</p>
                  <p className="text-xs text-slate-500">Compressed ZIP Archive</p>
                </div>
              </div>
              <button
                onClick={() => triggerDownload(zipDownload.url, zipDownload.fileName)}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                Download ZIP
              </button>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-64 overflow-y-auto p-1">
            {pdfPages.map((page) => (
              <div
                key={page.pageNumber}
                className="border border-slate-200 rounded-xl p-2 bg-white flex flex-col items-center gap-2"
              >
                <img
                  src={page.dataUrl}
                  alt={`Page ${page.pageNumber}`}
                  className="w-full h-24 object-contain rounded border border-slate-100 bg-slate-50"
                />
                <span className="text-xs font-semibold text-slate-600">
                  Page {page.pageNumber}
                </span>
                <button
                  onClick={() => {
                    const url = URL.createObjectURL(page.blob);
                    triggerDownload(url, page.fileName);
                  }}
                  className="w-full py-1 text-xs bg-slate-100 hover:bg-brand-50 hover:text-brand-600 font-medium rounded transition-colors flex items-center justify-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  Save JPG
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Convert Another File Button */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-center">
        <button
          onClick={onConvertAnother}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 px-5 py-2.5 rounded-xl border border-slate-200 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Convert Another File
        </button>
      </div>
    </div>
  );
};
