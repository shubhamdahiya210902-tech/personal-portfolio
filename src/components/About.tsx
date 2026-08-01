import { BrainCircuit, Database, FileCheck2, Server, ShieldCheck } from 'lucide-react';

const capabilityGroups = [
  {
    title: 'Backend and Data Systems',
    icon: <Server className="h-5 w-5" />,
    skills: ['Python', 'FastAPI', 'REST APIs', 'PostgreSQL', 'MariaDB-Galera', 'AWS-hosted services', 'SQL indexing'],
  },
  {
    title: 'AI Evaluation Workflows',
    icon: <BrainCircuit className="h-5 w-5" />,
    skills: ['LangGraph', 'LangChain Core', 'LiteLLM', 'LLM scoring rubrics', 'groundedness checks', 'human-in-the-loop review'],
  },
  {
    title: 'Security Automation',
    icon: <ShieldCheck className="h-5 w-5" />,
    skills: ['MISP integrations', 'token-scoped APIs', 'phishing reporting', 'responsible disclosure', 'Cisco CyberOps'],
  },
  {
    title: 'Applied ML and Research',
    icon: <Database className="h-5 w-5" />,
    skills: ['PyTorch', 'Hugging Face', 'scikit-learn', 'LSTM forecasting', 'TF-IDF pipelines', 'technical writing'],
  },
];

const principles = [
  'Evidence before claims',
  'Human review for AI outputs',
  'Readable services over clever code',
  'Security and validation by default',
];

export default function About() {
  return (
    <section id="about" className="section-shell scroll-reveal">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="eyebrow mb-4">About</p>
          <h2 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Research-minded engineer, practical enough to ship.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-gray-300">
            I am studying MSc Applied Research in Computer Science at Hof University and working as a Research Assistant on applied software systems. My strongest overlap is Python backend engineering, structured data workflows, AI-assisted review, and security-aware automation.
          </p>
          <p className="text-lg leading-8 text-gray-300">
            The work I like most has a clear review loop: build a service, validate the data, document the assumptions, and make the output easy for another person to trust. That shows up in my FastAPI/PostgreSQL work, my MISP phishing-reporting workflow, and my LangGraph-based review system for evidence mapping and coverage scoring.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle} className="motion-card flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-gray-200">
                <FileCheck2 className="h-4 w-4 shrink-0 text-primary" />
                {principle}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {capabilityGroups.map((group) => (
          <div
            key={group.title}
            className="motion-card rounded-lg border border-white/10 bg-surface/80 p-5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {group.icon}
            </div>
            <h3 className="mb-4 text-lg font-bold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
