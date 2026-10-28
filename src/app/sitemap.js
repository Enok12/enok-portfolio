import { projects } from "@/lib/data";

export default function sitemap() {
  const siteUrl = "https://enokdilshan.dev";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects
      .filter((project) => project.detail)
      .map((project) => ({
        url: `${siteUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      })),
  ];
}
