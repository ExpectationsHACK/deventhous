import { Building2, Check, CloudUpload, Gift, MessageCircle, Palette, Printer, ShoppingBag, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { loop } from "../screen";

type Kind = "tshirt" | "hoodie" | "mug" | "tote" | "cap" | "gift";

/** Flat product silhouettes in a 100x100 box. */
function ProductArt({ kind, fill, accent, className }: { kind: Kind; fill: string; accent: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("size-[5.5em]", className)}>
      {kind === "tshirt" && (
        <>
          <path d="M32 12 L42 8 Q50 16 58 8 L68 12 L88 27 L79 40 L71 35 L71 92 L29 92 L29 35 L21 40 L12 27 Z" fill={fill} stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
          <circle cx="50" cy="48" r="9" fill={accent} />
        </>
      )}
      {kind === "hoodie" && (
        <>
          <path d="M36 14 Q50 2 64 14 L70 16 L88 34 L80 46 L72 40 L72 92 L28 92 L28 40 L20 46 L12 34 L30 16 Z" fill={fill} stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
          <path d="M40 16 Q50 30 60 16" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
          <rect x="38" y="62" width="24" height="14" rx="4" fill="rgba(0,0,0,0.12)" />
          <rect x="42" y="38" width="16" height="12" rx="2" fill={accent} />
        </>
      )}
      {kind === "mug" && (
        <>
          <path d="M68 38 Q86 38 86 54 Q86 70 68 70" fill="none" stroke={fill} strokeWidth="7" />
          <rect x="18" y="26" width="52" height="60" rx="6" fill={fill} stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
          <rect x="28" y="44" width="32" height="20" rx="3" fill={accent} />
        </>
      )}
      {kind === "tote" && (
        <>
          <path d="M36 32 Q36 12 50 12 Q64 12 64 32" fill="none" stroke="#a16207" strokeWidth="4" />
          <path d="M22 32 L78 32 L74 92 L26 92 Z" fill={fill} stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
          <path d="M40 54 L50 64 L62 48" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" />
        </>
      )}
      {kind === "cap" && (
        <>
          <path d="M18 62 Q18 26 50 26 Q82 26 82 62 Z" fill={fill} stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
          <path d="M14 62 L92 62 Q96 72 70 72 L14 72 Z" fill={fill} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
          <circle cx="50" cy="26" r="3" fill="rgba(0,0,0,0.25)" />
          <rect x="38" y="40" width="24" height="10" rx="2" fill={accent} />
        </>
      )}
      {kind === "gift" && (
        <>
          <rect x="16" y="40" width="68" height="50" rx="4" fill={fill} />
          <rect x="12" y="30" width="76" height="14" rx="3" fill={fill} stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
          <rect x="45" y="30" width="10" height="60" fill={accent} />
          <path d="M50 30 Q36 14 30 24 Q28 30 50 30 Q72 30 70 24 Q64 14 50 30" fill="none" stroke={accent} strokeWidth="4" />
        </>
      )}
    </svg>
  );
}

const products: { kind: Kind; name: string; from: string; fill: string; accent: string; bg: string }[] = [
  { kind: "tshirt", name: "Custom T-shirts", from: "From ₦6,500", fill: "#111827", accent: "#facc15", bg: "bg-[#fef9c3]" },
  { kind: "hoodie", name: "Hoodies", from: "From ₦14,000", fill: "#e11d74", accent: "#ffffff", bg: "bg-[#fce7f3]" },
  { kind: "mug", name: "Branded mugs", from: "From ₦4,500", fill: "#ffffff", accent: "#0891b2", bg: "bg-[#cffafe]" },
  { kind: "tote", name: "Tote bags", from: "From ₦3,800", fill: "#fef3c7", accent: "#e11d74", bg: "bg-[#ffedd5]" },
  { kind: "cap", name: "Caps", from: "From ₦5,000", fill: "#0891b2", accent: "#facc15", bg: "bg-[#e0f2fe]" },
  { kind: "gift", name: "Gift boxes", from: "From ₦12,000", fill: "#7c3aed", accent: "#facc15", bg: "bg-[#ede9fe]" },
];

const steps = [
  { icon: CloudUpload, title: "Upload your design", text: "Logo, artwork, or text. PNG, PDF, or AI." },
  { icon: Palette, title: "Pick product and colour", text: "See a live preview before you pay." },
  { icon: Printer, title: "We print and deliver", text: "Quality checked, packed, and shipped." },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-[0.4em]">
      <span className="flex gap-[0.15em]">
        <span className="size-[0.6em] rounded-full bg-[#06b6d4]" />
        <span className="size-[0.6em] rounded-full bg-[#e11d74]" />
        <span className="size-[0.6em] rounded-full bg-[#facc15]" />
      </span>
      <span className={cn("text-[1.2em] font-black tracking-tight", light ? "text-white" : "text-[#111827]")}>
        dml<span className="font-medium">prints</span>
      </span>
    </span>
  );
}

