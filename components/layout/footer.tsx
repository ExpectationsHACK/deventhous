import Link from "next/link";
import { packages } from "@/content/packages";
import { site, whatsappLink } from "@/lib/site";
import { Logo } from "./logo";
import { ThemeSwitch } from "./theme-toggle";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/services#web", label: "Web design and development" },
      { href: "/services#stores", label: "Online stores and payments" },
      { href: "/services#ecommerce", label: "E-commerce" },
      { href: "/services#seo", label: "SEO" },
      { href: "/services#automation", label: "AI automation and agents" },
      { href: "/services#courses", label: "Course platforms" },
      { href: "/services#support", label: "Tech support and management" },
    ],
  },
  {
    title: "Packages",
    links: packages.map((p) => ({ href: `/packages/${p.slug}`, label: p.name })),
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-2">
      <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">{site.blurb}</p>
            <p className="mt-3 text-sm text-muted">
              Based in {site.location.city}, {site.location.country}. Working across Africa and
              with the diaspora.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-medium">{col.title}</h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-muted transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="text-sm font-medium">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-foreground">
                  {site.email}
                </a>
              </li>
              <li>
                {site.location.city}, {site.location.country}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:gap-4">
            <p>© 2026 Deventhous. A {site.parent} company.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
              <Link href="/terms" className="hover:text-foreground">Terms</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {site.takingProjects && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted">
                <span aria-hidden className="size-2 rounded-full bg-success" />
                Taking new projects
              </span>
            )}
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}
