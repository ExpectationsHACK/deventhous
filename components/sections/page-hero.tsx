import Link from "next/link";
import { JsonLd } from "@/components/ui/json-ld";
import { Eyebrow } from "@/components/ui/section-header";
import { breadcrumbLd } from "@/lib/jsonld";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; path: string };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs: Crumb[];
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 -top-16" />
      <div className="relative mx-auto max-w-[1200px] px-4 pt-12 pb-16 md:px-6 md:pt-16 md:pb-24 lg:border-x lg:border-border">
        <nav aria-label="Breadcrumb" className="mb-10 md:mb-14">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-label text-muted">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-foreground">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="hover:text-foreground">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
          <h1 className="text-h1 text-balance">{title}</h1>
          {description && <p className="mt-5 text-body-lg text-pretty text-muted">{description}</p>}
          {children}
        </div>
      </div>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </section>
  );
}
