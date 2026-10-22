/**
 * Case study metadata. Long-form body copy lives in content/work/<slug>.mdx.
 * Only add real results. Anything in [BRACKETS] must be replaced or removed.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  outcome: string;
  location: string;
  industry: string;
  year: string;
  tags: string[];
  stats: { label: string; value: string }[];
  url?: string;
  seo: { title: string; description: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "eastern-gravels",
    client: "Eastern Gravels",
    title: "A premium aggregate supplier, ordering on WhatsApp",
    summary:
      "A fast, search-ready site for a premium aggregate supply business in Lagos, with WhatsApp ordering and a section for Nigerians building from abroad.",
    outcome: "[RESULT METRIC]",
    location: "Lagos, Nigeria",
    industry: "Construction materials",
    year: "[YEAR]",
    tags: ["Next.js", "Supabase", "SEO", "WhatsApp ordering"],
    stats: [
      { label: "[METRIC LABEL]", value: "[METRIC]" },
      { label: "[METRIC LABEL]", value: "[METRIC]" },
      { label: "[METRIC LABEL]", value: "[METRIC]" },
    ],
    url: "", // [LIVE SITE URL]
    seo: {
      title: "Eastern Gravels Case Study",
      description:
        "How Deventhous built a fast, SEO-ready website with WhatsApp ordering and a diaspora section for a premium aggregate supplier in Lagos.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

/**
 * Client online stores shown in Work. Each has an illustrated, animated
 * thumbnail and a one-page preview at /work/<slug> (components/demo/clients).
 * The previews are illustrations of the design; products and prices are examples.
 */
export type ClientSite = {
  slug: string;
  client: string;
  domain: string;
  category: string;
  summary: string;
  tags: string[];
  seo: { title: string; description: string };
};

export const clientSites: ClientSite[] = [
  {
    slug: "jdhub",
    client: "JD Hub",
    domain: "jdhub.com",
    category: "Gadget online store",
    summary: "An online gadget store for phones, laptops, audio, and accessories, with flash sales, a fast cart, and WhatsApp ordering.",
    tags: ["E-commerce", "Payments", "WhatsApp ordering"],
    seo: {
      title: "JD Hub: Gadget Online Store Preview",
      description: "A preview of the JD Hub online gadget store designed by Deventhous: phones, laptops, audio, flash sales, and WhatsApp ordering.",
    },
  },
  {
    slug: "dmlprints",
    client: "DML Prints",
    domain: "dmlprints.com",
    category: "Clothing, gifts, and accessories printing store",
    summary: "A custom printing store where customers upload a design, preview it on T-shirts, mugs, tote bags, caps, and gift boxes, then order.",
    tags: ["E-commerce", "Design upload", "Bulk orders"],
    seo: {
      title: "DML Prints: Custom Printing Store Preview",
      description: "A preview of the DML Prints online store designed by Deventhous: custom printed clothing, gifts, and accessories with design upload.",
    },
  },
  {
    slug: "namorxcouture",
    client: "Namorx Couture",
    domain: "namorxcouture.com",
    category: "Fashion clothing brand store",
    summary: "An editorial online store for a fashion clothing brand: new arrivals, collections, and a smooth add-to-bag experience.",
    tags: ["E-commerce", "Fashion", "Brand design"],
    seo: {
      title: "Namorx Couture: Fashion Store Preview",
      description: "A preview of the Namorx Couture online store designed by Deventhous: an editorial fashion brand store with collections and new arrivals.",
    },
  },
];

export function getClientSite(slug: string) {
  return clientSites.find((c) => c.slug === slug);
}
