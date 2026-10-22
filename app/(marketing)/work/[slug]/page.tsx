import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, clientSites, getCaseStudy, getClientSite, type ClientSite } from "@/content/work";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { BrowserFrame } from "@/components/sections/mockups";
import { EasternGravelsDemo } from "@/components/demo";
import { DemoScreen, PageScreen } from "@/components/demo/screen";
import { clientDemos } from "@/components/demo/clients";
import { Badge } from "@/components/ui/badge";
import { LinkArrow } from "@/components/ui/link-arrow";
import { Section } from "@/components/ui/section";

// Every valid slug is prerendered below; only unknown slugs (404s) render on demand.
export const instant = false;

export function generateStaticParams() {
  return [...clientSites, ...caseStudies].map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug) ?? getClientSite(slug);
  if (!study) return {};
  return {
    title: study.seo.title,
    description: study.seo.description,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { type: "article", title: study.seo.title, description: study.seo.description },
  };
}

/** One-page preview of an illustrated client site. */
function ClientPreview({ site }: { site: ClientSite }) {
  const Site = clientDemos[site.slug];
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Work", path: "/work" },
          { name: site.client, path: `/work/${site.slug}` },
        ]}
        eyebrow={site.category}
        title={site.client}
        description={site.summary}
      >
        <ul className="mt-6 flex flex-wrap gap-2">
          {site.tags.map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
        </ul>
      </PageHero>
      <Section innerClassName="pt-8 md:pt-12 lg:pt-12">
        <BrowserFrame url={site.domain} className="mx-auto max-w-6xl shadow-[0_40px_120px_-40px_rgba(0,0,0,0.35)]">
          <PageScreen label={`Illustrated one-page preview of the ${site.client} website`}>
            <Site full />
          </PageScreen>
        </BrowserFrame>
        <p className="mt-4 text-center text-sm text-muted">
          Illustrated preview of the {site.client} design. Products and prices shown are examples.
        </p>
        <div className="mt-8 flex justify-center">
          <LinkArrow href="/work">Back to all work</LinkArrow>
        </div>
      </Section>
      <CtaBand title="Want a store like this?" />
    </>
  );
}

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const site = getClientSite(slug);
  if (site) return <ClientPreview site={site} />;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  const { default: Body } = await import(`@/content/work/${slug}.mdx`);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Work", path: "/work" },
          { name: study.client, path: `/work/${study.slug}` },
        ]}
        eyebrow={`Case study · ${study.client}`}
        title={study.title}
        description={study.summary}
      >
        <dl className="mt-8 grid grid-cols-2 gap-6 text-sm sm:grid-cols-4">
          {[
            ["Client", study.client],
            ["Industry", study.industry],
            ["Location", study.location],
            ["Year", study.year],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-label text-muted uppercase">{k}</dt>
              <dd className="mt-1">{v}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section innerClassName="pt-12 md:pt-16 lg:pt-16">
        <BrowserFrame url="easterngravels.com" className="mx-auto max-w-4xl">
          <DemoScreen label="Illustration of the Eastern Gravels website: products and WhatsApp ordering">
            <EasternGravelsDemo />
          </DemoScreen>
        </BrowserFrame>
        <p className="mt-3 text-center text-xs text-muted">Illustration of the Eastern Gravels design language.</p>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {study.stats.map((s, i) => (
            <div key={i} className="bg-background p-6">
              <p className="text-h2">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm">
          <span className="text-muted">Outcome: </span>
          {study.outcome}
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_2.2fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-mono text-label text-muted uppercase">Tech stack</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Next.js", "Tailwind CSS", "Supabase", "WhatsApp", "Vercel", "Schema.org"].map((t) => (
                <li key={t}>
                  <Badge>{t}</Badge>
                </li>
              ))}
            </ul>
            {study.url && (
              <LinkArrow href={study.url} external className="mt-6">
                Visit the live site
              </LinkArrow>
            )}
            <LinkArrow href="/packages/business-store" className="mt-6 flex">
              The package behind this build
            </LinkArrow>
          </aside>
          <article className="prose max-w-2xl">
            <Body />
          </article>
        </div>
      </Section>

      <CtaBand title="Want results like this?" />
    </>
  );
}
