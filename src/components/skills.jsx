import { Reveal } from "./reveal";
import { techCategories } from "@/lib/data";
import Image from "next/image";

const allTech = Object.values(techCategories).flat();

export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-28 md:py-36">
      <div className="container-edge">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            05 — Tech Stack
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(1.8rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-tight text-balance">
            The stack behind the work.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {allTech.map((tech, i) => (
            <Reveal key={tech.name} delay={0.03 * i}>
              <div className="glass-panel flex flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center transition-colors hover:border-accent/40">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
