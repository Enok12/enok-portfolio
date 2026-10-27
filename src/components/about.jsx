import { Reveal } from "./reveal";
import { techCategories, practices } from "@/lib/data";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const categories = [
  ...Object.entries(techCategories).map(([category, list]) => [
    category,
    list.map((tech) => tech.name),
  ]),
  ...Object.entries(practices),
];

export function About() {
  return (
    <section id="about" className="border-t border-line py-28 md:py-36">
      <div className="container-edge">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            01 — About Me
          </span>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-12">
          <Reveal delay={0.1} className="md:col-span-5">
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-balance">
              Turning Ideas into Real Impact
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              I&apos;m a Software Engineer based in Phnom Penh, Cambodia,
              working at the intersection of IT support and development —
              I don&apos;t just build systems, I keep them running. Since
              graduating with First Class Honours from Cardiff Metropolitan
              University, I&apos;ve combined technical expertise with a
              practical, business-first mindset to deliver software that
              actually reduces friction for the people who use it.
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              Get to Know Me
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {categories.map(([category, list], i) => (
                <div
                  key={category}
                  className={`glass-panel rounded-2xl p-5 ${
                    categories.length % 2 && i === categories.length - 1
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                    {category}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {list.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line px-3 py-1 text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
