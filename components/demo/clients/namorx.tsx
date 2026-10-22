import { Ruler, Search, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor, loop } from "../screen";

type Look = "gown" | "suit" | "kaftan" | "twopiece";

/** Elegant, faceless garment silhouettes in a 100x140 box. */
function Silhouette({ look, from, to, className }: { look: Look; from: string; to: string; className?: string }) {
  const id = `g-${look}-${from.replace("#", "")}`;
  return (
    <svg viewBox="0 0 100 140" className={cn("h-[11em]", className)}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="14" r="8" fill="rgba(0,0,0,0.18)" />
      <rect x="47" y="21" width="6" height="7" fill="rgba(0,0,0,0.18)" />
      {look === "gown" && (
        <path d="M38 30 Q50 26 62 30 L60 52 Q58 58 62 64 Q76 100 84 136 L16 136 Q24 100 38 64 Q42 58 40 52 Z" fill={`url(#${id})`} />
      )}
      {look === "kaftan" && (
        <>
          <path d="M36 30 Q50 26 64 30 L86 52 L76 60 L68 52 L72 136 L28 136 L32 52 L24 60 L14 52 Z" fill={`url(#${id})`} />
          <path d="M50 30 L50 70" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
          <path d="M40 32 Q50 44 60 32" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        </>
      )}
      {look === "suit" && (
        <>
          <path d="M34 30 Q50 26 66 30 L72 34 L74 84 L26 84 L28 34 Z" fill={`url(#${id})`} />
          <path d="M44 30 L50 52 L56 30" fill="#f7f3ec" />
          <path d="M50 30 L44 46 L50 52 L56 46 Z" fill="rgba(0,0,0,0.35)" />
          <path d="M30 84 L48 84 L46 136 L34 136 Z M52 84 L70 84 L66 136 L54 136 Z" fill={`url(#${id})`} />
        </>
      )}
      {look === "twopiece" && (
        <>
          <path d="M38 30 Q50 26 62 30 L64 56 L36 56 Z" fill={`url(#${id})`} />
          <path d="M36 60 L64 60 Q72 96 76 136 L24 136 Q28 96 36 60 Z" fill={`url(#${id})`} opacity="0.85" />
          <path d="M36 60 L64 60" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        </>
      )}
    </svg>
  );
}

const collection: { look: Look; name: string; price: string; bg: string; from: string; to: string; target?: boolean }[] = [
  { look: "gown", name: "Emerald evening gown", price: "₦185,000", bg: "bg-[#e7efe9]", from: "#065f46", to: "#022c22" },
  { look: "kaftan", name: "Gold embroidered kaftan", price: "₦120,000", bg: "bg-[#f3ead9]", from: "#c9a227", to: "#8a6d1b", target: true },
  { look: "suit", name: "Tailored black suit", price: "₦230,000", bg: "bg-[#e9e7e4]", from: "#1f2937", to: "#030712" },
  { look: "twopiece", name: "Wine silk two-piece", price: "₦145,000", bg: "bg-[#f1e4e4]", from: "#7f1d1d", to: "#3f0d0d" },
];

const marquee = ["Ready to wear", "Bespoke tailoring", "Bridal", "Asoebi", "Menswear", "Made in Lagos"];

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={cn("flex flex-col items-center leading-none", light ? "text-[#f7f3ec]" : "text-[#111]")}>
      <span className="font-serif text-[1.4em] tracking-[0.35em]">NAMORX</span>
      <span className="mt-[0.25em] text-[0.5em] tracking-[0.6em] text-[#b08d57]">COUTURE</span>
    </span>
  );
}

