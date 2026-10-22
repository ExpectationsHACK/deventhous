"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="border-t border-border">
      {items.map((item, i) => (
        <AccordionPrimitive.Item key={item.q} value={`item-${i}`} className="border-b border-border">
          <AccordionPrimitive.Header asChild>
            <h3>
              <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left text-body font-medium transition-colors hover:text-foreground">
                {item.q}
                <Plus
                  aria-hidden
                  strokeWidth={1.5}
                  className="size-4 shrink-0 text-muted transition-transform duration-200 group-data-[state=open]:rotate-45"
                />
              </AccordionPrimitive.Trigger>
            </h3>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden text-muted data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]">
            <p className="max-w-2xl pb-5 pr-10 text-pretty">{item.a}</p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
