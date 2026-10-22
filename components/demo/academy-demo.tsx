import { Award, Check, FileText, GraduationCap, Lock, Play, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { loop, Ping } from "./screen";

const modules = [
  {
    title: "1. Foundations",
    lessons: [
      { name: "Know your customer", state: "done" },
      { name: "Your offer in one line", state: "done" },
    ],
  },
  {
    title: "2. Social media",
    lessons: [
      { name: "Content that sells", state: "done" },
      { name: "Instagram ads", state: "current" },
      { name: "WhatsApp Status", state: "todo" },
    ],
  },
  { title: "3. Your website", lessons: [{ name: "Locked until module 2", state: "locked" }] },
];

/** Example Academy: a fictional course platform for small business owners. */
export function AcademyDemo() {
  return (
    <div className="grid h-full grid-cols-[16em_1fr] bg-[#f8fafc] text-[#0f172a]">
      <aside className="flex flex-col bg-[#1e1b4b] px-[1.3em] py-[1.2em] text-[#c7d2fe]">
        <span className="flex items-center gap-[0.5em] text-white">
          <GraduationCap className="size-[1.4em]" strokeWidth={2} />
          <span className="text-[0.95em] font-semibold">Brightpath Academy</span>
        </span>
        <p className="mt-[1.5em] text-[0.62em] tracking-[0.15em] uppercase">Your course</p>
        <p className="mt-[0.3em] text-[0.85em] font-semibold text-white">Digital Marketing for Small Businesses</p>
        <div className="mt-[0.8em] h-[0.4em] overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[68%] rounded-full bg-[#a78bfa]" />
        </div>
        <p className="mt-[0.35em] text-[0.62em]">68% complete · 9 of 13 lessons</p>
        <div className="mt-[1.2em] space-y-[0.9em]">
          {modules.map((m) => (
            <div key={m.title}>
              <p className="text-[0.7em] font-semibold text-white">{m.title}</p>
              <ul className="mt-[0.4em] space-y-[0.25em]">
                {m.lessons.map((l) => (
                  <li
                    key={l.name}
                    className={cn(
                      "flex items-center gap-[0.5em] rounded-[0.4em] px-[0.5em] py-[0.35em] text-[0.66em]",
                      l.state === "current" && "bg-[#7c3aed] text-white",
                      l.state === "locked" && "opacity-50",
                    )}
                  >
                    {l.state === "done" && <Check className="size-[1.1em] text-[#4ade80]" strokeWidth={3} />}
                    {l.state === "current" && <PlayCircle className="size-[1.1em]" strokeWidth={2} />}
                    {l.state === "todo" && <span className="size-[1em] rounded-full border border-current" />}
                    {l.state === "locked" && <Lock className="size-[1em]" strokeWidth={2} />}
                    {l.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <main className="px-[2em] py-[1.2em]">
        <div className="flex items-center justify-between">
          <span className="text-[0.7em] text-slate-500">Module 2 · Lesson 4 of 5</span>
          <span className="flex items-center gap-[0.6em]">
            <span className="rounded-full bg-[#ede9fe] px-[0.8em] py-[0.3em] text-[0.62em] font-medium text-[#6d28d9]">Quiz unlocked</span>
            <span className="flex size-[2em] items-center justify-center rounded-full bg-[#7c3aed] text-[0.7em] font-semibold text-white">AO</span>
          </span>
        </div>

        <div className="relative mt-[0.9em] aspect-video overflow-hidden rounded-[0.9em] bg-gradient-to-br from-[#4c1d95] via-[#5b21b6] to-[#1e1b4b]">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #f0abfc 0, transparent 40%)" }} />
          <div className="absolute top-[1.4em] left-[1.6em] text-white">
            <p className="text-[0.66em] tracking-[0.18em] text-[#ddd6fe] uppercase">Lesson 2.4</p>
            <p className="mt-[0.3em] text-[1.8em] leading-[1.1] font-semibold tracking-tight">Instagram ads that sell</p>
            <p className="mt-[0.3em] text-[0.75em] text-[#ddd6fe]">Targeting customers in your city</p>
          </div>
          <span className="absolute top-1/2 left-1/2 flex size-[3.4em] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#5b21b6]">
            <Ping className="bg-white/60" />
            <Play className="relative ml-[0.15em] size-[1.4em] fill-current" strokeWidth={2} />
          </span>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-[1.2em] pt-[2em] pb-[0.8em]">
            <div className="h-[0.3em] overflow-hidden rounded-full bg-white/25">
              <div className="h-full w-full origin-left rounded-full bg-[#a78bfa]" style={loop("demo-progress 6s linear")} />
            </div>
            <div className="mt-[0.4em] flex justify-between text-[0.6em] text-white/80">
              <span>04:12</span>
              <span>11:30</span>
            </div>
          </div>
        </div>

        <div className="mt-[1em] flex items-start justify-between gap-[1.5em]">
          <div>
            <div className="flex gap-[1.2em] border-b border-slate-200 text-[0.7em]">
              <span className="border-b-2 border-[#7c3aed] pb-[0.4em] font-semibold text-[#6d28d9]">Overview</span>
              <span className="text-slate-500">Resources</span>
              <span className="text-slate-500">Quiz</span>
            </div>
            <p className="mt-[0.6em] flex items-center gap-[0.4em] text-[0.68em] text-slate-600">
              <FileText className="size-[1.2em] text-slate-400" strokeWidth={2} />
              Ad budget worksheet.pdf
            </p>
          </div>
          <div className="flex items-center gap-[0.6em] rounded-[0.7em] bg-white p-[0.7em] shadow-sm ring-1 ring-slate-100">
            <Award className="size-[1.8em] text-[#f59e0b]" strokeWidth={1.75} />
            <span className="text-[0.62em] leading-[1.35] text-slate-600">
              <span className="block font-semibold text-slate-900">Certificate</span>4 lessons to go
            </span>
          </div>
        </div>
        <p className="mt-[1em] text-[0.72em] font-semibold">Up next</p>
        <div className="mt-[0.5em] grid grid-cols-3 gap-[0.8em]">
          {[
            ["2.5 WhatsApp Status that sells", "8 min", "from-[#22c55e] to-[#15803d]"],
            ["3.1 What your website must do", "12 min", "from-[#38bdf8] to-[#1d4ed8]"],
            ["3.2 Getting found on Google", "10 min", "from-[#fbbf24] to-[#ea580c]"],
          ].map(([t, d, g]) => (
            <div key={t} className="flex items-center gap-[0.6em] rounded-[0.6em] bg-white p-[0.5em] ring-1 ring-slate-100">
              <span className={`flex size-[2.4em] shrink-0 items-center justify-center rounded-[0.4em] bg-gradient-to-br ${g} text-white`}>
                <Play className="size-[0.9em] fill-current" strokeWidth={2} />
              </span>
              <span>
                <span className="block text-[0.62em] leading-[1.3] font-medium">{t}</span>
                <span className="text-[0.56em] text-slate-400">{d}</span>
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
