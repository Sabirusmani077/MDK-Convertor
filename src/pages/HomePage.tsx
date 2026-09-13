import React from 'react';
import { SeoHead } from '../components/layout/SeoHead';
import { HeroSection } from '../components/sections/HeroSection';
import { PopularToolsGrid } from '../components/sections/PopularToolsGrid';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { HowItWorks } from '../components/sections/HowItWorks';
import { TrustSection } from '../components/sections/TrustSection';
import { FaqAccordion } from '../components/sections/FaqAccordion';
import { GENERAL_FAQS } from '../config/toolsConfig';

export const HomePage: React.FC = () => {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'MDK Convertor',
        url: 'https://mdkconvertor.com/',
        description: 'Fast, free, and secure online image and PDF converter. Convert PNG to JPG, JPG to PNG, JPG to PDF, and Images to PDF directly in your browser.',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'All',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: GENERAL_FAQS.map((f) => ({
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
    <main>
      <SeoHead
        title="MDK Convertor – Free Online Image & PDF File Converter"
        description="Convert PNG, JPG, JPEG and other files online in seconds. Free, fast, private, and simple. Combine multiple JPGs into one PDF with MDK Convertor."
        keywords={[
          'PNG to JPG Converter',
          'JPG to PNG Converter',
          'JPG to PDF Converter',
          'PNG to PDF Converter',
          'Image to PDF Converter',
          'Image Converter',
          'Online Image Converter',
          'Free Image Converter',
          'Free Online PDF Converter',
          'Convert PNG to JPG Online',
          'Convert JPG to PDF Online',
          'Convert Images to PDF',
          'JPG Converter',
          'PNG Converter',
          'Free Online File Converter'
        ]}
        canonicalUrl="https://mdkconvertor.com/"
        schema={homeSchema}
      />

      <HeroSection />
      <PopularToolsGrid />
      <WhyChooseUs />
      <HowItWorks />
      <TrustSection />
      <FaqAccordion />
    </main>
  );
};
