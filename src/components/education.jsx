import { Reveal } from "./reveal";
import { education, certifications } from "@/lib/data";
import { GraduationCap, SealCheck } from "@phosphor-icons/react/dist/ssr";

export function Education() {
  return (
    <section id="education" className="border-t border-line py-28 md:py-36">
      <div className="container-edge">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            05 — Education
          </span>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-line p-8 md:p-10">
              <GraduationCap size={28} className="text-accent" weight="light" />
              <div className="mt-10">
                <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                  {education.school}
                </h3>
                <p className="mt-3 text-muted">{education.degree}</p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  <span>{education.honor}</span>
                  <span>{education.period}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-line p-8 md:p-10">
              <SealCheck size={28} className="text-accent" weight="light" />
              <div className="mt-10">
                {certifications.map((cert) => (
                  <div key={cert.name}>
                    <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                      {cert.name}
                    </h3>
                    <p className="mt-3 text-muted">{cert.issuer}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-line pt-4 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                      <span>Certification</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