/** Illustrated DML Prints: custom printing on clothes, gifts, and accessories. Pass `full` for the one-page preview. */
export function DmlPrintsSite({ full = false }: { full?: boolean }) {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#111827]">
      <div className="bg-[#e11d74] py-[0.45em] text-center text-[0.66em] font-medium text-white">
        Bulk orders for events, schools, and businesses <span className="mx-[0.6em] opacity-60">·</span> Delivery nationwide
      </div>

      <div className="flex items-center justify-between border-b border-slate-100 px-[3em] py-[0.9em]">
        <Logo />
        <div className="flex gap-[1.8em] text-[0.76em] text-slate-500 @max-3xl/page:hidden">
          <span>T-shirts</span>
          <span>Hoodies</span>
          <span>Mugs</span>
          <span>Gifts</span>
          <span>Accessories</span>
          <span className="font-semibold text-[#e11d74]">Bulk orders</span>
        </div>
        <span className="rounded-full bg-[#111827] px-[1.1em] py-[0.55em] text-[0.74em] font-semibold text-white">Start designing</span>
      </div>

      <div className="grid grid-cols-[1fr_1.1fr] items-center gap-[2.5em] px-[3em] pt-[2em] @max-3xl/page:grid-cols-1">
        <div>
          <span className="inline-flex items-center gap-[0.4em] rounded-full bg-[#ecfeff] px-[0.8em] py-[0.3em] text-[0.66em] font-semibold text-[#0e7490]">
            <Printer className="size-[1.1em]" strokeWidth={2} />
            Custom printing in Nigeria
          </span>
          <p className="mt-[0.6em] text-[2.6em] leading-[1.02] font-black tracking-[-0.04em]">
            Your design, printed on{" "}
            <span className="relative inline-block">
              anything.
              <span className="absolute inset-x-0 bottom-[0.05em] -z-0 h-[0.2em] rounded-full bg-[#facc15]" />
            </span>
          </p>
          <p className="mt-[0.9em] max-w-[25em] text-[0.82em] leading-[1.55] text-slate-500">
            T-shirts, hoodies, mugs, tote bags, caps, and gift boxes. Upload your logo or artwork, preview it on the product, and we print and deliver.
          </p>
          <div className="mt-[1.4em] flex gap-[0.7em] text-[0.76em] font-semibold">
            <span className="flex items-center gap-[0.4em] rounded-full bg-[#111827] px-[1.2em] py-[0.65em] text-white">
              <CloudUpload className="size-[1.1em]" strokeWidth={2} />
              Upload your design
            </span>
            <span className="flex items-center gap-[0.4em] rounded-full border border-[#16a34a] px-[1.1em] py-[0.65em] text-[#15803d]">
              <MessageCircle className="size-[1.1em]" strokeWidth={2} />
              Chat on WhatsApp
            </span>
          </div>
        </div>

        <div className="relative h-[17em] overflow-hidden rounded-[1.4em] bg-gradient-to-br from-[#fdf2f8] via-[#f0f9ff] to-[#fefce8]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 100 100" className="size-[13em] drop-shadow-[0_1em_1.2em_rgba(0,0,0,0.15)]">
              <path
                d="M32 12 L42 8 Q50 16 58 8 L68 12 L88 27 L79 40 L71 35 L71 92 L29 92 L29 35 L21 40 L12 27 Z"
                fill="#ffffff"
                stroke="rgba(0,0,0,0.12)"
                strokeWidth="1"
                style={{ animation: "demo-shirt 9s linear infinite" }}
              />
              <g style={{ animation: "demo-print 9s linear infinite" }} fill="#e11d74">
                <circle cx="44" cy="45" r="6" />
                <rect x="47" y="40" width="10" height="10" rx="2" />
              </g>
            </svg>
          </div>
          <div className="absolute top-[1.2em] left-[1.2em] flex items-center gap-[0.6em] rounded-[0.8em] bg-white px-[0.8em] py-[0.6em] shadow-lg">
            <span className="flex size-[2em] items-center justify-center rounded-[0.5em] bg-[#fce7f3] text-[#e11d74]">
              <CloudUpload className="size-[1.1em]" strokeWidth={2} />
            </span>
            <span className="w-[8em]">
              <span className="flex items-center justify-between text-[0.62em] font-semibold">
                logo.png
                <Check className="size-[1.1em] text-[#16a34a]" strokeWidth={3} />
              </span>
              <span className="mt-[0.3em] block h-[0.3em] overflow-hidden rounded-full bg-slate-100">
                <span className="block h-full w-full origin-left rounded-full bg-[#e11d74]" style={loop("ill-fill 6s ease-in-out")} />
              </span>
            </span>
          </div>
          <div className="absolute right-[1.2em] bottom-[1.2em] rounded-[0.8em] bg-white px-[0.8em] py-[0.6em] shadow-lg">
            <p className="text-[0.58em] font-semibold text-slate-500 uppercase">Colour</p>
            <div className="mt-[0.35em] flex gap-[0.35em]">
              {["#ffffff", "#111827", "#0891b2", "#e11d74", "#facc15"].map((c) => (
                <span key={c} className="size-[1.2em] rounded-full ring-1 ring-black/10" style={{ background: c }} />
              ))}
            </div>
          </div>
          <span className="absolute top-[1.4em] right-[1.4em] rounded-full bg-[#111827] px-[0.8em] py-[0.3em] text-[0.6em] font-semibold text-white">Live preview</span>
        </div>
      </div>

      <div className="mx-[3em] mt-[1.6em] grid grid-cols-3 gap-[1em] @max-3xl/page:grid-cols-1">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="flex items-center gap-[0.7em] rounded-[1em] border border-slate-100 p-[0.9em]">
            <span className="flex size-[2.4em] shrink-0 items-center justify-center rounded-full bg-[#111827] text-white">
              <Icon className="size-[1.2em]" strokeWidth={1.75} />
            </span>
            <span>
              <span className="block text-[0.74em] font-semibold">
                {i + 1}. {title}
              </span>
              <span className="text-[0.64em] text-slate-500">{text}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-[1.6em] flex items-baseline justify-between px-[3em]">
        <span className="text-[1em] font-bold">What we print</span>
        <span className="text-[0.7em] font-semibold text-[#e11d74]">View all products</span>
      </div>
      <div className="mt-[0.8em] grid grid-cols-6 gap-[0.9em] px-[3em] @max-3xl/page:grid-cols-3">
        {products.map((p) => (
          <div key={p.name}>
            <div className={cn("flex h-[7.5em] items-center justify-center rounded-[1em]", p.bg)}>
              <ProductArt kind={p.kind} fill={p.fill} accent={p.accent} />
            </div>
            <p className="mt-[0.45em] text-[0.72em] font-semibold">{p.name}</p>
            <p className="text-[0.64em] text-slate-500">{p.from}</p>
          </div>
        ))}
      </div>

      {full && (
        <>
          <div className="mx-[3em] mt-[2em] grid grid-cols-[1.3fr_1fr] items-center gap-[2em] rounded-[1.4em] bg-[#111827] p-[2em] text-white @max-3xl/page:grid-cols-1">
            <div>
              <p className="flex items-center gap-[0.4em] text-[0.66em] font-semibold tracking-wide text-[#facc15] uppercase">
                <Building2 className="size-[1.2em]" strokeWidth={2} />
                Bulk and corporate orders
              </p>
              <p className="mt-[0.4em] text-[1.7em] leading-[1.1] font-black tracking-tight">Printing for an event, a team, or a brand launch?</p>
              <p className="mt-[0.6em] text-[0.78em] text-white/70">Branded shirts, souvenirs, and gift boxes in any quantity. Tell us what you need and get a bulk quote.</p>
              <span className="mt-[1em] inline-flex rounded-full bg-[#e11d74] px-[1.2em] py-[0.6em] text-[0.76em] font-semibold">Get a bulk quote</span>
            </div>
            <div className="grid grid-cols-3 gap-[0.6em]">
              {(["tshirt", "mug", "gift"] as Kind[]).map((k, i) => (
                <div key={k} className="flex aspect-square items-center justify-center rounded-[0.9em] bg-white/10">
                  <ProductArt kind={k} fill={["#facc15", "#ffffff", "#e11d74"][i]} accent={["#111827", "#e11d74", "#facc15"][i]} className="size-[4.5em]" />
                </div>
              ))}
            </div>
          </div>

          <div className="mx-[3em] mt-[2em] grid grid-cols-3 gap-[1em] @max-3xl/page:grid-cols-1">
            {[
              { icon: Gift, title: "Gifts for every occasion", text: "Birthdays, weddings, and corporate events." },
              { icon: ShoppingBag, title: "Small or large orders", text: "A single gift or a full team kit." },
              { icon: Truck, title: "Delivered to your door", text: "Lagos and nationwide shipping." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[1em] bg-[#f8fafc] p-[1.1em]">
                <Icon className="size-[1.5em] text-[#e11d74]" strokeWidth={1.75} />
                <p className="mt-[0.5em] text-[0.8em] font-semibold">{title}</p>
                <p className="text-[0.68em] text-slate-500">{text}</p>
              </div>
            ))}
          </div>

          <footer className="mt-[2.5em] border-t border-slate-100 px-[3em] py-[2em]">
            <div className="flex flex-wrap items-center justify-between gap-[1em]">
              <Logo />
              <div className="flex gap-[1.5em] text-[0.7em] text-slate-500">
                <span>Products</span>
                <span>Bulk orders</span>
                <span>Track order</span>
                <span>Contact</span>
              </div>
            </div>
          </footer>
        </>
      )}
      {!full && <div className="h-[2em]" />}
    </div>
  );
}
