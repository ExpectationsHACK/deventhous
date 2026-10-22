import { HandCoins, KeyRound, LifeBuoy, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

const reasons = [
  {
    icon: HandCoins,
    title: "Fixed prices",
    text: "Every package has a published price range. You get a written quote and scope document before work starts, and anything outside it is quoted separately first.",
  },
  {
    icon: TrendingUp,
    title: "Built to sell",
    text: "Lead forms, WhatsApp chat, payments, and SEO are part of the build, not afterthoughts. The site's job is to bring you customers.",
  },
  {
    icon: KeyRound,
    title: "You own what you pay for",
    text: "After full payment, the site, source code, content, and logins are yours. No lock-in, no hostage domains.",
  },
  {
    icon: LifeBuoy,
    title: "Support after launch",
    text: "14 to 90 days of post-launch support with every package, then optional monthly maintenance so the site keeps working.",
  },
];

export function Why() {
  return (
    <Section>
      <SectionHeader eyebrow="Why Deventhous" title="Clear scope. Honest prices. Real support." />
      <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <li
            key={r.title}
            data-reveal
            style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
            className="bg-background p-6 md:p-8"
          >
            <r.icon aria-hidden strokeWidth={1.5} className="size-5 text-muted" />
            <h3 className="mt-4 text-lg font-semibold tracking-tight">{r.title}</h3>
            <p className="mt-2 text-muted">{r.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
