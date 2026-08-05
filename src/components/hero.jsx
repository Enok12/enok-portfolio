"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileArrowDown } from "@phosphor-icons/react";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-accent/25 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-ink/[0.06] blur-[120px] dark:bg-white/[0.06]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.35]" />
      </div>

      <div className="container-edge">
        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.title}
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display text-[clamp(2.6rem,7.5vw,7rem)] font-medium leading-[0.98] tracking-tight text-balance"
        >
          {["Building Digital", "Experiences That", "Solve Real Problems."].map(
            (text) => (
              <span key={text} className="block overflow-hidden">
                <motion.span variants={line} className="block">
                  {text}
                </motion.span>
              </span>
            )
          )}
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.55 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
        >
          Software Engineer specializing in modern web applications,
          automation systems, and scalable digital solutions.
        </motion.p>

        <motion.div
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="container-edge mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
        Scroll to explore
      </motion.div>
    </section>
  );
}
