import React from 'react';
import { UniversalConverter } from '../converter/UniversalConverter';
import { ShieldCheck, Zap, Lock, Sparkles, CheckCircle2, FileText, Image as ImageIcon } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40">
      {/* 1. Animated Ambient Glowing Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-[90px] pointer-events-none animate-blob" />
      <div className="absolute top-20 right-1/4 w-[420px] h-[420px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none animate-blob-delay-2" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-teal-300/20 rounded-full blur-[80px] pointer-events-none animate-blob-delay-4" />

      {/* 2. Modern Subtle Grid Matrix with Radial Fade */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #10b981 1px, transparent 1px), radial-gradient(circle at center, #6366f1 0.7px, transparent 0.7px)`,
          backgroundSize: '32px 32px, 16px 16px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 100%)'
        }}
      />

      {/* 3. Floating Glassmorphic File Format Badges in the Margins (Desktop) */}
      {/* Left Top Badge */}
      <div className="hidden xl:flex absolute top-28 left-8 2xl:left-24 items-center gap-2.5 px-3.5 py-2 bg-white/85 backdrop-blur-md rounded-2xl border border-emerald-200/80 shadow-soft pointer-events-none animate-float-slow select-none z-0">
        <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
          JPG
        </div>
        <div className="text-left">
          <p className="text-xs font-bold text-slate-800">Ultra Sharp 300 DPI</p>
          <p className="text-[10px] text-emerald-600 font-semibold">Photo Quality</p>
        </div>
      </div>

      {/* Left Bottom Badge */}
      <div className="hidden xl:flex absolute bottom-36 left-12 2xl:left-28 items-center gap-2.5 px-3.5 py-2 bg-white/85 backdrop-blur-md rounded-2xl border border-amber-200/80 shadow-soft pointer-events-none animate-float-reverse select-none z-0">
        <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
          <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
        </div>
        <div className="text-left">
          <p className="text-xs font-bold text-slate-800">Zero Server Wait</p>
          <p className="text-[10px] text-amber-600 font-semibold">Instant Local Canvas</p>
        </div>
      </div>

      {/* Right Top Badge */}
      <div className="hidden xl:flex absolute top-24 right-8 2xl:right-24 items-center gap-2.5 px-3.5 py-2 bg-white/85 backdrop-blur-md rounded-2xl border border-indigo-200/80 shadow-soft pointer-events-none animate-float-reverse select-none z-0">
        <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
          PDF
        </div>
        <div className="text-left">
          <p className="text-xs font-bold text-slate-800">Multi-Image Merge</p>
          <p className="text-[10px] text-indigo-600 font-semibold">Custom A4 &amp; Margins</p>
        </div>
      </div>

      {/* Right Bottom Badge */}
      <div className="hidden xl:flex absolute bottom-32 right-12 2xl:right-28 items-center gap-2.5 px-3.5 py-2 bg-white/85 backdrop-blur-md rounded-2xl border border-teal-200/80 shadow-soft pointer-events-none animate-float-slow select-none z-0">
        <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs">
          PNG
        </div>
        <div className="text-left">
          <p className="text-xs font-bold text-slate-800">100% Lossless Alpha</p>
          <p className="text-[10px] text-teal-600 font-semibold">Clean Transparent</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Trust pill badge with user logo */}
        <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-slate-200/80 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-700 mb-6 shadow-xs animate-fade-in hover:scale-105 transition-transform">
          <img src="/logo.png" alt="Mr Sabir" className="w-5 h-5 object-contain" />
          <span className="text-emerald-700 font-bold">Mr Sabir's MDK Convertor</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500">100% Free &amp; Private In-Browser</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.15] mb-5">
          Convert Your Files.{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600">
            Fast, Free &amp; Simple.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
          Convert PNG, JPG, JPEG and other files online in seconds with custom sizing (px, cm, mm). No complicated software, no unnecessary steps.
        </p>

        {/* Converter Tool Above the Fold */}
        <div id="converter-section" className="scroll-mt-24 mb-10 relative">
          <UniversalConverter initialSource="jpg" initialTarget="pdf" />
        </div>

        {/* Hero Bottom Trust Metrics */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-slate-500 pt-2">
          <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/70 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>No Registration Required</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/70 shadow-2xs">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>100% Client-Side Privacy</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/70 shadow-2xs">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Instant Processing Speed</span>
          </div>
        </div>
      </div>
    </section>
  );
};
