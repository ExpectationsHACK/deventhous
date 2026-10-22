import { Check, Lock, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { WindowDots } from "@/components/ui/code-window";
import { ScoreRing } from "@/components/ui/score-ring";

/** Browser frame with an address bar. */
export function BrowserFrame({
  url = "yourbusiness.com",
  className,
  children,
}: {
  url?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-background", className)}>
      <div className="flex h-10 items-center gap-3 border-b border-border bg-background-2 px-3">
        <WindowDots />
        <div className="mx-auto flex h-6 w-full max-w-xs items-center justify-center gap-1.5 rounded-sm border border-border bg-background px-3 font-mono text-[11px] text-muted">
          <Lock aria-hidden strokeWidth={1.5} className="size-3" />
          {url}
        </div>
        <div className="w-[42px]" aria-hidden />
      </div>
      {children}
    </div>
  );
}

export function LighthouseCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-4 shadow-2xl shadow-black/10", className)}>
      <p className="mb-3 font-mono text-[10px] text-muted uppercase">Lighthouse · mobile</p>
      <div className="flex gap-3">
        {["Perf", "A11y", "Best", "SEO"].map((l) => (
          <ScoreRing key={l} size={44} label={l} />
        ))}
      </div>
    </div>
  );
}

type ChatMessage = { from: "customer" | "bot"; text: string; time: string };

export function ChatMock({
  messages,
  title = "Deventhous Assistant",
  className,
}: {
  messages: ChatMessage[];
  title?: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-background", className)}>
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <span className="flex size-8 items-center justify-center rounded-full bg-success/15 text-xs font-semibold text-success-text">
          AI
        </span>
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="flex items-center gap-1.5 text-xs text-muted">
            <span aria-hidden className="size-1.5 rounded-full bg-success" />
            Online, replies instantly
          </p>
        </div>
      </div>
      <ul className="space-y-3 p-4">
        {messages.map((m, i) => (
          <li key={i} className={cn("flex", m.from === "customer" ? "justify-end" : "justify-start")}>
            <div
              className={cn(
                "max-w-[82%] rounded-lg px-3 py-2 text-[13px] leading-5",
                m.from === "customer"
                  ? "rounded-br-sm bg-foreground text-background"
                  : "rounded-bl-sm border border-border bg-background-2",
              )}
            >
              <span className="sr-only">{m.from === "customer" ? "Customer: " : "Assistant: "}</span>
              {m.text}
              <span
                className={cn(
                  "mt-1 flex items-center justify-end gap-1 font-mono text-[10px]",
                  m.from === "customer" ? "text-background/60" : "text-muted",
                )}
              >
                {m.time}
                {m.from === "customer" && <Check aria-hidden strokeWidth={1.5} className="size-3" />}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SearchResultMock({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("rounded-md border border-border bg-background p-3", className)}>
      <div className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[12px] text-muted">
        <Search strokeWidth={1.5} className="size-3.5" />
        web designer in lagos
      </div>
      <div className="mt-3 space-y-3">
        <div className="rounded-sm border border-border-strong bg-background-2 p-2">
          <p className="font-mono text-[10px] text-muted">yourbusiness.com</p>
          <p className="text-[13px] font-medium text-accent">Your Business · Lagos</p>
          <p className="text-[11px] text-muted">★★★★★ · Open now · Lekki</p>
        </div>
        <div className="space-y-1.5 px-2 opacity-60">
          <span className="block h-1.5 w-1/3 rounded-full bg-border-strong" />
          <span className="block h-2 w-2/3 rounded-full bg-border-strong" />
          <span className="block h-1.5 w-1/2 rounded-full bg-border" />
        </div>
      </div>
    </div>
  );
}
