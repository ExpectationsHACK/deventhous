import type { Metadata } from "next";
import { excludedFromAll, packages } from "@/content/packages";
import { homeFaqs } from "@/content/faq";
import { PageHero } from "@/components/sections/page-hero";
import { PackageCard } from "@/components/sections/packages-grid";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { EntryOffer, PackageLadder, StandaloneServices } from "@/components/sections/standalone";
import { PaymentTerms } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { CurrencyToggle } from "@/components/ui/currency-toggle";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Website Packages and Prices in Nigeria",
  description:
    "Six website packages from ₦150,000 ($100): landing page, online store, business site, SEO, LMS, and AI agent. Timelines and features compared.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Packages", path: "/packages" }]}
        eyebrow="Packages and prices"
        title="Six packages. Clear scope. No surprises."
        description="Price ranges in naira, with dollar equivalents for diaspora and international clients. Your exact price is set in a written quote after a short brief."
      >
        <CurrencyToggle className="mt-8" />
      </PageHero>

      <Section innerClassName="pt-12 md:pt-16 lg:pt-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
        <div className="mt-4">
          <EntryOffer />
        </div>
        <p className="mt-8 text-center text-sm text-pretty text-muted">
          Not included in any package, and paid by you directly: {excludedFromAll.join(", ")}.
        </p>
      </Section>

      <PackageLadder />

      <Section id="compare">
        <SectionHeader eyebrow="Compare" title="Side by side." description="Everything in one table. On a phone, scroll sideways." />
        <div className="mt-10" data-reveal>
          <ComparisonTable />
        </div>
      </Section>

      <StandaloneServices />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <SectionHeader
            eyebrow="Terms"
            title="How payment and revisions work."
            description="Every project gets a written scope document. Anything not listed is a change request with its own quote."
          />
          <PaymentTerms />
        </div>
      </Section>

      <Faq items={homeFaqs} />
      <CtaBand
        title="Not sure which package fits?"
        description="Tell us about your business. We'll recommend one honestly, even if it's the smallest."
      />
    </>
  );
}
