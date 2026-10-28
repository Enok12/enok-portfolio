import { BlurImage } from "./blur-image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowSquareOut,
  Briefcase,
  ChartLineUp,
  ChatCircleDots,
  CheckCircle,
  CircleNotch,
  CloudArrowUp,
  DeviceMobile,
  Diamond,
  EnvelopeSimple,
  Factory,
  GithubLogo,
  ImageSquare,
  LinkSimple,
  LockKey,
  MagnifyingGlass,
  Monitor,
  Package,
  PaperPlaneTilt,
  Receipt,
  RocketLaunch,
  ShieldCheck,
  ShoppingCart,
  SquaresFour,
  Star,
  User,
  UsersThree,
  Warning,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import { CaseStudyGallery } from "./case-study-gallery";
import { techLogos } from "@/lib/data";

// Names usable as `icon` in project features and results
const ICONS = {
  cart: ShoppingCart,
  mobile: DeviceMobile,
  dashboard: SquaresFour,
  shield: ShieldCheck,
  cloud: CloudArrowUp,
  search: MagnifyingGlass,
  image: ImageSquare,
  mail: EnvelopeSimple,
  lock: LockKey,
  gem: Diamond,
  star: Star,
  chat: ChatCircleDots,
  factory: Factory,
  package: Package,
  receipt: Receipt,
  users: UsersThree,
  rocket: RocketLaunch,
  chart: ChartLineUp,
};

// Highlights [placeholder] copy so it's easy to spot and replace
function Copy({ children, className = "" }) {
  const isPlaceholder = typeof children === "string" && children.includes("[");
  return (
    <span
      className={`${className} ${
        isPlaceholder ? "rounded bg-amber-400/10 px-1 text-amber-300/90" : ""
      }`}
    >
      {children}
    </span>
  );
}

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
      <span className="h-px w-6 bg-accent" />
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <Reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold tracking-tight">
        {title}
      </h2>
    </Reveal>
  );
}

function IconTile({ icon: Icon, size = 22 }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-accent/10 text-accent">
      <Icon size={size} weight="light" />
    </span>
  );
}

function TechChip({ name }) {
  const logo = techLogos[name];
  return (
    <li className="glass-panel flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm">
      {logo && (
        <BlurImage
          src={logo}
          alt=""
          // Declared at 40px (the files are 128px) and shrunk by CSS:
          // next/image warns about placeholders on anything under 40x40
          width={40}
          height={40}
          unoptimized
          className="h-5 w-5 object-contain"
        />
      )}
      {name}
    </li>
  );
}

