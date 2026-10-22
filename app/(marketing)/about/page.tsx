import type { Metadata } from "next";
import { Gauge, KeyRound, ReceiptText, Sparkles } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Deventhous, a Stynark Company",
  description:
    "Deventhous is a Lagos web development agency and a Stynark company. We build fast websites and AI automations at fixed prices.",
  alternates: { canonical: "/about" },
};

const principles = [
  { icon: Gauge, title: "Speed", text: "Fast sites, fast replies, fast delivery. Your customers are on mobile data, and they will not wait." },
  { icon: Sparkles, title: "Clarity", text: "Plain language, clear scope, and a design you approve before we build. No jargon, no surprises." },
  { icon: ReceiptText, title: "Fixed prices", text: "You know the price before we start. If scope changes, we agree the change in writing first." },
  { icon: KeyRound, title: "Ownership", text: "Once paid, the site, the code, the content, and the accounts are yours. No lock-in." },
];

/** Add real team members here once names, roles, and photos are confirmed. */
const team: { name: string; role: string; photo?: string }[] = [];

const disciplines = ["Design", "Engineering", "SEO", "AI automation"];

const markets = [
  { title: "Nigeria", text: "Our home market. We know how local customers search, pay, and buy, from Paystack checkouts to WhatsApp orders." },
  { title: "Africa", text: "Sites built for mobile-first audiences and variable connections, ready for Flutterwave and multi-currency payments." },
  { title: "The diaspora", text: "For Nigerians and Africans abroad building businesses at home. We work across time zones and keep you updated on WhatsApp." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        eyebrow="About"
        title="We build websites that do work for the business."
        description={`Deventhous is a web development agency based in ${site.location.city}, and a ${site.parent} company.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader eyebrow="Our story" title="Why Deventhous exists." />
          <div data-reveal className="prose max-w-none">
            <p>
              Too many businesses in Nigeria pay for a website that looks fine and does nothing.
              It loads slowly, nobody finds it on Google, and enquiries still arrive as missed calls
              and unanswered DMs.
            </p>
            <p>
              Deventhous was started to fix that. We build sites that are fast on mobile data, ready
              for search from day one, and connected to the tools businesses already use: WhatsApp,
              Paystack, Flutterwave, and email. Then we add AI automation so the site keeps working
              after hours.
            </p>
            <p>
              We are part of <strong>{site.parent}</strong>, which gives our clients the backing of a
              larger group with the attention of a small, focused team.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Principles" title="How we work." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <Card key={p.title} data-reveal className="p-6">
              <p.icon aria-hidden strokeWidth={1.5} className="size-5 text-muted" />
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-muted">{p.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Team"
          title="A small delivery team."
          description="The people who scope your project are the people who build it."
        />
        {team.length > 0 ? (
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <li key={m.name} data-reveal className="rounded-lg border border-border p-6">
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-muted">{m.role}</p>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">
            {disciplines.map((d, i) => (
              <li key={d} data-reveal className="bg-background p-6">
                <span className="font-mono text-label text-muted">0{i + 1}</span>
                <p className="mt-3 text-lg font-semibold tracking-tight">{d}</p>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section>
        <SectionHeader eyebrow="Markets" title="Where we work." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {markets.map((m) => (
            <Card key={m.title} data-reveal className="p-6">
              <h3 className="text-h3">{m.title}</h3>
              <p className="mt-2 text-muted">{m.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
