import React from 'react';
import { Loader2, Sparkles } from 'lucide-react';

interface ConversionProgressProps {
  progress: number;
  statusText: string;
}

export const ConversionProgress: React.FC<ConversionProgressProps> = ({
  progress,
  statusText
}) => {
  return (
    <div className="p-8 sm:p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-soft">
      <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
        <Loader2 className="w-8 h-8 animate-spin text-brand-600" />
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-2">
        Converting Your Files...
      </h3>
      <p className="text-sm text-slate-500 mb-6 font-medium">
        {statusText || 'Processing directly in your browser memory...'}
      </p>

      {/* Progress Bar Container */}
      <div className="max-w-md mx-auto space-y-2">
        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200">
          <div
            className="bg-gradient-to-r from-brand-600 to-indigo-600 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.max(progress, 5)}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-400 font-semibold px-1">
          <span>Processing locally</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
};
