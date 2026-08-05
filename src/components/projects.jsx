"use client";

import { m } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "./reveal";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }) {
  const isComingSoon = !project.href;

  const Wrapper = isComingSoon ? "div" : "a";
  const wrapperProps = isComingSoon
    ? {}
    : {
        href: project.href,
        target: "_blank",
        rel: "noopener noreferrer",
        "data-cursor-hover": true,
      };

  return (
    <Reveal delay={0.08 * index}>
      <Wrapper
        {...wrapperProps}
        className={`group grid grid-cols-1 gap-8 border-t border-line py-12 md:grid-cols-12 md:gap-10 md:py-16 ${
          isComingSoon ? "opacity-60" : ""
        }`}
      >
        <div className="order-2 md:order-1 md:col-span-5 md:self-center">
          <span className="font-mono text-xs text-muted">
            {project.number}
          </span>
          <h3 className="mt-4 font-display text-3xl font-medium tracking-tight md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm uppercase tracking-[0.15em] text-muted">
            {project.category}
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {project.description}
          </p>

          {project.stack.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
            {isComingSoon ? (
              <span className="text-muted">{project.status}</span>
            ) : (
              <>
                View Case Study
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </>
            )}
          </div>
        </div>

        <div className="order-1 md:order-2 md:col-span-7">
          <m.div
            whileHover={{ scale: isComingSoon ? 1 : 1.02 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface-muted md:aspect-[16/10]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[28vw] font-medium leading-none text-ink/[0.06] md:text-[10vw]">
                {project.title.charAt(0)}
              </span>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
            {!isComingSoon && (
              <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-paper text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowUpRight size={18} />
              </div>
            )}
          </m.div>
        </div>
      </Wrapper>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" className="border-t border-line py-28 md:py-36">
      <div className="container-edge">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            03 — Selected Work
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(1.8rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-tight text-balance">
            Products, platforms, and systems I&apos;ve shipped.
          </h2>
        </Reveal>

        <div className="mt-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
}
