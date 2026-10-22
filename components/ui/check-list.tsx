import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckList({
  items,
  variant = "check",
  className,
}: {
  items: readonly React.ReactNode[];
  variant?: "check" | "cross";
  className?: string;
}) {
  const Icon = variant === "check" ? Check : X;
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            className={cn(
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border",
              variant === "check" ? "border-border-strong text-foreground" : "border-border text-muted",
            )}
          >
            <Icon aria-hidden strokeWidth={2} className="size-3" />
            <span className="sr-only">{variant === "check" ? "Included:" : "Not included:"}</span>
          </span>
          <span className={variant === "check" ? "text-foreground" : "text-muted"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
