import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { getPackage } from "@/content/packages";
import { leadSchema, type LeadInput } from "@/lib/schemas";
import { site } from "@/lib/site";

/**
 * Lead intake.
 * Env vars (see .env.example):
 *   RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL     → email notification
 *   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY            → store in `leads` table
 */

// Best-effort in-memory rate limit: 5 submissions per IP per 10 minutes.
// On serverless this is per instance; use Upstash or Vercel KV for a hard limit.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_HITS;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function summarize(lead: LeadInput) {
  const pkg = lead.package ? (getPackage(lead.package)?.name ?? lead.package) : "";
  return [
    ["Name", lead.name],
    ["Email", lead.email],
    ["WhatsApp", lead.whatsapp],
    ["Company", lead.company],
    ["Package", pkg],
    ["Budget", lead.budget],
    ["Timeline", lead.timeline],
    ["Message", lead.message],
  ].filter(([, v]) => v) as [string, string][];
}

async function sendEmail(lead: LeadInput) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  if (!key || !to) return "skipped" as const;
  const resend = new Resend(key);
  const rows = summarize(lead);
  const { error } = await resend.emails.send({
    from: process.env.LEAD_FROM_EMAIL ?? `${site.name} <onboarding@resend.dev>`,
    to,
    replyTo: lead.email,
    subject: `New project brief: ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
    text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
    html: `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">${rows
      .map(([k, v]) => `<tr><td style="color:#666;vertical-align:top">${k}</td><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`)
      .join("")}</table>`,
  });
  if (error) throw new Error(`Resend: ${error.message}`);
  return "sent" as const;
}

async function storeLead(lead: LeadInput, ip: string) {
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return "skipped" as const;
  const supabase = createClient(url, serviceKey, { auth: { persistSession: false } });
  const { error } = await supabase.from("leads").insert({
    name: lead.name,
    email: lead.email,
    whatsapp: lead.whatsapp || null,
    company: lead.company || null,
    package: lead.package || null,
    budget: lead.budget || null,
    timeline: lead.timeline || null,
    message: lead.message,
    ip,
  });
  if (error) throw new Error(`Supabase: ${error.message}`);
  return "stored" as const;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again in a few minutes." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled: pretend success so bots learn nothing.
  if (body && typeof body === "object" && "website" in body && (body as { website?: string }).website) {
    return NextResponse.json({ ok: true });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Please check the form." }, { status: 400 });
  }

  const results = await Promise.allSettled([sendEmail(parsed.data), storeLead(parsed.data, ip)]);
  const failures = results.filter((r): r is PromiseRejectedResult => r.status === "rejected");
  failures.forEach((f) => console.error("[lead]", f.reason));
  const delivered = results.some((r) => r.status === "fulfilled" && r.value !== "skipped");

  if (!delivered) {
    if (failures.length === 0 && process.env.NODE_ENV !== "production") {
      console.warn("[lead] No RESEND or SUPABASE env vars set. Lead received but not delivered:", parsed.data);
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { error: "We couldn't send your brief right now." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
