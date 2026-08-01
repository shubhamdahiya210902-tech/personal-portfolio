import { BriefcaseBusiness, CheckCircle2, ClipboardCheck, MessageSquareText, Target } from 'lucide-react';

const shortlistReasons = [
  'Research Assistant building Python REST services and SQL-backed workflows for 5+ applied research projects.',
  'FastAPI/PostgreSQL/AWS project serving 10GB+ historical flight and weather data with sub-second response targets.',
  'LLM review workflow using LangGraph, LangChain Core, LiteLLM, scoring rubrics, and human approval gates.',
  'Security automation experience through MISP-connected Thunderbird and Outlook phishing-reporting workflows.',
];

const roleFits = [
  {
    title: 'AI / LLM Working Student',
    match: 'Strongest overlap',
    proof: 'LangGraph review workflow, SmartCom 2024 NL2Code research, groundedness and coverage scoring.',
  },
  {
    title: 'Python Backend Intern',
    match: 'Direct evidence',
    proof: 'FastAPI, PostgreSQL, REST APIs, AWS-hosted services, validation checks, and technical documentation.',
  },
  {
    title: 'Security Automation Role',
    match: 'Credible adjacent fit',
    proof: 'MISP integrations, token-scoped APIs, phishing reporting, Cisco CyberOps, responsible disclosure reports.',
  },
];

export default function RecruiterSnapshot() {
  return (
    <section id="fit" className="scroll-reveal pb-16">
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="motion-card rounded-lg border border-primary/25 bg-primary/[0.06] p-6 sm:p-7">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-black">
              <ClipboardCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="eyebrow">Recruiter 30-second read</p>
              <h2 className="text-2xl font-bold text-white">Why this profile is worth a screen</h2>
            </div>
          </div>

          <div className="grid gap-3">
            {shortlistReasons.map((reason) => (
              <div key={reason} className="motion-card flex gap-3 rounded-lg border border-white/10 bg-background/55 p-4 text-sm leading-6 text-gray-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="motion-card rounded-lg border border-white/10 bg-surface/85 p-6">
          <div className="mb-4 flex items-center gap-3">
            <Target className="h-5 w-5 text-secondary" />
            <h3 className="text-xl font-bold text-white">Best-fit roles</h3>
          </div>
          <div className="space-y-3">
            {roleFits.map((role) => (
              <div key={role.title} className="motion-card rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-semibold text-white">{role.title}</p>
                  <span className="w-fit rounded-md border border-secondary/30 bg-secondary/10 px-2 py-1 text-xs font-semibold text-secondary">
                    {role.match}
                  </span>
                </div>
                <p className="text-sm leading-6 text-gray-400">{role.proof}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="motion-card rounded-lg border border-white/10 bg-surface/85 p-5">
          <BriefcaseBusiness className="mb-3 h-5 w-5 text-primary" />
          <p className="font-semibold text-white">Availability</p>
          <p className="mt-2 text-sm leading-6 text-gray-400">Munich-based, open to working-student or internship roles in Germany, remote or hybrid for strong technical fits.</p>
        </div>
        <div className="motion-card rounded-lg border border-white/10 bg-surface/85 p-5">
          <MessageSquareText className="mb-3 h-5 w-5 text-secondary" />
          <p className="font-semibold text-white">Interview depth</p>
          <p className="mt-2 text-sm leading-6 text-gray-400">Can discuss LangGraph state flow, PostgreSQL indexing, token-scoped API design, model-evaluation limits, and failure cases.</p>
        </div>
        <div className="motion-card rounded-lg border border-white/10 bg-surface/85 p-5">
          <ClipboardCheck className="mb-3 h-5 w-5 text-accent" />
          <p className="font-semibold text-white">Work style</p>
          <p className="mt-2 text-sm leading-6 text-gray-400">Evidence-first, documentation-heavy, careful with AI outputs, and comfortable translating research workflows into usable software.</p>
        </div>
      </div>
    </section>
  );
}
