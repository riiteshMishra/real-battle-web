/**
 * Central place for every value that must be verified before launch.
 *
 * Nothing in this file should be invented. Values that are not yet confirmed
 * stay empty and the UI renders an honest "not available yet" state instead of
 * a dead link or a fake number.
 */

export const siteConfig = {
  name: "Real Battle",
  url: "https://realbattle.in",
  tagline: "India's competitive gaming arena",
  description:
    "Real Battle is a competitive Free Fire tournament platform for Indian players. Join solo, squad and Clash Squad battles, get room details in the app, and track verified results.",
  email: "realbattleofficial@gmail.com",
  supportHours: "Support replies are handled on business days.",

  download: {
    /**
     * Official, verified APK link. Set NEXT_PUBLIC_ANDROID_APK_URL once the
     * signed production build is available. Never point this at a mirror.
     */
    androidUrl: process.env.NEXT_PUBLIC_ANDROID_APK_URL ?? "",
    version: process.env.NEXT_PUBLIC_APP_VERSION ?? "",
    size: process.env.NEXT_PUBLIC_APK_SIZE ?? "",
    minAndroid: process.env.NEXT_PUBLIC_MIN_ANDROID ?? "",
    minAndroidLabel: "Android",
    updatedAt: process.env.NEXT_PUBLIC_APK_UPDATED_AT ?? "",
  },

  /**
   * Only verified channels belong here. Empty strings are hidden automatically.
   */
  social: {
    instagram: "",
    youtube: "",
    discord: "",
    telegram: "",
    whatsapp: "",
  },
} as const;

export const hasAndroidDownload = siteConfig.download.androidUrl.length > 0;

export const verifiedSocialLinks = Object.entries(siteConfig.social)
  .filter(([, url]) => url.length > 0)
  .map(([name, url]) => ({ name, url }));
