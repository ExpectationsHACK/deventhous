import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { compareRows, packages, type CompareValue } from "@/content/packages";
import { Price } from "@/components/ui/price";
import { cn } from "@/lib/utils";

function Cell({ value }: { value: CompareValue }) {
  if (value === true)
    return (
      <>
        <Check aria-hidden strokeWidth={2} className="mx-auto size-4" />
        <span className="sr-only">Yes</span>
      </>
    );
  if (value === false)
    return (
      <>
        <Minus aria-hidden strokeWidth={1.5} className="mx-auto size-4 text-muted" />
        <span className="sr-only">No</span>
      </>
    );
  return <span className="text-sm">{value}</span>;
}

const rowHeader = "sticky left-0 z-10 bg-background px-4 py-3.5 text-left text-sm font-normal text-muted";
const cellClass = (highlight?: boolean) => cn("px-3 py-3.5", highlight && "bg-accent/[0.05]");

export function ComparisonTable() {
  return (
    <div role="region" aria-label="Package comparison" tabIndex={0} className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[900px] border-collapse text-center">
        <caption className="sr-only">What each package includes</caption>
        <thead>
          <tr className="border-b border-border bg-background-2">
            <th scope="col" className="sticky left-0 z-10 w-32 bg-background-2 px-4 py-4 text-left font-mono text-label font-medium text-muted uppercase md:w-44">
              Feature
            </th>
            {packages.map((p) => (
              <th key={p.slug} scope="col" className={cn("px-3 py-4 align-bottom text-sm font-semibold", p.recommended && "text-accent")}>
                <span className="block font-mono text-label font-normal text-muted">{p.number}</span>
                <Link href={`/packages/${p.slug}`} className="hover:underline">
                  {p.name}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <th scope="row" className={rowHeader}>
              Price range
            </th>
            {packages.map((p) => (
              <td key={p.slug} className={cn(cellClass(p.recommended), "text-sm font-medium")}>
                <Price ngn={p.price.ngn} usd={p.price.usd} compact />
              </td>
            ))}
          </tr>
          <tr className="border-b border-border">
            <th scope="row" className={rowHeader}>
              Timeline
            </th>
            {packages.map((p) => (
              <td key={p.slug} className={cn(cellClass(p.recommended), "text-sm")}>
                {p.timeline}
              </td>
            ))}
          </tr>
          {compareRows.map((row) => (
            <tr key={row.key} className="border-b border-border">
              <th scope="row" className={rowHeader}>
                {row.label}
              </th>
              {packages.map((p) => (
                <td key={p.slug} className={cellClass(p.recommended)}>
                  <Cell value={p.compare[row.key]} />
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th scope="row" className={rowHeader}>
              Monthly maintenance
            </th>
            {packages.map((p) => (
              <td key={p.slug} className={cn(cellClass(p.recommended), "text-sm")}>
                <Price ngn={p.maintenance.ngn} compact />
                {p.maintenance.label !== "Monthly maintenance" && (
                  <span className="block text-xs text-muted">{p.maintenance.label}</span>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
