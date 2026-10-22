import type { Range } from "@/content/packages";

const group = new Intl.NumberFormat("en-NG");

/** ₦150,000 · or compact: ₦150k, ₦1.4M */
export function ngn(n: number, compact = false) {
  if (!compact) return `₦${group.format(n)}`;
  if (n >= 1_000_000) return `₦${+(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `₦${+(n / 1_000).toFixed(0)}k`;
  return `₦${n}`;
}

export function usd(n: number) {
  return `$${group.format(n)}`;
}

export function ngnRange([a, b]: Range, compact = false) {
  return `${ngn(a, compact)} – ${ngn(b, compact)}`;
}

export function usdRange([a, b]: Range) {
  return `${usd(a)} – ${usd(b)}`;
}
