import {
  ArrowUpRight,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import { profile } from "@/lib/data";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: EnvelopeSimple,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/enok-dilshan",
    href: profile.linkedin,
    icon: LinkedinLogo,
  },
  {
    label: "GitHub",
    value: "github.com/Enok12",
    href: profile.github,
    icon: GithubLogo,
  },
  {
    label: "Location",
    value: profile.location,
    href: null,
    icon: MapPin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="section-screen radial-glow-bg relative overflow-hidden border-t border-line"
    >
      <div className="container-edge">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            07 — Contact
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.2rem,min(6vw,8.5svh),5rem)] font-semibold leading-[1.05] tracking-tight text-balance">
            Let&apos;s Build Something{" "}
            <span className="text-accent">Great Together</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Have a project in mind or want to work together? Feel free to
            reach out — I&apos;d love to help.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href={`mailto:${profile.email}`}
            className="btn-gradient group mt-8 inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold transition-transform hover:-translate-y-1"
          >
            Get In Touch
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-line pt-8 sm:grid-cols-2 lg:mt-[7svh] lg:grid-cols-4">
          {links.map(({ label, value, href, icon: Icon }, i) => {
            const content = (
              <>
                <Icon size={18} className="text-accent" weight="light" />
                <span className="text-sm text-muted transition-colors group-hover:text-ink">
                  {value}
                </span>
              </>
            );
            return (
              <Reveal key={label} delay={0.08 * i}>
                {href ? (
                  <a
                    href={href}
                    target={label === "Email" ? undefined : "_blank"}
                    rel={label === "Email" ? undefined : "noopener noreferrer"}
                    className="group glass-panel flex items-center gap-3 rounded-xl px-4 py-4"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="glass-panel flex items-center gap-3 rounded-xl px-4 py-4">
                    {content}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
