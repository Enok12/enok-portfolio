import { Reveal } from "./reveal";
import { stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-t border-line py-28 md:py-36">
      <div className="container-edge">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            01 — About
          </span>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <Reveal delay={0.1} className="md:col-span-8">
            <p className="font-display text-[clamp(1.6rem,3.2vw,2.75rem)] font-medium leading-[1.2] text-balance">
              I&apos;m a software engineer based in Phnom Penh, Cambodia,
              working at the intersection of{" "}
              <span className="text-muted">IT support and development</span>{" "}
              — I don&apos;t just build systems, I keep them running. That
              dual perspective shapes how I write software:{" "}
              <span className="text-muted">
                practical, resilient, and built to reduce friction for the
                people who use it every day.
              </span>
            </p>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
              Since graduating with First Class Honours in Software
              Engineering from Cardiff Metropolitan University, I&apos;ve
              worked across internal automation tools, full-stack web
              platforms, and enterprise support — turning manual,
              error-prone processes into reliable digital systems.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-4 md:justify-self-end">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-4xl font-medium tracking-tight">
                    {stat.value}
                  </dd>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