/** Illustrated Namorx Couture: a fashion clothing brand store. Pass `full` for the one-page preview. */
export function NamorxSite({ full = false }: { full?: boolean }) {
  return (
    <div className="flex min-h-full flex-col bg-[#f7f3ec] text-[#111]">
      <div className="bg-[#111] py-[0.45em] text-center text-[0.62em] tracking-[0.15em] text-[#e9dcc4] uppercase">
        The new collection is here <span className="mx-[0.8em] text-[#b08d57]">·</span> Order on WhatsApp
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-[3em] py-[1em]">
        <div className="flex gap-[1.6em] text-[0.7em] tracking-[0.12em] uppercase @max-3xl/page:hidden">
          <span>New in</span>
          <span>Women</span>
          <span>Men</span>
          <span>Bespoke</span>
        </div>
        <Wordmark />
        <div className="flex items-center justify-end gap-[1.1em]">
          <Search className="size-[1.1em]" strokeWidth={1.5} />
          <span className="relative">
            <ShoppingBag className="size-[1.15em]" strokeWidth={1.5} />
            <span
              className="absolute -top-[0.5em] -right-[0.6em] flex size-[1.15em] items-center justify-center rounded-full bg-[#b08d57] text-[0.58em] font-semibold text-white"
              style={loop("demo-bump 6s ease-out")}
            >
              <span className="absolute" style={loop("demo-out 6s linear")}>
                1
              </span>
              <span className="demo-alt absolute" style={loop("demo-in 6s linear")}>
                2
              </span>
            </span>
          </span>
        </div>
      </div>

      <div className="relative mx-[3em] h-[19em] overflow-hidden bg-[#2a1214]">
        <div className="absolute inset-0" style={{ animation: "demo-zoom 12s ease-in-out infinite alternate" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#4a1d1f] via-[#2a1214] to-[#0c0505]" />
          <div
            className="absolute inset-0 opacity-25"
            style={{ backgroundImage: "repeating-linear-gradient(115deg, rgba(176,141,87,0.35) 0 1px, transparent 1px 0.9em)" }}
          />
          <div className="absolute right-[8%] bottom-0 flex items-end gap-[1em] @max-3xl/page:right-[-10%] @max-3xl/page:opacity-50">
            <Silhouette look="gown" from="#d6b46a" to="#7a5a22" className="h-[17em]" />
            <Silhouette look="suit" from="#e9dcc4" to="#a89676" className="h-[15em]" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="relative flex h-full max-w-[24em] flex-col justify-center px-[2.5em] text-[#f7f3ec]">
          <span className="text-[0.62em] tracking-[0.35em] text-[#d6b46a] uppercase">The new collection</span>
          <p className="mt-[0.5em] font-serif text-[2.7em] leading-[1.05]">Crafted in Lagos. Worn everywhere.</p>
          <p className="mt-[0.8em] text-[0.78em] leading-[1.6] text-[#e9dcc4]/80">Eveningwear, tailoring, and occasion pieces, cut and finished by hand.</p>
          <div className="mt-[1.3em] flex gap-[0.7em] text-[0.68em] tracking-[0.15em] whitespace-nowrap uppercase">
            <span className="bg-[#f7f3ec] px-[1.4em] py-[0.8em] text-[#111]">Shop the collection</span>
            <span className="border border-[#f7f3ec]/60 px-[1.3em] py-[0.8em]">Book a fitting</span>
          </div>
        </div>
      </div>

      <div className="mt-[1.4em] overflow-hidden border-y border-[#111]/10 py-[0.6em]">
        <div className="flex w-max gap-[2.5em] font-serif text-[0.9em] whitespace-nowrap italic" style={{ animation: "demo-marquee 26s linear infinite" }}>
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-[2.5em]">
              {m}
              <span className="text-[#b08d57]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-[1.4em] flex items-baseline justify-between px-[3em]">
        <span className="font-serif text-[1.3em]">New arrivals</span>
        <span className="text-[0.66em] tracking-[0.15em] uppercase underline underline-offset-4">View all</span>
      </div>
      <div className="mt-[0.8em] grid grid-cols-4 gap-[1em] px-[3em] @max-3xl/page:grid-cols-2">
        {collection.map((c) => (
          <div key={c.name}>
            <div className={cn("relative flex h-[13em] items-end justify-center overflow-hidden", c.bg)}>
              <Silhouette look={c.look} from={c.from} to={c.to} />
              {c.target && (
                <span className="absolute inset-x-[0.6em] bottom-[0.6em] bg-[#111] py-[0.55em] text-center text-[0.6em] tracking-[0.15em] text-white uppercase">
                  <span className="invisible">Add to bag</span>
                  <span className="absolute inset-0 flex items-center justify-center" style={loop("demo-out 6s linear")}>
                    Add to bag
                  </span>
                  <span className="demo-alt absolute inset-0 flex items-center justify-center bg-[#b08d57]" style={loop("demo-in 6s linear")}>
                    Added ✓
                  </span>
                  <DemoCursor className="top-[0.2em] left-[55%]" style={loop("demo-cursor 6s ease-in-out")} />
                </span>
              )}
            </div>
            <p className="mt-[0.5em] text-[0.74em]">{c.name}</p>
            <p className="text-[0.7em] text-[#6b5e4a]">{c.price}</p>
          </div>
        ))}
      </div>

      {full && (
        <>
          <div className="mx-[3em] mt-[2.2em] grid grid-cols-2 items-center gap-[2em] bg-[#111] p-[2.2em] text-[#f7f3ec] @max-3xl/page:grid-cols-1">
            <div>
              <p className="flex items-center gap-[0.5em] text-[0.62em] tracking-[0.3em] text-[#d6b46a] uppercase">
                <Ruler className="size-[1.3em]" strokeWidth={1.5} />
                Bespoke
              </p>
              <p className="mt-[0.5em] font-serif text-[2em] leading-[1.1]">Made to your measurements.</p>
              <p className="mt-[0.7em] text-[0.76em] leading-[1.6] text-[#e9dcc4]/75">
                Book a fitting for bridal, asoebi, and tailored menswear. We guide you from fabric to final fitting.
              </p>
              <span className="mt-[1.2em] inline-block border border-[#d6b46a] px-[1.4em] py-[0.8em] text-[0.66em] tracking-[0.15em] text-[#d6b46a] uppercase">
                Book a fitting
              </span>
            </div>
            <div className="flex justify-center gap-[1.2em]">
              <Silhouette look="twopiece" from="#d6b46a" to="#7a5a22" className="h-[13em]" />
              <Silhouette look="kaftan" from="#e9dcc4" to="#a89676" className="h-[13em]" />
            </div>
          </div>

          <div className="mx-[3em] mt-[2.2em] flex flex-col items-center py-[1.5em] text-center">
            <p className="font-serif text-[1.6em]">Join the list</p>
            <p className="mt-[0.4em] text-[0.74em] text-[#6b5e4a]">First look at new collections and private sales.</p>
            <div className="mt-[1em] flex w-full max-w-[24em] border border-[#111]">
              <span className="flex-1 px-[1em] py-[0.7em] text-left text-[0.72em] text-[#6b5e4a]">Your email address</span>
              <span className="bg-[#111] px-[1.3em] py-[0.7em] text-[0.66em] tracking-[0.15em] text-white uppercase">Subscribe</span>
            </div>
          </div>

          <footer className="mt-[1.5em] bg-[#111] px-[3em] py-[2em] text-[#e9dcc4]/70">
            <div className="flex flex-col items-center gap-[1em]">
              <Wordmark light />
              <div className="flex gap-[1.6em] text-[0.64em] tracking-[0.15em] uppercase">
                <span>Shop</span>
                <span>Bespoke</span>
                <span>About</span>
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
