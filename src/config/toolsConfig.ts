import { ToolConfig } from '../types';

export const TOOLS: ToolConfig[] = [
  {
    id: 'jpg-to-pdf',
    slug: 'jpg-to-pdf',
    title: 'JPG to PDF Converter',
    shortTitle: 'JPG to PDF',
    badge: 'Most Popular',
    sourceFormat: 'jpg',
    targetFormat: 'pdf',
    headline: 'JPG to PDF Converter – Convert JPG to PDF Online',
    subheadline: 'Convert JPG images into professional PDF documents online in seconds. Merge multiple JPG photos into a single PDF with custom page orientation.',
    description: 'Easily transform your JPG and JPEG photos into crisp, shareable PDF documents. You can upload single or multiple pictures, reorder pages, adjust margins, and export directly in your browser without uploading to external servers.',
    seoTitle: 'JPG to PDF Converter – Convert JPG to PDF Online Free | MDK Convertor',
    seoDescription: 'Convert JPG to PDF online for free with MDK Convertor. Fast, private, and secure image to PDF conversion directly in your browser. Combine multiple JPGs into one PDF.',
    keywords: [
      'JPG to PDF Converter',
      'Convert JPG to PDF Online',
      'Convert Images to PDF',
      'Image to PDF Converter',
      'Free Online PDF Converter',
      'JPG Converter'
    ],
    allowMultiple: true,
    acceptMimeTypes: 'image/jpeg,image/jpg',
    features: [
      {
        title: 'Batch Image Merging',
        description: 'Combine multiple JPG files into a single unified PDF document in one click.'
      },
      {
        title: 'Layout & Margin Controls',
        description: 'Choose between Portrait, Landscape, or Auto orientation, plus custom margin padding.'
      },
      {
        title: '100% Client-Side Privacy',
        description: 'Files are processed inside your browser memory and never uploaded to any remote server.'
      },
      {
        title: 'High Resolution Quality',
        description: 'Preserves the original pixel quality and crispness of your photographs.'
      }
    ],
    steps: [
      { step: '01', title: 'Upload JPG Images', desc: 'Drag and drop one or more JPG/JPEG files or click Choose File.' },
      { step: '02', title: 'Arrange & Configure', desc: 'Reorder pages, select orientation (portrait/landscape), and adjust margins.' },
      { step: '03', title: 'Download PDF', desc: 'Click Convert and instantly download your generated PDF document.' }
    ],
    faqs: [
      {
        q: 'How do I convert JPG to PDF?',
        a: 'Simply drop your JPG image into the upload box above, choose your preferred page orientation and margin settings, and click "Convert to PDF". Your PDF is ready for download in under two seconds.'
      },
      {
        q: 'Can I combine multiple JPG files into one PDF?',
        a: 'Yes! MDK Convertor allows you to select multiple JPG files simultaneously. They will be merged into a single multi-page PDF document in the order you specify.'
      },
      {
        q: 'Is there a file size limit or cost?',
        a: 'No, MDK Convertor is completely free with no registration required. Because conversions happen locally in your browser, there are no artificial file size caps.'
      },
      {
        q: 'Are my personal photos kept private?',
        a: 'Yes, 100%. Unlike other websites that upload your files to remote cloud servers, MDK Convertor processes images directly on your local device. Your files never leave your computer or phone.'
      }
    ]
  },
  {
    id: 'png-to-jpg',
    slug: 'png-to-jpg',
    title: 'PNG to JPG Converter',
    shortTitle: 'PNG to JPG',
    badge: 'Fast & Lossless',
    sourceFormat: 'png',
    targetFormat: 'jpg',
    headline: 'PNG to JPG Converter – Free Online PNG to JPG Converter',
    subheadline: 'Convert PNG images to high-quality JPG files instantly. Reduce file sizes while preserving vivid colors and clarity.',
    description: 'Transform transparent or high-resolution PNG graphics into lightweight, widely compatible JPG images. Ideal for web optimization, email attachments, and photo galleries.',
    seoTitle: 'PNG to JPG Converter – Free Online PNG to JPG Converter | MDK Convertor',
    seoDescription: 'Convert PNG to JPG online for free with MDK Convertor. High quality conversion, transparency handling, and instant download without software installation.',
    keywords: [
      'PNG to JPG Converter',
      'Convert PNG to JPG Online',
      'PNG Converter',
      'Free Image Converter',
      'Online Image Converter'
    ],
    allowMultiple: true,
    acceptMimeTypes: 'image/png',
    features: [
      {
        title: 'Smart Transparency Handling',
        description: 'Automatically renders transparent PNG backgrounds onto a clean white canvas for flawless JPGs.'
      },
      {
        title: 'Adjustable JPG Quality',
        description: 'Fine-tune output compression between maximum visual fidelity and smaller file sizes.'
      },
      {
        title: 'Instant In-Browser Speed',
        description: 'Conversions take milliseconds using modern HTML5 hardware-accelerated canvas.'
      },
      {
        title: 'Batch PNG Processing',
        description: 'Convert multiple PNG files at once and download them individually or in a single ZIP.'
      }
    ],
    steps: [
      { step: '01', title: 'Upload PNG', desc: 'Select or drag-and-drop your PNG image file into the upload zone.' },
      { step: '02', title: 'Set Quality', desc: 'Keep default 92% high quality or customize to your requirements.' },
      { step: '03', title: 'Download JPG', desc: 'Click Convert and instantly download your converted JPG picture.' }
    ],
    faqs: [
      {
        q: 'How do I convert PNG to JPG?',
        a: 'Select your PNG file using the upload area, click the "Convert to JPG" button, and download the resulting high-quality JPG file immediately.'
      },
      {
        q: 'What happens to transparent backgrounds in PNG?',
        a: 'Because JPG format does not support transparency, MDK Convertor automatically fills transparent backgrounds with a clean, standard solid white background.'
      },
      {
        q: 'Will the image lose quality during conversion?',
        a: 'Our converter uses high-fidelity 92%+ JPEG compression by default, preserving virtually all visible details and colors while significantly reducing file size.'
      }
    ]
  },
  {
    id: 'jpg-to-png',
    slug: 'jpg-to-png',
    title: 'JPG to PNG Converter',
    shortTitle: 'JPG to PNG',
    badge: 'Lossless Output',
    sourceFormat: 'jpg',
    targetFormat: 'png',
    headline: 'JPG to PNG Converter – Free Online Image Converter',
    subheadline: 'Convert JPG images to PNG format instantly. Enjoy lossless quality and maximum graphic compatibility.',
    description: 'Convert your compressed JPEG images into lossless PNG format. Perfect for image editing, digital design, and preparing graphics for overlays and icons.',
    seoTitle: 'JPG to PNG Converter – Free Online Image Converter | MDK Convertor',
    seoDescription: 'Convert JPG images to lossless PNG format online for free. Fast, secure, and easy-to-use image converter by MDK Convertor.',
    keywords: [
      'JPG to PNG Converter',
      'Image Converter',
      'Free Image Converter',
      'Online Image Converter',
      'JPG Converter'
    ],
    allowMultiple: true,
    acceptMimeTypes: 'image/jpeg,image/jpg',
    features: [
      {
        title: 'True Lossless PNG Export',
        description: 'Converts JPG data into pixel-perfect PNG format without introducing additional compression artifacts.'
      },
      {
        title: 'Cross-Platform Compatibility',
        description: 'Generated PNGs are compatible with all modern web browsers, photo editors, and operating systems.'
      },
      {
        title: 'Zero Registration',
        description: 'No email or account sign-up needed. Convert as many files as you like immediately.'
      },
      {
        title: 'Lightning Fast',
        description: 'Runs on your browser hardware for near-instantaneous file generation.'
      }
    ],
    steps: [
      { step: '01', title: 'Select JPG File', desc: 'Drag and drop your JPG or JPEG file into the converter box.' },
      { step: '02', title: 'Start Conversion', desc: 'Click the Convert button to generate the PNG structure.' },
      { step: '03', title: 'Save PNG Image', desc: 'Download your new lossless PNG image directly to your device.' }
    ],
    faqs: [
      {
        q: 'Why convert JPG to PNG?',
        a: 'PNG uses lossless compression, meaning opening and re-saving the file in editors won’t degrade image quality, and PNG supports future transparency edits.'
      },
      {
        q: 'Does converting JPG to PNG make the background transparent?',
        a: 'No, converting a JPG to PNG keeps the existing background colors because standard JPG files do not contain transparency alpha channels.'
      }
    ]
  },
  {
    id: 'png-to-pdf',
    slug: 'png-to-pdf',
    title: 'PNG to PDF Converter',
    shortTitle: 'PNG to PDF',
    badge: 'Document Ready',
    sourceFormat: 'png',
    targetFormat: 'pdf',
    headline: 'PNG to PDF Converter – Convert PNG Images to PDF',
    subheadline: 'Turn PNG images into PDF files in seconds. Merge multiple PNG diagrams, screenshots, or receipts into one document.',
    description: 'Quickly convert PNG graphics, scanned documents, and artwork into universally readable PDF files. Retain high clarity and sharpness across any printer or screen.',
    seoTitle: 'PNG to PDF Converter – Convert PNG Images to PDF | MDK Convertor',
    seoDescription: 'Convert PNG to PDF online for free. Combine transparent PNG screenshots, graphics, and photos into a clean PDF document in seconds.',
    keywords: [
      'PNG to PDF Converter',
      'Convert Images to PDF',
      'Image to PDF Converter',
      'Free Online PDF Converter',
      'PNG Converter'
    ],
    allowMultiple: true,
    acceptMimeTypes: 'image/png',
    features: [
      {
        title: 'Sharp Screenshot Conversion',
        description: 'Ideal for app mockups, diagrams, and receipts where crisp lines and legible text are critical.'
      },
      {
        title: 'Multi-PNG Document Builder',
        description: 'Combine sequential screenshots or slides into a organized multi-page PDF.'
      },
      {
        title: 'Print-Ready Page Options',
        description: 'Auto-fit image bounds or choose standard A4 dimensions with elegant margins.'
      },
      {
        title: 'Private & Secure',
        description: 'All document compilation happens client-side without cloud exposure.'
      }
    ],
    steps: [
      { step: '01', title: 'Add PNG Files', desc: 'Upload one or multiple PNG graphics to the converter.' },
      { step: '02', title: 'Review Order', desc: 'Rearrange page sequences and configure layout parameters.' },
      { step: '03', title: 'Generate PDF', desc: 'Click Convert and download your assembled PDF document.' }
    ],
    faqs: [
      {
        q: 'Can I convert multiple PNG files into one PDF?',
        a: 'Yes, upload all your PNG files at once, and MDK Convertor will merge them into a single PDF document.'
      },
      {
        q: 'Will transparent PNGs appear correctly in PDF?',
        a: 'Yes, transparent backgrounds are blended smoothly onto white PDF pages for crisp, professional document printing.'
      }
    ]
  },
  {
    id: 'image-to-pdf',
    slug: 'image-to-pdf',
    title: 'Image to PDF Converter',
    shortTitle: 'Image to PDF',
    badge: 'All Formats',
    sourceFormat: 'all',
    targetFormat: 'pdf',
    headline: 'Image to PDF Converter – Convert Images to PDF Online',
    subheadline: 'Convert multiple images of any format (JPG, PNG, WebP) into a single unified PDF. Fast, free, and simple.',
    description: 'The ultimate all-in-one image to PDF converter. Mix and match JPG photos, PNG screenshots, and WebP graphics into a professional, shareable PDF presentation or report.',
    seoTitle: 'Image to PDF Converter – Convert Images to PDF Online | MDK Convertor',
    seoDescription: 'Convert multiple images to PDF online for free with MDK Convertor. Supports JPG, PNG, WEBP. Drag, reorder, and merge into one single PDF.',
    keywords: [
      'Image to PDF Converter',
      'Convert Images to PDF',
      'Online Image Converter',
      'Free Image Converter',
      'Free Online PDF Converter',
      'Free Online File Converter'
    ],
    allowMultiple: true,
    acceptMimeTypes: 'image/jpeg,image/png,image/webp,image/jpg',
    features: [
      {
        title: 'Universal Image Support',
        description: 'Accepts JPG, PNG, JPEG, and WebP images in the same conversion batch.'
      },
      {
        title: 'Drag-and-Drop Reordering',
        description: 'Effortlessly organize the order of pages before generating your final PDF.'
      },
      {
        title: 'Custom Margins & Sizing',
        description: 'Choose between borderless, narrow margins, or standard document borders.'
      },
      {
        title: 'Direct Client Processing',
        description: 'Fast rendering right in your browser with zero data leaving your machine.'
      }
    ],
    steps: [
      { step: '01', title: 'Select Images', desc: 'Drop any mix of JPG, PNG, or WebP files into the upload zone.' },
      { step: '02', title: 'Customize Document', desc: 'Set your preferred orientation and page margin preferences.' },
      { step: '03', title: 'Download Merged PDF', desc: 'Hit Convert and download your combined PDF immediately.' }
    ],
    faqs: [
      {
        q: 'Can I mix JPG and PNG files into a single PDF?',
        a: 'Yes, our Image to PDF tool accepts mixed formats (JPG, PNG, WebP) and seamlessly weaves them into a unified PDF document.'
      },
      {
        q: 'Can I reorder the images?',
        a: 'Yes, you can remove or adjust images before initiating the conversion process.'
      }
    ]
  },
  {
    id: 'pdf-to-jpg',
    slug: 'pdf-to-jpg',
    title: 'PDF to JPG Converter',
    shortTitle: 'PDF to JPG',
    badge: 'High Resolution',
    sourceFormat: 'pdf',
    targetFormat: 'jpg',
    headline: 'PDF to JPG Converter – Convert PDF Pages into JPG Images',
    subheadline: 'Extract and convert PDF document pages into high-resolution JPG images. Download individual pages or a convenient ZIP archive.',
    description: 'Transform each page of your PDF file into a crisp, high-resolution JPG picture. Perfect for sharing document snippets on social media, presentations, and websites.',
    seoTitle: 'PDF to JPG Converter – Convert PDF to JPG Online | MDK Convertor',
    seoDescription: 'Convert PDF pages to JPG images online for free. Fast browser-based extraction, high resolution rendering, and batch ZIP download with MDK Convertor.',
    keywords: [
      'PDF to JPG Converter',
      'Convert PDF to JPG Online',
      'Free Online PDF Converter',
      'Free Online File Converter',
      'Image Converter'
    ],
    allowMultiple: false,
    acceptMimeTypes: 'application/pdf',
    features: [
      {
        title: 'Multi-Page Extraction',
        description: 'Renders every page of your PDF as a separate, full-resolution JPG image.'
      },
      {
        title: 'One-Click ZIP Download',
        description: 'Bundle all converted pages into a single compressed ZIP file for easy handling.'
      },
      {
        title: 'Ultra Sharp Rendering',
        description: 'Uses HTML5 canvas rendering at 2x scale for sharp text and vibrant graphics.'
      },
      {
        title: 'Complete Document Privacy',
        description: 'Your sensitive PDF documents are rendered strictly on your machine.'
      }
    ],
    steps: [
      { step: '01', title: 'Upload PDF Document', desc: 'Choose or drop your PDF document into the converter box.' },
      { step: '02', title: 'Process Pages', desc: 'Our engine parses each page with high-dpi canvas rendering.' },
      { step: '03', title: 'Save JPG Pages', desc: 'Download individual JPG pages or download all pages in a ZIP archive.' }
    ],
    faqs: [
      {
        q: 'How do I convert a multi-page PDF to JPG?',
        a: 'Upload your PDF document, click Convert, and MDK Convertor will extract every page into high-quality JPGs. You can download individual page images or download all pages bundled in a single ZIP.'
      },
      {
        q: 'Is my confidential PDF uploaded to a server?',
        a: 'No! The PDF rendering is handled entirely within your web browser using client-side JavaScript. Your document never leaves your device.'
      }
    ]
  },
  {
    id: 'jpeg-to-pdf',
    slug: 'jpeg-to-pdf',
    title: 'JPEG to PDF Converter',
    shortTitle: 'JPEG to PDF',
    badge: 'Universal',
    sourceFormat: 'jpeg',
    targetFormat: 'pdf',
    headline: 'JPEG to PDF Converter – Convert JPEG to PDF Online',
    subheadline: 'Quickly convert your JPEG photos into standard PDF documents. Free, safe, and mobile-friendly.',
    description: 'Easily convert JPEG photos and images into print-ready PDF files. Support for single files or combining multiple photos into one document.',
    seoTitle: 'JPEG to PDF Converter – Convert JPEG to PDF Online Free | MDK Convertor',
    seoDescription: 'Convert JPEG to PDF online for free with MDK Convertor. Fast, secure, and responsive conversion directly in your browser.',
    keywords: [
      'JPEG to PDF Converter',
      'JPG to PDF Converter',
      'Convert Images to PDF',
      'Free Online PDF Converter'
    ],
    allowMultiple: true,
    acceptMimeTypes: 'image/jpeg',
    features: [
      {
        title: 'Quick Drag & Drop',
        description: 'Instantly drop your JPEG files and produce standard PDF documents.'
      },
      {
        title: 'Multi-Image Merging',
        description: 'Merge several JPEG photos into an organized single document.'
      }
    ],
    steps: [
      { step: '01', title: 'Upload JPEG', desc: 'Select or drop your JPEG images.' },
      { step: '02', title: 'Choose Layout', desc: 'Select page orientation and margins.' },
      { step: '03', title: 'Download PDF', desc: 'Download your compiled PDF document.' }
    ],
    faqs: [
      {
        q: 'Is JPEG the same as JPG?',
        a: 'Yes, JPEG and JPG are functionally identical image formats. Our converter works seamlessly with both file extensions.'
      }
    ]
  },
  {
    id: 'jpeg-to-png',
    slug: 'jpeg-to-png',
    title: 'JPEG to PNG Converter',
    shortTitle: 'JPEG to PNG',
    badge: 'Lossless',
    sourceFormat: 'jpeg',
    targetFormat: 'png',
    headline: 'JPEG to PNG Converter – Convert JPEG to PNG Online',
    subheadline: 'Convert JPEG images into crisp PNG format with zero loss in graphic quality.',
    description: 'Transform your JPEG images into PNG files quickly and securely right in your browser.',
    seoTitle: 'JPEG to PNG Converter – Convert JPEG to PNG Online | MDK Convertor',
    seoDescription: 'Convert JPEG to PNG online for free. Fast, private, and simple browser-based image conversion.',
    keywords: [
      'JPEG to PNG Converter',
      'JPG to PNG Converter',
      'Image Converter',
      'Free Image Converter'
    ],
    allowMultiple: true,
    acceptMimeTypes: 'image/jpeg',
    features: [
      {
        title: 'Lossless Preservation',
        description: 'Retain maximum pixel fidelity when saving into PNG format.'
      },
      {
        title: 'Instant Download',
        description: 'Get your converted PNG file ready in seconds.'
      }
    ],
    steps: [
      { step: '01', title: 'Upload JPEG', desc: 'Choose your JPEG picture.' },
      { step: '02', title: 'Convert', desc: 'Click Convert to initiate client-side conversion.' },
      { step: '03', title: 'Download PNG', desc: 'Save your PNG file directly.' }
    ],
    faqs: [
      {
        q: 'How fast is JPEG to PNG conversion?',
        a: 'Conversions take less than a second as they run directly in your browser with hardware acceleration.'
      }
    ]
  }
];

