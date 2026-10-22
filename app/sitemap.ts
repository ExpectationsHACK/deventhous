import type { MetadataRoute } from "next";
import { packages } from "@/content/packages";
import { caseStudies, clientSites } from "@/content/work";
import { posts } from "@/content/blog/posts";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/packages", "/services", "/work", "/about", "/contact", "/blog", "/privacy", "/terms"];
  return [
    ...pages.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path === "/privacy" || path === "/terms" ? 0.3 : 0.8,
    })),
    ...packages.map((p) => ({ url: absoluteUrl(`/packages/${p.slug}`), changeFrequency: "monthly" as const, priority: 0.9 })),
    ...[...clientSites, ...caseStudies].map((c) => ({ url: absoluteUrl(`/work/${c.slug}`), changeFrequency: "yearly" as const, priority: 0.6 })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
