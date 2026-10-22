import { Suspense } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 md:px-6">
        <Logo />
        <nav aria-label="Main" className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <Suspense>
            <NavLinks />
          </Suspense>
        </nav>
        <div className="flex items-center gap-1.5">
          <ThemeToggle className="hidden md:inline-flex" />
          <ButtonLink href="/contact" variant="ghost" size="sm" className="hidden lg:inline-flex">
            Contact
          </ButtonLink>
          <ButtonLink href="/contact" size="sm" className="hidden sm:inline-flex">
            Get a free quote
          </ButtonLink>
          <Suspense>
            <MobileMenu />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
