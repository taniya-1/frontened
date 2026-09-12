import { useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  FileCheck2,
  FileQuestion,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Play,
  Search,
  Settings2,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

type Role = "Trainee" | "Trainer" | "Admin";

const courses = [
  { title: "Digital Literacy Foundations", type: "Core module", instructor: "Aarav Mehta", progress: 72, color: "from-blue-600 to-indigo-500", icon: "01", lessons: "8 of 12 lessons", accent: "bg-blue-50 text-blue-700" },
  { title: "Community Engagement & Outreach", type: "Professional skills", instructor: "Nia Okafor", progress: 48, color: "from-emerald-500 to-teal-400", icon: "02", lessons: "5 of 10 lessons", accent: "bg-emerald-50 text-emerald-700" },
  { title: "Data-Informed Decision Making", type: "Core module", instructor: "Liam Chen", progress: 23, color: "from-violet-500 to-fuchsia-500", icon: "03", lessons: "3 of 14 lessons", accent: "bg-violet-50 text-violet-700" },
];

const assessments = [
  { title: "Digital Literacy Checkpoint", module: "Digital Literacy Foundations", date: "Due tomorrow", duration: "20 min", marks: "20 marks", status: "Pending", tone: "amber" },
  { title: "Community Mapping Quiz", module: "Community Engagement & Outreach", date: "May 28, 2024", duration: "15 min", marks: "15 marks", status: "Upcoming", tone: "blue" },
  { title: "Module 01 Final Assessment", module: "Digital Literacy Foundations", date: "Completed May 12", duration: "30 min", marks: "30 marks", status: "Passed", tone: "green" },
];

function Logo() {
  return <div className="flex items-center gap-2.5"><div className="brand-mark"><span /><span /><span /></div><div><p className="text-[15px] font-extrabold tracking-tight text-slate-950">capacity<span className="text-blue-600">connect</span></p><p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">learn • grow • lead</p></div></div>;
}

function StatCard({ label, value, change, icon: Icon, tone }: { label: string; value: string; change: string; icon: typeof BookOpen; tone: string }) {
  return <div className="surface-card p-4 sm:p-5"><div className="flex items-start justify-between"><div className={`stat-icon ${tone}`}><Icon size={18} /></div><span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">{change}</span></div><p className="mt-5 text-[12px] font-medium text-slate-500">{label}</p><p className="mt-1 text-[25px] font-extrabold tracking-tight text-slate-900">{value}</p></div>;
}

function StatusBadge({ status, tone }: { status: string; tone: string }) {
  return <span className={`status-badge status-${tone}`}><span className="h-1.5 w-1.5 rounded-full bg-current" />{status}</span>;
}

export default function Index() {
  const [role, setRole] = useState<Role>("Trainee");
  const [query, setQuery] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const [activeAssessment, setActiveAssessment] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const filteredCourses = useMemo(() => courses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase())), [query]);

  return <div className="min-h-screen bg-[#f6f8fc] text-slate-900">
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-5 px-4 sm:px-7 lg:px-10">
        <button className="mr-1 rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle menu"><Menu size={21} /></button>
        <Logo />
        <div className="relative ml-4 hidden max-w-[370px] flex-1 md:block"><Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search modules, skills, or topics" className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-xs outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50" /></div>
        <div className="ml-auto flex items-center gap-2 sm:gap-4"><button className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100"><Bell size={19} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-blue-600 ring-2 ring-white" /></button><div className="relative"><button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2 rounded-xl p-1.5 pr-2 hover:bg-slate-50"><div className="avatar">AM</div><span className="hidden text-left sm:block"><span className="block text-xs font-bold text-slate-800">Aisha Mensah</span><span className="block text-[10px] font-medium text-slate-400">Trainee</span></span><ChevronDown size={14} className="hidden text-slate-400 sm:block" /></button>{menuOpen && <div className="absolute right-0 top-12 w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl"><button className="w-full rounded-lg px-3 py-2 text-left text-xs font-semibold hover:bg-slate-50">Profile settings</button><button className="w-full rounded-lg px-3 py-2 text-left text-xs font-semibold hover:bg-slate-50">Sign out</button></div>}</div></div>
      </div>
    </header>
    <div className="mx-auto flex max-w-[1440px]">
      <aside className={`${mobileNav ? "fixed inset-y-[72px] left-0 z-20 flex" : "hidden"} w-[238px] shrink-0 border-r border-slate-200 bg-white px-4 py-6 lg:sticky lg:top-[72px] lg:flex lg:h-[calc(100vh-72px)] lg:flex-col`}>
        <p className="mb-3 px-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Workspace</p>
        <nav className="space-y-1"><button className="nav-item nav-active"><LayoutDashboard size={17} />Overview</button><button className="nav-item"><BookOpen size={17} />My learning<span className="ml-auto rounded-md bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-700">3</span></button><button className="nav-item"><FileCheck2 size={17} />Assessments</button><button className="nav-item"><BarChart3 size={17} />My progress</button></nav>
        <p className="mb-3 mt-9 px-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Manage</p><nav className="space-y-1"><button className="nav-item"><Target size={17} />Learning goals</button><button className="nav-item"><Settings2 size={17} />Settings</button></nav>
        <div className="mt-auto rounded-2xl bg-[#0b1736] p-4 text-white"><div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300"><Sparkles size={16} /></div><p className="text-xs font-bold">Keep your momentum</p><p className="mt-1 text-[10px] leading-relaxed text-slate-400">You're 2 lessons away from your weekly goal.</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[68%] rounded-full bg-blue-400" /></div><p className="mt-2 text-[10px] font-semibold text-blue-200">68% of weekly goal</p></div>
      </aside>
      <main className="min-w-0 flex-1 px-4 py-7 sm:px-7 lg:px-10 lg:py-9"><div className="mx-auto max-w-[1120px]">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-bold text-blue-600">Tuesday, May 21, 2024</p><h1 className="text-[28px] font-extrabold tracking-[-0.04em] text-slate-950 sm:text-[34px]">Good morning, Aisha <span className="wave">✦</span></h1><p className="mt-2 text-sm text-slate-500">Ready to build your next skill?</p></div><div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2"><div className="flex -space-x-2"><div className="mini-avatar bg-blue-600">JD</div><div className="mini-avatar bg-emerald-500">NK</div><div className="mini-avatar bg-violet-500">+8</div></div><p className="ml-1 text-[11px] font-semibold text-slate-500"><span className="text-slate-900">11 peers</span> learning today</p></div></div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"><StatCard label="Enrolled modules" value="06" change="+2 this month" icon={BookOpen} tone="blue" /><StatCard label="Assessments completed" value="12" change="+4 this month" icon={FileCheck2} tone="violet" /><StatCard label="Average score" value="86%" change="+6.2%" icon={BarChart3} tone="green" /><StatCard label="Overall progress" value="68%" change="On track" icon={Target} tone="orange" /></div>
        <div className="mt-9 flex items-center justify-between"><div><h2 className="section-title">Continue learning</h2><p className="section-subtitle">Pick up where you left off</p></div><button className="hidden items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 sm:flex">View all modules <ArrowRight size={14} /></button></div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">{filteredCourses.map((course) => <div key={course.title} className="surface-card overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg"><div className={`relative h-[122px] overflow-hidden bg-gradient-to-br ${course.color} p-5`}><div className="absolute -right-5 -top-10 h-36 w-36 rounded-full border-[20px] border-white/10" /><div className="absolute -bottom-16 left-20 h-32 w-32 rounded-full border-[14px] border-white/10" /><div className="relative flex items-start justify-between"><span className="rounded-md bg-white/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">{course.type}</span><span className="font-mono text-lg font-bold text-white/70">{course.icon}</span></div><div className="absolute bottom-4 left-5 flex items-center gap-2 text-white"><div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15"><Play size={12} fill="currentColor" /></div><span className="text-[11px] font-bold">Resume module</span></div></div><div className="p-4"><h3 className="text-sm font-extrabold leading-snug text-slate-900">{course.title}</h3><p className="mt-1 text-[11px] text-slate-500">with {course.instructor}</p><div className="mt-4 flex items-center justify-between text-[10px] font-bold"><span className="text-slate-500">{course.lessons}</span><span className="text-slate-900">{course.progress}%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full bg-gradient-to-r ${course.color}`} style={{ width: `${course.progress}%` }} /></div><button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 py-2.5 text-[11px] font-bold text-white transition hover:bg-blue-700">Continue learning <ArrowRight size={13} /></button></div></div>)}</div>
        {filteredCourses.length === 0 && <div className="surface-card mt-4 p-8 text-center text-sm text-slate-500">No modules match “{query}”.</div>}
        <div className="mt-10 grid gap-7 lg:grid-cols-[1fr_290px]"><section><div className="flex items-center justify-between"><div><h2 className="section-title">Your assessments</h2><p className="section-subtitle">Stay on top of your learning path</p></div><button className="rounded-lg p-2 text-slate-400 hover:bg-white hover:text-slate-700"><MoreHorizontal size={19} /></button></div><div className="surface-card mt-4 divide-y divide-slate-100">{assessments.map((assessment) => <div key={assessment.title} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex min-w-0 items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500"><FileQuestion size={18} /></div><div className="min-w-0"><h3 className="truncate text-xs font-extrabold text-slate-900">{assessment.title}</h3><p className="mt-1 truncate text-[10px] text-slate-500">{assessment.module} <span className="mx-1 text-slate-300">•</span> {assessment.date}</p></div></div><div className="flex items-center justify-between gap-4 sm:justify-end"><div className="hidden text-right text-[10px] text-slate-400 sm:block"><p className="flex items-center justify-end gap-1"><Clock3 size={12} />{assessment.duration}</p><p className="mt-1">{assessment.marks}</p></div><StatusBadge status={assessment.status} tone={assessment.tone} /><button onClick={() => assessment.status !== "Passed" && setActiveAssessment(assessment.title)} className="rounded-lg border border-slate-200 px-3 py-2 text-[10px] font-extrabold text-slate-700 hover:border-blue-300 hover:text-blue-700">{assessment.status === "Passed" ? "View result" : "Start test"}</button></div></div>)}</div></section><aside className="surface-card h-fit overflow-hidden"><div className="bg-[#0b1736] p-5 text-white"><div className="flex items-center justify-between"><span className="rounded-md bg-blue-400/15 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-blue-200">Your insight</span><BarChart3 size={17} className="text-blue-300" /></div><p className="mt-5 text-[11px] font-medium text-slate-400">Learning consistency</p><p className="mt-1 text-2xl font-extrabold">Great work!</p><p className="mt-2 text-[11px] leading-relaxed text-slate-300">You have completed learning activities <span className="font-bold text-emerald-300">4 days in a row.</span></p><div className="mt-5 flex h-12 items-end gap-1.5">{[35, 48, 42, 66, 58, 78, 90].map((height, index) => <div key={index} className={`flex-1 rounded-t-sm ${index === 6 ? "bg-emerald-400" : "bg-blue-400/40"}`} style={{ height: `${height}%` }} />)}</div><div className="mt-2 flex justify-between text-[9px] text-slate-500"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Today</span></div></div><div className="p-5"><div className="flex items-center justify-between"><p className="text-xs font-extrabold">Upcoming goal</p><span className="text-[10px] font-bold text-blue-600">2 / 3</span></div><div className="mt-3 h-2 rounded-full bg-slate-100"><div className="h-full w-2/3 rounded-full bg-blue-600" /></div><p className="mt-3 text-[10px] leading-relaxed text-slate-500">Complete one more assessment this week to earn the <span className="font-bold text-slate-700">Focused learner</span> badge.</p></div></aside></div>
        <footer className="mt-12 border-t border-slate-200 py-6 text-[10px] text-slate-400"><span>© 2024 Capacity Connect</span><span className="mx-3">•</span><span>Building stronger communities through learning</span></footer>
      </div></main>
    </div>
    {activeAssessment && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"><div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"><div className="flex items-start justify-between"><div><span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Assessment ready</span><h2 className="mt-2 text-xl font-extrabold text-slate-950">{activeAssessment}</h2></div><button onClick={() => setActiveAssessment(null)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"><X size={18} /></button></div><p className="mt-4 text-sm leading-relaxed text-slate-500">This practice assessment contains 20 questions. You’ll have 20 minutes to complete it and your score will be available instantly.</p><div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-xl bg-slate-50 p-3"><p className="text-[10px] text-slate-400">Questions</p><p className="mt-1 text-sm font-extrabold">20</p></div><div className="rounded-xl bg-slate-50 p-3"><p className="text-[10px] text-slate-400">Time limit</p><p className="mt-1 text-sm font-extrabold">20 minutes</p></div></div><button onClick={() => setActiveAssessment(null)} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-xs font-bold text-white hover:bg-blue-700">Begin assessment <ArrowRight size={14} /></button></div></div>}
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-1 shadow-lg"><span className="px-2 text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Preview role</span>{(["Trainee", "Trainer", "Admin"] as Role[]).map((item) => <button key={item} onClick={() => setRole(item)} className={`rounded-lg px-2.5 py-1.5 text-[10px] font-bold ${role === item ? "bg-slate-950 text-white" : "text-slate-500 hover:bg-slate-100"}`}>{item}</button>)}</div>
  </div>;
}
