import { Bot, CalendarCheck, MessageCircle, Send, Smile, Sparkles, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";
import { loop, Ping } from "./screen";

const days = [
  ["Mon", "14"],
  ["Tue", "15"],
  ["Wed", "16"],
  ["Thu", "17"],
  ["Fri", "18"],
  ["Sat", "19"],
];

const services = [
  { icon: Stethoscope, name: "Check-up and cleaning", from: "From ₦15,000" },
  { icon: Sparkles, name: "Teeth whitening", from: "From ₦60,000" },
  { icon: Smile, name: "Braces and aligners", from: "Free consultation" },
];

function ChatWidget() {
  const bubble = "max-w-[85%] rounded-[0.9em] px-[0.8em] py-[0.5em] text-[0.68em] leading-[1.4]";
  return (
    <div className="absolute right-[1.5em] bottom-[1.5em] z-10 w-[18em] overflow-hidden rounded-[1em] bg-white shadow-[0_1em_3em_rgba(15,23,42,0.25)] ring-1 ring-black/5">
      <div className="flex items-center gap-[0.6em] bg-[#0f766e] px-[0.9em] py-[0.7em] text-white">
        <span className="flex size-[1.9em] items-center justify-center rounded-full bg-white/20">
          <Bot className="size-[1.1em]" strokeWidth={2} />
        </span>
        <span>
          <span className="block text-[0.74em] font-semibold">Lekki Smile Assistant</span>
          <span className="flex items-center gap-[0.35em] text-[0.6em] text-teal-100">
            <span className="size-[0.5em] rounded-full bg-[#4ade80]" />
            Replies instantly, day or night
          </span>
        </span>
      </div>
      <div className="flex h-[12.5em] flex-col gap-[0.5em] bg-[#f8fafc] p-[0.8em]">
        <p className={cn(bubble, "self-end rounded-br-[0.2em] bg-[#0f766e] text-white")} style={loop("demo-msg1 6s ease-out")}>
          Hi, can I book a cleaning this week?
        </p>
        <div className="relative max-w-[85%] self-start">
          <span className="absolute top-0 left-0 flex gap-[0.25em] rounded-[0.9em] bg-white px-[0.8em] py-[0.6em] shadow-sm" style={loop("demo-typing 6s linear")}>
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-[0.4em] rounded-full bg-slate-400" style={{ animation: `demo-dot 1.2s ${i * 0.15}s infinite` }} />
            ))}
          </span>
          <p className={cn(bubble, "max-w-none rounded-bl-[0.2em] bg-white text-slate-800 shadow-sm")} style={loop("demo-msg2 6s ease-out")}>
            Yes! Thursday 17th has 11:30 or 2:30 PM free. Which works for you?
          </p>
        </div>
        <p className={cn(bubble, "self-end rounded-br-[0.2em] bg-[#0f766e] text-white")} style={loop("demo-msg3 6s ease-out")}>
          2:30 please
        </p>
        <p className={cn(bubble, "self-start rounded-bl-[0.2em] bg-white text-slate-800 shadow-sm")} style={loop("demo-msg4 6s ease-out")}>
          <CalendarCheck className="mr-[0.3em] inline size-[1.1em] text-[#0f766e]" strokeWidth={2} />
          Booked for Thu 17th, 2:30 PM. I&apos;ll send a reminder the day before.
        </p>
      </div>
      <div className="flex items-center gap-[0.5em] border-t border-slate-100 px-[0.8em] py-[0.55em]">
        <span className="flex-1 text-[0.64em] text-slate-400">Type a message…</span>
        <Send className="size-[0.95em] text-[#0f766e]" strokeWidth={2} />
      </div>
    </div>
  );
}

