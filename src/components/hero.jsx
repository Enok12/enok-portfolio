"use client";

import { m } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileArrowDown } from "@phosphor-icons/react";
import { profile } from "@/lib/data";
import { useMediaQuery } from "@/lib/use-media-query";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { y: "45%" },
  show: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const fade = {
  hidden: { y: 16 },
  show: { y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const animateBlobs = useMediaQuery("(min-width: 768px)");

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <m.div
          animate={animateBlobs ? { x: [0, 40, 0], y: [0, 30, 0] } : undefined}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 right-[-10%] h-152 w-152 rounded-full bg-accent/25 blur-[140px]"
        />
        <m.div
          animate={animateBlobs ? { x: [0, -30, 0], y: [0, -20, 0] } : undefined}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[-10%] h-120 w-120 rounded-full bg-ink/6 blur-[120px] dark:bg-white/6"
        />
        <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-size-[64px_64px] opacity-[0.35]" />
      </div>

      <div className="container-edge">
        <m.p
          variants={fade}
          initial="hidden"
          animate="show"
          className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.title}
        </m.p>

        <m.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display text-[clamp(2.6rem,7.5vw,7rem)] font-medium leading-[0.98] tracking-tight text-balance"
        >
          {["Building Digital", "Experiences That", "Solve Real Problems."].map(
            (text) => (
              <span key={text} className="block overflow-hidden">
                <m.span variants={line} className="block">
                  {text}
                </m.span>
              </span>
            )
          )}
        </m.h1>

        <m.p
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.55 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
        >
          Software Engineer specializing in modern web applications,
          automation systems, and scalable digital solutions.
        </m.p>

        <m.div
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            data-cursor-hover
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            View Projects
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="/resume.pdf"
            download
            data-cursor-hover
            className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium transition-colors hover:border-ink"
          >
            Download Resume
            <FileArrowDown size={16} />
          </a>
          <a
            href="#contact"
            data-cursor-hover
            className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            Contact Me
          </a>
        </m.div>
      </div>

      <div className="container-edge mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
        <m.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </m.span>
        Scroll to explore
      </div>
    </section>
  );
}
