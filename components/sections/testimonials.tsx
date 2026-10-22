import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

/**
 * Real client quotes only. Never invent testimonials.
 * While this list is empty, the section does not render.
 */
const testimonials: { quote: string; name: string; role: string }[] = [
  // { quote: "...", name: "Full name", role: "Role, Company" },
];

export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <Section>
      <SectionHeader eyebrow="Clients" title="In their words." />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} data-reveal className="flex flex-col p-6">
            <blockquote className="text-pretty">“{t.quote}”</blockquote>
            <p className="mt-auto pt-6 text-sm">
              <span className="font-medium">{t.name}</span>
              <span className="block text-muted">{t.role}</span>
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
