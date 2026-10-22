import Link from "next/link";
import { Bot, Code2, CreditCard, GraduationCap, LifeBuoy, Search, ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PackageDemo } from "@/components/demo";
import {
  AutomationIllustration,
  CoursesIllustration,
  EcommerceIllustration,
  PaymentsIllustration,
  SeoIllustration,
  SupportIllustration,
} from "@/components/illustrations";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

function BentoCard({
  icon: Icon,
  title,
  description,
  href,
  className,
  delay,
  children,
}: {
  icon: typeof Code2;
  title: string;
  description: string;
  href: string;
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}) {
  return (
    <Card
      data-reveal
      style={{ "--reveal-delay": `${delay ?? 0}ms` } as React.CSSProperties}
      className={cn("group relative flex flex-col overflow-hidden", className)}
    >
      <div className="p-6 md:p-8">
        <Icon aria-hidden strokeWidth={1.5} className="size-5 text-muted" />
        <h3 className="mt-4 text-h3">
          <Link href={href} className="after:absolute after:inset-0 after:rounded-lg">
            {title}
          </Link>
        </h3>
        <p className="mt-2 max-w-md text-muted">{description}</p>
      </div>
      {children && <div className="mt-auto px-6 pb-6 md:px-8 md:pb-8">{children}</div>}
    </Card>
  );
}

export function ServicesBento() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title="Everything your business needs online."
        description="One team for the website, the store, the search traffic, and the automation behind it, for individuals, businesses, and organizations."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <BentoCard
          icon={Code2}
          title="Web design and development"
          description="Custom, mobile-first websites that load fast, look professional, and turn visitors into enquiries."
          href="/services#web"
          className="md:col-span-2"
        >
          <PackageDemo slug="launchpad" />
        </BentoCard>
        <BentoCard
          icon={CreditCard}
          title="Online stores and payments"
          description="Checkout with Paystack, Flutterwave, bank transfer, USSD, and WhatsApp orders."
          href="/services#stores"
          delay={80}
        >
          <PaymentsIllustration />
        </BentoCard>
        <BentoCard
          icon={Search}
          title="SEO"
          description="Keyword research, technical SEO, and local search so customers find you before your competitors."
          href="/services#seo"
        >
          <SeoIllustration />
        </BentoCard>
        <BentoCard
          icon={Bot}
          title="AI automation and business agents"
          description="An AI agent trained on your business that answers on WhatsApp, your website, and Instagram, qualifies leads, books appointments, and reports back to you."
          href="/services#automation"
          className="md:col-span-2"
          delay={80}
        >
          <AutomationIllustration />
        </BentoCard>
        <BentoCard
          icon={ShoppingBag}
          title="E-commerce"
          description="Orders, inventory, delivery, and customer updates, managed from one dashboard."
          href="/services#ecommerce"
        >
          <EcommerceIllustration />
        </BentoCard>
        <BentoCard
          icon={GraduationCap}
          title="Course platforms"
          description="Sell courses with student accounts, progress tracking, quizzes, and certificates."
          href="/services#courses"
          delay={60}
        >
          <CoursesIllustration />
        </BentoCard>
        <BentoCard
          icon={LifeBuoy}
          title="Tech support and management"
          description="Hosting, backups, security updates, monitoring, and fixes, handled every month."
          href="/services#support"
          delay={120}
        >
          <SupportIllustration />
        </BentoCard>
      </div>
    </Section>
  );
}
