import { profile } from "@/lib/data";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-edge flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <a
            href={`mailto:${profile.email}`}
            data-cursor-hover
            className="inline-flex items-center gap-1 text-muted transition-colors hover:text-ink"
          >
            Email <ArrowUpRight size={14} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-1 text-muted transition-colors hover:text-ink"
          >
            GitHub <ArrowUpRight size={14} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-1 text-muted transition-colors hover:text-ink"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
