export const profile = {
  name: "Enok Dilshan",
  title: "IT Support Specialist | Web Developer",
  location: "Phnom Penh, Cambodia",
  email: "enokdilshan115@gmail.com",
  github: "https://github.com/Enok12",
  linkedin: "https://linkedin.com/in/enok-dilshan",
  intro:
    "Software Engineer specializing in modern web applications, business systems, and digital platforms. I transform ideas into reliable, high-performance solutions.",
  availability: "Available for new opportunities",
};

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "5+", label: "Production Applications" },
  { value: "1", label: "Full Stack Developer" },
];

export const experience = [
  {
    company: "Baraka (Cambodia) Co., Ltd.",
    role: "IT Support Specialist",
    period: "Jan 2023 — Present",
    points: [
      "Conceptualized and developed custom internal websites and systems that automated manual tasks, boosting cross-departmental operational efficiency by 30%.",
      "Designed and deployed a centralized web portal for internal tracking and resource management, cutting staff data-retrieval time by 40%.",
      "Optimized enterprise system uptime to 99.9% through proactive monitoring frameworks built with the IT support team.",
      "Enhanced internal workflow efficiency by 15% via seamless planning, testing, and deployment of critical system updates.",
      "Maintained a 98% SLA compliance rate managing a high-volume technical queue in a fast-paced environment.",
    ],
  },
  {
    company: "Parallax Technologies",
    role: "Intern Laravel Developer",
    period: "Oct 2021 — Apr 2022",
    points: [
      "Achieved 100% on-time feature delivery across multiple concurrent assignments by managing sprint objectives within rigid deadlines.",
      "Decreased post-deployment bugs by 30% by designing thorough test scenarios and diagnosing critical system-level anomalies pre-release.",
    ],
  },
];

