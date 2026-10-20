export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Ordinary Tyrannosaurus Wiki",
  shortName: "Ordinary Tyrannosaurus",
  logoText: "O",
  tagline: "Dinosaur Story Guides, Characters & World Lore",
  description: "Explore Ordinary Tyrannosaurus with story guides, character details, world lore, and practical resources for every chapter.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ordinary-tyrannosaurus.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ordinary-tyrannosaurus.wiki").hostname.replace(/^www\./, "")}`,
  heroVideoId: "qTyCdijTvq0",
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
