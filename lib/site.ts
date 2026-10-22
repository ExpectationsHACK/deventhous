/**
 * Single place for company-wide facts.
 * Anything wrapped in [BRACKETS] is a placeholder that must be filled before launch.
 */
export const site = {
  name: "Deventhous",
  parent: "Stynark",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://deventhous.com", // [CONFIRM DOMAIN]
  tagline: "Websites that get found, get trusted, and get paid.",
  description:
    "Deventhous builds websites, online stores, course platforms, SEO, and AI automations for businesses in Lagos, Nigeria, and across Africa. Clear packages and prices.",
  blurb:
    "Deventhous builds websites that get found, get trusted, and get paid, for individuals, businesses, and organizations.",
  location: { city: "Lagos", country: "Nigeria", countryCode: "NG" },
  email: "steinarktechnologies@gmail.com",
  /** International format, digits only, e.g. 2348012345678 */
  whatsappNumber: "[NUMBER]",
  whatsappMessage:
    "Hi Deventhous, I'd like to talk about a website for my business.",
  /** How quickly we promise to reply */
  replyTime: "1 hour",
  socials: {
    x: "", // [X / TWITTER URL]
    linkedin: "", // [LINKEDIN URL]
    instagram: "", // [INSTAGRAM URL]
    github: "", // [GITHUB URL]
  },
  takingProjects: true,
} as const;

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const mainNav = [
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
] as const;
