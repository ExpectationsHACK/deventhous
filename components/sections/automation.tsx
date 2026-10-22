import { CalendarCheck, MessageCircle, PhoneMissed, Star, Zap } from "lucide-react";
import { LinkArrow } from "@/components/ui/link-arrow";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/section-header";
import { ChatMock } from "./mockups";

const items = [
  { icon: Zap, label: "Instant lead follow-up" },
  { icon: CalendarCheck, label: "Booking and reminders" },
  { icon: PhoneMissed, label: "Missed-call text-back" },
  { icon: Star, label: "Review requests" },
  { icon: MessageCircle, label: "Website AI chat" },
];

export function Automation() {
  return (
    <Section>
      {/* Always dark, whatever the theme */}
      <div
        data-reveal
        className="dark relative overflow-hidden rounded-lg border border-border bg-background text-foreground"
      >
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative grid gap-10 p-6 md:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Automation</Eyebrow>
            <h2 className="mt-4 text-h2 text-balance">Your business, answering at 3 a.m.</h2>
            <p className="mt-4 max-w-md text-body-lg text-muted">
              Customers message when it suits them. Your automations reply in seconds, book the
              slot, and pass the warm leads to you.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {items.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-md border border-border">
                    <Icon aria-hidden strokeWidth={1.5} className="size-4 text-muted" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
            <LinkArrow href="/packages/intelligent-business" className="mt-8">
              See the Intelligent Business package
            </LinkArrow>
          </div>
          <ChatMock
            className="lg:ml-auto lg:w-[420px]"
            title="Store Assistant"
            messages={[
              { from: "customer", text: "Hi, is the 50kg bag still available?", time: "03:02" },
              { from: "bot", text: "Yes, 18 in stock. Delivery to Lekki is tomorrow. Shall I reserve one?", time: "03:02" },
              { from: "customer", text: "Yes please, 2 bags.", time: "03:03" },
              { from: "bot", text: "Done. Order #204 is confirmed. You'll get a payment link here.", time: "03:03" },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
