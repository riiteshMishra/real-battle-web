import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      // GOOGLE IMAGE PROFILE
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },

      // CLOUDINARY
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },

      // DICEBEAR
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },

      // FIREBASE STORAGE
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  turbopack: {}, // DEFAULT BY NEXT
};

export default nextConfig;
