import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, MessageCircle, Wrench } from "lucide-react";
import { excludedFromAll, featureGroups, getPackage, packages } from "@/content/packages";
import { PageHero } from "@/components/sections/page-hero";
import { PackageDemo } from "@/components/demo";
import { PaymentTerms, ProcessSteps } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckList } from "@/components/ui/check-list";
import { CurrencyToggle } from "@/components/ui/currency-toggle";
import { JsonLd } from "@/components/ui/json-ld";
import { Price } from "@/components/ui/price";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { serviceLd } from "@/lib/jsonld";
import { whatsappLink } from "@/lib/site";

// Every valid slug is prerendered below; only unknown slugs (404s) render on demand.
export const instant = false;

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/packages/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};
  return {
    title: pkg.seo.title,
    description: pkg.seo.description,
    alternates: { canonical: `/packages/${pkg.slug}` },
    openGraph: { title: pkg.seo.title, description: pkg.seo.description, url: `/packages/${pkg.slug}` },
  };
}

export default async function PackagePage({ params }: PageProps<"/packages/[slug]">) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();

  const index = packages.indexOf(pkg);
  const others = [packages[index - 1], packages[index + 1]].filter(Boolean);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Packages", path: "/packages" },
          { name: pkg.name, path: `/packages/${pkg.slug}` },
        ]}
        eyebrow={`Package ${pkg.number} · ${pkg.kind}`}
        title={pkg.name}
        description={pkg.positioning}
      >
        <div className="mt-8 flex flex-wrap items-end gap-x-10 gap-y-5">
          <div>
            <span className="block font-mono text-label text-muted uppercase">Price range</span>
            <Price ngn={pkg.price.ngn} usd={pkg.price.usd} className="text-2xl font-semibold tracking-tight" />
            {pkg.priceNote && <span className="block text-sm text-muted">{pkg.priceNote}</span>}
          </div>
          <div>
            <span className="block font-mono text-label text-muted uppercase">Timeline</span>
            <span className="text-2xl font-semibold tracking-tight">{pkg.timeline}</span>
          </div>
          {pkg.recommended && <Badge className="border-accent/50 text-accent">Recommended</Badge>}
          <CurrencyToggle />
        </div>
        {pkg.timelineNote && <p className="mt-3 text-sm text-muted">{pkg.timelineNote}</p>}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`/contact?package=${pkg.slug}`} size="lg">
            Choose {pkg.name}
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(`Hi Deventhous, I'm interested in the ${pkg.name} package.`)}
            external
            size="lg"
            variant="secondary"
          >
            <MessageCircle aria-hidden strokeWidth={1.5} />
            Ask on WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      <Section innerClassName="pt-4 md:pt-8 lg:pt-8">
        <div data-reveal className="relative">
          <div aria-hidden className="glow pointer-events-none absolute -inset-x-10 -top-10 h-64" />
          <PackageDemo slug={pkg.slug} className="relative shadow-[0_40px_120px_-40px_rgba(0,0,0,0.35)]" />
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          Example {pkg.name} design for a fictional business. Yours is designed around your brand.
        </p>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <Card data-reveal interactive={false} className="p-6 md:p-8">
            <p className="font-mono text-label text-muted uppercase">Best for</p>
            <p className="mt-3 text-lg text-pretty">{pkg.bestFor}</p>
          </Card>
          <Card data-reveal interactive={false} className="p-6 md:p-8">
            <p className="font-mono text-label text-muted uppercase">Not for</p>
            <p className="mt-3 text-lg text-pretty text-muted">{pkg.notFor}</p>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="What's included"
          title={pkg.buildsOn ? `Everything in ${pkg.buildsOn}, and more.` : "Everything you need to launch."}
        />
        <dl className="mt-10 border-t border-border">
          {featureGroups.map((g) => (
            <div key={g.key} data-reveal className="grid gap-3 border-b border-border py-6 md:grid-cols-[220px_1fr] md:gap-8">
              <dt className="font-medium">{g.label}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {pkg.features[g.key].map((f) => (
                    <li key={f} className="rounded-sm border border-border bg-background-2 px-3 py-1.5 text-sm text-muted">
                      {f}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          <Card data-reveal interactive={false} className="p-6 md:p-8">
            <h2 className="text-lg font-semibold tracking-tight">You receive</h2>
            <CheckList className="mt-5 text-sm" items={pkg.deliverables} />
          </Card>
          <Card data-reveal interactive={false} className="p-6 md:p-8">
            <h2 className="text-lg font-semibold tracking-tight">Add-ons</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {pkg.addOns.map((a) => (
                <li key={a} className="flex gap-3">
                  <span aria-hidden className="text-foreground">+</span>
                  {a}
                </li>
              ))}
            </ul>
          </Card>
          <Card data-reveal interactive={false} className="flex flex-col p-6 md:p-8">
            <Wrench aria-hidden strokeWidth={1.5} className="size-5 text-muted" />
            <h2 className="mt-4 text-lg font-semibold tracking-tight">{pkg.maintenance.label}</h2>
            <Price ngn={pkg.maintenance.ngn} per="month" className="mt-2 text-xl font-semibold tracking-tight" />
            <p className="mt-3 text-sm text-muted">
              Optional. Starts after the {pkg.compare.support} of support included with this package.
            </p>
          </Card>
        </div>
        <p className="mt-6 text-sm text-muted">
          Not included, and paid by you directly: {excludedFromAll.join(", ")}.
        </p>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Process and timeline"
          title={`Live in ${pkg.timeline}.`}
          description="The timeline pauses if content or feedback is delayed by more than 7 days. You get dated milestones in your scope document."
        />
        <div className="mt-14">
          <ProcessSteps />
        </div>
        <div className="mt-14">
          <PaymentTerms />
        </div>
      </Section>

      <Faq items={pkg.faqs} title={`${pkg.name} questions.`} />

      <Section>
        <SectionHeader eyebrow="Compare" title="Nearby packages." />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/packages/${p.slug}`}
                className="spotlight flex h-full flex-col rounded-lg border border-border p-6 transition-colors hover:border-border-strong"
              >
                <span className="font-mono text-label text-muted">
                  {p.number} · {p.kind}
                </span>
                <span className="mt-3 text-lg font-semibold tracking-tight">{p.name}</span>
                <span className="mt-1 text-sm text-muted">{p.positioning}</span>
                <span className="mt-4 flex items-center gap-4 text-sm">
                  <Price ngn={p.price.ngn} usd={p.price.usd} compact className="font-medium" />
                  <span className="flex items-center gap-1.5 text-muted">
                    <Clock aria-hidden strokeWidth={1.5} className="size-3.5" />
                    {p.timeline}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link href="/packages#compare" className="text-sm text-muted hover:text-foreground">
            Compare all six packages →
          </Link>
        </div>
      </Section>

      <CtaBand title={`Ready to start your ${pkg.name}?`} />

      <JsonLd
        data={serviceLd({
          name: `${pkg.name} by Deventhous`,
          description: pkg.seo.description,
          path: `/packages/${pkg.slug}`,
          price: pkg.price.ngn,
        })}
      />
    </>
  );
}
