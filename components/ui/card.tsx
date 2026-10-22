import { cn } from "@/lib/utils";

export function Card({
  className,
  interactive = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card",
        interactive && "spotlight transition-colors duration-200 hover:border-border-strong",
        className,
      )}
      {...props}
    />
  );
}
