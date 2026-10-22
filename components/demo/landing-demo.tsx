import { CalendarDays, MessageCircle, Users } from "lucide-react";
import { loop, Ping } from "./screen";

/** Example Launchpad: a fictional Lagos event planner's landing page. */
export function LandingDemo() {
  return (
    <div className="relative flex h-full flex-col bg-[#fdf8f3] text-[#2e1065]">
      <div className="flex items-center justify-between px-[3em] py-[1em]">
        <span className="font-serif text-[1.35em] font-semibold italic">Ada &amp; Co. Events</span>
        <div className="flex gap-[2em] text-[0.78em] text-[#6b5b7b]">
          <span>Services</span>
          <span>Gallery</span>
          <span>Packages</span>
        </div>
        <span className="rounded-full bg-[#b45309] px-[1.1em] py-[0.55em] text-[0.74em] font-medium text-white">Get a quote</span>
      </div>

      <div className="mx-[3em] grid flex-1 grid-cols-[1.1fr_1fr] overflow-hidden rounded-[1.2em]">
        <div className="tex-bokeh relative flex flex-col justify-end p-[2em] text-white">
          <span className="text-[0.66em] tracking-[0.2em] text-[#fcd34d] uppercase">Weddings · Birthdays · Corporate</span>
          <p className="mt-[0.5em] font-serif text-[2.6em] leading-[1.05]">Events planned to the last detail.</p>
          <p className="mt-[0.8em] max-w-[22em] text-[0.8em] leading-[1.55] text-white/80">
            From the first call to the last guest home, across Lagos and Abuja. Tell us your date and we&apos;ll do the rest.
          </p>
          <div className="mt-[1.2em] flex gap-[1.5em] text-[0.7em] text-white/80">
            <span>
              <span className="block text-[1.6em] font-semibold text-white">Lagos</span>and Abuja
            </span>
            <span>
              <span className="block text-[1.6em] font-semibold text-white">50 – 800</span>guests
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-white px-[2.2em]">
          <p className="text-[1.05em] font-semibold">Get a free quote</p>
          <p className="mt-[0.2em] text-[0.7em] text-[#6b5b7b]">We reply within a few hours.</p>
          <div className="mt-[1.1em] space-y-[0.7em]">
            <div>
              <p className="text-[0.62em] font-medium text-[#6b5b7b]">Your name</p>
              <p className="mt-[0.25em] flex items-center rounded-[0.5em] border-2 border-[#b45309] px-[0.8em] py-[0.5em] text-[0.78em]">
                <span className="inline-block whitespace-nowrap" style={loop("demo-type 6s steps(16, end)")}>Chioma Okeke</span>
                <span className="ml-[0.1em] h-[1.1em] w-[0.08em] bg-[#2e1065]" style={{ animation: "demo-blink 1s steps(1) infinite" }} />
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[0.7em]">
              <div>
                <p className="text-[0.62em] font-medium text-[#6b5b7b]">Event date</p>
                <p className="mt-[0.25em] flex items-center gap-[0.4em] rounded-[0.5em] border border-[#e9dfd3] px-[0.8em] py-[0.5em] text-[0.74em]">
                  <CalendarDays className="size-[1.1em] text-[#b45309]" strokeWidth={2} />
                  12 Dec 2026
                </p>
              </div>
              <div>
                <p className="text-[0.62em] font-medium text-[#6b5b7b]">Guests</p>
                <p className="mt-[0.25em] flex items-center gap-[0.4em] rounded-[0.5em] border border-[#e9dfd3] px-[0.8em] py-[0.5em] text-[0.74em]">
                  <Users className="size-[1.1em] text-[#b45309]" strokeWidth={2} />
                  250
                </p>
              </div>
            </div>
            <span className="flex items-center justify-center gap-[0.5em] rounded-[0.5em] bg-[#2e1065] py-[0.7em] text-[0.78em] font-medium text-white">
              <MessageCircle className="size-[1.1em]" strokeWidth={2} />
              Send on WhatsApp
            </span>
          </div>
        </div>
      </div>

      <span className="absolute right-[1.4em] bottom-[1.2em] flex size-[3em] items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg">
        <Ping className="bg-[#25d366]" />
        <MessageCircle className="relative size-[1.4em]" strokeWidth={2} />
      </span>
      <div className="h-[1.5em]" />
    </div>
  );
}
