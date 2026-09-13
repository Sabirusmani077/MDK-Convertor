import React from 'react';
import { UploadedFileItem } from '../../types';
import { Trash2, FileText, Image as ImageIcon, Plus } from 'lucide-react';

interface FilePreviewListProps {
  items: UploadedFileItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  onAddMore?: () => void;
  allowMultiple?: boolean;
}

export const FilePreviewList: React.FC<FilePreviewListProps> = ({
  items,
  onRemoveItem,
  onClearAll,
  onAddMore,
  allowMultiple = true
}) => {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
        <span className="text-sm font-semibold text-slate-700">
          Selected Files ({items.length})
        </span>
        <button
          onClick={onClearAll}
          className="text-xs font-medium text-rose-600 hover:text-rose-700 transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all group relative"
          >
            {/* Number indicator */}
            <span className="absolute top-2 left-2 bg-slate-100 text-slate-600 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {index + 1}
            </span>

            {/* Thumbnail */}
            <div className="w-14 h-14 rounded-lg bg-slate-100 flex-shrink-0 overflow-hidden border border-slate-200 flex items-center justify-center">
              {item.type.includes('image') && item.previewUrl ? (
                <img
                  src={item.previewUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <FileText className="w-7 h-7 text-rose-500" />
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 pr-2">
              <p className="text-sm font-medium text-slate-900 truncate" title={item.name}>
                {item.name}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-slate-500 font-normal">
                  {formatFileSize(item.size)}
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 uppercase">
                  {item.name.split('.').pop() || 'FILE'}
                </span>
              </div>
            </div>

            {/* Remove Action */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveItem(item.id);
              }}
              title="Remove file"
              className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {allowMultiple && onAddMore && (
        <button
          onClick={onAddMore}
          className="w-full py-2.5 border-2 border-dashed border-slate-300 hover:border-brand-400 text-slate-600 hover:text-brand-600 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add more files
        </button>
      )}
    </div>
  );
};
