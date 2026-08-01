import { ArrowUpRight, BrainCircuit, Server, ShieldCheck } from 'lucide-react';
import type { ReactNode } from 'react';

type TargetRoute = {
  role: string;
  firstLook: string;
  proof: string;
  href: string;
  icon: ReactNode;
};

const routes: TargetRoute[] = [
  {
    role: 'AI / LLM teams',
    firstLook: 'Start with the LangGraph flow and case study.',
    proof: 'LLM scoring rubrics, evidence mapping, groundedness checks, human approval gates.',
    href: '#architecture',
    icon: <BrainCircuit className="h-4 w-4" />,
  },
  {
    role: 'Backend / data teams',
    firstLook: 'Start with the FastAPI service and backend projects.',
    proof: 'Python REST APIs, PostgreSQL schema work, 10GB+ data, AWS-hosted research services.',
    href: '#projects',
    icon: <Server className="h-4 w-4" />,
  },
  {
    role: 'Security automation teams',
    firstLook: 'Start with the MISP phishing-reporting workflow.',
    proof: 'Token-scoped APIs, responsible disclosure reports, runbooks, validation habits.',
    href: '#projects',
    icon: <ShieldCheck className="h-4 w-4" />,
  },
];

export default function TargetingStrip() {
  return (
    <section className="scroll-reveal pb-12">
      <div className="motion-card rounded-lg border border-white/10 bg-surface/85 p-4 sm:p-5">
        <div className="grid gap-3 lg:grid-cols-3">
          {routes.map((route) => (
            <a
              key={route.role}
              href={route.href}
              className="group rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-primary/55 hover:bg-primary/[0.06]"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {route.icon}
                  </span>
                  {route.role}
                </div>
                <ArrowUpRight className="h-4 w-4 text-gray-500 transition group-hover:text-primary" />
              </div>
              <p className="text-sm font-semibold text-primary">{route.firstLook}</p>
              <p className="mt-2 text-sm leading-6 text-gray-400">{route.proof}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