/** Example Pro Site: a fictional Lekki dental clinic. Pass withChat for Intelligent Business. */
export function ClinicDemo({ withChat = false }: { withChat?: boolean }) {
  return (
    <div className="relative flex h-full flex-col bg-white text-[#0f172a]">
      <div className="flex items-center justify-between border-b border-slate-100 px-[3em] py-[0.9em]">
        <span className="flex items-center gap-[0.5em]">
          <span className="flex size-[1.8em] items-center justify-center rounded-[0.5em] bg-[#0f766e] text-white">
            <Smile className="size-[1.1em]" strokeWidth={2.25} />
          </span>
          <span className="text-[1em] font-semibold tracking-tight">Lekki Smile Dental</span>
        </span>
        <div className="flex gap-[2em] text-[0.78em] text-slate-500">
          <span>Services</span>
          <span>Our dentists</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
        <span className="rounded-[0.5em] bg-[#0f766e] px-[1em] py-[0.55em] text-[0.74em] font-medium text-white">Book appointment</span>
      </div>

      <div className="grid grid-cols-[1.15fr_1fr] gap-[2.5em] bg-gradient-to-b from-[#f0fdfa] to-white px-[3em] pt-[2.4em] pb-[2em]">
        <div className="flex flex-col justify-center">
          <span className="flex w-fit items-center gap-[0.45em] rounded-full bg-white px-[0.8em] py-[0.35em] text-[0.66em] font-medium text-[#0f766e] ring-1 ring-teal-100">
            <span className="size-[0.55em] rounded-full bg-[#22c55e]" />
            Open today · 8am to 6pm
          </span>
          <p className="mt-[0.7em] text-[2.4em] leading-[1.08] font-semibold tracking-[-0.03em]">Gentle dental care in the heart of Lekki.</p>
          <p className="mt-[0.9em] max-w-[25em] text-[0.82em] leading-[1.55] text-slate-500">
            Check-ups, whitening, and braces from a friendly team. Book online in under a minute.
          </p>
          <div className="mt-[1.4em] flex gap-[0.8em]">
            <span className="rounded-[0.5em] bg-[#0f766e] px-[1.3em] py-[0.7em] text-[0.78em] font-medium text-white">Book a visit</span>
            <span className="flex items-center gap-[0.45em] rounded-[0.5em] border border-slate-200 px-[1.2em] py-[0.7em] text-[0.78em] font-medium">
              <MessageCircle className="size-[1.05em] text-[#16a34a]" strokeWidth={2} />
              WhatsApp us
            </span>
          </div>
        </div>

        <div className={cn("rounded-[1em] bg-white p-[1.3em] shadow-[0_0.8em_2.5em_rgba(15,118,110,0.15)] ring-1 ring-teal-50", withChat && "opacity-90")}>
          <p className="text-[0.84em] font-semibold">Book an appointment</p>
          <p className="mt-[0.6em] rounded-[0.5em] border border-slate-200 px-[0.8em] py-[0.5em] text-[0.7em] text-slate-600">Check-up and cleaning</p>
          <div className="mt-[0.9em] grid grid-cols-6 gap-[0.4em]">
            {days.map(([d, n]) => (
              <span
                key={d}
                className={cn(
                  "flex flex-col items-center rounded-[0.5em] py-[0.45em] text-[0.62em]",
                  n === "17" ? "bg-[#0f766e] text-white" : "bg-slate-50 text-slate-500",
                )}
              >
                {d}
                <span className="text-[1.25em] font-semibold">{n}</span>
              </span>
            ))}
          </div>
          <div className="mt-[0.9em] flex gap-[0.5em]">
            {["9:00 AM", "11:30 AM", "2:30 PM"].map((t) => (
              <span
                key={t}
                className={cn(
                  "rounded-full px-[0.8em] py-[0.35em] text-[0.64em] font-medium",
                  t === "2:30 PM" ? "bg-[#ccfbf1] text-[#0f766e] ring-1 ring-[#0f766e]" : "bg-slate-50 text-slate-600",
                )}
              >
                {t}
              </span>
            ))}
          </div>
          <span className="relative mt-[1em] block rounded-[0.5em] bg-[#0f172a] py-[0.6em] text-center text-[0.74em] font-medium text-white">
            Confirm booking
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[1em] px-[3em]">
        {services.map(({ icon: Icon, name, from }) => (
          <div key={name} className="rounded-[0.8em] border border-slate-100 p-[1em]">
            <span className="flex size-[2em] items-center justify-center rounded-[0.5em] bg-[#f0fdfa] text-[#0f766e]">
              <Icon className="size-[1.1em]" strokeWidth={2} />
            </span>
            <p className="mt-[0.6em] text-[0.8em] font-semibold">{name}</p>
            <p className="text-[0.68em] text-slate-500">{from}</p>
          </div>
        ))}
      </div>

      <div className="mt-[1.4em] px-[3em]">
        <div className="flex items-baseline justify-between">
          <span className="text-[0.85em] font-semibold">From our blog</span>
          <span className="text-[0.66em] text-[#0f766e]">All articles →</span>
        </div>
        <div className="mt-[0.6em] grid grid-cols-3 gap-[1em]">
          {[
            ["How often should you see a dentist?", "4 min read", "from-[#99f6e4] to-[#0f766e]"],
            ["Whitening: what to expect", "3 min read", "from-[#fde68a] to-[#f59e0b]"],
            ["Braces or aligners for adults?", "5 min read", "from-[#c7d2fe] to-[#4f46e5]"],
          ].map(([t, m, g]) => (
            <div key={t} className="flex items-center gap-[0.7em]">
              <span className={`size-[2.6em] shrink-0 rounded-[0.5em] bg-gradient-to-br ${g}`} />
              <span>
                <span className="block text-[0.72em] leading-[1.3] font-medium">{t}</span>
                <span className="text-[0.62em] text-slate-400">{m}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {withChat ? (
        <ChatWidget />
      ) : (
        <span className="absolute right-[1.5em] bottom-[1.5em] flex size-[3em] items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg">
          <Ping className="bg-[#25d366]" />
          <MessageCircle className="relative size-[1.4em]" strokeWidth={2} />
        </span>
      )}
    </div>
  );
}
