import Link from "next/link";
import { Zap } from "lucide-react";
import { entryOffer, packages, standaloneServices } from "@/content/packages";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Price } from "@/components/ui/price";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { whatsappLink } from "@/lib/site";

export function StandaloneServices() {
  return (
    <Section id="standalone">
      <SectionHeader
        eyebrow="Standalone services"
        title="Already have a website?"
        description="Get SEO, automation, or support on its own, without rebuilding."
      />
      <ul className="mt-10 border-t border-border">
        {standaloneServices.map((s) => (
          <li
            key={s.name}
            data-reveal
            className="grid gap-2 border-b border-border py-6 md:grid-cols-[220px_1fr_240px] md:items-baseline md:gap-8"
          >
            <h3 className="font-semibold tracking-tight">{s.name}</h3>
            <p className="text-muted">{s.description}</p>
            <p className="text-sm font-medium md:text-right">
              <Price ngn={s.ngn} per={s.per} />
              {s.extra && <span className="block text-xs font-normal text-muted">{s.extra}</span>}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function EntryOffer() {
  if (!entryOffer.enabled) return null;
  return (
    <div
      data-reveal
      className="relative overflow-hidden rounded-lg border border-border-strong bg-background-2 p-6 md:p-10"
    >
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <Badge dot="success">{entryOffer.cap}</Badge>
          <h2 className="mt-4 flex items-center gap-2 text-h3">
            <Zap aria-hidden strokeWidth={1.5} className="size-5" />
            {entryOffer.name}
          </h2>
          <p className="mt-2 max-w-xl text-muted">{entryOffer.description}</p>
        </div>
        <div className="md:text-right">
          <Price ngn={entryOffer.ngn} className="block text-2xl font-semibold tracking-tight" />
          <div className="mt-4 flex flex-col gap-2 sm:flex-row md:justify-end">
            <ButtonLink href="/contact?package=launchpad&offer=launch-in-5-days">Claim the offer</ButtonLink>
            <ButtonLink
              href={whatsappLink(`Hi Deventhous, I'm interested in the ${entryOffer.name} offer.`)}
              external
              variant="secondary"
            >
              Ask on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The ladder: 1→4 in a line, 5 and 6 branching from Pro Site. */
export function PackageLadder() {
  const ladder = packages.slice(0, 4);
  const branches = packages.slice(4);
  const node =
    "flex flex-col rounded-md border border-border bg-background px-4 py-3 transition-colors hover:border-border-strong";
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
        <SectionHeader
          eyebrow="How packages build"
          title="Start small. Move up without starting over."
          description="Each step on the ladder includes everything below it. Academy and Intelligent Business branch off the Pro Site foundation. Basic SEO is included from Launchpad up; the full SEO strategy comes with Growth Site."
        />
        <div data-reveal aria-label="Package ladder" role="group">
          <ol className="grid gap-3 sm:grid-cols-4">
            {ladder.map((p, i) => (
              <li key={p.slug} className="relative">
                <Link href={`/packages/${p.slug}`} className={node}>
                  <span className="font-mono text-label text-muted">{p.number}</span>
                  <span className="text-sm font-semibold">{p.name}</span>
                </Link>
                {i < ladder.length - 1 && (
                  <span aria-hidden className="absolute top-1/2 -right-3 hidden w-3 border-t border-border-strong sm:block" />
                )}
              </li>
            ))}
          </ol>
          <p className="mt-6 mb-2 font-mono text-label text-muted uppercase">Specialty branches, built on Pro Site</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {branches.map((p) => (
              <li key={p.slug}>
                <Link href={`/packages/${p.slug}`} className={node}>
                  <span className="font-mono text-label text-muted">{p.number}</span>
                  <span className="text-sm font-semibold">{p.name}</span>
                  <span className="text-xs text-muted">{p.kind}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
