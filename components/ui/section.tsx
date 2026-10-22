import { cn } from "@/lib/utils";

/** A cross mark that sits on a hairline intersection. */
function Plus({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 13 13"
      className={cn("absolute hidden size-[13px] text-border-strong lg:block", className)}
    >
      <path d="M6.5 0v13M0 6.5h13" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

/**
 * A full-width section separated from the one above by a hairline,
 * with crosshair marks where it meets the framed content column.
 */
export function Section({
  className,
  innerClassName,
  divider = true,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { innerClassName?: string; divider?: boolean }) {
  return (
    <section className={cn("relative", divider && "border-t border-border", className)} {...props}>
      <div
        className={cn(
          "relative mx-auto w-full max-w-[1200px] px-4 py-16 md:px-6 md:py-24 lg:border-x lg:border-border lg:py-28",
          innerClassName,
        )}
      >
        {divider && (
          <>
            <Plus className="-top-[7px] -left-[7px]" />
            <Plus className="-top-[7px] -right-[7px]" />
          </>
        )}
        {children}
      </div>
    </section>
  );
}
