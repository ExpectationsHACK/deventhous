import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { PackageStrip } from "@/components/sections/package-strip";
import { Why } from "@/components/sections/why";
import { ServicesBento } from "@/components/sections/services-bento";
import { Performance } from "@/components/sections/performance";
import { Automation } from "@/components/sections/automation";
import { PackagesTeaser } from "@/components/sections/packages-grid";
import { Process } from "@/components/sections/process";
import { SelectedWork } from "@/components/sections/work";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { homeFaqs } from "@/content/faq";

export const metadata: Metadata = {
  title: { absolute: "Deventhous: Web Design and AI Automation, Lagos" },
  description:
    "Websites that get found, get trusted, and get paid. Landing pages, online stores, LMS, SEO, and AI agents from ₦150,000. Based in Lagos.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PackageStrip />
      <ServicesBento />
      <Why />
      <Performance />
      <Automation />
      <PackagesTeaser />
      <Process />
      <SelectedWork />
      <Testimonials />
      <Faq items={homeFaqs} />
      <CtaBand />
    </>
  );
}
