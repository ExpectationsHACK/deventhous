import { cn } from "@/lib/utils";

export function WindowDots() {
  return (
    <div aria-hidden className="flex gap-1.5">
      <span className="size-2.5 rounded-full bg-border-strong" />
      <span className="size-2.5 rounded-full bg-border-strong" />
      <span className="size-2.5 rounded-full bg-border-strong" />
    </div>
  );
}

/** A fake editor or terminal frame with three dots. */
export function CodeWindow({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("overflow-hidden rounded-md border border-border bg-background", className)}>
      <div className="flex h-9 items-center gap-3 border-b border-border px-3">
        <WindowDots />
        {title && <span className="font-mono text-[11px] text-muted">{title}</span>}
      </div>
      <div className="p-4 font-mono text-[12.5px] leading-6">{children}</div>
    </div>
  );
}