// Case study pages live at /projects/[slug] and read the `detail` object.
// Any text wrapped in [square brackets] is placeholder copy to replace.
// Icon names: see ICONS in src/components/case-study.jsx.
// Gallery images: add `mobile: true` for phone shots, `wide: true` for 2:1 banners.
export const projects = [
  {
    slug: "ggmp-marketplace",
    title: "GGMP Marketplace",
    category: "Full Stack Marketplace Platform",
    year: "2024",
    status: "Ongoing Development",
    stack: ["Next.js", "Prisma", "Neon PostgreSQL", "Vercel"],
    problem:
      "Gemstone traders needed a secure, reliable way to list and sell inventory online without relying on informal channels.",
    solution:
      "A full-stack marketplace platform with scalable architecture, secure authentication, and optimized user workflows for listing and trading.",
    href: "https://ggmp.app",
    number: "01",
    detail: {
      label: "Web Application",
      tagline:
        "A modern gemstone marketplace connecting buyers and sellers through a trusted, streamlined digital experience.",
      github: "", // [Add repo URL to show the "View on GitHub" button]
      devices: {
        desktop: "/projects/ggmp-marketplace/desktop.jpg",
        mobile: "/projects/ggmp-marketplace/mobile.jpg",
      },
      overview: [
        "GGMP (Global Gemstone Marketplace) is a modern web application built to connect gemstone buyers and sellers from around the world. The platform provides a secure, transparent and user-friendly space for trading both natural and certified gemstones.",
        "It helps sellers showcase their products and reach global buyers, while giving buyers access to verified gemstones with detailed information and trusted sellers.",
      ],
      meta: {
        type: "Marketplace / E-commerce",
        role: "Full Stack Developer",
        platform: "Web (Next.js) + PWA Ready",
      },
      features: [
        { icon: "cart", title: "Product Marketplace", text: "Browse and buy/sell certified gemstones with detailed product information." },
        { icon: "mobile", title: "PWA & Mobile App", text: "Progressive Web App with optional Capacitor for native mobile apps." },
        { icon: "dashboard", title: "Admin Dashboard", text: "Manage products, users, orders and content from a simple dashboard." },
        { icon: "shield", title: "Secure Authentication", text: "SMS & WhatsApp OTP for global users, with a focus on Sri Lanka, Korea & Japan." },
        { icon: "cloud", title: "Secure Storage Migration", text: "Plan to migrate image storage from Cloudinary to AWS S3." },
        { icon: "search", title: "SEO Optimized", text: "Meta tags, structured data (schema), sitemap and robots.txt." },
        { icon: "image", title: "Image Management", text: "Cloudinary for optimized and fast image delivery." },
        { icon: "mail", title: "Domain & Email", text: "Custom ggmp.app domain with Resend for transactional (no-reply) email." },
        { icon: "lock", title: "Security & Performance", text: "Vercel security checklist, optimized builds and reliable hosting." },
      ],
      techStack: ["Next.js", "React", "Neon", "Cloudinary", "Tailwind CSS", "Vercel"],
      tools: ["GitHub", "Resend", "Claude", "Prisma"],
      gallery: [
        { src: "/projects/ggmp-marketplace/promo.jpg", alt: "GGMP promotional artwork with mobile app screens", wide: true },
        { src: "/projects/ggmp-marketplace/desktop.jpg", alt: "GGMP home page on desktop" },
        { src: "/projects/ggmp-marketplace/desktop-2.jpg", alt: "GGMP gemstone categories and latest listings" },
        { src: "/projects/ggmp-marketplace/mobile.jpg", alt: "GGMP home page on mobile", mobile: true },
      ],
      challenges: [
        "Building a secure and scalable marketplace",
        "Implementing global OTP (SMS + WhatsApp)",
        "Migrating storage from Cloudinary to AWS S3",
        "Ensuring good SEO and search visibility",
      ],
      solutions: [
        "Used Next.js with secure authentication",
        "Integrated SMS & WhatsApp OTP services",
        "Planned AWS S3 migration with an optimized setup",
        "Added schema markup, sitemap and robots.txt",
      ],
      results: [
        { icon: "rocket", title: "Fast & Smooth Performance", text: "Optimized builds and image delivery." },
        { icon: "shield", title: "Improved Security", text: "OTP verification & Vercel security checklist." },
        { icon: "chart", title: "Scalable Architecture", text: "Ready for future features and mobile apps." },
      ],
    },
  },
  {
    slug: "cambodian-gem-traders",
    title: "Cambodian Gem Traders",
    category: "Portfolio / Business Website",
    year: "2024",
    status: "Ongoing Development",
    stack: ["React", "Vercel", "Modern UI Components"],
    problem:
      "The business needed a modern, credible digital presence to reach customers beyond word-of-mouth.",
    solution:
      "A responsive, fast-loading platform built with React, establishing a professional online presence with an intuitive, conversion-focused layout.",
    href: "https://cgt.onl",
    number: "02",
    detail: {
      label: "Business Website",
      tagline:
        "A premium online showroom for certified natural gemstones, turning word-of-mouth trust into a credible digital presence.",
      github: "", // [Add repo URL to show the "View on GitHub" button]
      devices: {
        desktop: "/projects/cambodian-gem-traders/desktop.jpg",
        mobile: "/projects/cambodian-gem-traders/mobile.jpg",
      },
      overview: [
        "Cambodian Gem Traders (CGT) is a business website that showcases a curated collection of certified natural gemstones, from investment stones to fine jewellery pieces.",
        "[Add a second paragraph: who the client is, what they needed, and how the site helps them sell.]",
      ],
      meta: {
        type: "Business Website / Gem Catalogue",
        role: "[Add your role, e.g. Full Stack Developer]",
        platform: "Web (React)",
      },
      features: [
        { icon: "gem", title: "Gemstone Catalogue", text: "Browse certified stones by collection, with origin, carat and pricing." },
        { icon: "search", title: "Smart Filtering", text: "Search and filter by gem type, price range, colour and treatment." },
        { icon: "star", title: "Spotlight Listings", text: "Featured high-value stones highlighted at the top of the catalogue." },
        { icon: "chat", title: "Direct Contact", text: "One-tap WhatsApp and Telegram buttons for instant enquiries." },
        { icon: "mobile", title: "Fully Responsive", text: "A polished experience on phones, tablets and desktops." },
        { icon: "lock", title: "[Feature title]", text: "[Describe another feature you built.]" },
      ],
      techStack: ["React", "Vercel"],
      tools: ["GitHub"],
      gallery: [
        { src: "/projects/cambodian-gem-traders/desktop.jpg", alt: "CGT catalogue with spotlight listing" },
        { src: "/projects/cambodian-gem-traders/desktop-2.jpg", alt: "CGT gemstone grid with prices" },
        { src: "/projects/cambodian-gem-traders/mobile.jpg", alt: "CGT on mobile", mobile: true },
      ],
      challenges: [
        "[Add a key challenge]",
        "[Add a key challenge]",
        "[Add a key challenge]",
      ],
      solutions: [
        "[Explain how you solved it]",
        "[Explain how you solved it]",
        "[Explain how you solved it]",
      ],
      results: [
        { icon: "rocket", title: "[Result title]", text: "[Describe the impact]" },
        { icon: "users", title: "[Result title]", text: "[Describe the impact]" },
        { icon: "chart", title: "[Result title]", text: "[Describe the impact]" },
      ],
    },
  },
  {
    slug: "montra",
    title: "MONTRA",
    category: "Manufacturing ERP System",
    year: "2026",
    status: "Ongoing Development",
    stack: ["Next.js", "Clerk Auth", "Vercel"],
    problem:
      "A clothing manufacturer was running production, stock, and orders across spreadsheets and paper, with no single view of the business.",
    solution:
      "An ERP-style platform for clothing manufacturing that brings production, inventory, and orders into one secure, role-based system.",
    href: "https://montramanufacturing.vercel.app",
    number: "03",
    detail: {
      label: "ERP System",
      tagline:
        "An ERP-style platform for clothing manufacturing that brings production, inventory, and orders into one secure system.",
      github: "", // [Add repo URL to show the "View on GitHub" button]
      devices: {
        desktop: "/projects/montra/desktop.jpg",
        mobile: "/projects/montra/mobile.jpg",
      },
      overview: [
        "MONTRA is an ERP-style web application built for a clothing manufacturing business. [Add what the business does and the problem it had.]",
        "[Add a second paragraph: which teams use it day-to-day and what it replaced.]",
      ],
      meta: {
        type: "ERP / Internal Business System",
        role: "[Add your role, e.g. Full Stack Developer]",
        platform: "Web (Next.js)",
      },
      features: [
        { icon: "factory", title: "[Production Tracking]", text: "[Describe how production orders and stages are tracked.]" },
        { icon: "package", title: "[Inventory Management]", text: "[Describe stock, fabrics and materials handling.]" },
        { icon: "receipt", title: "[Orders & Invoicing]", text: "[Describe customer orders and billing.]" },
        { icon: "users", title: "Secure Sign-In", text: "Authentication with Clerk, including Google login." },
        { icon: "dashboard", title: "[Dashboard & Reports]", text: "[Describe the reporting views.]" },
        { icon: "lock", title: "[Feature title]", text: "[Describe another module.]" },
      ],
      techStack: ["Next.js", "Clerk", "Vercel"],
      tools: ["GitHub"],
      gallery: [
        { src: "/projects/montra/desktop.jpg", alt: "MONTRA sign-in screen" },
        { src: "/projects/montra/mobile.jpg", alt: "MONTRA sign-in on mobile", mobile: true },
      ],
      challenges: [
        "[Add a key challenge]",
        "[Add a key challenge]",
        "[Add a key challenge]",
      ],
      solutions: [
        "[Explain how you solved it]",
        "[Explain how you solved it]",
        "[Explain how you solved it]",
      ],
      results: [
        { icon: "rocket", title: "[Result title]", text: "[Describe the impact]" },
        { icon: "shield", title: "[Result title]", text: "[Describe the impact]" },
        { icon: "chart", title: "[Result title]", text: "[Describe the impact]" },
      ],
    },
  },
  {
    slug: "pharmacy-system",
    title: "MedCare Pharmacy",
    category: "Pharmacy Inventory & POS",
    year: "2026",
    status: "Ongoing Development",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    problem:
      "A pharmacy needed to track stock by batch and expiry date, sell at the counter, and keep a reliable record of every return and adjustment.",
    solution:
      "A pharmacy inventory and POS system with batch and expiry tracking, barcode-ready checkout, returns, reports, and a full audit trail.",
    href: null, // [Add live URL to show the "Live Preview" button]
    number: "04",
    detail: {
      label: "Web Application",
      tagline:
        "A pharmacy inventory and point-of-sale system that tracks every batch from stock-in to expiry, with role-based access for admins, pharmacists, and cashiers.",
      github: "https://github.com/Enok12/pharmacy-system",
      devices: {
        desktop: "/projects/pharmacy-system/dashboard.jpg",
      },
      overview: [
        "MedCare Pharmacy is a full inventory and point-of-sale system for a pharmacy. It manages products, suppliers, and stock deliveries, tracks every batch with its expiry date, and sells from those batches first-expiring-first-out (FEFO) so near-expiry stock moves before it goes to waste.",
        "A single versioned REST API (/api/v1) on PostgreSQL holds every business rule, so the web app, a planned Flutter mobile app, barcode scanners, and thermal printers can all use the same backend without duplicating logic.",
      ],
      meta: {
        type: "Inventory & POS System",
        role: "Full Stack Developer",
        platform: "Web (Next.js) + Mobile-ready API",
      },
      features: [
        { icon: "cart", title: "Point of Sale", text: "Search- and barcode-driven cart with cash or card checkout and printable receipts." },
        { icon: "package", title: "Batch & Expiry Tracking", text: "Every delivery is stored as a batch with an expiry date, sold first-expiring-first-out." },
        { icon: "receipt", title: "Stock-In & Suppliers", text: "Multi-line delivery receiving against suppliers, recorded atomically." },
        { icon: "users", title: "Role-Based Access", text: "Separate Admin, Pharmacist, and Cashier permissions, enforced by the API." },
        { icon: "chart", title: "Reports & Dashboard", text: "Sales trends, top products, and inventory valuation at cost and retail." },
        { icon: "shield", title: "Returns & Adjustments", text: "Sale returns and stock adjustments with reasons, restored to the right batch." },
        { icon: "search", title: "Audit Log", text: "A single feed of every stock adjustment and sale return, with who made it." },
        { icon: "mobile", title: "Mobile-Ready API", text: "Bearer-token auth for a future Flutter app, with barcode and receipt contracts." },
        { icon: "lock", title: "Production Hardening", text: "Hashed passwords, rotating refresh tokens, rate limiting, and Zod validation." },
      ],
      techStack: ["Next.js", "React", "PostgreSQL", "Prisma", "Tailwind CSS", "Vercel"],
      tools: ["Zod", "Vitest", "Playwright", "GitHub"],
      gallery: [
        { src: "/projects/pharmacy-system/dashboard.jpg", alt: "MedCare admin dashboard with sales trend" },
        { src: "/projects/pharmacy-system/reports-sales.jpg", alt: "Sales report with revenue, cost, and profit" },
        { src: "/projects/pharmacy-system/reports-top-products.jpg", alt: "Top products report" },
        { src: "/projects/pharmacy-system/inventory-valuation.jpg", alt: "Inventory valuation at cost and retail" },
        { src: "/projects/pharmacy-system/returns.jpg", alt: "Processed sales returns" },
        { src: "/projects/pharmacy-system/audit-log.jpg", alt: "Audit log of returns and stock adjustments" },
      ],
      challenges: [
        "Selling from the right batch so expiring stock moves first",
        "Keeping stock correct when a sale, return, or adjustment fails halfway",
        "Letting web, mobile, and hardware clients share the same rules",
        "Testing against a real database without touching live data",
      ],
      solutions: [
        "Built a FEFO allocator that splits each sale line across batches by expiry",
        "Wrapped every stock-changing operation in a single database transaction",
        "Put all business logic behind one versioned REST API with dual cookie/Bearer auth",
        "Ran 93 API integration tests against an isolated Postgres schema on a production build",
      ],
      results: [
        { icon: "package", title: "Less Expired Stock", text: "FEFO selling and expiry alerts surface near-expiry batches first." },
        { icon: "shield", title: "Reliable Records", text: "Atomic transactions and an audit log for every stock change." },
        { icon: "rocket", title: "Ready to Expand", text: "One API ready for a Flutter app, scanners, and thermal printers." },
      ],
    },
  },
  {
    slug: "dilshan-pos",
    title: "Dilshan Bookshop POS",
    category: "Retail Inventory & POS",
    year: "2026",
    status: "Ongoing Development",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    problem:
      "A bookshop needed one system for purchasing, stock, and counter sales, with proper control over discounts, returns, and staff permissions.",
    solution:
      "An API-first inventory and POS system with purchasing, a full stock ledger, split payments, returns approval, and thermal printer support.",
    href: "https://dilshan-pos.vercel.app",
    number: "05",
    detail: {
      label: "Web Application",
      tagline:
        "An API-first inventory and point-of-sale system for a bookshop, covering everything from purchase orders to the receipt printer.",
      github: "", // Private repo — add a URL here if you make it public
      devices: {
        desktop: "/projects/dilshan-pos/dashboard.jpg",
      },
      overview: [
        "Dilshan Bookshop POS is an inventory and point-of-sale system built for a retail bookshop. It covers the full cycle: products and variants, suppliers and purchase orders, goods receiving, a stock ledger, counter sales, returns, and reporting.",
        "It's built as a Next.js modular monolith with a documented OpenAPI 3.1 REST API, so a future Flutter POS app can use exactly the same endpoints. Every price and stock rule is enforced on the server, never trusted to the client.",
      ],
      meta: {
        type: "Retail Inventory & POS",
        role: "Full Stack Developer",
        platform: "Web (Next.js) + OpenAPI REST",
      },
      features: [
        { icon: "cart", title: "Web POS", text: "Barcode scanning, split payments, hold and resume, and voids with a reason." },
        { icon: "receipt", title: "Purchasing", text: "Purchase orders, goods receiving, and supplier returns." },
        { icon: "package", title: "Inventory Ledger", text: "Every stock change is a movement, with stock counts and adjustments." },
        { icon: "users", title: "Roles & Permissions", text: "28 permission codes across 4 roles, with per-role discount caps." },
        { icon: "chart", title: "Reports & Dashboard", text: "Sales, inventory, purchases, and profitability, net of returns." },
        { icon: "shield", title: "Returns Approval", text: "Manager approval for returns, and damaged goods never go back on the shelf." },
        { icon: "star", title: "Hardware Support", text: "Thermal receipt printing, cash drawer trigger, and a barcode scanner tester." },
        { icon: "search", title: "API Documentation", text: "OpenAPI 3.1 spec generated from the Zod schemas, with Swagger UI." },
        { icon: "lock", title: "Audit Log", text: "An append-only log of sensitive changes, written inside the same transaction." },
      ],
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Neon", "Tailwind CSS", "Vercel"],
      tools: ["TanStack Query", "Zod", "Swagger", "Vitest", "Playwright"],
      gallery: [
        { src: "/projects/dilshan-pos/dashboard.jpg", alt: "Dashboard with sales overview and payment breakdown" },
        { src: "/projects/dilshan-pos/pos.jpg", alt: "POS screen with barcode scan field and cart" },
        { src: "/projects/dilshan-pos/products.jpg", alt: "Product catalogue with prices and stock" },
        { src: "/projects/dilshan-pos/inventory.jpg", alt: "Inventory built from the stock movement ledger" },
        { src: "/projects/dilshan-pos/purchases.jpg", alt: "Purchase orders and receiving progress" },
        { src: "/projects/dilshan-pos/sales.jpg", alt: "Sales history with voids" },
        { src: "/projects/dilshan-pos/returns.jpg", alt: "Returns with the manager approval queue" },
        { src: "/projects/dilshan-pos/reports.jpg", alt: "Sales report net of refunds" },
        { src: "/projects/dilshan-pos/hardware.jpg", alt: "Receipt printer, cash drawer and scanner settings" },
      ],
      challenges: [
        "Stopping the client from setting prices, totals, or discounts",
        "Keeping stock consistent across sales, returns, and purchases",
        "Printing receipts and opening the cash drawer from a browser",
        "Making sure a deactivated user loses access straight away",
      ],
      solutions: [
        "Checkout only accepts item IDs and quantities; the server prices everything",
        "Routed every stock change through one ledger inside a single transaction",
        "Rendered one receipt document to both browser print and raw ESC/POS over Web Serial",
        "Found the gap in a 54-probe security audit and now check account status on every request",
      ],
      results: [
        { icon: "shield", title: "Secure by Design", text: "54 attack probes blocked, with the one real issue found and fixed." },
        { icon: "rocket", title: "Thoroughly Tested", text: "229 unit, 111 integration, and 4 end-to-end tests passing." },
        { icon: "mobile", title: "Ready for Mobile", text: "A documented API ready for a Flutter POS app." },
      ],
    },
  },
  {
    slug: "next-case-study",
    title: "Next Case Study",
    category: "In Discovery",
    year: "—",
    status: "Coming Soon",
    stack: [],
    problem: "",
    solution:
      "A new build is taking shape. Check back soon for the next case study.",
    href: null,
    number: "06",
  },
];

