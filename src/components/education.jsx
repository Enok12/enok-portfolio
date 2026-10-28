import { Reveal } from "./reveal";
import { education, certifications } from "@/lib/data";
import { BlurImage } from "./blur-image";

// Both logos are dark-on-white, so they sit on a white tile to stay legible.
// Rendered at their exact display size (56px tall, width from the logo's
// own proportions) so no CSS resizing is needed.
function Logo({ src, alt, width }) {
  return (
    <div className="flex h-20 w-fit items-center rounded-xl bg-white px-5 py-3">
      <BlurImage
        src={src}
        alt={`${alt} logo`}
        width={width}
        height={56}
      />
    </div>
  );
}

export function Education() {
  return (
    <section id="education" className="border-t border-line py-28 md:py-36">
      <div className="container-edge">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            06 — Education
          </span>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="glass-panel flex h-full flex-col justify-between rounded-2xl p-8 md:p-10">
              <Logo
                src={education.logo}
                alt={education.school}
                width={education.logoWidth}
              />
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
            <div className="glass-panel flex h-full flex-col justify-between rounded-2xl p-8 md:p-10">
              <Logo
                src={certifications[0].logo}
                alt={certifications[0].issuer}
                width={certifications[0].logoWidth}
              />
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