export const HOMEPAGE_POPULAR_TOOLS = [
  {
    id: 'png-to-jpg',
    title: 'PNG to JPG',
    desc: 'Convert PNG images to high-quality JPG files.',
    icon: 'ImageIcon',
    slug: '/png-to-jpg',
    badge: 'Popular'
  },
  {
    id: 'jpg-to-png',
    title: 'JPG to PNG',
    desc: 'Convert JPG images to PNG format instantly.',
    icon: 'FileImageIcon',
    slug: '/jpg-to-png',
    badge: 'Lossless'
  },
  {
    id: 'jpg-to-pdf',
    title: 'JPG to PDF',
    desc: 'Convert JPG images into PDF documents online.',
    icon: 'FileTextIcon',
    slug: '/jpg-to-pdf',
    badge: 'Featured'
  },
  {
    id: 'png-to-pdf',
    title: 'PNG to PDF',
    desc: 'Turn PNG images into PDF files in seconds.',
    icon: 'FileCodeIcon',
    slug: '/png-to-pdf',
    badge: 'Popular'
  },
  {
    id: 'image-to-pdf',
    title: 'Image to PDF',
    desc: 'Convert multiple images into a single PDF.',
    icon: 'LayersIcon',
    slug: '/image-to-pdf',
    badge: 'Multi-File'
  },
  {
    id: 'pdf-to-jpg',
    title: 'PDF to JPG',
    desc: 'Convert PDF pages into JPG images.',
    icon: 'FileOutputIcon',
    slug: '/pdf-to-jpg',
    badge: 'High-Res'
  }
];

