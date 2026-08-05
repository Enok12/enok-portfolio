import { Reveal } from "./reveal";
import { skills } from "@/lib/data";

const allSkills = Object.values(skills).flat();

export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-28 md:py-36">
      <div className="container-edge">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            04 — Skills
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(1.8rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-tight text-balance">
            The stack behind the work.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, list], i) => (
            <Reveal key={category} delay={0.08 * i}>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                {String(i + 1).padStart(2, "0")} / {category}
              </h3>
              <ul className="mt-6 flex flex-col gap-3">
                {list.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-line pb-3 font-display text-lg font-medium tracking-tight transition-colors hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.2} className="mt-20 overflow-hidden border-y border-line py-6">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="flex items-center gap-10 font-display text-2xl text-muted md:text-4xl"
            >
              {skill}
              <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
