import { Bath, BedDouble, Building2, MapPin, Search, TrendingUp } from "lucide-react";
import { loop } from "./screen";

const skyline = [9, 14, 7, 18, 11, 22, 8, 16, 12, 19, 6, 13, 17, 10, 21, 9, 15];

const listings = [
  { title: "3 bed apartment", area: "Ikoyi", price: "₦12,000,000/yr", beds: 3, baths: 3, from: "#0ea5e9", to: "#1e3a8a" },
  { title: "4 bed terrace", area: "Lekki Phase 1", price: "₦9,500,000/yr", beds: 4, baths: 4, from: "#f59e0b", to: "#7c2d12" },
  { title: "2 bed flat", area: "Yaba", price: "₦3,800,000/yr", beds: 2, baths: 2, from: "#34d399", to: "#065f46" },
];

/** Example Growth Site: a fictional Lagos property site, with a search ranking overlay. */
export function RealEstateDemo() {
  return (
    <div className="relative flex h-full flex-col bg-white text-[#052e16]">
      <div className="flex items-center justify-between bg-[#14532d] px-[3em] py-[0.9em] text-white">
        <span className="flex items-center gap-[0.5em]">
          <Building2 className="size-[1.3em] text-[#fbbf24]" strokeWidth={2} />
          <span className="text-[1em] font-semibold tracking-tight">Prime Homes Lagos</span>
        </span>
        <div className="flex gap-[2em] text-[0.78em] text-green-100">
          <span>Buy</span>
          <span>Rent</span>
          <span>Areas</span>
          <span>Guides</span>
        </div>
        <span className="rounded-[0.5em] bg-[#fbbf24] px-[1em] py-[0.5em] text-[0.74em] font-semibold text-[#14532d]">List a property</span>
      </div>

      <div className="relative h-[19em] overflow-hidden bg-gradient-to-b from-[#1e3a8a] via-[#9333ea] to-[#f59e0b]">
        <div className="absolute inset-x-0 bottom-0 flex h-[11em] items-end gap-[0.3em] px-[1em]">
          {skyline.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-[0.2em] bg-[#0b1324]"
              style={{
                height: `${h * 0.5}em`,
                backgroundImage: "radial-gradient(rgba(253,224,71,0.7) 20%, transparent 22%)",
                backgroundSize: "0.7em 0.9em",
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-[2.2em] left-[3em] max-w-[30em] text-white">
          <p className="text-[2.3em] leading-[1.08] font-semibold tracking-[-0.03em]">Find your next home in Lagos.</p>
          <p className="mt-[0.5em] text-[0.82em] text-white/85">Verified listings in Ikoyi, Lekki, Yaba, and beyond.</p>
        </div>
        <div className="absolute bottom-[1.8em] left-[3em] flex items-center gap-[0.4em] rounded-[0.8em] bg-white p-[0.4em] text-[0.74em] shadow-xl">
          <span className="flex items-center gap-[0.4em] px-[0.8em] py-[0.4em]">
            <MapPin className="size-[1.1em] text-[#16a34a]" strokeWidth={2} />
            Ikoyi
          </span>
          <span className="h-[1.6em] w-px bg-slate-200" />
          <span className="px-[0.8em] py-[0.4em]">Apartment</span>
          <span className="h-[1.6em] w-px bg-slate-200" />
          <span className="px-[0.8em] py-[0.4em]">₦5M – ₦15M / yr</span>
          <span className="flex items-center gap-[0.35em] rounded-[0.5em] bg-[#16a34a] px-[1em] py-[0.5em] font-medium text-white">
            <Search className="size-[1em]" strokeWidth={2.25} />
            Search
          </span>
        </div>

        <div className="absolute top-[1.6em] right-[2em] w-[13em] rounded-[0.8em] bg-white p-[0.9em] shadow-2xl" style={{ animation: "demo-float 5s ease-in-out infinite" }}>
          <p className="flex items-center gap-[0.4em] text-[0.62em] font-semibold text-[#16a34a]">
            <TrendingUp className="size-[1.2em]" strokeWidth={2.25} />
            Organic search traffic
          </p>
          <div className="mt-[0.6em] flex h-[4em] items-end gap-[0.35em]">
            {[25, 35, 45, 62, 80, 100].map((h, i) => (
              <span
                key={i}
                className="flex-1 origin-bottom rounded-t-[0.2em] bg-gradient-to-t from-[#16a34a] to-[#4ade80]"
                style={{ height: `${h}%`, ...loop("demo-grow 6s ease-out", `${i * 0.08}s`) }}
              />
            ))}
          </div>
          <p className="mt-[0.6em] text-[0.6em] text-slate-500">
            Ranked <span className="font-semibold text-slate-900">#1</span> for &ldquo;apartments for rent in Ikoyi&rdquo;
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[1em] px-[3em] pt-[1.3em]">
        {listings.map((l) => (
          <div key={l.title} className="overflow-hidden rounded-[0.8em] border border-slate-100">
            <div
              className="relative h-[5.5em]"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, rgba(255,255,255,0.25) 0 0.5em, transparent 0.5em 1.4em), repeating-linear-gradient(0deg, transparent 0 0.6em, rgba(0,0,0,0.25) 0.6em 0.8em), linear-gradient(135deg, ${l.from}, ${l.to})`,
              }}
            >
              <span className="absolute top-[0.5em] left-[0.5em] rounded-full bg-white px-[0.6em] py-[0.2em] text-[0.58em] font-semibold text-[#14532d]">Verified</span>
            </div>
            <div className="p-[0.7em]">
              <p className="text-[0.8em] font-semibold">{l.price}</p>
              <p className="text-[0.66em] text-slate-500">
                {l.title} · {l.area}
              </p>
              <p className="mt-[0.3em] flex gap-[0.8em] text-[0.62em] text-slate-500">
                <span className="flex items-center gap-[0.25em]">
                  <BedDouble className="size-[1.2em]" strokeWidth={2} />
                  {l.beds}
                </span>
                <span className="flex items-center gap-[0.25em]">
                  <Bath className="size-[1.2em]" strokeWidth={2} />
                  {l.baths}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[1.1em] flex items-center gap-[0.5em] px-[3em] text-[0.66em]">
        <span className="mr-[0.4em] font-semibold">Popular areas</span>
        {["Ikoyi", "Lekki", "Victoria Island", "Yaba", "Ikeja GRA", "Ajah"].map((a) => (
          <span key={a} className="rounded-full border border-slate-200 px-[0.8em] py-[0.3em] text-slate-600">
            {a}
          </span>
        ))}
      </div>
      <div className="mx-[3em] mt-[0.9em] flex items-center justify-between rounded-[0.8em] bg-[#f0fdf4] px-[1.2em] py-[0.8em]">
        <span>
          <span className="block text-[0.8em] font-semibold">Renting in Lagos? Read our 2026 area guide</span>
          <span className="text-[0.64em] text-slate-500">Rent ranges, commute times, and what to check before you pay.</span>
        </span>
        <span className="rounded-[0.5em] bg-[#14532d] px-[1em] py-[0.5em] text-[0.68em] font-medium text-white">Read the guide</span>
      </div>
    </div>
  );
}
