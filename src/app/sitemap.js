export default function sitemap() {
  const siteUrl = "https://enokdilshan.dev";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
