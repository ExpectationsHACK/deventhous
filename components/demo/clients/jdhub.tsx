import {
  Cable,
  CreditCard,
  Gamepad2,
  Headphones,
  Heart,
  Laptop,
  MessageCircle,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Star,
  Truck,
  User,
  Watch,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor, loop } from "../screen";

/* Simple CSS-drawn devices, sized in em */

function PhoneArt({ screen = "from-[#38bdf8] via-[#6366f1] to-[#a855f7]", className }: { screen?: string; className?: string }) {
  return (
    <div className={cn("relative h-[9em] w-[4.6em] rounded-[0.9em] bg-[#0f172a] p-[0.28em] shadow-[0_1em_2em_-0.6em_rgba(0,0,0,0.6)]", className)}>
      <div className={cn("relative h-full w-full overflow-hidden rounded-[0.7em] bg-gradient-to-br", screen)}>
        <span className="absolute top-[0.35em] left-1/2 h-[0.45em] w-[1.4em] -translate-x-1/2 rounded-full bg-[#0f172a]" />
        <span className="absolute top-[2.4em] left-[0.5em] text-[0.9em] font-semibold text-white">9:41</span>
        <span className="absolute right-[0.4em] bottom-[0.5em] left-[0.4em] grid grid-cols-4 gap-[0.2em]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="aspect-square rounded-[0.2em] bg-white/30" />
          ))}
        </span>
      </div>
    </div>
  );
}

function LaptopArt() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[4.4em] w-[7em] rounded-t-[0.4em] bg-[#1e293b] p-[0.25em]">
        <div className="h-full rounded-[0.2em] bg-gradient-to-br from-[#0ea5e9] to-[#1e3a8a]" />
      </div>
      <div className="h-[0.45em] w-[8.4em] rounded-b-[0.4em] bg-gradient-to-b from-[#cbd5e1] to-[#94a3b8]" />
    </div>
  );
}

function BudsArt() {
  return (
    <div className="relative h-[4.4em] w-[5.6em]">
      <div className="absolute bottom-0 left-1/2 h-[3em] w-[5.2em] -translate-x-1/2 rounded-[1.4em] bg-gradient-to-b from-white to-[#e2e8f0] shadow-[inset_0_-0.3em_0.6em_rgba(0,0,0,0.08),0_0.6em_1em_-0.4em_rgba(0,0,0,0.35)]">
        <span className="absolute top-[1.4em] left-1/2 size-[0.35em] -translate-x-1/2 rounded-full bg-[#22c55e]" />
      </div>
      <span className="absolute top-0 left-[1em] h-[2.6em] w-[1em] rotate-[-12deg] rounded-full bg-white shadow" />
      <span className="absolute top-0 right-[1em] h-[2.6em] w-[1em] rotate-[12deg] rounded-full bg-white shadow" />
    </div>
  );
}

function WatchArt() {
  return (
    <div className="flex flex-col items-center">
      <span className="h-[1.3em] w-[2.2em] rounded-t-[0.5em] bg-[#f97316]" />
      <span className="flex h-[3.4em] w-[3em] items-center justify-center rounded-[0.9em] bg-[#0f172a] shadow-lg">
        <span className="flex h-[2.8em] w-[2.4em] flex-col items-center justify-center rounded-[0.6em] bg-gradient-to-b from-[#1e293b] to-black text-white">
          <span className="text-[0.75em] font-semibold">10:09</span>
          <span className="mt-[0.15em] h-[0.2em] w-[1.4em] rounded-full bg-[#22c55e]" />
        </span>
      </span>
      <span className="h-[1.3em] w-[2.2em] rounded-b-[0.5em] bg-[#f97316]" />
    </div>
  );
}

const categories = [
  { icon: Smartphone, label: "Phones" },
  { icon: Laptop, label: "Laptops" },
  { icon: Headphones, label: "Audio" },
  { icon: Watch, label: "Smartwatches" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Cable, label: "Accessories" },
];

const products = [
  { name: "Smartphone X Pro 256GB", price: "₦845,000", was: "₦899,000", art: <PhoneArt />, bg: "from-[#eef2ff] to-[#e0e7ff]" },
  { name: "UltraBook 14 laptop", price: "₦1,150,000", was: "₦1,240,000", art: <LaptopArt />, bg: "from-[#f0f9ff] to-[#e0f2fe]", target: true },
  { name: "Wireless earbuds Pro", price: "₦38,000", was: "₦45,000", art: <BudsArt />, bg: "from-[#f0fdf4] to-[#dcfce7]" },
  { name: "Smartwatch S2", price: "₦92,500", was: "₦105,000", art: <WatchArt />, bg: "from-[#fff7ed] to-[#ffedd5]" },
];

