import { paymentTerms } from "@/content/packages";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export const processSteps = [
  {
    n: "01",
    title: "Consultation",
    text: "A short call or WhatsApp chat about your business and goals. You get a written scope document and a quote within the package range.",
  },
  {
    n: "02",
    title: "Design",
    text: "50% deposit to start. You see the layout and copy direction before we write code, with 2 rounds of revisions. 30% on design approval.",
  },
  {
    n: "03",
    title: "Build",
    text: "We build, test on real devices, and optimize for speed and SEO, with 2 more rounds of revisions.",
  },
  {
    n: "04",
    title: "Launch",
    text: "20% before handover. We go live, hand over admin access, source code, and logins, and support you after launch.",
  },
];

export function ProcessSteps() {
  return (
    <ol className="grid border-border md:grid-cols-4 md:border-t">
      {processSteps.map((step, i) => (
        <li
          key={step.n}
          data-reveal
          style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
          className="relative border-l border-border pb-10 pl-6 last:pb-0 md:border-l-0 md:pt-8 md:pr-6 md:pb-0 md:pl-0"
        >
          <span
            aria-hidden
            className="absolute top-0 -left-[5px] size-[9px] rounded-full border border-border-strong bg-background md:-top-[5px] md:left-0"
          />
          <span className="font-mono text-label text-muted">{step.n}</span>
          <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
          <p className="mt-2 text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function PaymentTerms() {
  return (
    <div data-reveal className="rounded-lg border border-border p-6 md:p-8">
      <p className="font-mono text-label text-muted uppercase">Payment terms</p>
      <div className="mt-4 flex h-2 overflow-hidden rounded-full" aria-hidden>
        <span className="w-1/2 bg-foreground" />
        <span className="w-[30%] bg-muted" />
        <span className="w-1/5 bg-border-strong" />
      </div>
      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        {paymentTerms.schedule.map((s) => (
          <li key={s.when}>
            <span className="block text-h3">{s.percent}</span>
            <span className="text-sm text-muted">{s.when}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 border-t border-border pt-4 text-sm text-muted">
        {paymentTerms.largeProjects} {paymentTerms.revisions}
      </p>
    </div>
  );
}

export function Process() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Process"
        title="From first message to live site."
        description="Four steps, a written scope, and you approve the design before we build."
      />
      <div className="mt-14">
        <ProcessSteps />
      </div>
      <div className="mt-14">
        <PaymentTerms />
      </div>
    </Section>
  );
}
