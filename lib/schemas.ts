import { z } from "zod";
import { packages } from "@/content/packages";

export const budgetOptions = [
  "Not sure yet",
  "Under ₦350,000",
  "₦350,000 to ₦1,000,000",
  "₦1,000,000 to ₦3,000,000",
  "₦3,000,000 to ₦7,000,000",
  "Above ₦7,000,000",
] as const;

export const timelineOptions = [
  "As soon as possible",
  "Within a month",
  "1 to 3 months",
  "Just exploring",
] as const;

const packageSlugs = ["", "not-sure", "standalone", ...packages.map((p) => p.slug)] as [string, ...string[]];

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  whatsapp: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+\d\s()-]*$/, "Use digits, spaces, and an optional +.")
    .optional()
    .or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  package: z.enum(packageSlugs).optional(),
  budget: z.enum(budgetOptions).optional().or(z.literal("")),
  timeline: z.enum(timelineOptions).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (at least 10 characters).")
    .max(4000),
  /** Honeypot: real people never fill this in */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