/** A digit strip that counts down: digits 9..0 (or 5..0) step upward. */
function CountDigit({ max, seconds }: { max: number; seconds: number }) {
  const digits = Array.from({ length: max + 1 }, (_, i) => max - i);
  return (
    <span className="inline-block h-[1em] overflow-hidden align-top leading-[1em]">
      <span
        className="flex flex-col"
        style={{ "--to": `-${max + 1}em`, animation: `demo-count ${seconds}s steps(${max + 1}) infinite` } as React.CSSProperties}
      >
        {digits.map((d) => (
          <span key={d} className="h-[1em]">
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

/** Illustrated JD Hub: an online gadget store. Pass `full` for the one-page preview. */
export function JdHubSite({ full = false }: { full?: boolean }) {
  return (
    <div className="flex min-h-full flex-col bg-[#f4f6fb] text-[#0b1220]">
      <div className="bg-[#0b1220] py-[0.45em] text-center text-[0.66em] text-white/85">
        Flash sale on accessories <span className="mx-[0.8em] text-white/40">·</span> Delivery across Nigeria
        <span className="mx-[0.8em] text-white/40">·</span> Order on WhatsApp
      </div>

      <div className="flex items-center gap-[2em] bg-white px-[3em] py-[0.9em]">
        <span className="flex shrink-0 items-center gap-[0.45em]">
          <span className="flex size-[1.9em] items-center justify-center rounded-[0.5em] bg-[#2563eb] text-white">
            <Zap className="size-[1.1em] fill-current" strokeWidth={2} />
          </span>
          <span className="text-[1.15em] font-extrabold tracking-tight">
            JD<span className="text-[#2563eb]">Hub</span>
          </span>
        </span>
        <span className="flex flex-1 items-center gap-[0.5em] rounded-full bg-[#f1f5f9] px-[1em] py-[0.55em] text-[0.74em] text-slate-400 @max-3xl/page:hidden">
          <Search className="size-[1.2em]" strokeWidth={2} />
          Search phones, laptops, accessories…
        </span>
        <span className="ml-auto flex items-center gap-[1.1em] text-slate-600">
          <Heart className="size-[1.15em]" strokeWidth={1.75} />
          <User className="size-[1.15em]" strokeWidth={1.75} />
          <span className="relative">
            <ShoppingCart className="size-[1.2em]" strokeWidth={1.75} />
            <span
              className="absolute -top-[0.55em] -right-[0.65em] flex size-[1.2em] items-center justify-center rounded-full bg-[#2563eb] text-[0.6em] font-bold text-white"
              style={loop("demo-bump 6s ease-out")}
            >
              <span className="absolute" style={loop("demo-out 6s linear")}>
                2
              </span>
              <span className="demo-alt absolute" style={loop("demo-in 6s linear")}>
                3
              </span>
            </span>
          </span>
        </span>
      </div>
      <div className="flex gap-[2em] overflow-hidden border-b border-slate-200 bg-white px-[3em] pb-[0.7em] text-[0.74em] whitespace-nowrap text-slate-500">
        {categories.map((c, i) => (
          <span key={c.label} className={i === 0 ? "font-semibold text-[#2563eb]" : undefined}>
            {c.label}
          </span>
        ))}
        <span className="ml-auto font-semibold text-[#dc2626]">Deals</span>
      </div>

      <div className="grid grid-cols-[1.65fr_1fr] gap-[1em] px-[3em] pt-[1.5em] @max-3xl/page:grid-cols-1">
        <div className="relative min-h-[17em] overflow-hidden rounded-[1.2em] bg-gradient-to-br from-[#2563eb] via-[#1e3a8a] to-[#0b1220] p-[2.2em] text-white">
          <div className="absolute -top-[4em] -right-[3em] size-[16em] rounded-full bg-[#60a5fa]/25 blur-[2em]" />
          <div className="relative max-w-[18em]">
            <span className="rounded-full bg-white/15 px-[0.8em] py-[0.3em] text-[0.64em] font-medium tracking-wide uppercase">New arrivals</span>
            <p className="mt-[0.7em] text-[2.3em] leading-[1.05] font-extrabold tracking-[-0.03em]">Genuine gadgets. Delivered fast.</p>
            <p className="mt-[0.8em] text-[0.78em] leading-[1.5] text-white/75">Phones, laptops, audio, and accessories, with warranty and secure payment.</p>
            <div className="mt-[1.3em] flex gap-[0.6em] text-[0.74em] font-semibold">
              <span className="rounded-full bg-white px-[1.2em] py-[0.6em] text-[#1e3a8a]">Shop phones</span>
              <span className="flex items-center gap-[0.35em] rounded-full bg-[#22c55e] px-[1.1em] py-[0.6em]">
                <MessageCircle className="size-[1.1em]" strokeWidth={2.25} />
                Order on WhatsApp
              </span>
            </div>
          </div>
          <div className="absolute right-[2em] bottom-[-1.5em] flex items-end gap-[0.6em] @max-3xl/page:right-[1em] @max-3xl/page:opacity-40">
            <PhoneArt className="rotate-[-8deg]" screen="from-[#f472b6] via-[#a855f7] to-[#6366f1]" />
            <div style={{ animation: "demo-float 4s ease-in-out infinite" }}>
              <PhoneArt className="h-[11em] w-[5.6em]" />
            </div>
          </div>
          <span className="absolute top-[1.4em] right-[1.6em] rounded-full bg-[#facc15] px-[0.8em] py-[0.35em] text-[0.66em] font-bold text-[#0b1220]">
            From ₦285,000
          </span>
        </div>

        <div className="grid grid-rows-2 gap-[1em] @max-3xl/page:grid-cols-2 @max-3xl/page:grid-rows-1">
          <div className="relative overflow-hidden rounded-[1.2em] bg-[#ecfeff] p-[1.3em]">
            <p className="text-[0.64em] font-semibold tracking-wide text-[#0e7490] uppercase">Audio deals</p>
            <p className="mt-[0.3em] text-[1.25em] leading-[1.1] font-bold">Up to 20% off earbuds</p>
            <p className="mt-[0.5em] text-[0.68em] font-semibold text-[#0e7490] underline">Shop audio</p>
            <div className="absolute right-[0.8em] bottom-[0.6em]">
              <BudsArt />
            </div>
          </div>
          <div className="rounded-[1.2em] bg-[#0b1220] p-[1.3em] text-white">
            <p className="flex items-center gap-[0.35em] text-[0.64em] font-semibold tracking-wide text-[#facc15] uppercase">
              <Zap className="size-[1.1em] fill-current" strokeWidth={2} />
              Flash sale
            </p>
            <p className="mt-[0.3em] text-[1.25em] leading-[1.1] font-bold">Chargers and cables</p>
            <p className="mt-[0.6em] text-[0.64em] text-white/60">Ends in</p>
            <p className="mt-[0.2em] flex gap-[0.3em] font-mono text-[1.2em] font-bold">
              <span className="rounded-[0.3em] bg-white/10 px-[0.35em]">02</span>:
              <span className="rounded-[0.3em] bg-white/10 px-[0.35em]">14</span>:
              <span className="rounded-[0.3em] bg-white/10 px-[0.35em]">
                <CountDigit max={5} seconds={60} />
                <CountDigit max={9} seconds={10} />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[1.5em] grid grid-cols-6 gap-[0.8em] px-[3em] @max-3xl/page:grid-cols-3">
        {categories.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-[0.4em] rounded-[0.9em] bg-white py-[0.9em] shadow-sm">
            <span className="flex size-[2.4em] items-center justify-center rounded-full bg-[#eff6ff] text-[#2563eb]">
              <Icon className="size-[1.2em]" strokeWidth={1.75} />
            </span>
            <span className="text-[0.66em] font-medium">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-[1.6em] flex items-baseline justify-between px-[3em]">
        <span className="text-[1em] font-bold">Trending now</span>
        <span className="text-[0.7em] font-semibold text-[#2563eb]">See all</span>
      </div>
      <div className="mt-[0.8em] grid grid-cols-4 gap-[1em] px-[3em] @max-3xl/page:grid-cols-2">
        {products.map((p) => (
          <div key={p.name} className="overflow-hidden rounded-[1em] bg-white shadow-sm">
            <div className={cn("relative flex h-[10em] items-center justify-center bg-gradient-to-br", p.bg)}>
              {p.art}
              <span className="absolute top-[0.6em] left-[0.6em] rounded-full bg-[#dc2626] px-[0.6em] py-[0.15em] text-[0.58em] font-bold text-white">Sale</span>
            </div>
            <div className="p-[0.8em]">
              <p className="text-[0.74em] font-semibold">{p.name}</p>
              <p className="mt-[0.2em] flex gap-[0.1em] text-[#f59e0b]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-[0.7em] fill-current" strokeWidth={0} />
                ))}
              </p>
              <p className="mt-[0.3em] text-[0.8em] font-bold">
                {p.price} <span className="text-[0.82em] font-normal text-slate-400 line-through">{p.was}</span>
              </p>
              <span className="relative mt-[0.6em] block rounded-full bg-[#0b1220] py-[0.5em] text-center text-[0.64em] font-semibold text-white">
                {p.target ? (
                  <>
                    <span className="invisible">Add to cart</span>
                    <span className="absolute inset-0 flex items-center justify-center" style={loop("demo-out 6s linear")}>
                      Add to cart
                    </span>
                    <span className="demo-alt absolute inset-0 flex items-center justify-center rounded-full bg-[#16a34a]" style={loop("demo-in 6s linear")}>
                      Added ✓
                    </span>
                    <DemoCursor className="top-[0.3em] left-[55%]" style={loop("demo-cursor 6s ease-in-out")} />
                  </>
                ) : (
                  "Add to cart"
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      {full && (
        <>
          <div className="mx-[3em] mt-[2em] grid grid-cols-4 gap-[1em] rounded-[1em] bg-white p-[1.3em] @max-3xl/page:grid-cols-2">
            {[
              { icon: ShieldCheck, title: "Genuine products", text: "Sealed, with warranty" },
              { icon: Truck, title: "Fast delivery", text: "Across Nigeria" },
              { icon: CreditCard, title: "Secure checkout", text: "Card, transfer, USSD" },
              { icon: MessageCircle, title: "WhatsApp support", text: "Real people, quick replies" },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center gap-[0.7em]">
                <span className="flex size-[2.4em] shrink-0 items-center justify-center rounded-[0.7em] bg-[#eff6ff] text-[#2563eb]">
                  <Icon className="size-[1.2em]" strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block text-[0.76em] font-semibold">{title}</span>
                  <span className="text-[0.66em] text-slate-500">{text}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="mx-[3em] mt-[2em] grid grid-cols-[1.2fr_1fr] items-center gap-[2em] overflow-hidden rounded-[1.2em] bg-gradient-to-r from-[#0b1220] to-[#1e3a8a] p-[2em] text-white @max-3xl/page:grid-cols-1">
            <div>
              <p className="text-[0.66em] font-semibold tracking-wide text-[#facc15] uppercase">Can&apos;t find it?</p>
              <p className="mt-[0.4em] text-[1.7em] leading-[1.1] font-extrabold tracking-tight">Looking for a specific model?</p>
              <p className="mt-[0.6em] text-[0.76em] text-white/70">Send us the model on WhatsApp and we&apos;ll check availability and price for you.</p>
              <span className="mt-[1em] inline-flex items-center gap-[0.4em] rounded-full bg-[#22c55e] px-[1.2em] py-[0.6em] text-[0.74em] font-semibold">
                <MessageCircle className="size-[1.1em]" strokeWidth={2.25} />
                Ask on WhatsApp
              </span>
            </div>
            <div className="flex justify-center gap-[1em]">
              <PhoneArt screen="from-[#22d3ee] to-[#2563eb]" />
              <PhoneArt className="translate-y-[1em]" screen="from-[#fb923c] to-[#db2777]" />
            </div>
          </div>

          <footer className="mt-[2.5em] bg-[#0b1220] px-[3em] py-[2em] text-white/70">
            <div className="grid grid-cols-4 gap-[2em] text-[0.7em] @max-3xl/page:grid-cols-2">
              <div>
                <span className="text-[1.4em] font-extrabold text-white">
                  JD<span className="text-[#60a5fa]">Hub</span>
                </span>
                <p className="mt-[0.6em]">Your one-stop shop for genuine gadgets.</p>
              </div>
              {[
                ["Shop", "Phones", "Laptops", "Audio", "Accessories"],
                ["Help", "Delivery", "Returns", "Warranty", "Track order"],
                ["Contact", "WhatsApp", "Email", "Instagram"],
              ].map(([title, ...links]) => (
                <div key={title}>
                  <p className="font-semibold text-white">{title}</p>
                  {links.map((l) => (
                    <p key={l} className="mt-[0.4em]">
                      {l}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </footer>
        </>
      )}
      {!full && <div className="h-[2em]" />}
    </div>
  );
}
