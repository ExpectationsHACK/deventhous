/**
 * Single source of truth for all six packages, from the Deventhous agency
 * planning document (21 October 2026). The home teaser, /packages, the
 * comparison table and every /packages/[slug] page render from this file.
 *
 * Prices are ranges in naira with dollar equivalents (roughly ₦1,500 to $1).
 * The final figure within a range is set by the written quote after a brief.
 */

export type Range = readonly [number, number];

export type PackageSlug =
  | "launchpad"
  | "business-store"
  | "pro-site"
  | "growth-site"
  | "academy"
  | "intelligent-business";

export const featureGroups = [
  { key: "design", label: "Design" },
  { key: "development", label: "Development" },
  { key: "admin", label: "Admin and backend" },
  { key: "payments", label: "Payments" },
  { key: "seo", label: "SEO" },
  { key: "ai", label: "AI and automation" },
  { key: "support", label: "Support" },
] as const;

export type FeatureGroupKey = (typeof featureGroups)[number]["key"];

export const compareRows = [
  { key: "responsive", label: "Responsive design" },
  { key: "admin", label: "Admin dashboard" },
  { key: "catalogue", label: "Product catalogue" },
  { key: "payments", label: "Payment system" },
  { key: "blog", label: "Blog and CMS" },
  { key: "lms", label: "LMS" },
  { key: "seo", label: "SEO" },
  { key: "ai", label: "AI automation and agent" },
  { key: "support", label: "Post-launch support" },
] as const;

export type CompareKey = (typeof compareRows)[number]["key"];
export type CompareValue = boolean | string;

export type Package = {
  slug: PackageSlug;
  number: string;
  name: string;
  /** What the package is, in plain words */
  kind: string;
  positioning: string;
  price: { ngn: Range; usd: Range };
  priceNote?: string;
  timeline: string;
  timelineNote?: string;
  bestFor: string;
  notFor: string;
  /** Short line for cards: which package this one builds on */
  buildsOn?: string;
  features: Record<FeatureGroupKey, string[]>;
  deliverables: string[];
  addOns: string[];
  maintenance: { label: string; ngn: Range };
  recommended?: boolean;
  highlights: string[];
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string };
  compare: Record<CompareKey, CompareValue>;
};

/** Excluded from every package and paid by the client directly. Written to read inside a sentence. */
export const excludedFromAll = [
  "domain name and hosting",
  "paid plugins and third-party licences",
  "payment provider fees (Paystack, Flutterwave)",
  "AI API usage",
  "content you supply (text, images, and product data)",
];

