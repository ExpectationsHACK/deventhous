import type { PackageSlug } from "@/content/packages";
import { BrowserFrame } from "@/components/sections/mockups";
import { cn } from "@/lib/utils";
import { AcademyDemo } from "./academy-demo";
import { ClinicDemo } from "./clinic-demo";
import { LandingDemo } from "./landing-demo";
import { RealEstateDemo } from "./realestate-demo";
import { StoreDemo } from "./store-demo";
import { DemoScreen } from "./screen";

export { EasternGravelsDemo } from "./eastern-gravels-demo";

type Demo = { url: string; label: string; render: () => React.ReactNode };

/** One example design per package. All businesses are fictional. */
export const packageDemos: Record<PackageSlug, Demo> = {
  launchpad: { url: "adaandco.events", label: "Example Launchpad design: an event planner's landing page with a quote form", render: () => <LandingDemo /> },
  "business-store": { url: "kikiatelier.shop", label: "Example Business Store design: a fashion store with catalogue and cart", render: () => <StoreDemo /> },
  "pro-site": { url: "lekkismiledental.clinic", label: "Example Pro Site design: a dental clinic website with online booking", render: () => <ClinicDemo /> },
  "growth-site": { url: "primehomeslagos.homes", label: "Example Growth Site design: a property website ranking in search", render: () => <RealEstateDemo /> },
  academy: { url: "brightpath.academy", label: "Example Academy design: a course platform with video lessons and progress", render: () => <AcademyDemo /> },
  "intelligent-business": { url: "lekkismiledental.clinic", label: "Example Intelligent Business design: a clinic website with an AI assistant booking an appointment", render: () => <ClinicDemo withChat /> },
};

/** A browser window showing one package's example site. */
export function PackageDemo({ slug, className }: { slug: PackageSlug; className?: string }) {
  const demo = packageDemos[slug];
  return (
    <BrowserFrame url={demo.url} className={className}>
      <DemoScreen label={demo.label}>{demo.render()}</DemoScreen>
    </BrowserFrame>
  );
}

const SLIDE = 6;

/**
 * Browser window that cycles through several example sites, with the
 * address bar changing to match. Pure CSS: no client JavaScript.
 */
export function DemoCarousel({ slugs, className }: { slugs: PackageSlug[]; className?: string }) {
  const cycle = `${slugs.length * SLIDE}s`;
  const slideStyle = (i: number): React.CSSProperties =>
    ({
      "--d": `${i * SLIDE}s`,
      animation: `demo-slide ${cycle} linear ${i * SLIDE}s infinite backwards`,
      opacity: i === 0 ? 1 : 0,
    }) as React.CSSProperties;

  return (
    <BrowserFrame
      className={className}
      url={
        <span className="relative inline-grid">
          {slugs.map((s, i) => (
            <span key={s} className="demo-slide col-start-1 row-start-1" style={slideStyle(i)}>
              {packageDemos[s].url}
            </span>
          ))}
        </span>
      }
    >
      <div className="relative aspect-[16/10]">
        {slugs.map((s, i) => (
          <div key={s} className={cn("demo-slide absolute inset-0")} style={slideStyle(i)}>
            <DemoScreen label={packageDemos[s].label}>{packageDemos[s].render()}</DemoScreen>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}
