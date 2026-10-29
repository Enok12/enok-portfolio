"use client";

import { m } from "framer-motion";
import {
  ArrowUpRight,
  FileArrowDown,
} from "@phosphor-icons/react";
import { BlurImage } from "./blur-image";
import { profile, stats } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { y: 28 },
  show: {
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const fade = {
  hidden: { y: 16 },
  show: { y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const headline = [
  { text: "Building Scalable", accent: false },
  { text: "Web Applications", accent: true },
  { text: "That Help Businesses Grow.", accent: false },
];

export function Hero() {
  return (
    <section className="section-screen radial-glow-bg relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-size-[64px_64px] opacity-[0.3]" />
      </div>

      <div className="container-edge grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <m.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 font-mono text-xs text-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </m.div>

          <m.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-display text-[clamp(2.4rem,min(5.5vw,8svh),4.5rem)] font-semibold leading-[1.05] tracking-tight text-balance"
          >
            {headline.map((item) => (
              <m.span
                key={item.text}
                variants={line}
                className={`block ${item.accent ? "text-accent" : ""}`}
              >
                {item.text}
              </m.span>
            ))}
          </m.h1>

          <m.p
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {profile.intro}
          </m.p>

          <m.div
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.65 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="btn-gradient group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Download Resume
              <FileArrowDown size={16} />
            </a>
          </m.div>
        </div>

        <m.div
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Soft glow so the dark suit separates from the navy background */}
            <div
              aria-hidden
              className="absolute inset-x-[8%] top-[12%] bottom-0 -z-10 rounded-full bg-accent/25 blur-[90px]"
            />
            <BlurImage
              src="/profile.png"
              alt={profile.name}
              width={936}
              height={1254}
              loading="eager"
              sizes="(min-width: 1024px) 40vw, (min-width: 448px) 448px, 100vw"
              // On laptops the photo's height follows the screen height so
              // the whole hero, stats included, fits on one screen
              className="mx-auto h-auto w-full mask-[linear-gradient(to_bottom,black_80%,transparent)] lg:h-[min(58svh,640px)] lg:w-auto"
            />
          </div>
        </m.div>
      </div>

      <m.div
        variants={fade}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.75 }}
        className="container-edge mt-10 lg:mt-[4svh]"
      >
        <div className="glass-panel grid grid-cols-3 divide-x divide-line rounded-2xl">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-4 text-center first:border-l-0">
              <p className="font-display text-2xl font-semibold text-accent sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </m.div>
    </section>
  );
}