export const packages: Package[] = [
  {
    slug: "launchpad",
    number: "01",
    name: "Launchpad",
    kind: "Landing page",
    positioning: "A fast, professional, conversion-focused page to get a business or campaign online this week.",
    price: { ngn: [150_000, 350_000], usd: [100, 235] },
    timeline: "3 to 7 days",
    bestFor: "New businesses, freelancers, event or product launches, ad campaigns, and service providers who only need to capture leads.",
    notFor: "Anyone selling many products, needing a dashboard, or planning to publish content regularly.",
    features: {
      design: ["Custom single-page layout", "Mobile-first and responsive", "Your brand colors and fonts", "Up to 6 sections"],
      development: ["Lead and contact form", "WhatsApp click-to-chat", "Fast loading", "SSL security"],
      admin: ["None. Content changes are handled by Deventhous."],
      payments: ["Payment link or button (Paystack or Flutterwave)"],
      seo: ["Basic on-page SEO: titles, meta, image optimization", "Google Analytics", "Google Search Console"],
      ai: ["None"],
      support: ["14 days of post-launch fixes"],
    },
    deliverables: ["Live site", "Source files", "Hosting and domain logins", "One-page handover guide"],
    addOns: ["Extra sections", "Copywriting", "Logo touch-up", "Google Business Profile setup", "Email capture with an automated welcome email"],
    maintenance: { label: "Monthly maintenance", ngn: [25_000, 40_000] },
    highlights: ["Single page, up to 6 sections", "Lead form and WhatsApp chat", "Basic SEO and analytics"],
    faqs: [
      { q: "Can I really launch in a week?", a: "Yes, if your text and images are ready. Most Launchpad pages go live in 3 to 7 days. The timeline pauses while we wait for content or feedback." },
      { q: "Can I take payments on a landing page?", a: "Yes. We add a Paystack or Flutterwave payment link or button. For a full cart and checkout, Business Store is the better fit." },
      { q: "Can it grow into a bigger site later?", a: "Yes. Launchpad is the first step on the ladder. When it starts bringing in leads, you can move up to Business Store or Pro Site without starting over." },
    ],
    seo: {
      title: "Launchpad: Landing Page Design in Nigeria",
      description: "A conversion-focused landing page live in 3 to 7 days, with WhatsApp chat, lead form, and basic SEO. From ₦150,000 ($100).",
    },
    compare: { responsive: true, admin: false, catalogue: false, payments: "Link only", blog: false, lms: false, seo: "Basic", ai: false, support: "14 days" },
  },
  {
    slug: "business-store",
    number: "02",
    name: "Business Store",
    kind: "Online store with admin, catalogue, and payments",
    positioning: "A complete online shop the owner can manage without calling a developer.",
    price: { ngn: [600_000, 1_400_000], usd: [400, 935] },
    timeline: "3 to 5 weeks",
    timelineNote: "Price depends on product volume and delivery logic, such as multi-city shipping rates.",
    bestFor: "Retailers, wholesalers, fashion brands, food vendors, and any business selling physical or digital products.",
    notFor: "Businesses that need a blog-driven content strategy or a course platform.",
    buildsOn: "Launchpad",
    features: {
      design: ["Multi-page custom design: home, catalogue, product, cart, checkout, about, contact", "Mobile-first"],
      development: ["Product catalogue with categories and search", "Cart and checkout", "Order management", "WhatsApp order option"],
      admin: ["Dashboard to add and edit products", "Manage orders, inventory, and customers", "Discount codes"],
      payments: ["Paystack or Flutterwave integration", "Bank transfer option", "Order confirmation emails"],
      seo: ["On-page SEO for all pages", "Product schema markup", "Sitemap", "Analytics"],
      ai: ["None (available as an add-on)"],
      support: ["30 days post-launch", "1-hour admin training session"],
    },
    deliverables: ["Live store", "Admin credentials", "Source code", "Training recording", "Handover guide"],
    addOns: ["Delivery and logistics integration", "Multi-vendor support", "WhatsApp order notifications", "Product data entry (per 50 products)", "Multi-currency"],
    maintenance: { label: "Monthly maintenance", ngn: [50_000, 100_000] },
    recommended: true,
    highlights: ["Catalogue, cart, and checkout", "Admin for products and orders", "Paystack, Flutterwave, and WhatsApp orders"],
    faqs: [
      { q: "Can customers order on WhatsApp instead of paying online?", a: "Yes. Every store includes a WhatsApp order option alongside card and bank transfer checkout, so you can close sales in chat." },
      { q: "Can I manage products myself?", a: "Yes. The admin dashboard lets you add and edit products, manage orders, inventory, and customers, and create discount codes. You also get a 1-hour training session and a recording." },
      { q: "Do you upload my products?", a: "You supply product data by default. If you'd rather we do it, product data entry is available as an add-on, priced per 50 products." },
    ],
    seo: {
      title: "Business Store: Online Store Design in Nigeria",
      description: "An online store with catalogue, cart, admin dashboard, Paystack or Flutterwave payments, and WhatsApp orders. 3 to 5 weeks.",
    },
    compare: { responsive: true, admin: true, catalogue: true, payments: true, blog: false, lms: false, seo: "On-page", ai: "Add-on", support: "30 days" },
  },
  {
    slug: "pro-site",
    number: "03",
    name: "Pro Site",
    kind: "Full business website with admin and blog",
    positioning: "A full-featured website that sells, publishes, and grows with the business.",
    price: { ngn: [900_000, 2_000_000], usd: [600, 1_335] },
    timeline: "4 to 6 weeks",
    bestFor: "Established SMEs, clinics, schools, consultants, real estate firms, NGOs, and brands that need content marketing alongside their core offering.",
    notFor: "A simple one-page presence (choose Launchpad) or a pure course business (choose Academy).",
    buildsOn: "Business Store",
    features: {
      design: ["Custom multi-page design system", "Reusable components", "Up to 10 page templates"],
      development: ["Everything in Business Store, or service pages and bookings if you don't sell products", "Blog with categories", "Author profiles", "Newsletter signup"],
      admin: ["Page and post management", "Role-based users (admin, editor)", "Media library", "Form submissions inbox"],
      payments: ["Included where relevant: products, bookings, or donations"],
      seo: ["On-page SEO", "Blog SEO structure", "Schema and sitemap", "Speed optimization"],
      ai: ["Optional AI blog-draft assistant for the admin"],
      support: ["45 days post-launch", "2 training sessions"],
    },
    deliverables: ["Live site", "Admin access", "Source code", "Content guide", "Brand style sheet"],
    addOns: ["Booking or appointment system", "Multilingual support", "Member area", "Email marketing integration", "Custom reports"],
    maintenance: { label: "Monthly maintenance", ngn: [75_000, 150_000] },
    highlights: ["Up to 10 page templates", "Blog, CMS, and editor roles", "Bookings, products, or donations"],
    faqs: [
      { q: "I don't sell products. Is Pro Site still right for me?", a: "Yes. For service businesses we swap the store for service pages and bookings. Clinics, consultants, schools, and NGOs are a common fit." },
      { q: "Can my team publish posts?", a: "Yes. You get role-based users, so admins and editors can manage pages and posts, with a media library and a form submissions inbox." },
      { q: "What's the AI blog-draft assistant?", a: "An optional tool inside your admin that drafts blog posts from a topic or outline, which your team then edits and publishes." },
    ],
    seo: {
      title: "Pro Site: Business Website with Blog and CMS",
      description: "A full business website with admin, blog, editor roles, and bookings or payments, built to sell and publish. 4 to 6 weeks.",
    },
    compare: { responsive: true, admin: true, catalogue: true, payments: true, blog: true, lms: false, seo: "On-page + blog", ai: "Add-on", support: "45 days" },
  },
  {
    slug: "growth-site",
    number: "04",
    name: "Growth Site",
    kind: "Fully SEO-optimized website",
    positioning: "Pro Site plus a serious, measurable search strategy, so the site brings in customers, not just visitors.",
    price: { ngn: [1_500_000, 3_000_000], usd: [1_000, 2_000] },
    timeline: "5 to 8 weeks",
    bestFor: "Businesses in competitive local or niche markets: real estate, healthcare, legal, logistics, B2B services, and e-commerce brands wanting organic traffic.",
    notFor: "Clients who won't commit to ongoing content, or who need results in days. SEO takes 3 to 6 months.",
    buildsOn: "Pro Site",
    features: {
      design: ["Same as Pro Site, with SEO-led page structure", "Conversion-focused layouts"],
      development: ["Pro Site build with Core Web Vitals optimization", "Clean URL architecture", "Internal linking plan"],
      admin: ["Same as Pro Site, with SEO fields on every page and post"],
      payments: ["As needed"],
      seo: [
        "Keyword research and mapping",
        "Technical audit and fixes",
        "Schema markup",
        "Google Business Profile optimization and local SEO",
        "6 optimized cornerstone pages or posts",
        "Rank tracking setup",
        "Search Console and Analytics reporting",
      ],
      ai: ["Optional AI-assisted content briefs"],
      support: ["60 days post-launch", "Monthly performance report for the first 3 months"],
    },
    deliverables: ["Live site", "SEO strategy document", "Keyword map", "3-month content calendar", "Tracking dashboard"],
    addOns: ["Monthly content writing", "Backlink outreach", "Competitor tracking", "Extra location pages"],
    maintenance: { label: "SEO retainer", ngn: [150_000, 400_000] },
    highlights: ["Keyword research and technical SEO", "Local SEO and Google Business Profile", "Monthly reports for 3 months"],
    faqs: [
      { q: "How long until I rank on Google?", a: "SEO takes 3 to 6 months to show real results. Technical fixes help quickly, but rankings for competitive terms build with consistent content. That's why this package includes a 3-month content calendar." },
      { q: "Do you guarantee first-page rankings?", a: "No one can honestly guarantee rankings. We guarantee the work: keyword research, a technically sound site, local SEO, and monthly reporting so you can see progress." },
      { q: "What happens after the first 3 months?", a: "You can keep the momentum with an SEO retainer (₦150,000 to ₦400,000 per month), which can include content writing, backlink outreach, and competitor tracking." },
    ],
    seo: {
      title: "Growth Site: SEO Website Design in Lagos",
      description: "A fully SEO-optimized website: keyword research, technical SEO, local SEO, cornerstone content, and monthly reporting. 5 to 8 weeks.",
    },
    compare: { responsive: true, admin: true, catalogue: true, payments: true, blog: true, lms: false, seo: "Full strategy", ai: "Add-on", support: "60 days" },
  },
  {
    slug: "academy",
    number: "05",
    name: "Academy",
    kind: "Learning management system (LMS)",
    positioning: "A branded online learning platform where you sell courses, cohorts, or training.",
    price: { ngn: [2_500_000, 5_000_000], usd: [1_670, 3_335] },
    timeline: "8 to 12 weeks",
    timelineNote: "Video hosting and bandwidth are paid by the client.",
    bestFor: "Coaches, schools, training institutes, course creators, and corporate training teams.",
    notFor: "Anyone who only needs to sell a few PDFs or a single video. Cheaper tools or Business Store are enough.",
    buildsOn: "Pro Site",
    features: {
      design: ["Branded student portal", "Course catalogue", "Lesson player layout", "Instructor and student dashboards"],
      development: ["Course, module, and lesson structure", "Video and file lessons", "Progress tracking", "Quizzes and certificates", "Student accounts", "Drip content"],
      admin: ["Course builder", "Student management and enrollments", "Instructor roles", "Analytics"],
      payments: ["Paystack or Flutterwave", "One-time and installment payments", "Coupons", "Access control by payment"],
      seo: ["Optimized public course pages", "Sitemap", "Schema", "Analytics"],
      ai: ["Optional automated reminders and onboarding emails"],
      support: ["60 days post-launch", "Instructor training"],
    },
    deliverables: ["Live LMS", "Admin and instructor access", "Source code", "Instructor guide", "Student onboarding flow"],
    addOns: ["Live-class integration", "Community forum", "WhatsApp cohort notifications", "Mobile app wrapper", "Affiliate system", "AI tutor"],
    maintenance: { label: "Monthly maintenance", ngn: [100_000, 250_000] },
    highlights: ["Courses, quizzes, and certificates", "Student accounts and progress", "Installments and coupons"],
    faqs: [
      { q: "Where are course videos hosted?", a: "On a dedicated video host, so lessons play smoothly. Video hosting and bandwidth are paid by you directly; we help you choose and set it up." },
      { q: "Can students pay in installments?", a: "Yes. Academy supports one-time and installment payments through Paystack or Flutterwave, plus coupons, with course access controlled by payment." },
      { q: "Can I run live classes too?", a: "Live-class integration is available as an add-on, alongside a community forum and WhatsApp cohort notifications." },
    ],
    seo: {
      title: "Academy: LMS and Course Platform Development",
      description: "A branded learning platform with courses, quizzes, certificates, student accounts, and installment payments. 8 to 12 weeks.",
    },
    compare: { responsive: true, admin: true, catalogue: "Optional", payments: true, blog: "Optional", lms: true, seo: "On-page", ai: "Add-on", support: "60 days" },
  },
  {
    slug: "intelligent-business",
    number: "06",
    name: "Intelligent Business",
    kind: "Website with AI automation and a business AI agent",
    positioning: "A website that works as a 24/7 sales and operations team, handling inquiries, follow-ups, and bookings automatically.",
    price: { ngn: [3_000_000, 7_000_000], usd: [2_000, 4_670] },
    priceNote: "Plus monthly AI usage costs, paid by the client.",
    timeline: "8 to 12 weeks",
    bestFor: "Service businesses drowning in WhatsApp messages, e-commerce brands, clinics, agencies, and any business with repetitive customer questions and manual follow-up.",
    notFor: "Businesses without a clear process to automate. AI amplifies a working process; it doesn't replace one.",
    buildsOn: "Pro Site",
    features: {
      design: ["Pro Site or Growth Site design", "Chat interface design"],
      development: ["Full website", "Custom AI agent trained on your FAQs, products, and policies", "Agent embedded on your site and connected to WhatsApp"],
      admin: ["Conversation logs", "Lead capture", "Knowledge-base editing", "Handover-to-human controls"],
      payments: ["As needed"],
      seo: ["Pro Site level, upgradeable to Growth Site"],
      ai: ["Lead qualification and follow-up sequences", "Appointment booking", "Order status replies", "CRM sync", "Daily or weekly summary reports", "Escalation rules"],
      support: ["90 days of post-launch agent tuning with real conversations", "Admin training"],
    },
    deliverables: ["Live site", "Trained AI agent", "Documented automation workflows", "Admin training", "Performance baseline"],
    addOns: ["Voice agent", "Internal staff assistant", "Extra channels (Instagram, email)", "Custom integrations", "Analytics dashboards"],
    maintenance: { label: "Monthly maintenance", ngn: [100_000, 300_000] },
    highlights: ["AI agent on your site and WhatsApp", "Lead follow-up and bookings", "90 days of agent tuning"],
    faqs: [
      { q: "What does the AI agent actually do?", a: "It answers customer questions from your FAQs, products, and policies, qualifies leads, books appointments, replies to order status questions, syncs with your CRM, and sends you summary reports. It hands over to a person based on escalation rules you set." },
      { q: "Why 90 days of tuning?", a: "AI gets better with real conversations. For the first 90 days we review how the agent performs, fix gaps in its knowledge, and adjust its rules." },
      { q: "What are the ongoing costs?", a: "Monthly maintenance (₦100,000 to ₦300,000) covers monitoring, tuning, and API cost management. AI usage is billed by the provider and paid by you, and WhatsApp Business messaging fees are set by Meta." },
    ],
    seo: {
      title: "Intelligent Business: Website with AI Agent",
      description: "A website with a business AI agent on your site and WhatsApp: lead follow-up, bookings, order replies, and reports. 8 to 12 weeks.",
    },
    compare: { responsive: true, admin: true, catalogue: "Optional", payments: true, blog: true, lms: "Optional", seo: "On-page", ai: true, support: "90 days" },
  },
];