export const GENERAL_FAQS = [
  {
    q: 'How do I convert PNG to JPG?',
    a: 'Upload your PNG file to our PNG to JPG converter, click Convert, and download your high-quality JPG file immediately. Transparent areas are cleanly converted with a white background.'
  },
  {
    q: 'How do I convert JPG to PDF?',
    a: 'Drag and drop one or multiple JPG images into the JPG to PDF converter. You can arrange page orientation and margins, then click Convert to download your merged PDF.'
  },
  {
    q: 'Is MDK Convertor free?',
    a: 'Yes, MDK Convertor is 100% free with no hidden charges, watermarks, or limits on the number of conversions you can perform.'
  },
  {
    q: 'Can I convert images to PDF online?',
    a: 'Absolutely. You can convert JPG, PNG, and WebP images into standard PDF documents directly in your web browser without installing any third-party software.'
  },
  {
    q: 'Is my uploaded file secure?',
    a: 'MDK Convertor uses client-side processing technology. Your files are processed entirely within your web browser memory and are never uploaded to any remote server or database. Once you close the page or click "Convert Another File", all files are cleared immediately from memory.'
  },
  {
    q: 'Do I need to install software?',
    a: 'No installation is needed! MDK Convertor works directly inside modern web browsers on Windows, Mac, Linux, iPhone, iPad, and Android.'
  },
  {
    q: 'Can I convert multiple images into one PDF?',
    a: 'Yes! Our JPG to PDF and Image to PDF converters allow you to select multiple images and merge them into a single, beautifully organized multi-page PDF document.'
  },
  {
    q: 'Does MDK Convertor work on mobile?',
    a: 'Yes, MDK Convertor is fully responsive and optimized for touchscreens on smartphones and tablets, allowing you to convert photos straight from your phone camera roll or files.'
  }
];
