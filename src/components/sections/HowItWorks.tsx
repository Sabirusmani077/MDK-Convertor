import React from 'react';
import { UploadCloud, RefreshCw, Download, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Upload',
      desc: 'Choose or drag and drop your file directly into the converter box.',
      icon: UploadCloud,
      color: 'bg-brand-50 text-brand-600 border-brand-200'
    },
    {
      number: '02',
      title: 'Convert',
      desc: 'Select your desired format and click Convert to process in seconds.',
      icon: RefreshCw,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      number: '03',
      title: 'Download',
      desc: 'Download your converted file instantly with zero watermarks.',
      icon: Download,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
            Easy 3-Step Process
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h3>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Convert any image or document in three simple steps without installation or setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-slate-50/70 rounded-2xl p-8 border border-slate-200/80 hover:border-slate-300 transition-all text-center flex flex-col items-center group"
              >
                {/* Step badge */}
                <div className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-extrabold text-slate-700 mb-6 shadow-2xs">
                  STEP {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl ${step.color} border flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {step.number} — {step.title}
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
