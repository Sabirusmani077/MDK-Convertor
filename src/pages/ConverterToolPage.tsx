import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { TOOLS } from '../config/toolsConfig';
import { SeoHead } from '../components/layout/SeoHead';
import { UniversalConverter } from '../components/converter/UniversalConverter';
import { FaqAccordion } from '../components/sections/FaqAccordion';
import { TrustSection } from '../components/sections/TrustSection';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  ChevronRight
} from 'lucide-react';

interface ConverterToolPageProps {
  toolSlug?: string;
}

export const ConverterToolPage: React.FC<ConverterToolPageProps> = ({ toolSlug }) => {
  const params = useParams();
  const slug = toolSlug || params.slug;

  const tool = TOOLS.find((t) => t.slug === slug);

  if (!tool) {
    return <Navigate to="/" replace />;
  }

  // Related converters (all except current)
  const relatedTools = TOOLS.filter((t) => t.slug !== tool.slug).slice(0, 4);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: tool.title,
        url: `https://mdkconvertor.com/${tool.slug}`,
        description: tool.seoDescription,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'All',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      },
      {
        '@type': 'HowTo',
        name: `How to use ${tool.title}`,
        step: tool.steps.map((s, idx) => ({
          '@type': 'HowToStep',
          position: idx + 1,
          name: s.title,
          text: s.desc
        }))
      },
      {
        '@type': 'FAQPage',
        mainEntity: tool.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoHead
        title={tool.seoTitle}
        description={tool.seoDescription}
        keywords={tool.keywords}
        canonicalUrl={`https://mdkconvertor.com/${tool.slug}`}
        schema={pageSchema}
      />

      {/* Header & Tool Hero */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/40 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-brand-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">{tool.shortTitle}</span>
          </nav>

          {/* Heading with Main Keyword */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-50 border border-brand-200/80 rounded-full text-xs font-semibold text-brand-700 mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>{tool.badge || 'Free Online Converter'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {tool.headline}
            </h1>

            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              {tool.subheadline}
            </p>
          </div>

          {/* Fully Working Converter Tool */}
          <div className="mb-8">
            <UniversalConverter
              initialSource={tool.sourceFormat}
              initialTarget={tool.targetFormat}
            />
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium pt-2">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-brand-600" />
              <span>100% In-Browser Privacy</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Zero Waiting Time</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Files Auto-Cleared</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Description Section */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-slate-600">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              About {tool.title}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              {tool.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            {tool.features.map((feat) => (
              <div
                key={feat.title}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section (Step by step) */}
      <section id="how-to" className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
              Quick Tutorial
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How to Use {tool.shortTitle}
            </h3>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">
              Follow these simple steps to convert your files within seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tool.steps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 text-center shadow-xs"
              >
                <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 font-extrabold text-sm flex items-center justify-center mx-auto mb-4 border border-brand-100">
                  {step.step}
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* Dedicated FAQ Accordion */}
      <FaqAccordion
        customFaqs={tool.faqs}
        title={`${tool.shortTitle} FAQ`}
        subtitle={`Frequently asked questions about our online ${tool.title}.`}
      />

      {/* Related Converters */}
      <section className="py-14 sm:py-18 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Related Online Converters
          </h3>
          <p className="text-sm text-slate-500 mb-8">
            Explore other free image and document conversion tools from MDK Convertor.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedTools.map((rel) => (
              <Link
                key={rel.slug}
                to={`/${rel.slug}`}
                className="p-5 bg-white rounded-xl border border-slate-200/80 hover:border-brand-400 hover:shadow-soft transition-all text-left group"
              >
                <h4 className="font-bold text-slate-900 group-hover:text-brand-600 text-sm flex items-center justify-between">
                  <span>{rel.shortTitle}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-brand-600 transition-transform" />
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {rel.subheadline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
