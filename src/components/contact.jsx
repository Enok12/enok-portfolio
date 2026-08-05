"use client";

import { m } from "framer-motion";
import { ArrowUpRight, EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Reveal } from "./reveal";
import { profile } from "@/lib/data";
import { useMediaQuery } from "@/lib/use-media-query";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: EnvelopeSimple,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/enok-dilshan",
    href: profile.linkedin,
    icon: LinkedinLogo,
  },
  {
    label: "GitHub",
    value: "github.com/Enok12",
    href: profile.github,
    icon: GithubLogo,
  },
];

export function Contact() {
  const animateBlob = useMediaQuery("(min-width: 768px)");

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line py-28 md:py-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <m.div
          animate={animateBlob ? { x: [0, 30, 0], y: [0, 20, 0] } : undefined}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-128 w-128 -translate-x-1/2 rounded-full bg-accent/20 blur-[150px]"
        />
      </div>

      <div className="container-edge">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            06 — Contact
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-3xl font-display text-[clamp(2.2rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-balance">
            Have a project or opportunity?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision. Reach out and
            let&apos;s build something worthwhile.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href={`mailto:${profile.email}`}
            data-cursor-hover
            className="group mt-12 inline-flex items-center gap-4 rounded-full bg-ink px-8 py-5 text-lg font-medium text-paper transition-transform hover:-translate-y-1"
          >
            {profile.email}
            <ArrowUpRight
              size={22}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-6 border-t border-line pt-10 sm:grid-cols-3">
          {links.map(({ label, value, href, icon: Icon }, i) => (
            <Reveal key={label} delay={0.1 * i}>
              <a
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                data-cursor-hover
                className="group flex items-center justify-between gap-4 py-2"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} className="text-muted" weight="light" />
                  <span className="text-sm text-muted transition-colors group-hover:text-ink">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