function DeviceMockup({ devices, title }) {
  return (
    <div className="relative mx-auto w-full max-w-xl pb-6 pl-10 sm:pl-16">
      <div
        aria-hidden
        className="absolute inset-x-[10%] top-[10%] bottom-0 -z-10 rounded-full bg-accent/25 blur-[90px]"
      />
      {/* Laptop */}
      <div className="rounded-t-xl border border-line bg-surface p-2 shadow-2xl shadow-black/40">
        <div className="relative aspect-16/10 overflow-hidden rounded-md bg-surface-muted">
          {devices.desktop ? (
            <BlurImage
              src={devices.desktop}
              alt={`${title} on desktop`}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <span className="font-display text-6xl font-semibold text-accent/30">
                {title.charAt(0)}
              </span>
              <Copy className="text-xs">[Add a desktop screenshot]</Copy>
            </div>
          )}
        </div>
      </div>
      <div className="mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-xl border border-t-0 border-line bg-surface-muted" />

      {/* Phone */}
      {devices.mobile && (
        <div className="absolute bottom-0 left-0 w-[28%] min-w-24 rounded-[1.4rem] border border-line bg-surface p-1.5 shadow-2xl shadow-black/50">
          <div className="relative aspect-9/19 overflow-hidden rounded-[1.1rem]">
            <BlurImage
              src={devices.mobile}
              alt={`${title} on mobile`}
              fill
              sizes="160px"
              className="object-cover object-top"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export function CaseStudy({ project }) {
  const d = project.detail;
  const words = project.title.split(" ");
  const titleHead = words.length > 1 ? words.slice(0, -1).join(" ") + " " : "";
  const titleTail = words.at(-1);

  const meta = [
    { icon: Briefcase, label: "Project Type", value: d.meta.type },
    { icon: CircleNotch, label: "Status", value: project.status },
    { icon: User, label: "Role", value: d.meta.role },
    { icon: Monitor, label: "Platform", value: d.meta.platform },
  ];

  return (
    <article className="pb-28">
      {/* Hero */}
      <header className="radial-glow-bg relative overflow-hidden border-b border-line pt-32 pb-16 md:pt-36">
        <div className="container-edge grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                <ArrowLeft size={15} />
                Back to Projects
              </Link>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-8">
                <Eyebrow>{d.label}</Eyebrow>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-4 font-display text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight">
                {titleHead}
                <span className="text-accent">{titleTail}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                {d.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-4">
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                  >
                    <ArrowSquareOut size={16} />
                    Live Preview
                  </a>
                )}
                {d.github && (
                  <a
                    href={d.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    <GithubLogo size={16} />
                    View on GitHub
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <DeviceMockup devices={d.devices} title={project.title} />
          </Reveal>
        </div>
      </header>

      <div className="container-edge">
        {/* Overview */}
        <section className="grid grid-cols-1 gap-12 border-b border-line py-20 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Overview" title="About the Project" />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                {d.overview.map((para) => (
                  <p key={para}>
                    <Copy>{para}</Copy>
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="glass-panel grid grid-cols-1 gap-3 rounded-2xl p-3 sm:grid-cols-2">
              {meta.map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 rounded-xl border border-line p-4">
                  <IconTile icon={icon} size={20} />
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="mt-0.5 text-sm text-muted">
                      <Copy>{value}</Copy>
                    </p>
                  </div>
                </div>
              ))}
              {project.href && (
                <div className="flex items-center gap-4 rounded-xl border border-line p-4 sm:col-span-2">
                  <IconTile icon={LinkSimple} size={20} />
                  <div className="min-w-0">
                    <p className="text-sm font-medium">Live URL</p>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block truncate text-sm text-accent hover:underline"
                    >
                      {project.href.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </section>

        {/* Features */}
        <section className="border-b border-line py-20">
          <SectionTitle eyebrow="Key Features" title="What It Does" />
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {d.features.map((feature, i) => (
              <Reveal key={feature.title + i} delay={0.04 * i}>
                <div className="flex gap-4">
                  <IconTile icon={ICONS[feature.icon] ?? Star} />
                  <div>
                    <h3 className="font-medium">
                      <Copy>{feature.title}</Copy>
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <Copy>{feature.text}</Copy>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="border-b border-line py-20">
          <SectionTitle eyebrow="Tech Stack" title="Technologies Used" />
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr]">
            <Reveal delay={0.1}>
              <ul className="flex flex-wrap gap-3">
                {d.techStack.map((name) => (
                  <TechChip key={name} name={name} />
                ))}
              </ul>
            </Reveal>
            {d.tools.length > 0 && (
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-line p-4">
                  <p className="text-sm text-muted">Additional Tools</p>
                  <ul className="mt-3 flex flex-wrap gap-3">
                    {d.tools.map((name) => (
                      <TechChip key={name} name={name} />
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* Screenshots */}
        <section className="border-b border-line py-20">
          <SectionTitle eyebrow="Screenshots" title="Project Preview" />
          <Reveal delay={0.1} className="mt-10">
            {d.gallery.length > 0 ? (
              <CaseStudyGallery images={d.gallery} />
            ) : (
              <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-line text-sm">
                <Copy>[Add screenshots to public/projects/{project.slug}/ and list them in the gallery]</Copy>
              </div>
            )}
          </Reveal>
        </section>

        {/* Challenges & results */}
        <section className="grid grid-cols-1 gap-14 py-20 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Process" title="Challenges & Solutions" />
            <Reveal delay={0.1}>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {[
                  { icon: Warning, heading: "Key Challenges", items: d.challenges },
                  { icon: CheckCircle, heading: "How I Solved It", items: d.solutions },
                ].map(({ icon: Icon, heading, items }) => (
                  <div key={heading}>
                    <p className="flex items-center gap-2.5 font-medium">
                      <Icon size={22} weight="light" className="text-accent" />
                      {heading}
                    </p>
                    <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                      {items.map((item, i) => (
                        <li key={item + i} className="flex gap-2.5">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <Copy>{item}</Copy>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <SectionTitle eyebrow="Outcome" title="Results & Impact" />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {d.results.map((result, i) => {
                const Icon = ICONS[result.icon] ?? Star;
                return (
                  <Reveal key={result.title + i} delay={0.05 * i}>
                    <div className="glass-panel h-full rounded-2xl p-5">
                      <Icon size={28} weight="light" className="text-accent" />
                      <p className="mt-4 font-medium leading-snug">
                        <Copy>{result.title}</Copy>
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        <Copy>{result.text}</Copy>
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="glass-panel glow-accent flex flex-col items-start justify-between gap-6 rounded-2xl p-6 sm:flex-row sm:items-center md:p-8">
            <div className="flex items-center gap-5">
              <PaperPlaneTilt size={36} weight="light" className="shrink-0 text-accent" />
              <div>
                <p className="font-display text-lg font-semibold">Interested in this project?</p>
                <p className="mt-1 text-sm text-muted">
                  Feel free to reach out if you&apos;d like to know more or discuss a similar project.
                </p>
              </div>
            </div>
            <Link
              href="/#contact"
              className="btn-gradient inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              Contact Me
              <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
