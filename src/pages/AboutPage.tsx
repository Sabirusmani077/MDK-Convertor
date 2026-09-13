import React from 'react';
import { SeoHead } from '../components/layout/SeoHead';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { APP_LOGO } from '../constants/assets';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoHead
        title="About MDK Convertor – Fast & Private Online File Conversion"
        description="Learn about MDK Convertor. Our mission is to provide fast, completely private, and seamless image and document conversions right in your browser."
        canonicalUrl="https://mdkconvertor.com/about"
      />

      {/* Hero */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2 block">
            Our Story & Mission
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            About MDK Convertor
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
            We set out to build the fastest, cleanest, and most private online file converter on the web.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Why We Built MDK Convertor
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For years, online file conversion was broken. To convert a simple PNG photo to JPG or merge a few receipts into a PDF, users were forced to upload their personal, sensitive documents to unknown cloud servers, wait in artificial queues, battle endless deceptive advertisements, and endure annoying paywalls.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We believed there was a better way. Modern web browsers and devices possess immense computing power. By harnessing client-side HTML5 Canvas and JavaScript compiling engines, MDK Convertor processes your files right inside your device’s memory — eliminating server delays and preserving 100% of your privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Uncompromising Privacy
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Your images and documents never leave your browser. They are never transmitted across the network, stored in a database, or viewed by anyone else.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Zero Artificial Limits
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                No credit counters, registration popups, or waiting countdowns. Just smooth, instant conversions whenever you need them.
              </p>
            </div>
          </div>

          {/* Meet the Founder / Official Creator Section */}
          <div className="pt-10 border-t border-slate-200">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-700/80 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="relative">
                  <img
                    src={APP_LOGO}
                    alt="Sabir Usmani"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-contain bg-white/10 p-2 border-2 border-emerald-400/60 shadow-lg"
                  />
                  <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md">
                    CREATOR
                  </span>
                </div>

                <div className="flex-1">
                  <span className="text-[11px] font-mono tracking-widest text-amber-400 uppercase font-bold block mb-1">
                    FOUNDER &amp; LEAD DEVELOPER
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Sabir Usmani <span className="text-emerald-400 text-lg sm:text-xl font-normal font-sans">(Mr Sabir)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    Sabir Usmani engineered MDK Convertor with a unified vision: delivering lightning-fast, high-fidelity file conversions (PDF, JPG, PNG) with total privacy and zero paywalls. Everything is processed directly inside client hardware.
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-700/60">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                      Official Connections &amp; Profiles
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href="https://www.linkedin.com/in/sabir-usmani-753195397"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-sky-600/30 text-sky-400 border border-slate-700 text-xs font-semibold transition-all hover:border-sky-400/50"
                      >
                        <span>LinkedIn</span>
                      </a>

                      <a
                        href="https://wa.me/919458204216"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-emerald-600/30 text-emerald-400 border border-slate-700 text-xs font-semibold transition-all hover:border-emerald-400/50"
                      >
                        <span>WhatsApp (+91 9458204216)</span>
                      </a>

                      <a
                        href="https://github.com/Sabirusmani077"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all hover:border-slate-400"
                      >
                        <span>GitHub</span>
                      </a>

                      <a
                        href="mailto:sabirusmani159@gmail.com"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-amber-600/30 text-amber-400 border border-slate-700 text-xs font-semibold transition-all hover:border-amber-400/50"
                      >
                        <span>Email</span>
                      </a>

                      <a
                        href="https://www.instagram.com/sabir_usmani_077/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-pink-600/30 text-pink-400 border border-slate-700 text-xs font-semibold transition-all hover:border-pink-400/50"
                      >
                        <span>Instagram</span>
                      </a>

                      <a
                        href="https://www.youtube.com/@Sabirusmani07"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-red-600/30 text-red-400 border border-slate-700 text-xs font-semibold transition-all hover:border-red-400/50"
                      >
                        <span>YouTube</span>
                      </a>

                      <a
                        href="https://x.com/Mrsabirusmani07"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs font-semibold transition-all hover:border-slate-400"
                      >
                        <span>𝕏 (Twitter)</span>
                      </a>

                      <a
                        href="https://www.facebook.com/share/18oqDsbATK/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-blue-600/30 text-blue-400 border border-slate-700 text-xs font-semibold transition-all hover:border-blue-400/50"
                      >
                        <span>Facebook</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 text-center">
            <Link
              to="/jpg-to-pdf"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span>Try MDK Convertor Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
