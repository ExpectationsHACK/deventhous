import { usdRange as toUsdRange, type Range } from "@/content/packages";
import { ngnRange, usdRange } from "@/lib/format";

/**
 * Renders a price range in both currencies. CSS shows one at a time,
 * driven by `data-currency` on <html> (see CurrencyToggle).
 */
export function Price({
  ngn,
  usd,
  compact,
  per,
  className,
}: {
  ngn: Range;
  usd?: Range;
  compact?: boolean;
  per?: "month" | "hour";
  className?: string;
}) {
  const suffix = per ? (compact ? `/${per === "month" ? "mo" : "hr"}` : ` per ${per}`) : "";
  return (
    <span className={className}>
      <span className="cur-ngn">
        {ngnRange(ngn, compact)}
        {suffix}
      </span>
      <span className="cur-usd">
        {usdRange(usd ?? toUsdRange(ngn))}
        {suffix}
      </span>
    </span>
  );
}
