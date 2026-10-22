"use client";

import { useEffect } from "react";

/**
 * Scroll reveal and card spotlight, started after hydration so React never
 * sees attributes it didn't render. Renders nothing.
 *
 * - Reveals each [data-reveal] element once (sets data-in) as it enters the viewport.
 * - Re-scans when the DOM changes, e.g. after client-side navigation.
 * - Tracks the cursor over `.spotlight` cards on fine-pointer devices.
 */
export function PageEffects() {
  useEffect(() => {
    document.documentElement.setAttribute("data-fx", "");
    const reveal = (el: Element) => el.setAttribute("data-in", "");

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("[data-reveal]").forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    const scan = () =>
      document.querySelectorAll("[data-reveal]:not([data-in])").forEach((el) => io.observe(el));
    scan();

    let frame = 0;
    const mo = new MutationObserver(() => {
      if (!frame) frame = requestAnimationFrame(() => ((frame = 0), scan()));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.<HTMLElement>(".spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - r.left}px`);
      card.style.setProperty("--y", `${e.clientY - r.top}px`);
    };
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (finePointer) document.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
