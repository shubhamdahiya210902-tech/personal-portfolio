import { Code2, Layers3, NotebookText, ShieldCheck } from 'lucide-react';

const stackGroups = [
  {
    title: 'Built hands-on',
    subtitle: 'Used in research work or substantial projects',
    icon: <Code2 className="h-5 w-5" />,
    items: ['Python', 'FastAPI', 'REST APIs', 'PostgreSQL', 'MariaDB-Galera', 'AWS-hosted services', 'MISP integration', 'Git/GitHub'],
  },
  {
    title: 'AI and ML evidence',
    subtitle: 'Backed by projects, publication, or evaluation workflows',
    icon: <Layers3 className="h-5 w-5" />,
    items: ['LangGraph', 'LangChain Core', 'LiteLLM', 'Hugging Face', 'PyTorch', 'scikit-learn', 'LSTM forecasting', 'TF-IDF pipelines'],
  },
  {
    title: 'Ramp-up areas',
    subtitle: 'Named clearly without pretending production ownership',
    icon: <NotebookText className="h-5 w-5" />,
    items: ['Docker foundations', 'CI/CD workflow ramp-up', 'MLflow experiment tracking ramp-up', 'German A2 improving'],
  },
];

const proofMap = [
  {
    question: 'Can he build backend services?',
    answer: 'FastAPI service on AWS, PostgreSQL-backed filtering, 10GB+ historical flight/weather data, sub-second response targets.',
  },
  {
    question: 'Can he work with LLMs beyond prompts?',
    answer: 'LangGraph workflow for requirement extraction, evidence mapping, scoring rubrics, groundedness checks, and human approval.',
  },
  {
    question: 'Can he handle security-sensitive integrations?',
    answer: 'MISP-connected Thunderbird and Outlook phishing reporting through secure, token-scoped REST APIs.',
  },
  {
    question: 'Can he document and explain his work?',
    answer: 'Runbooks, validation checks, stakeholder summaries, responsible disclosure reports, and peer-reviewed SmartCom 2024 publication.',
  },
];

export default function EvidenceMatrix() {
  return (
    <section id="stack" className="section-shell scroll-reveal">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow mb-4">Evidence-backed stack</p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            The tools are grouped by proof, not hype.
          </h2>
        </div>
        <p className="text-lg leading-8 text-gray-400">
          Recruiters should not have to decode whether a skill is real, academic, or early-stage. This matrix shows where the evidence is strongest and where the learning curve is explicit.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {stackGroups.map((group) => (
          <article key={group.title} className="motion-card rounded-lg border border-white/10 bg-surface/85 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {group.icon}
              </div>
              <div>
                <h3 className="font-bold text-white">{group.title}</h3>
                <p className="mt-1 text-xs leading-5 text-gray-500">{group.subtitle}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="motion-card mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-6">
        <div className="mb-5 flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-bold text-white">Recruiter objections answered</h3>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {proofMap.map((item) => (
            <div key={item.question} className="motion-card rounded-lg border border-white/10 bg-background/55 p-4">
              <p className="font-semibold text-white">{item.question}</p>
              <p className="mt-2 text-sm leading-6 text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
