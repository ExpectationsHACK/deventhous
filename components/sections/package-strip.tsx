import Link from "next/link";
import { packages } from "@/content/packages";
import { ngn, usd } from "@/lib/format";

/** Quick links to each package, directly under the hero. */
export function PackageStrip() {
  return (
    <section aria-label="Packages at a glance" className="border-t border-border">
      <div className="mx-auto max-w-[1200px] lg:border-x lg:border-border">
        <ul className="grid grid-cols-2 gap-px bg-border md:grid-cols-3 lg:grid-cols-6">
          {packages.map((p) => (
            <li key={p.slug} className="bg-background">
              <Link
                href={`/packages/${p.slug}`}
                className="group flex h-full flex-col gap-1 px-4 py-5 transition-colors hover:bg-background-2 md:px-6"
              >
                <span className="font-mono text-label text-muted">{p.number}</span>
                <span className="mt-1 font-semibold tracking-tight">
                  {p.name}
                  <span aria-hidden className="ml-1 inline-block text-muted transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
                <span className="text-sm text-muted">
                  From <span className="cur-ngn">{ngn(p.price.ngn[0], true)}</span>
                  <span className="cur-usd">{usd(p.price.usd[0])}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
