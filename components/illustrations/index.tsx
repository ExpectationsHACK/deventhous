import {
  Award,
  Bot,
  CalendarCheck,
  Check,
  CreditCard,
  Database,
  FileText,
  Globe,
  Camera,
  Landmark,
  Lock,
  Mail,
  MessageCircle,
  PlayCircle,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  TriangleAlert,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Animated, theme-aware illustrations for each service. Pure CSS (plus a few
 * SVG motion paths); no client JavaScript. Content is sized in em from a cqw
 * base so each drawing scales with its container.
 */

function Illustration({
  label,
  ratio = "4 / 3",
  units = 30,
  className,
  children,
}: {
  label: string;
  ratio?: string;
  /** Virtual width in em: the drawing is designed on a canvas this many em wide */
  units?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("@container relative w-full overflow-hidden rounded-md border border-border bg-background", className)}
      style={{ aspectRatio: ratio }}
    >
      <div
        aria-hidden
        className="ill absolute inset-0 text-foreground"
        style={{
          fontSize: `${100 / units}cqw`,
          backgroundImage: "radial-gradient(var(--grid) 1px, transparent 1px)",
          backgroundSize: "1.2em 1.2em",
        }}
      >
        {children}
      </div>
    </div>
  );
}

const play = (name: string, duration = "8s", timing = "ease-out", delay = "0s"): React.CSSProperties => ({
  animation: `${name} ${duration} ${timing} ${delay} infinite backwards`,
});

