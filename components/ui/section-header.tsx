import { cn } from "@/lib/utils";

export function Eyebrow({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("font-mono text-label uppercase text-muted", className)} {...props} />;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <Heading className={cn(Heading === "h1" ? "text-h1" : "text-h2", "text-balance")}>{title}</Heading>
      {description && (
        <p className="mt-4 text-body-lg text-pretty text-muted">{description}</p>
      )}
    </div>
  );
}
