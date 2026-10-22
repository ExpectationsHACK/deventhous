"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/site";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { isActivePath } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

const links = [...mainNav, { href: "/contact", label: "Contact" }];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        aria-label="Open menu"
        className="inline-flex size-9 items-center justify-center rounded-sm text-foreground hover:bg-background-2 md:hidden"
      >
        <Menu aria-hidden strokeWidth={1.5} className="size-5" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-0 z-[60] flex flex-col bg-background md:hidden"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <div className="flex h-16 items-center justify-between border-b border-border px-4">
            <Logo onClick={close} />
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <Dialog.Close
                aria-label="Close menu"
                className="inline-flex size-9 items-center justify-center rounded-sm hover:bg-background-2"
              >
                <X aria-hidden strokeWidth={1.5} className="size-5" />
              </Dialog.Close>
            </div>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
            <ul>
              {links.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href} className="border-b border-border">
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between py-4 text-2xl font-semibold tracking-tight",
                        active ? "text-foreground" : "text-muted",
                      )}
                    >
                      {item.label}
                      <span aria-hidden className="text-base text-muted">
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="border-t border-border p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <Link
              href="/contact"
              onClick={close}
              className={buttonClasses({ size: "lg", className: "w-full" })}
            >
              Get a free quote
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
