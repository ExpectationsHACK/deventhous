import type { Metadata } from "next";
import { Bot, Boxes, Code2, GraduationCap, LifeBuoy, Search, ShoppingBag } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { StandaloneServices } from "@/components/sections/standalone";
import { PackageDemo } from "@/components/demo";
import {
  AutomationIllustration,
  CoursesIllustration,
  EcommerceIllustration,
  PaymentsIllustration,
  SeoIllustration,
  SupportIllustration,
} from "@/components/illustrations";
import { CheckList } from "@/components/ui/check-list";
import { CurrencyToggle } from "@/components/ui/currency-toggle";
import { LinkArrow } from "@/components/ui/link-arrow";
import { Price } from "@/components/ui/price";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/section-header";
import { JsonLd } from "@/components/ui/json-ld";
import { getPackage, standaloneServices, type Range } from "@/content/packages";
import { serviceLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Web Design, SEO and AI Automation Services",
  description:
    "Websites, online stores, e-commerce, SEO, AI agents, course platforms, and tech support for businesses in Lagos and across Nigeria. Prices from ₦15,000.",
  alternates: { canonical: "/services" },
};

const standalone = (name: string) => standaloneServices.find((s) => s.name === name)!;

type Service = {
  id: string;
  icon: typeof Code2;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  price: { label: string; ngn: Range; per?: "month" | "hour" };
  links: { href: string; label: string }[];
  visual: React.ReactNode;
};

const launchpad = getPackage("launchpad")!;
const store = getPackage("business-store")!;
const growth = getPackage("growth-site")!;
const academy = getPackage("academy")!;
const intelligent = getPackage("intelligent-business")!;

