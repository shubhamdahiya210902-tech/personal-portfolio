import { Award, BriefcaseBusiness, GraduationCap, Languages } from 'lucide-react';

const timeline = [
  {
    title: 'Research Assistant',
    org: 'Hof University of Applied Sciences',
    period: 'Oct 2024 - Present',
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    bullets: [
      'Built Python REST services, SQL-backed workflows, and automation pipelines for 5+ applied research projects.',
      'Worked with PostgreSQL, MariaDB-Galera, AWS-backed infrastructure, documentation, validation checks, and stakeholder summaries.',
      'Built Thunderbird and Outlook phishing-reporting workflow connected to MISP through secure REST APIs, reducing manual handling by about 40%.',
    ],
  },
  {
    title: 'MSc Applied Research in Computer Science',
    org: 'Hof University of Applied Sciences',
    period: 'Expected Mar 2027',
    icon: <GraduationCap className="h-5 w-5" />,
    bullets: [
      'Focus areas include generative AI, multi-agent systems, intelligent automation, machine learning, cloud, and applied research.',
      'Transcript supports Data Science wording through Data Engineering and Analysis plus Data Mining and Machine Learning modules.',
    ],
  },
  {
    title: 'Independent Vulnerability Research',
    org: 'Responsible disclosure',
    period: 'Security research',
    icon: <Award className="h-5 w-5" />,
    bullets: [
      'Received three Government of India Letters of Acknowledgement for responsible vulnerability disclosure.',
      'Prepared reports covering root cause, impact, reproduction, remediation, and verification.',
    ],
  },
];

const quickDetails = [
  { label: 'Languages', value: 'English C2, German A2 improving, Hindi native', icon: <Languages className="h-4 w-4" /> },
  { label: 'Work authorization', value: 'German student residence permit allowing student work', icon: <BriefcaseBusiness className="h-4 w-4" /> },
  { label: 'Target roles', value: 'AI engineering, Python backend, data, cloud automation, cybersecurity', icon: <Award className="h-4 w-4" /> },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell scroll-reveal">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Academic research, backend delivery, and security reporting.
          </h2>
          <p className="text-lg leading-8 text-gray-400">
            The through-line is practical research software: build the workflow, test the assumptions, document the result, and keep the claims explainable.
          </p>

          <div className="mt-8 grid gap-3">
            {quickDetails.map((detail) => (
              <div key={detail.label} className="motion-card rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="text-primary">{detail.icon}</span>
                  {detail.label}
                </div>
                <p className="text-sm leading-6 text-gray-400">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {timeline.map((item) => (
            <article
              key={item.title}
              className="motion-card rounded-lg border border-white/10 bg-surface/80 p-6"
            >
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{item.org}</p>
                  </div>
                </div>
                <span className="rounded-md border border-white/10 px-3 py-1.5 text-xs font-semibold text-gray-300">
                  {item.period}
                </span>
              </div>

              <ul className="space-y-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-gray-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
