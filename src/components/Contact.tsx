import { CalendarCheck, Download, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const cvDownload = 'Shubham-Portfolio-CV.pdf';

const contactLinks = [
  {
    label: 'Email',
    value: 'shubhamdahiya2109@gmail.com',
    href: 'mailto:shubhamdahiya2109@gmail.com',
    icon: <Mail className="h-5 w-5" />,
  },
  {
    label: 'GitHub',
    value: 'shubhamdahiya210902-tech',
    href: 'https://github.com/shubhamdahiya210902-tech',
    icon: <GithubIcon className="h-5 w-5" />,
  },
  {
    label: 'LinkedIn',
    value: 'shubham-dahiya-617532250',
    href: 'https://linkedin.com/in/shubham-dahiya-617532250',
    icon: <LinkedinIcon className="h-5 w-5" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell scroll-reveal pb-10">
      <div className="motion-card rounded-lg border border-white/10 bg-surface/90 p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Open to working-student and internship roles in Germany.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-gray-400">
              Best-fit conversations: AI engineering, Python backend systems, secure API integrations, data workflows, LLM evaluation, and automation-heavy research or product teams.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-300">
              <MapPin className="h-4 w-4 text-primary" />
              Munich-based, Germany-wide remote or hybrid for strong fits.
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:shubhamdahiya2109@gmail.com?subject=Working-student%20or%20internship%20opportunity"
                className="magnetic-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-5 py-3 font-semibold text-black transition hover:bg-primary/90"
              >
                <Mail className="h-4 w-4" />
                Start a screening conversation
              </a>
              <a
                href={cvDownload}
                download
                className="magnetic-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-primary/60 hover:bg-white/[0.04]"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <div className="motion-card inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-gray-300">
                <CalendarCheck className="h-4 w-4 text-secondary" />
                MSc expected Mar 2027
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="motion-card group flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-primary/60"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-black">
                  {link.icon}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{link.label}</span>
                  <span className="block break-all text-sm text-gray-400">{link.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