const services: Service[] = [
  {
    id: "web",
    icon: Code2,
    eyebrow: "Web",
    title: "Web design and development",
    description:
      "From a single landing page to a full business website with a blog. Custom, mobile-first designs that load fast, look professional, and turn visitors into enquiries.",
    points: [
      "Custom design in your brand colors and fonts",
      "Mobile-first and responsive on every screen",
      "Lead forms and WhatsApp click-to-chat",
      "Admin, blog, and editor roles on larger sites",
      "SSL security, analytics, and Search Console",
    ],
    price: { label: "Websites from", ngn: launchpad.price.ngn },
    links: [
      { href: "/packages/launchpad", label: "Launchpad: landing page in 3 to 7 days" },
      { href: "/packages/pro-site", label: "Pro Site: full website with admin and blog" },
    ],
    visual: <PackageDemo slug="pro-site" />,
  },
  {
    id: "stores",
    icon: ShoppingBag,
    eyebrow: "Online stores",
    title: "Online stores and payments",
    description:
      "A shop customers can buy from in a few taps, with the payment options Nigerian customers actually use, and confirmation the moment they pay.",
    points: [
      "Product catalogue with categories and search",
      "Fast cart and checkout, built for mobile",
      "Paystack or Flutterwave: card, bank transfer, and USSD",
      "WhatsApp order option on every product",
      "Receipts and order confirmations by email and WhatsApp",
    ],
    price: { label: "Business Store", ngn: store.price.ngn },
    links: [{ href: "/packages/business-store", label: "See the Business Store package" }],
    visual: <PaymentsIllustration />,
  },
  {
    id: "ecommerce",
    icon: Boxes,
    eyebrow: "E-commerce",
    title: "E-commerce",
    description:
      "Selling online is more than a checkout. We set up the back office too: orders, stock, delivery, and customer updates, so you can run the store from one dashboard.",
    points: [
      "Order management from new to delivered",
      "Inventory tracking with low-stock alerts",
      "Delivery and logistics integration across cities",
      "Automatic WhatsApp and email updates to customers",
      "Discount codes, multi-currency, and multi-vendor options",
    ],
    price: { label: "Business Store", ngn: store.price.ngn },
    links: [{ href: "/packages/business-store", label: "See the Business Store package" }],
    visual: <EcommerceIllustration />,
  },
  {
    id: "seo",
    icon: Search,
    eyebrow: "SEO",
    title: "Search engine optimization",
    description:
      "Basic SEO comes with every package. When you need search to bring in customers, we add keyword research, technical fixes, local SEO, and monthly reporting. Expect results in 3 to 6 months.",
    points: [
      "Keyword research and mapping",
      "Technical audit and fixes",
      "Schema markup and sitemaps",
      "Google Business Profile optimization and local SEO",
      "Rank tracking, Search Console, and Analytics reporting",
    ],
    price: { label: "SEO audit", ngn: standalone("SEO audit").ngn },
    links: [
      { href: "/packages/growth-site", label: `Growth Site: ${growth.kind.toLowerCase()}` },
      { href: "#standalone", label: "SEO audit and retainer prices" },
    ],
    visual: <SeoIllustration />,
  },
  {
    id: "automation",
    icon: Bot,
    eyebrow: "AI automation",
    title: "AI automation and business agents",
    description:
      "A custom AI agent trained on your FAQs, products, and policies, on your website and WhatsApp. It answers, qualifies, books, and follows up, and hands over to you by your rules. AI amplifies a working process; it doesn't replace one.",
    points: [
      "Lead qualification and follow-up sequences",
      "Appointment booking and order status replies",
      "CRM sync and daily or weekly summary reports",
      "Conversation logs and handover-to-human controls",
      "90 days of tuning with real conversations",
    ],
    price: { label: "Automation setup", ngn: standalone("AI automation setup").ngn },
    links: [
      { href: "/packages/intelligent-business", label: `Intelligent Business: ${intelligent.kind.toLowerCase()}` },
      { href: "#standalone", label: "Automation for your existing site" },
    ],
    visual: <AutomationIllustration />,
  },
  {
    id: "courses",
    icon: GraduationCap,
    eyebrow: "Course platforms",
    title: "Course platforms (LMS)",
    description:
      "A branded learning platform where you sell courses, cohorts, or training, with everything students need to learn and everything you need to manage them.",
    points: [
      "Courses, modules, video and file lessons",
      "Quizzes, certificates, and drip content",
      "Student accounts and progress tracking",
      "One-time and installment payments, coupons",
      "Instructor roles, enrollments, and analytics",
    ],
    price: { label: "Academy", ngn: academy.price.ngn },
    links: [{ href: "/packages/academy", label: "See the Academy package" }],
    visual: <CoursesIllustration />,
  },
  {
    id: "support",
    icon: LifeBuoy,
    eyebrow: "Support",
    title: "Tech support and management",
    description:
      "After launch, your site needs care. We handle hosting, backups, security, updates, priority fixes, and small changes, tiered by response time and hours included.",
    points: [
      "Hosting and domain management",
      "Daily backups and uptime monitoring",
      "Security and dependency updates",
      "Priority fixes and small changes",
      "Hourly work for anything outside your plan",
    ],
    price: { label: "Support retainer", ngn: standalone("Tech support and management").ngn, per: "month" },
    links: [{ href: "#standalone", label: "Support and hourly prices" }],
    visual: <SupportIllustration />,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        eyebrow="Services"
        title="Everything your business needs online."
        description="Web design and development, online stores, e-commerce, SEO, AI automation, course platforms, and tech support, for individuals, businesses, and organizations."
      >
        <ul className="mt-8 flex flex-wrap gap-2">
          {services.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-flex rounded-full border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                {s.eyebrow}
              </a>
            </li>
          ))}
        </ul>
        <CurrencyToggle className="mt-6" />
      </PageHero>

      {services.map((s, i) => (
        <Section key={s.id} id={s.id} className="scroll-mt-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div data-reveal className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <div className="flex items-center gap-3">
                <s.icon aria-hidden strokeWidth={1.5} className="size-5 text-muted" />
                <Eyebrow>{s.eyebrow}</Eyebrow>
              </div>
              <h2 className="mt-4 text-h2 text-balance">{s.title}</h2>
              <p className="mt-4 text-body-lg text-muted">{s.description}</p>
              <h3 className="mt-8 text-sm font-medium">What you get</h3>
              <CheckList className="mt-4" items={s.points} />
              <p className="mt-8 text-sm">
                <span className="text-muted">{s.price.label}: </span>
                <Price ngn={s.price.ngn} per={s.price.per} className="font-medium" />
              </p>
              <ul className="mt-4 space-y-2">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <LinkArrow href={l.href}>{l.label}</LinkArrow>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal className="rounded-lg border border-border bg-background-2 p-3 md:p-6">
              {s.visual}
            </div>
          </div>
          <JsonLd data={serviceLd({ name: s.title, description: s.description, path: `/services#${s.id}` })} />
        </Section>
      ))}

      <StandaloneServices />
      <CtaBand />
    </>
  );
}
