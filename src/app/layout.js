import { Bricolage_Grotesque, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MotionProvider } from "@/components/motion-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono-geist",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://enokdilshan.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Enok Dilshan — Software Engineer & Web Developer",
    template: "%s — Enok Dilshan",
  },
  description:
    "Enok Dilshan is a software engineer building scalable web applications, automation systems, and modern digital experiences from Phnom Penh, Cambodia.",
  keywords: [
    "Enok Dilshan",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "Cambodia Developer",
  ],
  authors: [{ name: "Enok Dilshan", url: siteUrl }],
  creator: "Enok Dilshan",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Enok Dilshan — Software Engineer & Web Developer",
    description:
      "Building digital experiences that solve real problems — modern web applications, automation systems, and scalable digital solutions.",
    siteName: "Enok Dilshan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Enok Dilshan — Software Engineer & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enok Dilshan — Software Engineer & Web Developer",
    description:
      "Building digital experiences that solve real problems — modern web applications, automation systems, and scalable digital solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Extensions (e.g. ColorZilla) inject attributes on <body> before hydration */}
      <body
        suppressHydrationWarning
        className="min-h-full cursor-default bg-paper font-sans text-ink"
      >
        <ThemeProvider>
          <MotionProvider>
            <Nav />
            <main id="top">{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
