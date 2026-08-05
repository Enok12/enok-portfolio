export default function robots() {
  const siteUrl = "https://enokdilshan.dev";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
