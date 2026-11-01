import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  name: "Real Battle — Competitive Free Fire Arena",
  short_name: "Real Battle",
  description:
    "Competitive Free Fire tournaments for Indian players: solo, squad and Clash Squad battles with verified results.",
  start_url: "/",
  display: "standalone",
  background_color: "#08080D",
  theme_color: "#8B5CF6",
  lang: "en-IN",
  icons: [
    {
      src: "/icons/icon-192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/icons/icon-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/icons/icon-maskable-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
});

export default manifest;
