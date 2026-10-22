import { cn } from "@/lib/utils";

export function Badge({
  className,
  dot,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { dot?: "success" | "accent" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-[4px] border border-border bg-background px-2 py-1 font-mono text-label uppercase text-muted",
        className,
      )}
      {...props}
    >
      {dot && (
        <span
          aria-hidden
          className={cn(
            "size-1.5 rounded-full animate-pulse-dot",
            dot === "success" ? "bg-success" : "bg-accent",
          )}
        />
      )}
      {props.children}
    </span>
  );
}
