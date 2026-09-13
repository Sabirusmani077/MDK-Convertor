# MDK Convertor

> **Convert Your Files. Fast, Free & Simple.**  
> A professional, modern, attractive, and highly responsive online file conversion SaaS web application.

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌟 Key Highlights & Features

- **⚡ 100% Client-Side In-Browser Conversion**:
  - Image transformations (PNG ⇄ JPG ⇄ WebP) powered by hardware-accelerated **HTML5 Canvas API**.
  - Transparent PNG handling with clean white background fill for flawless JPEG output.
  - Document conversion (JPG/PNG to PDF) powered by **jsPDF** with page orientation (auto/portrait/landscape) and margin controls.
  - Multi-image merge: Combine multiple JPG, PNG, and WebP pictures into a unified multi-page PDF document.
  - PDF to JPG extraction powered by **PDF.js (`pdfjs-dist`)** rendering at 2x resolution with single page or bulk **ZIP** download via **JSZip**.
- **🔒 Privacy by Design**:
  - **Zero Server Uploads**: Files never leave the user's computer or smartphone.
  - **Instant Memory Cleanup**: Memory is automatically released upon conversion or page reset.
  - **No Accounts or Subscriptions**: Immediate access with no paywalls or watermarks.
- **🎨 Modern SaaS UI & Micro-Interactions**:
  - Clean blue/indigo aesthetic (`#2563eb`, `#4f46e5`, `#6366f1`).
  - Drag-and-drop upload zone with animated active drag states.
  - Real-time progress bar with step-by-step status messages.
  - Confetti celebration upon successful conversion completion.
  - Sticky responsive navigation with accessible mobile hamburger drawer.
- **🚀 SEO Optimized Architecture**:
  - Dedicated pages for high-intent keywords:
    - `/jpg-to-pdf` – JPG to PDF Converter
    - `/png-to-jpg` – PNG to JPG Converter
    - `/jpg-to-png` – JPG to PNG Converter
    - `/png-to-pdf` – PNG to PDF Converter
    - `/image-to-pdf` – Image to PDF Converter
    - `/pdf-to-jpg` – PDF to JPG Converter
    - `/jpeg-to-pdf` – JPEG to PDF Converter
    - `/jpeg-to-png` – JPEG to PNG Converter
  - Dynamic OpenGraph, Twitter Cards, canonical tags, and **Schema.org JSON-LD structured data** (`WebApplication`, `HowTo`, `FAQPage`).
  - Search engine `sitemap.xml` and `robots.txt`.

---

## 📁 Project Architecture

```
MDK Convertor/
├── public/
│   ├── favicon.svg             # Modern dual-arrow conversion brand logo
│   ├── robots.txt              # Search engine crawling rules
│   └── sitemap.xml             # XML Sitemap with all converter routes
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky responsive navbar with mobile drawer
│   │   │   ├── Footer.tsx      # 4-column footer with converter links & copyright
│   │   │   └── SeoHead.tsx     # Dynamic meta tags & Schema.org JSON-LD
│   │   ├── converter/
│   │   │   ├── UniversalConverter.tsx # Master converter orchestrator
│   │   │   ├── FileUploadZone.tsx     # Drag & drop upload area with mime filters
│   │   │   ├── FilePreviewList.tsx    # Thumbnails, file size, remove action
│   │   │   ├── ConversionProgress.tsx # Animated progress bar with step indicators
│   │   │   └── DownloadArea.tsx       # Download button, ZIP export, reset flow
│   │   └── sections/
│   │       ├── HeroSection.tsx        # Above-the-fold hero with active converter
│   │       ├── PopularToolsGrid.tsx   # Top 6 popular converter cards
│   │       ├── WhyChooseUs.tsx        # 4 key feature highlights
│   │       ├── HowItWorks.tsx         # 3-step visual guide
│   │       ├── TrustSection.tsx       # Zero-server-retention privacy showcase
│   │       └── FaqAccordion.tsx       # Expandable interactive FAQ accordion
│   ├── config/
│   │   └── toolsConfig.ts      # SEO metadata, headings, FAQs per tool
│   ├── pages/
│   │   ├── HomePage.tsx               # Main SaaS landing page
│   │   ├── ConverterToolPage.tsx      # Dedicated SEO tool page template
│   │   ├── ImageConverterHubPage.tsx  # All-in-one image converter catalog
│   │   ├── AboutPage.tsx              # About MDK Convertor mission & security
│   │   ├── PrivacyPolicyPage.tsx      # Privacy Policy
│   │   ├── TermsPage.tsx              # Terms of Service
│   │   └── ContactPage.tsx            # Contact form
│   ├── services/
│   │   ├── imageConverter.ts   # Canvas-based PNG/JPG/WebP conversion
│   │   ├── pdfConverter.ts     # Multi-image to PDF via jsPDF
│   │   └── pdfRenderer.ts      # PDF to JPG via PDF.js & ZIP via JSZip
│   ├── types/
│   │   └── index.ts            # TypeScript definitions
│   ├── App.tsx                 # Routes and layout
│   ├── main.tsx                # React entrypoint
│   └── index.css               # Tailwind CSS & custom utilities
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## 👨‍💻 Creator & Lead Developer

**Sabir Usmani (Mr Sabir)**  
- **GitHub**: [@Sabirusmani077](https://github.com/Sabirusmani077)
- **LinkedIn**: [Sabir Usmani](https://www.linkedin.com/in/sabir-usmani-753195397)
- **WhatsApp**: [+91 9458204216](https://wa.me/919458204216)
- **Email**: [sabirusmani159@gmail.com](mailto:sabirusmani159@gmail.com)
- **Instagram**: [@sabir_usmani_077](https://www.instagram.com/sabir_usmani_077/)
- **YouTube**: [@Sabirusmani07](https://www.youtube.com/@Sabirusmani07)
- **𝕏 (Twitter)**: [@Mrsabirusmani07](https://x.com/Mrsabirusmani07)
- **Facebook**: [Sabir Usmani](https://www.facebook.com/share/18oqDsbATK/)

---

## 🛠️ Tech Stack & Libraries

- **Framework**: React 18, TypeScript
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React
- **PDF Engine**: jsPDF, PDF.js (`pdfjs-dist`)
- **Archiving**: JSZip
- **Animations**: Canvas Confetti, Tailwind CSS keyframes
- **Alerts**: FormSubmit AJAX Integration (`careerconnect.aaassa@gmail.com`)

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Sabirusmani077/MDK-Convertor.git

# 2. Navigate to project directory
cd MDK-Convertor

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev

# 5. Build for production
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📄 License
MIT © 2026 MDK Convertor. All rights reserved.
