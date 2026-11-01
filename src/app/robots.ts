import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard"],
    },
  ],
  sitemap: "https://realbattle.in/sitemap.xml",
  host: "https://realbattle.in",
});

export default robots;
