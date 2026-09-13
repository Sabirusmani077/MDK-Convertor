import React from 'react';
import { SeoHead } from '../components/layout/SeoHead';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <SeoHead
        title="Privacy Policy – MDK Convertor"
        description="MDK Convertor Privacy Policy. Learn how our client-side conversion protects your personal files from ever reaching a remote server."
        canonicalUrl="https://mdkconvertor.com/privacy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-semibold text-emerald-700 mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Zero-Server Retention Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 mb-8">Last Updated: September 2026</p>

          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              At <strong>MDK Convertor</strong>, privacy is not an afterthought — it is the core foundation of our technical architecture. This Privacy Policy details how files and data are handled when you utilize our online conversion platform.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">
              1. 100% In-Browser Client-Side Processing
            </h2>
            <p>
              Unlike traditional online converters that upload your documents to cloud storage or third-party servers to convert them, MDK Convertor executes all conversion logic (including image rendering, PDF merging, and format encoding) <strong>directly inside your web browser</strong> using JavaScript and HTML5 Canvas APIs.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-700">
                <strong>Your files never leave your device.</strong> We do not store, view, copy, or retain any of your uploaded or converted files on any server.
              </p>
            </div>

            <h2 className="text-xl font-bold text-slate-900 pt-4">
              2. Data Deletion and Temporary Memory
            </h2>
            <p>
              Uploaded files and generated documents reside strictly in your device's temporary volatile RAM (memory). As soon as you navigate away, refresh the tab, or click "Convert Another File", that allocated memory is freed immediately by your browser.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">
              3. No Account or Registration Required
            </h2>
            <p>
              We do not ask for your name, email address, payment details, or phone number. You are free to use our tools anonymously at any time.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">
              4. Analytics & Cookies
            </h2>
            <p>
              We may utilize standard non-identifiable web analytics (such as page visit counts) strictly to ensure website performance and uptime. No personal data or document contents are ever collected.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">
              5. Contacting Us
            </h2>
            <p>
              If you have any questions regarding this policy, please reach out via our contact page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
