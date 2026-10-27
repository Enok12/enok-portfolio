"use client";

import { m } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, CaretLeft, CaretRight } from "@phosphor-icons/react";
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
      };

  return (
    <Reveal delay={0.08 * index} className="h-full">
      <Wrapper
        {...wrapperProps}
        className={`group glass-panel flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-accent/40 ${
          isComingSoon ? "opacity-60" : ""
        }`}
      >
        <m.div
          whileHover={{ scale: isComingSoon ? 1 : 1.03 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-16/10 overflow-hidden border-b border-line bg-surface-muted"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl font-semibold text-accent/25">
              {project.title.charAt(0)}
            </span>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-size-[24px_24px] opacity-40" />
        </m.div>

        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
            {project.category}
          </p>
          <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {project.solution}
          </p>

          {project.stack.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
            {isComingSoon ? (
              <span className="text-muted">{project.status}</span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-accent">
                View Case Study
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            )}
          </div>
        </div>
      </Wrapper>
    </Reveal>
  );
}

export function Projects() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const canSlide = !(atStart && atEnd);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  // Move by one card width (card + gap) per click
  const slide = (dir) => {
    const el = trackRef.current;
    const card = el?.firstElementChild;
    if (!card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: "smooth" });
  };

  return (
    <section id="work" className="border-t border-line py-28 md:py-36">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                03 — Featured Projects
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl font-display text-[clamp(1.8rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-tight text-balance">
                Products, platforms, and systems I&apos;ve shipped.
              </h2>
            </Reveal>
          </div>

          {canSlide && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous case study"
                onClick={() => slide(-1)}
                disabled={atStart}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-35"
              >
                <CaretLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next case study"
                onClick={() => slide(1)}
                disabled={atEnd}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-35"
              >
                <CaretRight size={18} />
              </button>
            </div>
          )}
        </div>

        <div
          ref={trackRef}
          onScroll={updateEdges}
          className="no-scrollbar mt-16 -mx-2 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scroll-px-2 px-2 pb-2"
        >
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
