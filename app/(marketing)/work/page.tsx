import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SelectedWork } from "@/components/sections/work";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Our Work: Website Case Studies",
  description:
    "Case studies from Deventhous: fast, SEO-ready websites with WhatsApp ordering and automation for businesses in Lagos and across Nigeria.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Work", path: "/work" }]}
        eyebrow="Work"
        title="Websites that earn their keep."
        description="What we built, why we built it that way, and what changed for the business."
      />
      <SelectedWork showAllLink={false} />
      <CtaBand />
    </>
  );
}
