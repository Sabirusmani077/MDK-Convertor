import React from 'react';
import { Zap, ShieldCheck, Gift, Smartphone } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Zap,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50',
      title: '⚡ Fast Conversion',
      description: 'Convert your files quickly without complicated software. Files are processed locally on your device for instant results.'
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      title: '🔒 Secure & Private',
      description: 'Your files are handled securely and automatically removed after processing. Nothing is stored or transmitted to external servers.'
    },
    {
      icon: Gift,
      iconColor: 'text-brand-500',
      bgColor: 'bg-brand-50',
      title: '🆓 Free to Use',
      description: 'Convert your files online without unnecessary registration, paywalls, watermarks, or subscription credit limits.'
    },
    {
      icon: Smartphone,
      iconColor: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
      title: '📱 Works Everywhere',
      description: 'Use MDK Convertor on desktop, tablet, or mobile. Works seamlessly across modern browsers with zero installation.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
            Why Choose Us
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why MDK Convertor?
          </h3>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            We designed MDK Convertor to eliminate the frustration of slow, ad-cluttered, and privacy-invasive converter websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
