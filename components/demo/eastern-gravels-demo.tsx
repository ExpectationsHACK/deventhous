import { Globe2, MessageCircle, Truck } from "lucide-react";
import { loop, Ping } from "./screen";

const products = [
  { name: "Granite", note: "Chippings for concrete", tex: "tex-granite" },
  { name: "Sharp sand", note: "For blocks and plaster", tex: "tex-sand" },
  { name: "Gravel", note: "For drainage and fill", tex: "tex-gravel" },
];

/**
 * Illustrative recreation of the Eastern Gravels design language
 * (industrial orange and charcoal). Swap for real screenshots when available.
 */
export function EasternGravelsDemo() {
  return (
    <div className="relative flex h-full flex-col bg-[#18181b] text-white">
      <div className="flex items-center justify-between border-b border-white/10 px-[3em] py-[1em]">
        <span className="flex items-center gap-[0.6em]">
          <span className="size-[1.2em] bg-[#f26b1d]" />
          <span className="text-[0.8em] font-bold tracking-[0.2em] uppercase">Eastern Gravels</span>
        </span>
        <div className="flex gap-[2em] text-[0.74em] text-zinc-400">
          <span className="text-white">Products</span>
          <span>Delivery</span>
          <span>Building from abroad</span>
          <span>About</span>
        </div>
        <span className="relative flex items-center gap-[0.4em] rounded-[0.3em] bg-[#f26b1d] px-[1em] py-[0.55em] text-[0.72em] font-semibold">
          <Ping className="rounded-[0.3em] bg-[#f26b1d]" />
          <MessageCircle className="relative size-[1.1em]" strokeWidth={2.25} />
          <span className="relative">Order on WhatsApp</span>
        </span>
      </div>

      <div className="grid grid-cols-[1.1fr_1fr] gap-[2em] px-[3em] pt-[2.2em]">
        <div>
          <p className="font-mono text-[0.66em] tracking-[0.22em] text-[#f26b1d] uppercase">Lagos · Premium aggregates</p>
          <p className="mt-[0.5em] text-[2.5em] leading-[1.05] font-bold tracking-[-0.03em]">
            Granite, sharp sand, and gravel. <span className="text-[#f26b1d]">Delivered to site.</span>
          </p>
          <p className="mt-[0.9em] max-w-[24em] text-[0.8em] leading-[1.55] text-zinc-400">
            Tell us the material, quantity, and site address on WhatsApp. We confirm the price and schedule delivery.
          </p>
          <div className="mt-[1.3em] flex gap-[0.7em] text-[0.74em] font-semibold">
            <span className="rounded-[0.3em] bg-[#f26b1d] px-[1.2em] py-[0.65em]">Get a price</span>
            <span className="rounded-[0.3em] border border-white/25 px-[1.2em] py-[0.65em]">View products</span>
          </div>
        </div>
        <div className="relative h-[15em] overflow-hidden rounded-[0.4em] bg-gradient-to-b from-[#3f3f46] to-[#27272a]">
          <div className="absolute inset-x-0 bottom-0 h-[3em] bg-[#52525b]" />
          <div className="tex-granite absolute bottom-[2em] left-[8%] h-[9em] w-[60%]" style={{ clipPath: "polygon(0 100%, 30% 25%, 50% 5%, 68% 22%, 100% 100%)" }} />
          <div className="tex-sand absolute right-[6%] bottom-[2em] h-[6.5em] w-[45%]" style={{ clipPath: "polygon(0 100%, 40% 15%, 60% 8%, 100% 100%)" }} />
          <span className="absolute top-[1em] left-[1em] flex items-center gap-[0.4em] rounded-[0.3em] bg-black/60 px-[0.7em] py-[0.35em] text-[0.62em] text-zinc-200">
            <Truck className="size-[1.2em] text-[#f26b1d]" strokeWidth={2} />
            Delivery across Lagos
          </span>
        </div>
      </div>

      <div className="mt-[1.6em] grid grid-cols-3 gap-[1em] px-[3em]">
        {products.map((p) => (
          <div key={p.name} className="flex items-center gap-[0.8em] border border-white/10 bg-white/[0.03] p-[0.7em]">
            <span className={`${p.tex} size-[3.2em] shrink-0 rounded-[0.2em]`} />
            <span>
              <span className="block text-[0.82em] font-semibold">{p.name}</span>
              <span className="block text-[0.64em] text-zinc-400">{p.note}</span>
              <span className="mt-[0.2em] block text-[0.62em] font-semibold text-[#f26b1d]">Order on WhatsApp →</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mx-[3em] mt-[1em] flex items-center gap-[0.6em] border-l-[0.2em] border-[#f26b1d] bg-white/[0.04] px-[1em] py-[0.6em] text-[0.7em] text-zinc-300">
        <Globe2 className="size-[1.2em] text-[#f26b1d]" strokeWidth={2} />
        Building in Lagos from abroad? See how ordering and delivery work for diaspora clients.
      </div>

      <div
        className="absolute right-[2em] bottom-[1.5em] flex items-center gap-[0.6em] rounded-[0.6em] bg-white px-[0.9em] py-[0.6em] text-[#18181b] shadow-2xl"
        style={loop("demo-toast 6s ease-out")}
      >
        <span className="flex size-[2em] items-center justify-center rounded-full bg-[#25d366] text-white">
          <MessageCircle className="size-[1.1em]" strokeWidth={2.25} />
        </span>
        <span className="text-[0.66em] leading-[1.35]">
          <span className="block font-semibold">New WhatsApp order</span>
          <span className="text-zinc-500">Granite · site in Lekki</span>
        </span>
      </div>
    </div>
  );
}
