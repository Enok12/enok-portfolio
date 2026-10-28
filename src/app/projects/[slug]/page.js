import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case-study";
import { projects } from "@/lib/data";

const caseStudies = projects.filter((project) => project.detail);

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} Case Study`,
    description: project.detail.tagline,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.detail.tagline,
      images: project.detail.devices.desktop
        ? [project.detail.devices.desktop]
        : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) notFound();

  return <CaseStudy project={project} />;
}