// Logos live in public/tech/ as PNGs
export const techCategories = {
  Frontend: [
    { name: "React", logo: "/tech/react.png" },
    { name: "Next.js", logo: "/tech/nextjs.png" },
    { name: "JavaScript", logo: "/tech/javascript.png" },
    { name: "Tailwind CSS", logo: "/tech/tailwind-css.png" },
    { name: "Bootstrap", logo: "/tech/bootstrap.png" },
  ],
  Backend: [
    { name: "PHP", logo: "/tech/php.png" },
    { name: "Laravel", logo: "/tech/laravel.png" },
    { name: "C#", logo: "/tech/csharp.png" },
    { name: "Java", logo: "/tech/java.png" },
  ],
  Database: [
    { name: "PostgreSQL", logo: "/tech/postgresql.png" },
    { name: "MySQL", logo: "/tech/mysql.png" },
    { name: "MongoDB", logo: "/tech/mongodb.png" },
    { name: "Prisma", logo: "/tech/prisma.png" },
  ],
  "Testing & QA": [
    { name: "Selenium", logo: "/tech/selenium.png" },
    { name: "Playwright", logo: "/tech/playwright.png" },
    { name: "REST Assured", logo: "/tech/rest-assured.png" },
    { name: "TestNG", logo: "/tech/testng.png" },
    { name: "JMeter", logo: "/tech/jmeter.png" },
  ],
  "Cloud & Tools": [
    { name: "Vercel", logo: "/tech/vercel.png" },
    { name: "Neon", logo: "/tech/neon.png" },
    { name: "GitHub Copilot", logo: "/tech/github-copilot.png" },
    { name: "WordPress", logo: "/tech/wordpress.png" },
  ],
};

