import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:opacity-90",
  secondary:
    "border border-border-strong bg-background text-foreground hover:bg-background-2",
  ghost: "text-muted hover:text-foreground hover:bg-background-2",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-sm font-medium whitespace-nowrap transition-[opacity,background-color,color,border-color] duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
    variants[variant],
    sizes[size],
    className,
  );
}

type CommonProps = { variant?: Variant; size?: Size; className?: string };

export function Button({
  variant,
  size,
  className,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={buttonClasses({ variant, size, className })} {...props} />;
}

export function ButtonLink({
  variant,
  size,
  className,
  href,
  external,
  ...props
}: CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
  }) {
  const classes = buttonClasses({ variant, size, className });
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props} />
    );
  }
  return <Link href={href} className={classes} {...props} />;
}
