import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/layout/SeoHead';
import { UniversalConverter } from '../components/converter/UniversalConverter';
import { TOOLS } from '../config/toolsConfig';
import { FaqAccordion } from '../components/sections/FaqAccordion';
import { TrustSection } from '../components/sections/TrustSection';
import { Layers, FileImage, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const ImageConverterHubPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoHead
        title="Online Image Converter – Convert Images Free | MDK Convertor"
        description="Free online image converter by MDK Convertor. Convert JPG, PNG, WEBP, and PDF files easily directly in your browser. Fast, private, and unlimited."
        keywords={[
          'Image Converter',
          'Online Image Converter',
          'Free Image Converter',
          'Convert PNG to JPG Online',
          'Convert Images to PDF',
          'Free Online File Converter'
        ]}
        canonicalUrl="https://mdkconvertor.com/image-converter"
      />

      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-50 border border-brand-200/80 rounded-full text-xs font-semibold text-brand-700 mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-brand-600" />
            <span>Complete Image Conversion Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Online Image Converter
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Convert any picture or document between PNG, JPG, JPEG, and PDF. 100% in-browser processing with zero file uploads.
          </p>

          <div className="mt-10 mb-8">
            <UniversalConverter initialSource="all" initialTarget="pdf" />
          </div>
        </div>
      </section>

      {/* Grid of Tools */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              All Conversion Utilities
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Select a dedicated tool for optimized workflows and custom options.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((tool) => (
              <Link
                key={tool.slug}
                to={`/${tool.slug}`}
                className="p-6 bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-brand-400 hover:shadow-soft transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-sm">
                      <FileImage className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {tool.targetFormat.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                    {tool.subheadline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-brand-600">
                  <span>Open Converter</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image Formats Comparison Guide */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 text-center">
            Comparing Image & Document Formats
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <h3 className="font-bold text-slate-900 text-lg mb-2">JPG / JPEG</h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Best for photographs and realistic imagery. Highly compressed for smaller sizes and quick web page loading.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>✓ Compact file size</li>
                <li>✓ Universal compatibility</li>
                <li>✗ No transparency support</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <h3 className="font-bold text-slate-900 text-lg mb-2">PNG</h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Best for logos, vector graphics, diagrams, and screenshots requiring sharp lines and transparent backgrounds.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>✓ Full alpha transparency</li>
                <li>✓ Lossless image quality</li>
                <li>✗ Larger file sizes</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <h3 className="font-bold text-slate-900 text-lg mb-2">PDF Document</h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Best for printing, archiving, and combining multiple pages or receipts into a single standardized document.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>✓ Multi-page document merging</li>
                <li>✓ Fixed layout across all screens</li>
                <li>✓ Print-ready standard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
      <FaqAccordion />
    </div>
  );
};