// Logo lookup by tech name, used by case study pages
export const techLogos = {
  ...Object.fromEntries(
    Object.values(techCategories)
      .flat()
      .map((tech) => [tech.name, tech.logo])
  ),
  Cloudinary: "/tech/cloudinary.png",
  GitHub: "/tech/github.png",
  Resend: "/tech/resend.png",
  Claude: "/tech/claude.png",
  Clerk: "/tech/clerk.png",
  TypeScript: "/tech/typescript.png",
  Vitest: "/tech/vitest.png",
  Zod: "/tech/zod.png",
  Swagger: "/tech/swagger.png",
  "TanStack Query": "/tech/tanstack-query.png",
};

// Practices rather than tools, so they appear in About but not the logo grid
export const practices = {
  "QA Practices": [
    "Page Object Model",
    "API Testing",
    "Web & Mobile Testing",
    "Performance Testing",
    "Security Testing",
    "Regression Testing",
    "Smoke Testing",
    "Exploratory Testing",
    "Boundary Value Analysis",
    "Equivalence Partitioning",
  ],
  "Methodologies & AI": [
    "Agile / Scrum",
    "STLC",
    "AI-Driven Test Generation",
    "Prompt Engineering",
  ],
};

export const services = [
  {
    title: "Web Applications",
    description:
      "Building modern, responsive, and scalable web applications tailored to your needs.",
  },
  {
    title: "Business Systems",
    description:
      "Developing efficient internal systems that automate processes and improve productivity.",
  },
  {
    title: "Digital Transformation",
    description:
      "Turning manual, paper-based processes into reliable digital workflows.",
  },
];

export const education = {
  school: "Cardiff Metropolitan University",
  degree: "BSc Software Engineering (Hons)",
  honor: "First Class",
  period: "2019 — 2021",
  logo: "/logos/cardiff-met.png",
  logoWidth: 112, // display width at 56px tall
};

export const certifications = [
  {
    name: "Software Quality Assurance (Automation)",
    issuer: "SLIIT",
    date: "2026",
    logo: "/logos/sliit.png",
    logoWidth: 132, // display width at 56px tall
  },
];
