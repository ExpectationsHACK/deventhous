import { cn } from "@/lib/utils";

/**
 * A 16:10 "screen" whose contents are sized in em from a cqw base, so a demo
 * site scales like a screenshot at any width. Purely decorative.
 */
export function DemoScreen({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div role="img" aria-label={label} className={cn("@container relative aspect-[16/10] w-full overflow-hidden", className)}>
      <div aria-hidden className="demo absolute inset-0 overflow-hidden text-left" style={{ fontSize: "1.4cqw" }}>
        {children}
      </div>
    </div>
  );
}

/**
 * Inline style for a looping demo animation. Loops are offset by the --d
 * custom property, so a demo inside a carousel slide restarts each time the
 * slide appears.
 */
export function loop(animation: string, extraDelay = "0s"): React.CSSProperties {
  return { animation: `${animation} calc(var(--d, 0s) + ${extraDelay}) infinite backwards` };
}

/** Pointer cursor used to "click" things in demos. */
export function DemoCursor({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("demo-cursor pointer-events-none absolute z-20 size-[1.6em] drop-shadow", className)} style={style}>
      <path d="M5 3l14 8-6.5 1.5L10 19z" fill="#111" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

/** A soft expanding ring behind call-to-action buttons. */
export function Ping({ className }: { className?: string }) {
  return (
    <span
      className={cn("absolute inset-0 rounded-full", className)}
      style={{ animation: "demo-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite" }}
    />
  );
}

/**
 * Full-length, responsive rendering of a demo site for one-page previews.
 * Sizes stay in em, but the base font is clamped so text stays readable, and
 * sites can restack with `@max-3xl/page:` variants on narrow screens.
 */
export function PageScreen({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div role="img" aria-label={label} className="@container/page relative w-full overflow-hidden">
      <div aria-hidden className="demo text-left" style={{ fontSize: "clamp(11px, 1.3cqw, 16px)" }}>
        {children}
      </div>
    </div>
  );
}
