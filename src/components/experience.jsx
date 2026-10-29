import { Reveal } from "./reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-screen border-t border-line">
      <div className="container-edge">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            02 — Experience
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,min(4vw,6svh),3.25rem)] font-semibold leading-[1.05] tracking-tight text-balance">
            Where I&apos;ve put ideas into production.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-[5svh] lg:grid-cols-2">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={0.1 * i}>
              <div className="glass-panel h-full rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {job.company} · {job.period}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
