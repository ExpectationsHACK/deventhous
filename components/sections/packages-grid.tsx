import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { packages, type Package } from "@/content/packages";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckList } from "@/components/ui/check-list";
import { CurrencyToggle } from "@/components/ui/currency-toggle";
import { Price } from "@/components/ui/price";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";
import { EntryOffer } from "./standalone";

function RecommendedBadge() {
  return <Badge className="border-accent/50 text-accent">Recommended</Badge>;
}

/** Compact card used on the home page teaser. */
function CompactCard({ pkg }: { pkg: Package }) {
  return (
    <Card
      data-reveal
      className={cn("group relative flex flex-col p-6", pkg.recommended && "border-accent hover:border-accent")}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-label text-muted">{pkg.number}</span>
        {pkg.recommended && <RecommendedBadge />}
      </div>
      <h3 className="mt-6 text-h3">
        <Link href={`/packages/${pkg.slug}`} className="after:absolute after:inset-0 after:rounded-lg">
          {pkg.name}
        </Link>
      </h3>
      <p className="font-mono text-label text-muted uppercase">{pkg.kind}</p>
      <p className="mt-2 text-muted">{pkg.positioning}</p>
      <div className="mt-auto pt-8">
        <p className="font-mono text-label text-muted uppercase">Price range</p>
        <Price ngn={pkg.price.ngn} usd={pkg.price.usd} compact className="text-lg font-semibold tracking-tight" />
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
          <span className="flex items-center gap-1.5 text-muted">
            <Clock aria-hidden strokeWidth={1.5} className="size-3.5" />
            {pkg.timeline}
          </span>
          <span className="inline-flex items-center gap-1 font-medium">
            Learn more
            <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Card>
  );
}

export function PackagesTeaser() {
  return (
    <Section id="packages">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          eyebrow="Packages"
          title="Six packages. Clear scope. No surprises."
          description="From a landing page live this week to a website with its own AI agent. Start where you are and move up as you grow."
        />
        <CurrencyToggle className="self-start md:self-auto" />
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <CompactCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
      <div className="mt-4">
        <EntryOffer />
      </div>
      <div className="mt-10 flex justify-center">
        <ButtonLink href="/packages" variant="secondary">
          Compare all packages
        </ButtonLink>
      </div>
    </Section>
  );
}

/** Full card used on /packages. */
export function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Card
      data-reveal
      id={pkg.slug}
      className={cn(
        "relative flex scroll-mt-24 flex-col p-6 md:p-8",
        pkg.recommended && "border-accent shadow-[0_0_0_1px_var(--accent)] hover:border-accent",
      )}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-label text-muted">{pkg.number}</span>
        {pkg.recommended && <RecommendedBadge />}
      </div>
      <h2 className="mt-6 text-h3">{pkg.name}</h2>
      <p className="font-mono text-label text-muted uppercase">{pkg.kind}</p>
      <p className="mt-3 text-sm text-muted">{pkg.positioning}</p>
      <p className="mt-6">
        <Price ngn={pkg.price.ngn} usd={pkg.price.usd} className="block text-[22px] leading-7 font-semibold tracking-tight" />
        {pkg.priceNote && <span className="mt-1 block text-xs text-muted">{pkg.priceNote}</span>}
      </p>
      <p className="mt-3 flex items-center gap-1.5 text-sm text-muted">
        <Clock aria-hidden strokeWidth={1.5} className="size-3.5" />
        {pkg.timeline}
      </p>
      <div className="mt-6 border-t border-border pt-6">
        {pkg.buildsOn && (
          <p className="mb-3 text-sm font-medium">Everything in {pkg.buildsOn}, plus:</p>
        )}
        <CheckList className="text-sm" items={pkg.highlights} />
      </div>
      <p className="mt-6 text-sm">
        <span className="font-medium">Best for: </span>
        <span className="text-muted">{pkg.bestFor}</span>
      </p>
      <p className="mt-3 text-sm text-muted">
        {pkg.maintenance.label}:{" "}
        <Price ngn={pkg.maintenance.ngn} per="month" compact className="text-foreground" />
      </p>
      <div className="mt-auto flex flex-col gap-3 pt-8">
        <ButtonLink href={`/contact?package=${pkg.slug}`} variant={pkg.recommended ? "primary" : "secondary"} className="w-full">
          Choose {pkg.name}
        </ButtonLink>
        <Link href={`/packages/${pkg.slug}`} className="text-center text-sm text-muted hover:text-foreground">
          Full details →
        </Link>
      </div>
    </Card>
  );
}
