import { site } from "./site";
import { absoluteUrl } from "./utils";

const sameAs = Object.values(site.socials).filter(Boolean);

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: site.name,
  url: site.url,
  logo: absoluteUrl("/icon.svg"),
  description: site.description,
  parentOrganization: { "@type": "Organization", name: site.parent },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressCountry: site.location.countryCode,
  },
  areaServed: ["Nigeria", "Africa", "Worldwide"],
  ...(sameAs.length ? { sameAs } : {}),
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: site.name,
  url: site.url,
  publisher: { "@id": absoluteUrl("/#organization") },
  inLanguage: "en",
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function serviceLd({
  name,
  description,
  path,
  price,
}: {
  name: string;
  description: string;
  path: string;
  /** Naira price range */
  price?: readonly [number, number];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: "Web development",
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: ["Nigeria", "Africa"],
    ...(price
      ? {
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "NGN",
            lowPrice: price[0],
            highPrice: price[1],
          },
        }
      : {}),
  };
}
