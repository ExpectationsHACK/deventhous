import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { BriefForm, BriefFormWithParams } from "@/components/contact/brief-form";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us: Start a Project",
  description:
    "Start your website project with Deventhous. Chat on WhatsApp or send a short brief and get a fixed quote. Based in Lagos, Nigeria.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact" }]}
        eyebrow="Contact"
        title="Start a project."
        description="Two ways to reach us. WhatsApp is fastest; the brief form helps us quote accurately."
      />
      <Section innerClassName="pt-12 md:pt-16 lg:pt-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <div className="flex flex-col gap-6">
            <Card interactive={false} className="p-6 md:p-8">
              <MessageCircle aria-hidden strokeWidth={1.5} className="size-6 text-success-text" />
              <h2 className="mt-4 text-h3">Chat on WhatsApp</h2>
              <p className="mt-2 text-muted">
                Send a message with a line about your business. We will ask a few questions and
                suggest a package.
              </p>
              <ButtonLink href={whatsappLink()} external size="lg" className="mt-6 w-full">
                Open WhatsApp
              </ButtonLink>
            </Card>
            <Card interactive={false} className="p-6 md:p-8">
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <Clock aria-hidden strokeWidth={1.5} className="size-4 shrink-0 translate-y-0.5 text-muted" />
                  <span>
                    <span className="block font-medium">Response time</span>
                    <span className="text-muted">We reply within {site.replyTime}.</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail aria-hidden strokeWidth={1.5} className="size-4 shrink-0 translate-y-0.5 text-muted" />
                  <span>
                    <span className="block font-medium">Email</span>
                    <a href={`mailto:${site.email}`} className="break-all text-muted hover:text-foreground">
                      {site.email}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin aria-hidden strokeWidth={1.5} className="size-4 shrink-0 translate-y-0.5 text-muted" />
                  <span>
                    <span className="block font-medium">Location</span>
                    <span className="text-muted">
                      {site.location.city}, {site.location.country}. Working with clients across
                      Africa and the diaspora.
                    </span>
                  </span>
                </li>
              </ul>
            </Card>
          </div>
          <Card interactive={false} className="p-6 md:p-8">
            <h2 className="text-h3">Project brief</h2>
            <p className="mt-2 mb-8 text-muted">A few details so we can come back with a plan and a fixed price.</p>
            <Suspense fallback={<BriefForm />}>
              <BriefFormWithParams />
            </Suspense>
          </Card>
        </div>
      </Section>
    </>
  );
}
