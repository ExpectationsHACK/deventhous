import { PageHero } from "./page-hero";
import { Section } from "@/components/ui/section";

export function LegalPage({
  title,
  path,
  updated,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero crumbs={[{ name: title, path }]} title={title} description={`Last updated ${updated}.`} />
      <Section innerClassName="pt-12 md:pt-16 lg:pt-16">
        <article className="prose max-w-2xl">{children}</article>
      </Section>
    </>
  );
}
