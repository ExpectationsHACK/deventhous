"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type Currency = "ngn" | "usd";
const KEY = "currency";
const listeners = new Set<() => void>();

function read(): Currency {
  return document.documentElement.dataset.currency === "usd" ? "usd" : "ngn";
}

function write(c: Currency) {
  document.documentElement.dataset.currency = c;
  try {
    localStorage.setItem(KEY, c);
  } catch {}
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function CurrencyToggle({ className }: { className?: string }) {
  const current = useSyncExternalStore(subscribe, read, () => "ngn" as Currency);
  return (
    <div
      role="radiogroup"
      aria-label="Currency"
      className={cn("inline-flex items-center rounded-full border border-border p-0.5 font-mono text-label", className)}
    >
      {(["ngn", "usd"] as const).map((c) => (
        <button
          key={c}
          type="button"
          role="radio"
          aria-checked={current === c}
          onClick={() => write(c)}
          className={cn(
            "rounded-full px-3 py-1.5 uppercase transition-colors",
            current === c ? "bg-foreground text-background" : "text-muted hover:text-foreground",
          )}
        >
          {c === "ngn" ? "₦ NGN" : "$ USD"}
        </button>
      ))}
    </div>
  );
}
