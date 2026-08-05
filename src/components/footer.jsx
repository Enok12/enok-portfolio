import { profile } from "@/lib/data";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

const quickLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: `mailto:${profile.email}`, icon: EnvelopeSimple, label: "Email" },
  { href: profile.github, icon: GithubLogo, label: "GitHub" },
  { href: profile.linkedin, icon: LinkedinLogo, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-edge flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={15} weight="light" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
