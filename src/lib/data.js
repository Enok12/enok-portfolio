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
    number: "04",
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
};

export const certifications = [
  {
    name: "Software Quality Assurance (Automation)",
    issuer: "SLIIT",
    date: "2026",
    logo: "/logos/sliit.png",
  },
];
