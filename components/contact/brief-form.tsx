"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, type Resolver } from "react-hook-form";
import { CheckCircle2, Loader2 } from "lucide-react";
import { entryOffer, packages } from "@/content/packages";
import { budgetOptions, leadSchema, timelineOptions, type LeadInput } from "@/lib/schemas";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Minimal Zod resolver, so we don't need an extra dependency. */
const zodResolver: Resolver<LeadInput> = async (values) => {
  const result = leadSchema.safeParse(values);
  if (result.success) return { values: result.data, errors: {} };
  const errors: Record<string, { type: string; message: string }> = {};
  for (const issue of result.error.issues) {
    const key = issue.path.join(".");
    if (!errors[key]) errors[key] = { type: issue.code, message: issue.message };
  }
  return { values: {}, errors };
};

const fieldClasses =
  "h-10 w-full rounded-sm border border-border-strong bg-card px-3 text-sm text-foreground placeholder:text-muted-2 transition-colors hover:border-muted-2 focus:border-foreground focus:outline-none focus-visible:outline-2 focus-visible:outline-accent aria-[invalid=true]:border-danger";

function Field({
  id,
  label,
  optional,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-sm font-medium">
        {label}
        {optional && <span className="font-mono text-[11px] font-normal text-muted">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[13px] text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

/** Reads ?package= from the URL. Must sit inside a Suspense boundary. */
export function BriefFormWithParams() {
  const params = useSearchParams();
  const requested = params.get("package") ?? "";
  const valid = packages.some((p) => p.slug === requested);
  const offer = params.get("offer") === "launch-in-5-days" && entryOffer.enabled;
  return (
    <BriefForm
      key={requested + (offer ? "-offer" : "")}
      defaultPackage={valid ? requested : ""}
      defaultMessage={offer ? `I'd like the ${entryOffer.name} offer. ` : ""}
    />
  );
}

export function BriefForm({
  defaultPackage = "",
  defaultMessage = "",
}: {
  defaultPackage?: string;
  defaultMessage?: string;
}) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver,
    defaultValues: { package: defaultPackage, message: defaultMessage, budget: "", timeline: "", website: "" },
  });

  async function onSubmit(data: LeadInput) {
    setServerError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error ?? "Something went wrong.");
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-start rounded-lg border border-border p-8">
        <CheckCircle2 aria-hidden strokeWidth={1.5} className="size-8 text-success-text" />
        <h3 className="mt-4 text-h3">Got it.</h3>
        <p className="mt-2 text-muted">
          We&apos;ll reply on WhatsApp or email within {site.replyTime}.
        </p>
        <Button variant="secondary" className="mt-6" onClick={() => setStatus("idle")}>
          Send another brief
        </Button>
      </div>
    );
  }

  const describedBy = (name: keyof LeadInput) => (errors[name] ? `${name}-error` : undefined);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field id="name" label="Name" error={errors.name?.message}>
        <input id="name" autoComplete="name" className={fieldClasses} aria-invalid={!!errors.name} aria-describedby={describedBy("name")} {...register("name")} />
      </Field>
      <Field id="email" label="Email" error={errors.email?.message}>
        <input id="email" type="email" autoComplete="email" className={fieldClasses} aria-invalid={!!errors.email} aria-describedby={describedBy("email")} {...register("email")} />
      </Field>
      <Field id="whatsapp" label="WhatsApp number" optional error={errors.whatsapp?.message}>
        <input id="whatsapp" type="tel" autoComplete="tel" placeholder="+234" className={fieldClasses} aria-invalid={!!errors.whatsapp} aria-describedby={describedBy("whatsapp")} {...register("whatsapp")} />
      </Field>
      <Field id="company" label="Company" optional error={errors.company?.message}>
        <input id="company" autoComplete="organization" className={fieldClasses} {...register("company")} />
      </Field>
      <Field id="package" label="Package interest" optional className="sm:col-span-2">
        <select id="package" className={fieldClasses} {...register("package")}>
          <option value="">Choose a package</option>
          {packages.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
          <option value="standalone">Standalone service (SEO, automation, support)</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </Field>
      <Field id="budget" label="Budget range" optional>
        <select id="budget" className={fieldClasses} {...register("budget")}>
          <option value="">Select a range</option>
          {budgetOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </Field>
      <Field id="timeline" label="Timeline" optional>
        <select id="timeline" className={fieldClasses} {...register("timeline")}>
          <option value="">When do you need it?</option>
          {timelineOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>
      <Field id="message" label="About your project" error={errors.message?.message} className="sm:col-span-2">
        <textarea
          id="message"
          rows={5}
          placeholder="What do you sell, who are your customers, and what should the site do?"
          className={cn(fieldClasses, "h-auto py-2.5")}
          aria-invalid={!!errors.message}
          aria-describedby={describedBy("message")}
          {...register("message")}
        />
      </Field>

      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">We reply within {site.replyTime}.</p>
        <Button type="submit" size="lg" disabled={isSubmitting} className="sm:min-w-44">
          {isSubmitting && <Loader2 aria-hidden className="animate-spin" />}
          {isSubmitting ? "Sending" : "Send brief"}
        </Button>
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm text-danger sm:col-span-2">
          {serverError} You can also reach us on WhatsApp.
        </p>
      )}
    </form>
  );
}
