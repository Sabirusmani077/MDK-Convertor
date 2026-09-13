import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileImage,
  FileText,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';

export const PopularToolsGrid: React.FC = () => {
  const tools = [
    {
      name: 'PNG to JPG',
      description: 'Convert PNG images to high-quality JPG files.',
      link: '/png-to-jpg',
      icon: FileImage,
      badge: 'Fast & High Quality',
      color: 'from-blue-500 to-indigo-600',
      lightBg: 'bg-blue-50/70',
      borderColor: 'group-hover:border-blue-300'
    },
    {
      name: 'JPG to PNG',
      description: 'Convert JPG images to PNG format instantly.',
      link: '/jpg-to-png',
      icon: FileImage,
      badge: 'Lossless Output',
      color: 'from-indigo-500 to-purple-600',
      lightBg: 'bg-indigo-50/70',
      borderColor: 'group-hover:border-indigo-300'
    },
    {
      name: 'JPG to PDF',
      description: 'Convert JPG images into PDF documents online.',
      link: '/jpg-to-pdf',
      icon: FileText,
      badge: 'Most Popular',
      color: 'from-brand-600 to-blue-700',
      lightBg: 'bg-brand-50/70',
      borderColor: 'group-hover:border-brand-400',
      featured: true
    },
    {
      name: 'PNG to PDF',
      description: 'Turn PNG images into PDF files in seconds.',
      link: '/png-to-pdf',
      icon: FileText,
      badge: 'Document Ready',
      color: 'from-cyan-500 to-blue-600',
      lightBg: 'bg-cyan-50/70',
      borderColor: 'group-hover:border-cyan-300'
    },
    {
      name: 'Image to PDF',
      description: 'Convert multiple images into a single PDF.',
      link: '/image-to-pdf',
      icon: Layers,
      badge: 'Multi-Image Merge',
      color: 'from-violet-600 to-indigo-600',
      lightBg: 'bg-violet-50/70',
      borderColor: 'group-hover:border-violet-300'
    },
    {
      name: 'PDF to JPG',
      description: 'Convert PDF pages into JPG images.',
      link: '/pdf-to-jpg',
      icon: FileImage,
      badge: 'High Resolution',
      color: 'from-sky-500 to-indigo-600',
      lightBg: 'bg-sky-50/70',
      borderColor: 'group-hover:border-sky-300'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
            Top Online Conversion Tools
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Popular Online Converters
          </h3>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Choose from our most requested file conversion utilities. Fast, free, and optimized for any device.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className={`group relative bg-white rounded-2xl border p-6 sm:p-7 shadow-xs hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between ${
                  tool.featured
                    ? 'border-brand-300 ring-2 ring-brand-500/10'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                {tool.featured && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-brand-600 to-indigo-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-200" />
                    Featured Tool
                  </div>
                )}

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${tool.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {tool.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {tool.description}
                  </p>
                </div>

                {/* Convert Now Button */}
                <Link
                  to={tool.link}
                  className="w-full py-2.5 px-4 bg-slate-50 hover:bg-brand-600 text-slate-700 hover:text-white text-sm font-semibold rounded-xl border border-slate-200 hover:border-brand-600 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Convert Now</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
