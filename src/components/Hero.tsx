import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, GraduationCap, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const profileImage = `${import.meta.env.BASE_URL}me.jpg`;
const cvDownload = 'Shubham-Portfolio-CV.pdf';
const HeroScene = lazy(() => import('./HeroScene'));

const proofPoints = [
  { label: 'Research projects', value: '5+' },
  { label: 'Data served', value: '10GB+' },
  { label: 'Manual handling cut', value: '40%' },
];

const focusAreas = [
  'Python / FastAPI backends',
  'LLM review workflows',
  'PostgreSQL and AWS services',
  'Secure API integrations',
];

export default function Hero() {
  return (
    <section id="home" className="grid min-w-0 grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="min-w-0 max-w-3xl"
      >
        <div className="mb-5 flex flex-wrap gap-2">
          <span className="orbit-chip eyebrow rounded-md border border-primary/25 bg-primary/10 px-3 py-2">Software Engineer | AI Systems | Secure Backends</span>
          <span className="orbit-chip rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-gray-300">Open to working-student and internship roles</span>
        </div>

        <h1 className="mb-7 text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
          Shubham
        </h1>

        <p className="mb-7 max-w-2xl break-words text-lg leading-8 text-gray-300 sm:text-xl">
          MSc Applied Research in Computer Science student and Research Assistant in Germany, building Python/FastAPI services, LLM-assisted review workflows, PostgreSQL-backed data systems, and secure integrations for applied research teams.
        </p>

        <div className="motion-card mb-7 rounded-lg border border-white/10 bg-surface/75 p-4">
          <p className="text-sm font-semibold text-white">Recruiter shortcut</p>
          <p className="mt-2 text-sm leading-6 text-gray-400">
            Best fit for teams needing a student engineer who can build backend services, validate AI-generated outputs, document assumptions, and handle security-aware API integrations.
          </p>
        </div>

        <div className="mb-9 grid gap-3 text-sm text-gray-300 sm:grid-cols-3">
          <div className="motion-card flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            <span>Munich, Germany</span>
          </div>
          <div className="motion-card flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
            <GraduationCap className="h-4 w-4 shrink-0 text-secondary" />
            <span>MSc CS, expected 2027</span>
          </div>
          <div className="motion-card flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
            <ShieldCheck className="h-4 w-4 shrink-0 text-accent" />
            <span>AI, backend, security</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="magnetic-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-6 py-3 font-semibold text-black transition hover:bg-primary/90"
          >
            View selected work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:shubhamdahiya2109@gmail.com"
            className="magnetic-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-primary/60 hover:bg-white/[0.04]"
          >
            <Mail className="h-4 w-4" />
            Contact me
          </a>
          <a
            href={cvDownload}
            download
            className="magnetic-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-primary/60 hover:bg-white/[0.04]"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
          <div className="flex gap-2 sm:ml-2">
            <a
              aria-label="GitHub"
              href="https://github.com/shubhamdahiya210902-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-button inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-primary/60 hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/in/shubham-dahiya-617532250"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-button inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-primary/60 hover:text-white"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {focusAreas.map((area) => (
            <span key={area} className="orbit-chip rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300">
              {area}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="min-w-0 grid gap-5"
      >
        <div className="relative overflow-visible">
          <Suspense fallback={<div className="hero-scene hero-scene-fallback" />}>
            <HeroScene />
          </Suspense>

          <div className="relative z-10 grid min-h-[620px] content-end gap-4 pt-10 sm:grid-cols-[0.78fr_1fr]">
            <figure className="motion-card overflow-hidden rounded-lg border border-white/10 bg-surface shadow-2xl shadow-black/40 sm:self-start">
              <img
                src={profileImage}
                alt="Portrait of Shubham"
                className="h-full min-h-[260px] w-full object-cover object-top sm:min-h-[320px]"
              />
            </figure>

            <div className="motion-card rounded-lg border border-white/10 bg-background/78 p-5 backdrop-blur-xl sm:self-start">
              <p className="eyebrow mb-3">Current signal</p>
              <p className="text-lg font-semibold text-white">Applied AI + backend engineer with security research instincts.</p>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Strongest in roles where Python services, data validation, LLM evaluation, and careful documentation meet.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:col-start-2">
              {proofPoints.map((point) => (
                <div key={point.label} className="motion-card stat-card rounded-lg border border-white/10 bg-background/78 p-4 backdrop-blur-xl">
                  <div className="text-2xl font-bold text-white">{point.value}</div>
                  <div className="mt-1 text-xs leading-5 text-gray-400">{point.label}</div>
                </div>
              ))}
            </div>

            <div className="motion-card rounded-lg border border-white/10 bg-background/78 p-5 backdrop-blur-xl sm:col-span-2">
              <p className="eyebrow mb-4">Working style</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-white">Build the system</p>
                  <p className="mt-1 text-sm leading-6 text-gray-400">Python services, SQL-backed workflows, API integrations, and cloud-hosted prototypes.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Prove the output</p>
                  <p className="mt-1 text-sm leading-6 text-gray-400">Validation checks, runbooks, scoring rubrics, and human review for AI-assisted work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
