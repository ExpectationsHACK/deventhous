import Link from "next/link";
import { cn } from "@/lib/utils";

/** Geometric mark: a rotated square with a cut-out, inherits currentColor. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("size-5", className)} fill="currentColor">
      <path
        fillRule="evenodd"
        d="M12 1.5 22.5 12 12 22.5 1.5 12 12 1.5Zm0 6.2L7.7 12l4.3 4.3 4.3-4.3L12 7.7Z"
      />
    </svg>
  );
}

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      aria-label="Deventhous home"
      onClick={onClick}
      className={cn("flex items-center gap-2 text-foreground", className)}
    >
      <LogoMark />
      <span className="text-[17px] font-semibold tracking-[-0.03em]">Deventhous</span>
    </Link>
  );
}
