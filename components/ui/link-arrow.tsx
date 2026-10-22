import Link from "next/link";
import { cn } from "@/lib/utils";

export function LinkArrow({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const classes = cn(
    "group inline-flex items-center gap-1 text-sm font-medium text-foreground",
    className,
  );
  const inner = (
    <>
      <span className="underline-offset-4 group-hover:underline">{children}</span>
      <span aria-hidden className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">
        →
      </span>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
