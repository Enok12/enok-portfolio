import { Reveal } from "./reveal";
import { services } from "@/lib/data";
import { Globe, Buildings, ArrowsClockwise } from "@phosphor-icons/react/dist/ssr";

const ICONS = [Globe, Buildings, ArrowsClockwise];

export function Services() {
  return (
    <section id="services" className="border-t border-line py-28 md:py-36">
      <div className="container-edge">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            04 — Services
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(1.8rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-tight text-balance">
            What I Can Help With
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[i] ?? Globe;
            return (
              <Reveal key={service.title} delay={0.08 * i}>
                <div className="glass-panel h-full rounded-2xl p-7 transition-colors hover:border-accent/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <Icon size={22} weight="light" className="text-accent" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
