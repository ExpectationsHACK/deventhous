import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

/** Floating WhatsApp button, bottom-right on every page. */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Deventhous on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex size-12 items-center justify-center rounded-full border border-border-strong bg-foreground text-background shadow-lg shadow-black/20 transition-transform hover:scale-105 md:right-6 md:bottom-6"
    >
      <MessageCircle aria-hidden strokeWidth={1.75} className="size-5" />
    </a>
  );
}
