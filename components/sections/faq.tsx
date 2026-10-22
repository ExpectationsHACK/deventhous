import { FaqAccordion } from "@/components/ui/accordion";
import { JsonLd } from "@/components/ui/json-ld";
import { LinkArrow } from "@/components/ui/link-arrow";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { faqLd } from "@/lib/jsonld";

export function Faq({
  items,
  title = "Questions, answered.",
  eyebrow = "FAQ",
}: {
  items: { q: string; a: string }[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHeader eyebrow={eyebrow} title={title} />
          <p className="mt-4 text-muted" data-reveal>
            Something else on your mind?
          </p>
          <LinkArrow href="/contact" className="mt-2">
            Ask us directly
          </LinkArrow>
        </div>
        <div data-reveal>
          <FaqAccordion items={items} />
        </div>
      </div>
      <JsonLd data={faqLd(items)} />
    </Section>
  );
}