export type StandaloneService = { name: string; description: string; ngn: Range; per?: "month" | "hour"; extra?: string };

export const standaloneServices: StandaloneService[] = [
  { name: "SEO audit", description: "A one-off technical and content review of your current site, with a prioritized fix list.", ngn: [80_000, 200_000] },
  { name: "SEO retainer", description: "Ongoing keyword work, content, technical fixes, and monthly reporting.", ngn: [150_000, 500_000], per: "month" },
  {
    name: "AI automation setup",
    description: "WhatsApp assistant, lead follow-ups, and booking automation for your existing site or business.",
    ngn: [300_000, 1_500_000],
    extra: "plus ₦50,000 to ₦200,000 per month for monitoring",
  },
  {
    name: "Tech support and management",
    description: "Hosting, backups, security, updates, priority fixes, and small changes. Tiered by response time and hours included.",
    ngn: [50_000, 300_000],
    per: "month",
  },
  { name: "Hourly and ad-hoc work", description: "Small changes, fixes, and one-off tasks outside a package or retainer.", ngn: [15_000, 40_000], per: "hour" },
];

/** Introductory offer, capped at the first 5 clients. Set `enabled: false` to hide it everywhere. */
export const entryOffer = {
  enabled: true,
  name: "Launch in 5 Days",
  description: "A Launchpad page, Google Business Profile setup, and a WhatsApp chat button, live in 5 days. Includes 3 months of maintenance at a discount.",
  ngn: [120_000, 200_000] as Range,
  cap: "For our first 5 clients only",
};

export const paymentTerms = {
  schedule: [
    { percent: "50%", when: "Deposit to start" },
    { percent: "30%", when: "On design approval" },
    { percent: "20%", when: "Before handover" },
  ],
  largeProjects: "Projects above ₦2,000,000 are split into 4 milestones.",
  revisions: "2 rounds of revisions per phase (design and development). Extra rounds are billed hourly.",
};

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}

/** Dollar equivalent at roughly ₦1,500 to $1, rounded to the nearest $5. */
export function toUsd(ngn: number) {
  return Math.round(ngn / 1500 / 5) * 5;
}

export function usdRange(r: Range): Range {
  return [toUsd(r[0]), toUsd(r[1])];
}
