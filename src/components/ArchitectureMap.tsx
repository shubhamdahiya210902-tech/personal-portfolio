import { ArrowRight, BrainCircuit, CheckCircle2, Database, FileSearch, Server, ShieldCheck } from 'lucide-react';
import type { ReactNode } from 'react';

type FlowStep = {
  label: string;
  detail: string;
  icon: ReactNode;
};

type SystemFlow = {
  title: string;
  subtitle: string;
  signal: string;
  steps: FlowStep[];
};

const systems: SystemFlow[] = [
  {
    title: 'Jarvis Local PC Assistant',
    subtitle: 'On-demand Windows assistant with local AI and dashboard telemetry.',
    signal: 'Best proof for end-to-end local tooling: CLI design, voice flow, UI state, Ollama integration, and safety gates.',
    steps: [
      { label: 'CLI launch', detail: '`jarvis wake` starts the assistant from any folder.', icon: <ArrowRight className="h-4 w-4" /> },
      { label: 'Dashboard', detail: 'Brave opens a local state and command interface.', icon: <Server className="h-4 w-4" /> },
      { label: 'Wake flow', detail: 'Clap signal plus spoken phrase gates activation.', icon: <BrainCircuit className="h-4 w-4" /> },
      { label: 'Safety layer', detail: 'Risky commands require explicit approval.', icon: <ShieldCheck className="h-4 w-4" /> },
      { label: 'Local brain', detail: 'Ollama routes commands without a paid API key.', icon: <CheckCircle2 className="h-4 w-4" /> },
    ],
  },
  {
    title: 'LangGraph Review Workflow',
    subtitle: 'LLM output review with evidence mapping and human approval.',
    signal: 'Best proof for AI evaluation, agentic workflow, groundedness checks, and careful automation.',
    steps: [
      { label: 'Requirements', detail: 'Extract role needs from job text.', icon: <FileSearch className="h-4 w-4" /> },
      { label: 'Evidence map', detail: 'Match each need to real project proof.', icon: <Database className="h-4 w-4" /> },
      { label: 'Score', detail: 'Estimate coverage and risk per requirement.', icon: <BrainCircuit className="h-4 w-4" /> },
      { label: 'Review gate', detail: 'Flag unsupported or overfitted claims.', icon: <ShieldCheck className="h-4 w-4" /> },
      { label: 'Draft safely', detail: 'Use only approved evidence in final text.', icon: <CheckCircle2 className="h-4 w-4" /> },
    ],
  },
  {
    title: 'FastAPI Geospatial Data Service',
    subtitle: 'Backend service for repeatable flight and weather data access.',
    signal: 'Best proof for Python backend engineering, REST APIs, PostgreSQL schema work, AWS context, and validation thinking.',
    steps: [
      { label: 'Raw data', detail: 'Historical flight and weather records.', icon: <Database className="h-4 w-4" /> },
      { label: 'Schema', detail: 'PostgreSQL tables, filters, and indexing.', icon: <Server className="h-4 w-4" /> },
      { label: 'API layer', detail: 'FastAPI endpoints for analytical access.', icon: <ArrowRight className="h-4 w-4" /> },
      { label: 'Validation', detail: 'Check assumptions, gaps, and query behavior.', icon: <ShieldCheck className="h-4 w-4" /> },
      { label: 'Users', detail: 'Research workflows and stakeholder summaries.', icon: <CheckCircle2 className="h-4 w-4" /> },
    ],
  },
];

export default function ArchitectureMap() {
  return (
    <section id="architecture" className="section-shell scroll-reveal">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="eyebrow mb-4">Architecture proof</p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Three systems recruiters can understand in one glance.
          </h2>
        </div>
        <p className="text-lg leading-8 text-gray-400">
          These are the clearest bridges from project work to interview depth: one local assistant, one AI review workflow, and one backend data service, each shown as a practical flow rather than a wall of tools.
        </p>
      </div>

      <div className="grid gap-5">
        {systems.map((system) => (
          <article key={system.title} className="motion-card rounded-lg border border-white/10 bg-surface/85 p-6 sm:p-7">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="eyebrow mb-3">{system.subtitle}</p>
                <h3 className="text-2xl font-bold text-white">{system.title}</h3>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/[0.07] px-4 py-3 text-sm leading-6 text-gray-300 lg:max-w-md">
                {system.signal}
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-5">
              {system.steps.map((step, index) => (
                <div key={step.label} className="relative rounded-lg border border-white/10 bg-white/[0.04] p-4 lg:min-h-36">
                  {index > 0 && (
                    <div className="absolute -left-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md border border-primary/25 bg-background text-primary lg:flex">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  )}
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {step.icon}
                  </div>
                  <p className="font-semibold text-white">{step.label}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-400">{step.detail}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