function Cursor({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("ill-cursor pointer-events-none absolute z-20 size-[1.5em] drop-shadow", className)} style={style}>
      <path d="M5 3l14 8-6.5 1.5L10 19z" fill="#111" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function Spinner() {
  return (
    <span
      className="inline-block size-[1em] rounded-full border-[0.15em] border-current border-t-transparent"
      style={{ animation: "ill-spin 0.8s linear infinite" }}
    />
  );
}

const card = "rounded-[0.7em] border border-border bg-card shadow-[0_0.8em_2em_-1em_rgba(0,0,0,0.2)]";

/* ------------------------------------------------------------------ */
/* Online stores and payments: checkout → processing → success        */
/* ------------------------------------------------------------------ */

export function PaymentsIllustration({ className }: { className?: string }) {
  const methods = [
    { icon: CreditCard, label: "Card", active: true },
    { icon: Landmark, label: "Transfer" },
    { icon: Smartphone, label: "USSD" },
  ];
  return (
    <Illustration
      className={className}
      label="A checkout: the customer picks card, bank transfer, or USSD, pays, and gets a payment confirmation"
    >
      <div className={cn(card, "absolute top-1/2 left-1/2 w-[19em] -translate-x-1/2 -translate-y-1/2 p-[1.1em]")}>
        <div className="flex items-center justify-between">
          <span className="text-[0.82em] font-semibold">Checkout</span>
          <span className="flex items-center gap-[0.3em] text-[0.58em] text-muted">
            <Lock className="size-[1.1em]" strokeWidth={2} />
            Secured by Paystack
          </span>
        </div>
        <div className="mt-[0.8em] flex items-center gap-[0.6em] rounded-[0.5em] bg-background p-[0.5em]">
          <span className="tex-ankara size-[2.2em] shrink-0 rounded-[0.35em]" />
          <span>
            <span className="block text-[0.66em] font-medium">Ankara wrap skirt × 2</span>
            <span className="text-[0.58em] text-muted">Delivery to Ikeja</span>
          </span>
          <span className="ml-auto text-[0.72em] font-semibold">₦45,500</span>
        </div>
        <p className="mt-[0.8em] text-[0.56em] tracking-[0.12em] text-muted uppercase">Pay with</p>
        <div className="mt-[0.4em] grid grid-cols-3 gap-[0.4em]">
          {methods.map(({ icon: Icon, label, active }) => (
            <span
              key={label}
              className={cn(
                "flex flex-col items-center gap-[0.25em] rounded-[0.45em] border p-[0.5em] text-[0.6em]",
                active ? "border-foreground font-medium" : "border-border text-muted",
              )}
            >
              <Icon className="size-[1.5em]" strokeWidth={1.75} />
              {label}
            </span>
          ))}
        </div>
        <div className="relative mt-[0.9em] h-[2.3em]">
          <span className="absolute inset-0 flex items-center justify-center rounded-[0.45em] bg-foreground text-[0.72em] font-medium text-background" style={play("ill-phase-a", "7s", "linear")}>
            Pay ₦45,500
          </span>
          <span className="ill-alt absolute inset-0 flex items-center justify-center gap-[0.5em] rounded-[0.45em] bg-foreground text-[0.72em] font-medium text-background opacity-0" style={play("ill-phase-b", "7s", "linear")}>
            <Spinner />
            Processing
          </span>
          <Cursor className="top-[45%] left-[58%]" style={play("ill-cursor", "7s", "ease-in-out")} />
        </div>
      </div>

      <div className="ill-alt absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-[2px]" style={play("ill-phase-c", "7s", "ease-out")}>
        <div className={cn(card, "w-[16em] p-[1.2em] text-center")}>
          <span className="mx-auto flex size-[3em] items-center justify-center rounded-full bg-[#16a34a] text-white">
            <Check className="size-[1.7em]" strokeWidth={3} />
          </span>
          <p className="mt-[0.6em] text-[0.88em] font-semibold">Payment successful</p>
          <p className="text-[0.62em] text-muted">₦45,500 · Order #1042</p>
          <div className="mt-[0.7em] flex justify-center gap-[0.9em] text-[0.56em] text-muted">
            <span className="flex items-center gap-[0.3em]">
              <Mail className="size-[1.2em]" strokeWidth={2} />
              Receipt emailed
            </span>
            <span className="flex items-center gap-[0.3em]">
              <MessageCircle className="size-[1.2em] text-[#16a34a]" strokeWidth={2} />
              WhatsApp update
            </span>
          </div>
        </div>
      </div>
    </Illustration>
  );
}

/* ------------------------------------------------------------------ */
/* E-commerce: an order moves New → Packed → Shipped                  */
/* ------------------------------------------------------------------ */

export function EcommerceIllustration({ className }: { className?: string }) {
  const columns = [
    { title: "New", count: 4, dot: "bg-[#3b82f6]" },
    { title: "Packed", count: 6, dot: "bg-[#f59e0b]" },
    { title: "Shipped", count: 14, dot: "bg-[#16a34a]" },
  ];
  const ghost = "rounded-[0.45em] border border-border bg-card p-[0.5em]";
  return (
    <Illustration
      className={className}
      label="An order dashboard: a new order is packed, shipped, stock updates, and the customer is notified on WhatsApp"
    >
      <div className="absolute inset-x-[1.5em] top-[1.2em] flex items-center justify-between">
        <span className="text-[0.82em] font-semibold">Orders</span>
        <span className="flex items-center gap-[0.4em] text-[0.62em] text-muted">
          Today
          <span className="relative inline-grid rounded-full bg-card px-[0.6em] py-[0.15em] font-semibold text-foreground ring-1 ring-border">
            <span className="col-start-1 row-start-1" style={play("ill-phase-a", "8s", "linear")}>
              24
            </span>
            <span className="ill-alt col-start-1 row-start-1 opacity-0" style={play("ill-on-1", "8s")}>
              25
            </span>
          </span>
        </span>
      </div>

      <div className="absolute inset-x-[1.5em] top-[3.3em] grid grid-cols-3 gap-[0.6em]">
        {columns.map((c) => (
          <div key={c.title} className="h-[12.6em] rounded-[0.6em] bg-background-2/70 p-[0.5em]">
            <p className="flex items-center gap-[0.35em] text-[0.6em] font-medium">
              <span className={cn("size-[0.6em] rounded-full", c.dot)} />
              {c.title}
              <span className="ml-auto text-muted">{c.count}</span>
            </p>
            <div className="mt-[3.6em] space-y-[0.4em] opacity-60">
              <div className={ghost}>
                <span className="block h-[0.35em] w-3/4 rounded-full bg-border-strong" />
                <span className="mt-[0.35em] block h-[0.3em] w-1/2 rounded-full bg-border" />
              </div>
              <div className={ghost}>
                <span className="block h-[0.35em] w-2/3 rounded-full bg-border-strong" />
                <span className="mt-[0.35em] block h-[0.3em] w-1/3 rounded-full bg-border" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[4.5em] left-[2em] w-[7.6em]" style={play("ill-on-1", "8s")}>
        <div
          className="rounded-[0.5em] border border-foreground/20 bg-card p-[0.5em] shadow-[0_0.6em_1.4em_-0.6em_rgba(0,0,0,0.35)]"
          style={{ "--step": "9.2em", ...play("ill-move", "8s", "ease-in-out") } as React.CSSProperties}
        >
          <p className="text-[0.56em] text-muted">Order #1043</p>
          <p className="flex items-center gap-[0.35em] text-[0.64em] font-semibold">
            <span className="size-[1.2em] rounded-[0.25em] bg-gradient-to-br from-slate-700 to-slate-900" />
            Wireless earbuds
          </p>
          <p className="mt-[0.15em] text-[0.6em]">₦38,000</p>
        </div>
      </div>

      <div className="absolute inset-x-[1.5em] bottom-[1.2em] flex items-center justify-between rounded-[0.55em] border border-border bg-card px-[0.8em] py-[0.55em] text-[0.62em]">
        <span className="text-muted">Stock · Wireless earbuds</span>
        <span className="relative inline-grid font-semibold">
          <span className="col-start-1 row-start-1" style={play("ill-phase-a", "8s", "linear")}>
            12 left
          </span>
          <span className="ill-alt col-start-1 row-start-1 text-[#d97706] opacity-0" style={play("ill-on-2", "8s")}>
            11 left
          </span>
        </span>
      </div>

      <div
        className={cn(card, "ill-alt absolute top-[2.8em] right-[1em] flex items-center gap-[0.5em] px-[0.7em] py-[0.5em] opacity-0")}
        style={play("ill-on-4", "8s")}
      >
        <span className="flex size-[1.8em] items-center justify-center rounded-full bg-[#25d366] text-white">
          <MessageCircle className="size-[1em]" strokeWidth={2.25} />
        </span>
        <span className="text-[0.56em] leading-[1.3]">
          <span className="block font-semibold">Customer notified</span>
          <span className="text-muted">&ldquo;Your order is on the way&rdquo;</span>
        </span>
      </div>
    </Illustration>
  );
}

/* ------------------------------------------------------------------ */
/* SEO: your site climbs from #4 to #1, traffic line draws upward     */
/* ------------------------------------------------------------------ */

export function SeoIllustration({ className }: { className?: string }) {
  const rowH = 3.2;
  return (
    <Illustration className={className} label="Search results where your website climbs from fourth place to first, while organic traffic rises">
      <div className="absolute inset-x-[1.5em] top-[1.2em] flex items-center gap-[0.6em] rounded-full border border-border bg-card px-[1em] py-[0.55em] text-[0.68em]">
        <Search className="size-[1.2em] text-muted" strokeWidth={2} />
        <span>best gadget store in lagos</span>
        <span className="h-[1.1em] w-[0.08em] bg-foreground" style={{ animation: "demo-blink 1s steps(1) infinite" }} />
      </div>

      <div className="absolute inset-x-[1.5em] top-[4.3em]" style={{ height: `${rowH * 4}em` }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-x-0 rounded-[0.5em] px-[0.8em] py-[0.45em]"
            style={{ top: `${i * rowH}em`, "--rise": `${rowH}em`, ...play("ill-rise", "8s", "ease-in-out") } as React.CSSProperties}
          >
            <span className="block h-[0.4em] w-[6em] rounded-full bg-border-strong" />
            <span className="mt-[0.4em] block h-[0.5em] w-[13em] rounded-full bg-border-strong/80" />
            <span className="mt-[0.35em] block h-[0.35em] w-[17em] rounded-full bg-border" />
          </div>
        ))}
        <div
          className="absolute inset-x-0 z-10 rounded-[0.5em] border border-[#16a34a]/40 bg-card px-[0.8em] py-[0.45em] shadow-[0_0.6em_1.4em_-0.8em_rgba(22,163,74,0.6)]"
          style={{ top: `${rowH * 3}em`, "--rise": `${-rowH * 3}em`, ...play("ill-rise", "8s", "ease-in-out") } as React.CSSProperties}
        >
          <span className="flex items-center justify-between">
            <span className="text-[0.56em] text-muted">yourbusiness.com</span>
            <span className="relative inline-grid rounded-full bg-[#16a34a] px-[0.5em] text-[0.56em] font-semibold text-white">
              <span className="col-start-1 row-start-1" style={play("ill-phase-a", "8s", "linear")}>
                #4
              </span>
              <span className="ill-alt col-start-1 row-start-1 opacity-0" style={play("ill-on-2", "8s")}>
                #1
              </span>
            </span>
          </span>
          <span className="block text-[0.72em] font-semibold text-accent">Your Business · Gadgets in Lagos</span>
          <span className="block text-[0.56em] text-muted">★★★★★ Google Business Profile · Open now · Ikeja</span>
        </div>
      </div>

      <div className="absolute inset-x-[1.5em] bottom-[1em] flex items-end justify-between gap-[1em] rounded-[0.55em] border border-border bg-card px-[0.8em] py-[0.5em]">
        <span className="text-[0.6em] text-muted">
          <span className="block font-semibold text-foreground">Organic traffic</span>
          Last 6 months
        </span>
        <svg viewBox="0 0 120 30" className="h-[2.2em] w-[10em] overflow-visible">
          <path
            d="M2 27 L22 24 L42 25 L62 17 L82 12 L102 7 L118 3"
            fill="none"
            stroke="#16a34a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            strokeDasharray={1}
            vectorEffect="non-scaling-stroke"
            style={play("ill-draw", "8s", "ease-in-out")}
          />
        </svg>
      </div>
    </Illustration>
  );
}

/* ------------------------------------------------------------------ */
/* AI automation and business agents: channels → agent → outcomes     */
/* ------------------------------------------------------------------ */

const channels = [
  { y: 40, icon: MessageCircle, label: "WhatsApp", sub: "Price for 2 bags?", color: "#25d366" },
  { y: 100, icon: Globe, label: "Website chat", sub: "Can I book Friday?", color: "#3b82f6" },
  { y: 160, icon: Camera, label: "Instagram DM", sub: "Do you deliver?", color: "#e1306c" },
];
const outcomes = [
  { y: 30, icon: UserCheck, label: "Lead qualified" },
  { y: 77, icon: CalendarCheck, label: "Booking confirmed" },
  { y: 123, icon: Database, label: "CRM updated" },
  { y: 170, icon: FileText, label: "Daily summary sent" },
];

export function AutomationIllustration({ className }: { className?: string }) {
  return (
    <Illustration
      className={className}
      ratio="2 / 1"
      units={40}
      label="Messages from WhatsApp, website chat, and Instagram flow into an AI agent, which qualifies leads, books appointments, updates the CRM, and sends a daily summary"
    >
      <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full">
        {channels.map((c) => (
          <path key={c.label} id={`in-${c.y}`} d={`M110 ${c.y} C140 ${c.y} 140 100 170 100`} fill="none" stroke="var(--border-strong)" strokeWidth="1.2" strokeDasharray="3 3" />
        ))}
        {outcomes.map((o) => (
          <path key={o.label} d={`M230 100 C260 100 260 ${o.y} 290 ${o.y}`} fill="none" stroke="var(--border-strong)" strokeWidth="1.2" strokeDasharray="3 3" />
        ))}
        {channels.map((c, i) => (
          <circle key={c.label} className="ill-dot" r="3.2" fill={c.color}>
            <animateMotion dur="2.4s" begin={`${i * 0.8}s`} repeatCount="indefinite" path={`M110 ${c.y} C140 ${c.y} 140 100 170 100`} />
            <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
          </circle>
        ))}
        {outcomes.map((o, i) => (
          <circle key={o.label} className="ill-dot" r="3.2" fill="#16a34a">
            <animateMotion dur="2s" begin={`${1.2 + i * 0.6}s`} repeatCount="indefinite" path={`M230 100 C260 100 260 ${o.y} 290 ${o.y}`} />
            <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin={`${1.2 + i * 0.6}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>

      {channels.map(({ y, icon: Icon, label, sub, color }) => (
        <div
          key={label}
          className={cn(card, "absolute left-[2.5%] flex w-[25%] -translate-y-1/2 items-center gap-[0.5em] p-[0.5em]")}
          style={{ top: `${y / 2}%` }}
        >
          <span className="flex size-[1.9em] shrink-0 items-center justify-center rounded-full text-white" style={{ background: color }}>
            <Icon className="size-[1.05em]" strokeWidth={2.25} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[0.62em] font-semibold">{label}</span>
            <span className="block truncate text-[0.54em] text-muted">{sub}</span>
          </span>
        </div>
      ))}

      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <span className="relative flex size-[5.2em] items-center justify-center rounded-full bg-foreground text-background shadow-xl">
          <span className="absolute inset-0 rounded-full bg-foreground/40" style={{ animation: "demo-ping 2.4s cubic-bezier(0,0,0.2,1) infinite" }} />
          <span className="absolute inset-0 rounded-full bg-foreground/25" style={{ animation: "demo-ping 2.4s cubic-bezier(0,0,0.2,1) 1.2s infinite" }} />
          <Bot className="relative size-[2.3em]" strokeWidth={1.75} />
        </span>
        <span className="mt-[0.5em] text-[0.66em] font-semibold">AI agent</span>
        <span className="text-[0.54em] text-muted">Trained on your business</span>
      </div>

      {outcomes.map(({ y, icon: Icon, label }, i) => (
        <div
          key={label}
          className={cn(card, "absolute left-[72.5%] flex w-[25%] -translate-y-1/2 items-center gap-[0.5em] px-[0.55em] py-[0.45em]")}
          style={{ top: `${y / 2}%` }}
        >
          <Icon className="size-[1.1em] shrink-0 text-muted" strokeWidth={2} />
          <span className="truncate text-[0.6em] font-medium">{label}</span>
          <span className="ill-alt ml-auto flex size-[1.2em] shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white opacity-0" style={play(`ill-on-${i + 1}`, "8s")}>
            <Check className="size-[0.75em]" strokeWidth={3.5} />
          </span>
        </div>
      ))}
    </Illustration>
  );
}

/* ------------------------------------------------------------------ */
/* Course platforms: lessons complete one by one, certificate unlocks */
/* ------------------------------------------------------------------ */

export function CoursesIllustration({ className }: { className?: string }) {
  const lessons = ["Know your customer", "Write an offer that sells", "Instagram ads", "Turn chats into sales"];
  return (
    <Illustration className={className} label="A course where lessons are completed one by one, the progress bar fills, and a certificate unlocks">
      <div className={cn(card, "absolute inset-x-[1.5em] top-[1.2em] bottom-[1.2em] p-[1em]")}>
        <div className="flex items-center gap-[0.7em]">
          <span className="flex size-[2.8em] shrink-0 items-center justify-center rounded-[0.5em] bg-gradient-to-br from-[#7c3aed] to-[#312e81] text-white">
            <PlayCircle className="size-[1.4em]" strokeWidth={1.75} />
          </span>
          <span>
            <span className="block text-[0.78em] font-semibold">Digital Marketing for SMEs</span>
            <span className="text-[0.6em] text-muted">4 lessons · Self-paced · Quiz and certificate</span>
          </span>
        </div>
        <div className="mt-[0.9em] flex items-center justify-between text-[0.58em] text-muted">
          <span>Your progress</span>
          <span className="relative inline-grid font-semibold text-foreground">
            {["0%", "25%", "50%", "75%", "100%"].map((p, i) => (
              <span
                key={p}
                className={cn("col-start-1 row-start-1", i > 0 && "ill-alt opacity-0")}
                style={i === 0 ? play("ill-phase-a", "8s", "linear") : play(`ill-on-${i}`, "8s")}
              >
                {p}
              </span>
            ))}
          </span>
        </div>
        <div className="mt-[0.35em] h-[0.45em] overflow-hidden rounded-full bg-background-2">
          <div className="h-full w-full origin-left rounded-full bg-[#7c3aed]" style={play("ill-progress", "8s", "ease-in-out")} />
        </div>
        <ul className="mt-[0.9em] space-y-[0.45em]">
          {lessons.map((l, i) => (
            <li key={l} className="flex items-center gap-[0.6em] rounded-[0.45em] border border-border px-[0.6em] py-[0.45em]">
              <span className="relative flex size-[1.3em] shrink-0 items-center justify-center rounded-full border border-border-strong">
                <span className="ill-alt absolute inset-[-1px] flex items-center justify-center rounded-full bg-[#16a34a] text-white opacity-0" style={play(`ill-on-${i + 1}`, "8s")}>
                  <Check className="size-[0.8em]" strokeWidth={3.5} />
                </span>
              </span>
              <span className="text-[0.64em]">
                <span className="text-muted">{i + 1}.</span> {l}
              </span>
              <span className="ml-auto text-[0.56em] text-muted">{6 + i * 2} min</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={cn(card, "ill-alt absolute right-[1em] bottom-[0.7em] flex items-center gap-[0.6em] px-[0.8em] py-[0.6em] opacity-0")}
        style={play("ill-on-5", "8s")}
      >
        <Award className="size-[2em] text-[#f59e0b]" strokeWidth={1.75} />
        <span className="text-[0.6em] leading-[1.3]">
          <span className="block font-semibold">Certificate unlocked</span>
          <span className="text-muted">Shared to LinkedIn</span>
        </span>
      </div>
    </Illustration>
  );
}

/* ------------------------------------------------------------------ */
/* Tech support and management: monitoring dashboard                   */
/* ------------------------------------------------------------------ */

const uptime = Array.from({ length: 28 }, (_, i) => (i === 17 ? "warn" : "ok"));

export function SupportIllustration({ className }: { className?: string }) {
  return (
    <Illustration className={className} label="A monitoring dashboard: uptime bars, a daily backup completing, security updates applied, and an alert being resolved">
      <div className={cn(card, "absolute inset-x-[1.5em] top-[1.2em] bottom-[1.2em] p-[1em]")}>
        <div className="flex items-center justify-between">
          <span className="text-[0.78em] font-semibold">yourbusiness.com</span>
          <span className="flex items-center gap-[0.35em] text-[0.58em] text-[#16a34a]">
            <span className="relative flex size-[0.6em]">
              <span className="absolute inset-0 rounded-full bg-[#16a34a]" style={{ animation: "demo-ping 2s cubic-bezier(0,0,0.2,1) infinite" }} />
              <span className="relative size-full rounded-full bg-[#16a34a]" />
            </span>
            All systems operational
          </span>
        </div>

        <p className="mt-[0.8em] text-[0.56em] text-muted">Uptime · last 90 days</p>
        <div className="mt-[0.3em] overflow-hidden">
          <div className="flex w-max gap-[0.18em]" style={{ animation: "demo-marquee 10s linear infinite" }}>
            {[...uptime, ...uptime].map((s, i) => (
              <span key={i} className={cn("h-[1.4em] w-[0.42em] rounded-[0.1em]", s === "ok" ? "bg-[#16a34a]" : "bg-[#f59e0b]")} />
            ))}
          </div>
        </div>

        <div className="mt-[0.8em] space-y-[0.5em] text-[0.62em]">
          <div className="rounded-[0.5em] border border-border px-[0.7em] py-[0.5em]">
            <div className="flex items-center gap-[0.5em]">
              <Database className="size-[1.2em] text-muted" strokeWidth={2} />
              <span className="font-medium">Daily backup</span>
              <span className="relative ml-auto inline-grid text-[0.92em]">
                <span className="col-start-1 row-start-1 text-muted" style={play("ill-phase-a", "8s", "linear")}>
                  Running
                </span>
                <span className="ill-alt col-start-1 row-start-1 font-medium text-[#16a34a] opacity-0" style={play("ill-on-3", "8s")}>
                  Completed ✓
                </span>
              </span>
            </div>
            <div className="mt-[0.4em] h-[0.35em] overflow-hidden rounded-full bg-background-2">
              <div className="h-full w-full origin-left rounded-full bg-foreground" style={play("ill-fill", "8s", "ease-in-out")} />
            </div>
          </div>
          <div className="flex items-center gap-[0.5em] rounded-[0.5em] border border-border px-[0.7em] py-[0.5em]">
            <ShieldCheck className="size-[1.2em] text-[#16a34a]" strokeWidth={2} />
            <span className="font-medium">SSL certificate</span>
            <span className="ml-auto text-[0.92em] text-muted">Valid · auto-renews</span>
          </div>
          <div className="flex items-center gap-[0.5em] rounded-[0.5em] border border-border px-[0.7em] py-[0.5em]">
            <RefreshCw className="size-[1.2em] text-muted" strokeWidth={2} style={{ animation: "ill-spin 3s linear infinite" }} />
            <span className="font-medium">Security updates</span>
            <span className="ml-auto flex gap-[0.25em]">
              {[1, 2, 3].map((n) => (
                <span key={n} className="relative size-[0.9em] rounded-full bg-background-2">
                  <span className="ill-alt absolute inset-0 rounded-full bg-[#16a34a] opacity-0" style={play(`ill-on-${n}`, "8s")} />
                </span>
              ))}
            </span>
          </div>
          <div className="relative h-[2.3em]">
            <span
              className="absolute inset-0 flex items-center gap-[0.5em] rounded-[0.5em] bg-[#fef3c7] px-[0.7em] text-[#92400e]"
              style={play("ill-phase-a", "8s", "linear")}
            >
              <TriangleAlert className="size-[1.2em]" strokeWidth={2} />
              Slow checkout page detected
            </span>
            <span
              className="ill-alt absolute inset-0 flex items-center gap-[0.5em] rounded-[0.5em] bg-[#dcfce7] px-[0.7em] text-[#166534] opacity-0"
              style={play("ill-on-2", "8s")}
            >
              <Check className="size-[1.2em]" strokeWidth={3} />
              Fixed and back to normal speed
            </span>
          </div>
        </div>
      </div>
    </Illustration>
  );
}
