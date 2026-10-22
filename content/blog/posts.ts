/**
 * Blog post metadata. Body copy lives in content/blog/<slug>.mdx.
 * Newest first.
 */
export type Post = {
  slug: string;
  title: string;
  /** Under 50 characters; the layout appends " · Deventhous" */
  seoTitle: string;
  description: string;
  date: string; // YYYY-MM-DD
  readingTime: string;
  related: { href: string; label: string }[];
};

export const posts: Post[] = [
  {
    slug: "whatsapp-automation-for-business",
    title: "WhatsApp automation for small businesses: what it can do for you",
    seoTitle: "WhatsApp Automation for Small Businesses",
    description:
      "How Nigerian businesses use WhatsApp automation to reply instantly, follow up on leads, book appointments, and cut no-shows, and where to start.",
    date: "2026-10-14",
    readingTime: "6 min read",
    related: [
      { href: "/packages/intelligent-business", label: "Intelligent Business package" },
      { href: "/services#automation", label: "AI automation services" },
    ],
  },
  {
    slug: "website-cost-in-nigeria",
    title: "How much does a website cost in Nigeria? What you're really paying for",
    seoTitle: "How Much Does a Website Cost in Nigeria?",
    description:
      "What drives the cost of a business website in Nigeria: pages, payments, SEO, hosting, and support. A plain guide before you get quotes.",
    date: "2026-10-07",
    readingTime: "7 min read",
    related: [
      { href: "/packages", label: "Compare all six packages and prices" },
      { href: "/packages/growth-site", label: "Growth Site package" },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
