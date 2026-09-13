import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  ArrowUp,
  Heart,
  Copy,
  Check,
  Instagram,
  Facebook,
  Youtube,
  Github,
  Linkedin,
  Mail,
  MessageCircle
} from 'lucide-react';
import { CREATOR_LINKS } from '../../config/creatorLinks';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState('en-US');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#0b0e1b] text-slate-300 border-t border-slate-800/80 pt-10 pb-8 relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-emerald-500/5 via-indigo-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Top Header Bar (Logo & Action Buttons) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-10 border-b border-slate-800/80">
          {/* Top Left: Logo & Subtitle */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Mr Sabir"
                className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md"
              />
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                MDK <span className="text-emerald-400">Convertor</span>
              </span>
            </div>
            <p className="text-[11px] font-mono tracking-widest text-amber-400 uppercase font-bold mt-1 pl-1">
              TEMPORAL CONVERTER ENGINE • SINCE 2026
            </p>
          </div>

          {/* Top Right: Buttons (Copy Dossier & Return to Origin) */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopyLink}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-lg shadow-amber-500/20 transition-all active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Link Copied!' : 'Copy Dossier'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-full transition-all active:scale-95"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Return to Origin</span>
            </button>
          </div>
        </div>

        {/* 2. Main Navigation & Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-slate-800/60 text-xs sm:text-sm">
          {/* Column 1: Language & Official Social Links */}
          <div className="col-span-2 sm:col-span-1 space-y-6">
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-2 font-bold">
                Language
              </span>
              <div className="relative inline-block w-full max-w-[180px]">
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-slate-200 text-xs">
                  <Globe className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-transparent text-slate-200 text-xs focus:outline-none w-full cursor-pointer"
                  >
                    <option value="en-US" className="bg-slate-900 text-white">English (US)</option>
                    <option value="hi-IN" className="bg-slate-900 text-white">Hindi (भारत)</option>
                    <option value="es-ES" className="bg-slate-900 text-white">Español</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <span className="block text-[11px] font-mono uppercase tracking-widest text-amber-400 mb-3 font-bold flex items-center gap-1.5">
                Official Socials
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {/* LinkedIn */}
                <a
                  href={CREATOR_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn: Sabir Usmani"
                  className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800 transition-all hover:scale-110"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* WhatsApp */}
                <a
                  href={CREATOR_LINKS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp: +91 9458204216"
                  className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800 transition-all hover:scale-110"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                {/* GitHub */}
                <a
                  href={CREATOR_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub: Sabirusmani077"
                  className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-400 hover:bg-slate-800 transition-all hover:scale-110"
                >
                  <Github className="w-4 h-4" />
                </a>

                {/* Email */}
                <a
                  href={CREATOR_LINKS.mailto}
                  title="Email: sabirusmani159@gmail.com"
                  className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/50 hover:bg-slate-800 transition-all hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* Instagram */}
                <a
                  href={CREATOR_LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram: @sabir_usmani_077"
                  className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-rose-400 hover:border-rose-500/50 hover:bg-slate-800 transition-all hover:scale-110"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* YouTube */}
                <a
                  href={CREATOR_LINKS.youtube}
                  target="_blank"
                  rel="noreferrer"
                  title="YouTube: @Sabirusmani07"
                  className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-red-500/50 hover:bg-slate-800 transition-all hover:scale-110"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                {/* X / Twitter */}
                <a
                  href={CREATOR_LINKS.x}
                  target="_blank"
                  rel="noreferrer"
                  title="X (Twitter): @Mrsabirusmani07"
                  className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all hover:scale-110"
                >
                  <span className="text-xs font-bold">𝕏</span>
                </a>

                {/* Facebook */}
                <a
                  href={CREATOR_LINKS.facebook}
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook: Sabir Usmani"
                  className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition-all hover:scale-110"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="space-y-3">
            <h4 className="text-amber-400 font-mono font-bold text-xs uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link to="/jpg-to-pdf" className="hover:text-white transition-colors">
                  JPG to PDF Engine
                </Link>
              </li>
              <li>
                <Link to="/png-to-jpg" className="hover:text-white transition-colors">
                  PNG to JPG Matrix
                </Link>
              </li>
              <li>
                <Link to="/jpg-to-png" className="hover:text-white transition-colors">
                  JPG to PNG Lossless
                </Link>
              </li>
              <li>
                <Link to="/image-to-pdf" className="text-slate-200 font-bold hover:text-emerald-400 transition-colors">
                  Image to PDF Merge
                </Link>
              </li>
              <li>
                <Link to="/pdf-to-jpg" className="hover:text-white transition-colors">
                  PDF to High-Res JPG
                </Link>
              </li>
              <li>
                <Link to="/png-to-pdf" className="hover:text-white transition-colors">
                  PNG to PDF Document
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (with Creator: Mr Sabir linked to official profile!) */}
          <div className="space-y-3">
            <h4 className="text-amber-400 font-mono font-bold text-xs uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Project
                </Link>
              </li>
              <li>
                <a
                  href={CREATOR_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="View Mr Sabir's Official LinkedIn Profile"
                  className="text-amber-400 font-bold block cursor-pointer hover:underline"
                >
                  Creator: Mr Sabir ↗
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Chrono Philosophy
                </Link>
              </li>
              <li>
                <a
                  href={CREATOR_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  GitHub Source ↗
                </a>
              </li>
              <li>
                <a
                  href={CREATOR_LINKS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  WhatsApp Direct ↗
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Media Kit &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-3">
            <h4 className="text-amber-400 font-mono font-bold text-xs uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Support Center
                </Link>
              </li>
              <li>
                <a
                  href={CREATOR_LINKS.mailto}
                  className="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Direct Email Help
                </a>
              </li>
              <li>
                <Link to="/image-converter" className="hover:text-white transition-colors">
                  File Format Matrix
                </Link>
              </li>
              <li>
                <Link to="/image-converter" className="hover:text-white transition-colors">
                  Image Guides
                </Link>
              </li>
              <li>
                <a
                  href={CREATOR_LINKS.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                >
                  YouTube Tutorials ↗
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Send Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Policies */}
          <div className="space-y-3">
            <h4 className="text-amber-400 font-mono font-bold text-xs uppercase tracking-wider mb-4">
              Policies
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Cookie Settings
                </span>
              </li>
              <li>
                <a
                  href={CREATOR_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Open Source License
                </a>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Security Guidelines
                </Link>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Acknowledgements
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Massive Typographic Watermark: "MR SABIR" */}
        <div className="py-10 sm:py-16 text-center select-none overflow-hidden">
          <a
            href={CREATOR_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            title="Sabir Usmani (Mr Sabir)"
            className="group inline-block focus:outline-none"
          >
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-b from-slate-200 via-slate-400 to-slate-700 opacity-90 drop-shadow-2xl group-hover:from-white group-hover:via-slate-200 group-hover:to-emerald-400 transition-all">
              MR SABIR
            </h2>
          </a>
        </div>

        {/* 4. Bottom Footer Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          {/* Left: Logo & Copyright */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Mr Sabir"
              className="h-6 w-auto object-contain opacity-80"
            />
            <span>© 2026 Mr Sabir Chrono • MDK Convertor • All rights reserved.</span>
          </div>

          {/* Center: Designed & Built with Love */}
          <div className="flex items-center gap-1.5 text-slate-400 font-medium">
            <span>Designed &amp; Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>by</span>
            <a
              href={CREATOR_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 font-bold hover:underline"
            >
              Mr Sabir (Sabir Usmani)
            </a>
          </div>

          {/* Right: Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-900 border border-slate-800"
            >
              <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
