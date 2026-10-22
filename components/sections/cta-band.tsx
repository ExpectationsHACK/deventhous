import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

export function CtaBand({
  title = "Ready to build something that works?",
  description = "Tell us about your business. You will get a clear plan and a fixed price before any work starts.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div aria-hidden className="glow pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[800px] max-w-[160vw] -translate-x-1/2 -translate-y-1/2" />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-4 py-24 text-center md:px-6 md:py-32 lg:border-x lg:border-border">
        <h2 data-reveal className="max-w-2xl text-h1 text-balance">
          {title}
        </h2>
        <p data-reveal className="mt-4 max-w-xl text-body-lg text-pretty text-muted">
          {description}
        </p>
        <div data-reveal className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Get a free quote
          </ButtonLink>
          <ButtonLink href={whatsappLink()} external size="lg" variant="secondary">
            <MessageCircle aria-hidden strokeWidth={1.5} />
            Chat on WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
