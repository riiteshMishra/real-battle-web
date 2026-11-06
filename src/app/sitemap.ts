import type { MetadataRoute } from "next";

const siteUrl = "https://realbattle.in";

const routes = [
  "",
  "/tournaments",
  "/download",
  "/faq",
  "/about",
  "/contact-us",
  "/terms",
  "/privacy-policy",
  "/refund-policy",
  "/cookies",
  "/disclaimer",
  "/player-responsibilities",
  "/tournament-rules",
];

const priorities: Record<string, number> = {
  "": 1,
  "/tournaments": 0.9,
  "/download": 0.9,
  "/faq": 0.7,
  "/about": 0.6,
  "/contact-us": 0.6,
  "/terms": 0.3,
  "/privacy-policy": 0.3,
  "/refund-policy": 0.3,
  "/cookies": 0.2,
  "/disclaimer": 0.2,
  "/player-responsibilities": 0.3,
  "/tournament-rules": 0.4,
};

const sitemap = (): MetadataRoute.Sitemap =>
  routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-11-06T00:00:00.000Z"),
    changeFrequency: route === "" || route === "/tournaments" ? "daily" : "monthly",
    priority: priorities[route] ?? 0.5,
  }));

export default sitemap;
