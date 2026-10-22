"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

/** Single icon button that flips between light and dark. */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted ? resolvedTheme === "dark" : true;
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-sm text-muted transition-colors hover:bg-background-2 hover:text-foreground",
        className,
      )}
    >
      <Sun aria-hidden strokeWidth={1.5} className="hidden size-[18px] dark:block" />
      <Moon aria-hidden strokeWidth={1.5} className="size-[18px] dark:hidden" />
    </button>
  );
}

const options = [
  { value: "system", label: "System theme", Icon: Monitor },
  { value: "light", label: "Light theme", Icon: Sun },
  { value: "dark", label: "Dark theme", Icon: Moon },
] as const;

/** Three-way segmented switch used in the footer. */
export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="flex items-center gap-0.5 rounded-full border border-border p-0.5"
    >
      {options.map(({ value, label, Icon }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            onClick={() => setTheme(value)}
            className={cn(
              "flex size-7 items-center justify-center rounded-full transition-colors",
              active
                ? "bg-background-2 text-foreground shadow-[inset_0_0_0_1px_var(--border-strong)]"
                : "text-muted hover:text-foreground",
            )}
          >
            <Icon aria-hidden strokeWidth={1.5} className="size-3.5" />
          </button>
        );
      })}
    </div>
  );
}
