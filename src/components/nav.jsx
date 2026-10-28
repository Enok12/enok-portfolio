"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { List, X, FileArrowDown } from "@phosphor-icons/react";
import { ThemeToggle } from "./theme-toggle";

// Root-relative so the links also work from case study pages
const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-paper/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-edge hairline absolute inset-x-0 bottom-0" />
      <nav className="container-edge flex h-20 items-center justify-between">
        <Link href="/#top" className="flex items-center gap-2.5">
          <span className="btn-gradient flex h-8 w-8 items-center justify-center rounded-lg font-display text-sm font-bold">
            E
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Enok Dilshan
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Download Resume
            <FileArrowDown size={15} />
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line"
          >
            {open ? <X size={16} /> : <List size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-paper lg:hidden"
          >
            <ul className="container-edge flex flex-col gap-1 pb-8">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-4 font-display text-2xl"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium"
                >
                  Download Resume
                  <FileArrowDown size={15} />
                </a>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
