import { Card } from "@/components/ui/card";
import { CheckList } from "@/components/ui/check-list";
import { ScoreRing } from "@/components/ui/score-ring";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function Performance() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Performance"
            title={
              <>
                Fast is a feature.
                <br />
                Search is a channel.
              </>
            }
            description="Most of your customers browse on a phone, on mobile data. We build for that first."
          />
          <div data-reveal>
            <CheckList
              className="mt-8"
              items={[
                "Core Web Vitals in the green",
                "Structured data and clean metadata",
                "Built for Google Business Profile and local search",
              ]}
            />
          </div>
        </div>
        <Card data-reveal className="p-6 md:p-10" interactive={false}>
          <div className="flex items-center justify-between border-b border-border pb-4">
            <p className="font-mono text-label text-muted uppercase">Target scores · mobile</p>
            <p className="font-mono text-label text-muted">yourbusiness.com</p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-8 sm:grid-cols-4 sm:gap-4">
            {["Performance", "Accessibility", "Best Practices", "SEO"].map((label) => (
              <ScoreRing key={label} label={label} size={84} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
