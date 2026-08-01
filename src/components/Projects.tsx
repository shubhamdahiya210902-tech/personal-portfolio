import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { BookOpen, BrainCircuit, Code2, Database, ExternalLink, FileCheck2, LineChart, Server, ShieldCheck, X } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

type CaseStudy = {
  problem: string;
  architecture: string[];
  decisions: string[];
  failureModes: string[];
  recruiterTakeaway: string;
};

type Project = {
  title: string;
  area: string;
  icon: ReactNode;
  summary: string;
  answers: string;
  evidence: string[];
  tags: string[];
  size?: string;
  link?: string;
  proofType?: string;
  proofDetail?: string;
  caseStudy?: CaseStudy;
};

const projects: Project[] = [
  {
    title: 'FastAPI Geospatial Data Service',
    area: 'Backend and data infrastructure',
    icon: <Server className="h-5 w-5" />,
    summary: 'Public FastAPI/PostgreSQL backend with Docker, CI, OpenAPI docs, public-safe sample data, and reproducible benchmark evidence.',
    answers: 'Can he build, document, containerize, test, and optimize a backend service in a way a recruiter can verify?',
    evidence: [
      'Docker-verified FastAPI/PostgreSQL service with OpenAPI docs and CI',
      '10GB-scale PostgreSQL benchmark: 43,298,125 rows and 10,666.88 MB relation size',
      '87.79% median query-latency improvement through composite index tuning',
    ],
    tags: ['FastAPI', 'PostgreSQL', 'Docker', 'pytest', 'OpenAPI'],
    proofType: 'Public GitHub repo',
    proofDetail: 'Benchmark reports, Docker setup, CI, and OpenAPI evidence are public.',
    link: 'https://github.com/shubhamdahiya210902-tech/fastapi-geospatial-data-service',
    size: 'wide',
    caseStudy: {
      problem: 'Backend claims are easier to trust when the proof is public. I turned the geospatial flight/weather service into a recruiter-verifiable project with Docker, tests, OpenAPI evidence, and a clearly labeled public-data benchmark without exposing private research data.',
      architecture: [
        'FastAPI route, schema, service, and database layers for typed REST access to flight and weather records.',
        'PostgreSQL with Alembic migrations, Docker Compose, pytest coverage, CI checks, and captured OpenAPI documentation.',
        'Benchmark scripts that load public BTS/IEM seed data, scale it inside PostgreSQL, and compare baseline indexes against query-shaped composite indexes.',
      ],
      decisions: [
        'Kept raw generated data out of git and documented the benchmark as public-seed, scaled data instead of pretending it was a raw 10GB download.',
        'Matched composite indexes to real query shape: dataset, airport, observed time, and pagination-heavy reads.',
        'Published exact benchmark numbers so the performance claim is inspectable rather than a vague "optimized queries" bullet.',
      ],
      failureModes: [
        'A 10GB-scale benchmark can be misread as 10GB of raw downloaded observations, so the documentation states how the dataset was derived.',
        'Offset pagination becomes expensive at high offsets, which made it a useful test case for index tuning but also a design tradeoff to discuss.',
        'Public data downloads and large local database loads can fail or take time, so reproducible scripts and smaller benchmark paths are included.',
      ],
      recruiterTakeaway: 'This is the clearest backend proof for roles like Aqarios: Python beyond notebooks, REST APIs, PostgreSQL, Docker, CI, testing, OpenAPI, performance tuning, and honest documentation of benchmark scope.',
    },
  },
  {
    title: 'LangGraph Review Workflow',
    area: 'LLM evaluation and automation',
    icon: <BrainCircuit className="h-5 w-5" />,
    summary: 'Local workflow that extracts requirements, maps source evidence, scores coverage, and keeps human approval before generated application material is treated as final.',
    answers: 'Can he build useful LLM workflows without treating AI output as automatically correct?',
    evidence: ['LangGraph StateGraph and LangChain Core runnables', 'LiteLLM with Claude, GPT-style tools, and Qwen', 'Groundedness and hallucination checks'],
    tags: ['Python', 'LangGraph', 'LiteLLM', 'Structured outputs'],
    proofType: 'Case study',
    proofDetail: 'Architecture, decisions, and failure modes are summarized on this page.',
    size: 'wide',
    caseStudy: {
      problem: 'Application material generation can drift into unsupported claims when a model is asked to tailor CVs or cover letters from a job description. I needed a workflow that could compare requirements against source evidence and force a human review step before anything was used.',
      architecture: [
        'StateGraph flow for requirement extraction, evidence mapping, coverage scoring, review notes, and next-action summaries.',
        'LangChain Core runnables for composable processing steps, with LiteLLM used to compare Claude, GPT-style tools, and Qwen outputs.',
        'Structured outputs designed for review: requirement, supporting evidence, score, risk note, and approval status.',
      ],
      decisions: [
        'Kept human approval as a hard gate instead of automatically accepting high-scoring generated text.',
        'Used groundedness and hallucination checks as first-class review fields, not hidden comments.',
        'Stored reusable prompts and scoring rubrics so later applications could be reviewed consistently.',
      ],
      failureModes: [
        'Models sometimes inferred experience from adjacent skills, so the workflow flags unsupported claims instead of smoothing them over.',
        'Exact JD keyword matching can overfit the CV; the review step balances ATS coverage with human trust.',
      ],
      recruiterTakeaway: 'This is directly relevant to LLM evaluation, agentic workflow, AI-assisted QA, and productivity automation roles because it shows orchestration, scoring, guardrails, and human-in-the-loop thinking.',
    },
  },
  {
    title: 'Phishing Reporting Workflow',
    area: 'Security automation',
    icon: <ShieldCheck className="h-5 w-5" />,
    summary: 'Thunderbird and Outlook phishing-reporting workflow connected to MISP through secure REST APIs for structured incident handling.',
    answers: 'Can he integrate security tooling carefully across APIs, users, and documentation?',
    evidence: ['Token-scoped API integration', 'About 40% reduction in manual incident handling', 'Runbooks and issue documentation for repeatable use'],
    tags: ['MISP', 'REST APIs', 'Outlook', 'Thunderbird'],
    proofType: 'Internal applied project',
    proofDetail: 'Architecture and API decisions are discussable without exposing sensitive details.',
  },
  {
    title: 'Natural-Language-to-Code Research',
    area: 'Peer-reviewed AI research',
    icon: <BookOpen className="h-5 w-5" />,
    summary: 'Transformer-based prototype for converting natural-language queries into executable Python and SQL, published at SmartCom 2024.',
    answers: 'Can he explain AI model behavior, evaluation limits, and failure modes in a research setting?',
    evidence: ['Peer-reviewed SmartCom 2024 publication', 'Hugging Face and PyTorch experimentation', 'Failure-mode notes and test-style validation'],
    tags: ['PyTorch', 'Transformers', 'Python', 'SQL'],
    proofType: 'Publication-backed',
    proofDetail: 'Peer-reviewed SmartCom 2024 research work.',
  },
  {
    title: 'Traffic Forecasting Pipeline',
    area: 'Applied machine learning',
    icon: <LineChart className="h-5 w-5" />,
    summary: 'Urban mobility forecasting project comparing LSTM, ARIMA, and regression baselines over large GPS trajectory data.',
    answers: 'Can he compare ML approaches against baselines and reason from data?',
    evidence: ['1.2M+ GPS trajectory points', 'LSTM-based time-series forecasting', 'Documented model comparison against statistical baselines'],
    tags: ['LSTM', 'Time series', 'scikit-learn', 'Data analysis'],
    proofType: 'Academic ML project',
    proofDetail: 'Methods, baselines, and evaluation tradeoffs are explainable in interview.',
  },
  {
    title: 'Career-Ops CLI',
    area: 'Developer tooling',
    icon: <Code2 className="h-5 w-5" />,
    summary: 'Local command-line workflow for job scanning, CV tailoring, cover-letter drafting, memory updates, and application tracking with explicit human approval gates.',
    answers: 'Can he turn a messy personal workflow into repeatable developer tooling?',
    evidence: ['Application memory and tracker updates', 'No-submission-without-GO workflow', 'Reusable prompts and scoring rubrics'],
    tags: ['Python', 'CLI tooling', 'Automation', 'Human review'],
    proofType: 'Public GitHub repo',
    proofDetail: 'Repository link available for code-level review.',
    link: 'https://github.com/shubhamdahiya210902-tech/career-ops-cli',
  },
  {
    title: 'Research PDF Author ID Pipeline',
    area: 'NLP and data pipelines',
    icon: <Database className="h-5 w-5" />,
    summary: 'Textual data ingestion and supervised identification workflow for academic author disambiguation and research-document analysis.',
    answers: 'Can he structure messy document data into a reproducible ML/NLP pipeline?',
    evidence: ['TF-IDF and Logistic Regression workflow', 'SQL-backed storage and schema validation', 'Reproducible ingestion over research PDF data'],
    tags: ['NLP', 'TF-IDF', 'SQL', 'scikit-learn'],
    proofType: 'Academic/internal project',
    proofDetail: 'Method and pipeline design are discussable; private source data is not exposed.',
  },
];

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project.caseStudy) return null;

  const sections = [
    { title: 'Architecture', items: project.caseStudy.architecture },
    { title: 'Key decisions', items: project.caseStudy.decisions },
    { title: 'What could break', items: project.caseStudy.failureModes },
  ];

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/72 p-3 backdrop-blur-sm sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
      <button className="absolute inset-0 cursor-default" aria-label="Close case study" onClick={onClose} />
      <article className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl overflow-y-auto rounded-lg border border-white/10 bg-[#09100c] p-5 shadow-2xl shadow-black/60 sm:max-h-[92vh] sm:p-7">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Case study</p>
            <h3 id="case-study-title" className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400">{project.summary}</p>
            {project.proofType && (
              <div className="mt-4 inline-flex max-w-2xl items-start gap-2 rounded-lg border border-primary/20 bg-primary/[0.08] px-3 py-2 text-xs leading-5 text-gray-300">
                <FileCheck2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span>
                  <span className="font-semibold text-primary">{project.proofType}</span>
                  {project.proofDetail ? ` - ${project.proofDetail}` : ''}
                </span>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="magnetic-button inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-gray-300 hover:border-primary/60 hover:text-white"
            aria-label="Close case study"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="motion-card rounded-lg border border-primary/20 bg-primary/[0.06] p-5">
            <p className="text-sm font-semibold text-primary">Problem</p>
            <p className="mt-3 text-sm leading-7 text-gray-300">{project.caseStudy.problem}</p>
            <div className="mt-5 rounded-lg border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-semibold text-white">Recruiter takeaway</p>
              <p className="mt-2 text-sm leading-7 text-gray-400">{project.caseStudy.recruiterTakeaway}</p>
            </div>
          </div>

          <div className="grid gap-4">
            {sections.map((section) => (
              <div key={section.title} className="motion-card rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-semibold text-white">{section.title}</p>
                <ul className="mt-3 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-gray-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>,
    document.body,
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-shell scroll-reveal">
      <div className="mb-12 max-w-3xl">
        <p className="eyebrow mb-4">Selected work</p>
        <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Projects with proof, not just tool names.
        </h2>
        <p className="text-lg leading-8 text-gray-400">
          A focused set of backend, AI, data, and security projects that map directly to the roles I apply for: working-student and internship positions in AI engineering, backend systems, automation, and cybersecurity.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`motion-card rounded-lg border border-white/10 bg-surface/80 p-6 transition hover:border-primary/45 ${project.size === 'wide' ? 'lg:col-span-1 xl:col-span-1' : ''}`}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {project.icon}
                </div>
                <div>
                  <p className="eyebrow text-[0.68rem]">{project.area}</p>
                  <h3 className="mt-1 text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="magnetic-button inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-primary/60 hover:text-white"
                >
                  {project.link.includes('github') ? <GithubIcon className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                </a>
              )}
            </div>

            <div className="mb-4">
              {project.proofType && (
                <div className="motion-card rounded-lg border border-primary/15 bg-primary/[0.06] p-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase text-primary">
                    <FileCheck2 className="h-3.5 w-3.5" />
                    {project.proofType}
                  </div>
                  {project.proofDetail && (
                    <p className="mt-2 text-xs leading-5 text-gray-400">{project.proofDetail}</p>
                  )}
                </div>
              )}
            </div>

            <p className="mb-6 leading-7 text-gray-300">{project.summary}</p>

            <div className="motion-card mb-5 rounded-lg border border-secondary/20 bg-secondary/10 p-4">
              <p className="text-xs font-semibold uppercase text-secondary">Recruiter question answered</p>
              <p className="mt-2 text-sm leading-6 text-gray-300">{project.answers}</p>
            </div>

            <ul className="mb-6 space-y-2">
              {project.evidence.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-gray-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-gray-300">
                  {tag}
                </span>
              ))}
            </div>

            {project.caseStudy && (
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="magnetic-button mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-primary/35 px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-black"
              >
                Open case study
                <ExternalLink className="h-4 w-4" />
              </button>
            )}
          </article>
        ))}
      </div>

      {selectedProject && <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
