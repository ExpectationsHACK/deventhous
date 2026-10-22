import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { DemoCarousel } from "@/components/demo";
import { LighthouseCard } from "./mockups";

/** What every project includes, from the planning document. */
const includes = [
  "Mobile-first design",
  "Basic SEO and analytics",
  "WhatsApp chat",
  "Post-launch support",
  "You own it",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 -top-16" />
      <div
        aria-hidden
        className="glow pointer-events-none absolute top-0 left-1/2 h-[560px] w-[900px] max-w-[160vw] -translate-x-1/2"
      />
      <div className="relative mx-auto max-w-[1200px] px-4 pt-16 pb-16 md:px-6 md:pt-28 md:pb-24 lg:border-x lg:border-border">
        <div className="flex flex-col items-center text-center">
          <Badge dot="success">Now booking · 2026</Badge>
          <h1 className="mt-6 max-w-4xl text-display text-balance">
            Websites that get found,
            <br className="hidden sm:block" /> get trusted, and get paid.
          </h1>
          <p className="mt-6 max-w-[620px] text-body-lg text-pretty text-muted">
            Websites, online stores, course platforms, and AI automations for businesses in Nigeria
            and across Africa. Clear packages, honest prices, and support after launch.
          </p>
          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href={whatsappLink()} external size="lg">
              <MessageCircle aria-hidden strokeWidth={1.75} />
              Chat on WhatsApp
            </ButtonLink>
            <ButtonLink href="/packages" size="lg" variant="secondary">
              See packages and prices
            </ButtonLink>
          </div>
          <p className="mt-8 font-mono text-label text-foreground uppercase">Every project includes</p>
          <ul className="mt-3 flex max-w-3xl flex-wrap justify-center gap-x-3 gap-y-2 font-mono text-label text-muted uppercase">
            {includes.map((f, i) => (
              <li key={f} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-muted-2">·</span>}
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl md:mt-20">
          <DemoCarousel
            slugs={["business-store", "intelligent-business", "academy"]}
            className="rounded-lg shadow-[0_0_0_1px_var(--border),0_40px_120px_-40px_rgba(0,0,0,0.35)]"
          />
          <LighthouseCard className="absolute -bottom-10 -left-2 hidden sm:block xl:-left-10" />
        </div>
      </div>
    </section>
  );
}
