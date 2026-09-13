import React from 'react';
import { ShieldCheck, Lock, EyeOff, ServerOff, Check } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-slate-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-brand-300 mb-4 border border-white/10">
              <Lock className="w-3.5 h-3.5" />
              Privacy by Design
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Your Files. Your Privacy.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We built MDK Convertor with zero server retention. Your files are processed directly inside your browser memory using local hardware, meaning your sensitive photos and confidential documents are never uploaded to any remote server or stored in any database.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">No Server Uploads</h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Conversions execute locally in your web browser. Nothing ever leaves your device.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Immediate Memory Cleanup</h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Memory blobs are destroyed immediately when you finish or reset the page.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">No Account Needed</h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  No sign-ups, passwords, or emails required to perform any file conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
