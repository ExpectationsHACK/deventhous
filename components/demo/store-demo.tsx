import { CreditCard, Heart, MessageCircle, RefreshCcw, Search, ShoppingBag, Truck } from "lucide-react";
import { DemoCursor, loop } from "./screen";

const announcements = [
  "Free delivery in Lagos on orders over ₦50,000",
  "Pay by card, bank transfer, or order on WhatsApp",
  "New in: The Adire Edit",
];

const products = [
  { name: "Adire kaftan", price: "₦32,500", tex: "tex-adire" },
  { name: "Ankara wrap skirt", price: "₦24,000", tex: "tex-ankara", target: true },
  { name: "Aso-oke scarf", price: "₦15,500", tex: "tex-asooke" },
  { name: "Linen agbada set", price: "₦54,000", tex: "tex-linen" },
];

const perks = [
  { icon: Truck, text: "Delivery across Lagos in 1 to 3 days" },
  { icon: CreditCard, text: "Secure checkout with Paystack" },
  { icon: RefreshCcw, text: "Easy size exchanges" },
];

/** Example Business Store: a fictional Lagos fashion brand. */
export function StoreDemo() {
  return (
    <div className="flex h-full flex-col bg-[#faf6f0] text-[#1c1917]">
      <div className="overflow-hidden bg-[#9a3412] py-[0.4em] text-[0.68em] text-white">
        <div className="flex w-max gap-[4em] whitespace-nowrap" style={{ animation: "demo-marquee 24s linear infinite" }}>
          {[...announcements, ...announcements].map((a, i) => (
            <span key={i}>{a}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-[#e7dfd3] px-[3em] py-[0.9em]">
        <span className="font-serif text-[1.4em] italic">Kíkí Atelier</span>
        <div className="flex gap-[2em] text-[0.78em] text-[#57534e]">
          <span className="font-medium text-[#1c1917]">New in</span>
          <span>Women</span>
          <span>Men</span>
          <span>Accessories</span>
        </div>
        <div className="flex items-center gap-[1.1em] text-[#44403c]">
          <Search className="size-[1.05em]" strokeWidth={1.75} />
          <Heart className="size-[1.05em]" strokeWidth={1.75} />
          <span className="relative">
            <ShoppingBag className="size-[1.1em]" strokeWidth={1.75} />
            <span
              className="absolute -top-[0.55em] -right-[0.6em] flex size-[1.15em] items-center justify-center rounded-full bg-[#9a3412] text-[0.6em] font-semibold text-white"
              style={loop("demo-bump 6s ease-out")}
            >
              <span className="absolute" style={loop("demo-out 6s linear")}>2</span>
              <span className="demo-alt absolute" style={loop("demo-in 6s linear")}>3</span>
            </span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[1.05fr_1fr] gap-[2.5em] px-[3em] pt-[2em]">
        <div className="flex flex-col justify-center">
          <span className="text-[0.66em] font-semibold tracking-[0.2em] text-[#9a3412] uppercase">New collection · The Adire Edit</span>
          <p className="mt-[0.5em] font-serif text-[2.55em] leading-[1.05]">Hand-dyed in Abeokuta. Made for Lagos.</p>
          <p className="mt-[0.9em] max-w-[24em] text-[0.82em] leading-[1.55] text-[#57534e]">
            Indigo adire two-pieces, kaftans, and scarves, made in small runs by our partner dyers.
          </p>
          <div className="mt-[1.4em] flex gap-[0.8em]">
            <span className="rounded-full bg-[#1c1917] px-[1.4em] py-[0.7em] text-[0.78em] font-medium text-white">Shop the collection</span>
            <span className="flex items-center gap-[0.45em] rounded-full border border-[#16a34a] px-[1.2em] py-[0.7em] text-[0.78em] font-medium text-[#15803d]">
              <MessageCircle className="size-[1.1em]" strokeWidth={2} />
              Order on WhatsApp
            </span>
          </div>
        </div>
        <div className="tex-adire relative h-[16em] overflow-hidden rounded-[1em]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          <span className="absolute bottom-[1em] left-[1em] rounded-full bg-white/95 px-[0.9em] py-[0.4em] text-[0.7em] font-medium">
            Adire two-piece · ₦38,000
          </span>
          <span className="absolute top-[1em] right-[1em] rounded-full bg-[#9a3412] px-[0.8em] py-[0.35em] text-[0.62em] font-semibold text-white">
            Limited run
          </span>
        </div>
      </div>

      <div className="mt-[1.8em] flex items-baseline justify-between px-[3em]">
        <span className="text-[0.95em] font-semibold">Bestsellers</span>
        <span className="text-[0.7em] text-[#9a3412] underline">View all</span>
      </div>
      <div className="mt-[0.8em] grid grid-cols-4 gap-[1em] px-[3em]">
        {products.map((p) => (
          <div key={p.name}>
            <div className={`${p.tex} relative h-[7.5em] rounded-[0.6em]`}>
              {p.target && (
                <span className="absolute right-[0.5em] bottom-[0.5em] rounded-full bg-white px-[0.8em] py-[0.35em] text-[0.62em] font-semibold shadow">
                  <span className="invisible">Add to cart</span>
                  <span className="absolute inset-0 flex items-center justify-center" style={loop("demo-out 6s linear")}>
                    Add to cart
                  </span>
                  <span className="demo-alt absolute inset-0 flex items-center justify-center text-[#15803d]" style={loop("demo-in 6s linear")}>
                    Added ✓
                  </span>
                  <DemoCursor className="top-[0.6em] left-[55%]" style={loop("demo-cursor 6s ease-in-out")} />
                </span>
              )}
            </div>
            <p className="mt-[0.5em] text-[0.74em] font-medium">{p.name}</p>
            <p className="text-[0.7em] text-[#78716c]">{p.price}</p>
          </div>
        ))}
      </div>

      <div className="mx-[3em] mt-auto mb-[1.6em] grid grid-cols-3 gap-[1em] border-t border-[#e7dfd3] pt-[1em] text-[0.7em] text-[#57534e]">
        {perks.map(({ icon: Icon, text }) => (
          <span key={text} className="flex items-center gap-[0.6em]">
            <Icon className="size-[1.4em] text-[#9a3412]" strokeWidth={1.75} />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
