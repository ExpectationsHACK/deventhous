import { cn } from "@/lib/utils";

export function ScoreRing({
  score = 100,
  label,
  size = 72,
  className,
}: {
  score?: number;
  label?: string;
  size?: number;
  className?: string;
}) {
  const stroke = size > 56 ? 5 : 3.5;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <figure className={cn("flex flex-col items-center gap-2", className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--success)" strokeOpacity="0.15" strokeWidth={stroke} />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="var(--success)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - score / 100)}
          />
        </svg>
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center font-mono font-medium text-success-text",
            size > 56 ? "text-lg" : "text-xs",
          )}
        >
          {score}
        </span>
      </div>
      {label && (
        <figcaption className="text-center font-mono text-[11px] leading-4 text-muted uppercase">{label}</figcaption>
      )}
      <span className="sr-only">
        {label ? `${label}: ` : ""}
        {score} out of 100
      </span>
    </figure>
  );
}
