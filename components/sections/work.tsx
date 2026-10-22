import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, clientSites } from "@/content/work";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LinkArrow } from "@/components/ui/link-arrow";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { EasternGravelsDemo } from "@/components/demo";
import { clientDemos } from "@/components/demo/clients";
import { DemoScreen } from "@/components/demo/screen";
import { BrowserFrame } from "./mockups";

type WorkItem = {
  slug: string;
  client: string;
  domain: string;
  category: string;
  summary: string;
  tags: string[];
  cta: string;
  thumb: React.ReactNode;
};

const items: WorkItem[] = [
  ...clientSites.map((c) => {
    const Site = clientDemos[c.slug];
    return { ...c, cta: "Open the preview", thumb: <Site /> };
  }),
  ...caseStudies.map((c) => ({
    slug: c.slug,
    client: c.client,
    domain: "easterngravels.com",
    category: `${c.industry} · ${c.location}`,
    summary: c.summary,
    tags: c.tags,
    cta: "Read the case study",
    thumb: <EasternGravelsDemo />,
  })),
];

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <Card data-reveal className="group relative flex flex-col overflow-hidden">
      <div className="border-b border-border bg-background-2 p-3 md:p-5">
        <BrowserFrame url={item.domain} className="rounded-md transition-transform duration-300 group-hover:-translate-y-1">
          <DemoScreen label={`Illustrated preview of the ${item.client} website`}>{item.thumb}</DemoScreen>
        </BrowserFrame>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-label text-muted uppercase">{item.category}</p>
        <h3 className="mt-3 text-h3">
          <Link href={`/work/${item.slug}`} className="after:absolute after:inset-0 after:rounded-lg">
            {item.client}
          </Link>
        </h3>
        <p className="mt-2 text-muted">{item.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium">
          {item.cta}
          <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Card>
  );
}

export function SelectedWork({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <Section>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          eyebrow="Selected work"
          title="Built for real businesses."
          description="Online stores and websites we've designed and built. Click any project to open a preview."
        />
        {showAllLink && <LinkArrow href="/work">View all work</LinkArrow>}
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <WorkCard key={item.slug} item={item} />
        ))}
      </div>
      <div data-reveal className="mt-4 flex flex-col items-start justify-between gap-4 rounded-lg border border-dashed border-border-strong p-6 sm:flex-row sm:items-center">
        <p>
          <span className="font-medium">Your project could be next.</span>{" "}
          <span className="text-muted">Tell us what you sell and who you sell to.</span>
        </p>
        <ButtonLink href="/contact" variant="secondary">
          Start a project
        </ButtonLink>
      </div>
    </Section>
  );
}
