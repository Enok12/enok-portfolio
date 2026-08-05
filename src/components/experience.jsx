import { Reveal } from "./reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line py-28 md:py-36">
      <div className="container-edge">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            02 — Experience
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(1.8rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-tight text-balance">
            Where I&apos;ve put ideas into production.
          </h2>
        </Reveal>

        <div className="mt-20">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={0.1 * i}>
              <div className="grid grid-cols-1 gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-14">
                <div className="md:col-span-4">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                    {job.period}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-tight md:text-3xl">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{job.role}</p>
                </div>

                <ul className="md:col-span-8">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-4 border-b border-line py-4 text-sm leading-relaxed text-muted first:pt-0 last:border-b-0 md:text-base"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
}
