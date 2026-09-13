import React from 'react';
import { SeoHead } from '../components/layout/SeoHead';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <SeoHead
        title="Terms of Service – MDK Convertor"
        description="MDK Convertor Terms of Service. Guidelines and terms for using our online file conversion platform."
        canonicalUrl="https://mdkconvertor.com/terms"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 mb-8">Last Updated: September 2026</p>

          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Welcome to <strong>MDK Convertor</strong>. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">1. Use of Service</h2>
            <p>
              MDK Convertor is provided free of charge for personal and commercial file conversions. You agree to use the service in compliance with all applicable local, national, and international laws and regulations.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">2. Intellectual Property & Content</h2>
            <p>
              You retain 100% of all rights, title, and ownership in any files, photos, or documents you convert using MDK Convertor. Because conversions occur inside your own browser, MDK Convertor never possesses or claims any license to your files.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">3. Disclaimer of Warranty</h2>
            <p>
              The service is provided on an "as is" and "as available" basis without warranties of any kind. While we strive for optimal fidelity and performance, MDK Convertor does not warrant that conversion outputs will meet all specific formatting nuances.
            </p>

            <h2 className="text-xl font-bold text-slate-900 pt-4">4. Modifications</h2>
            <p>
              We reserve the right to modify or discontinue features of MDK Convertor at any time without prior notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
