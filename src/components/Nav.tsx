import { Mail } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const links = [
  { href: '#fit', label: 'Fit' },
  { href: '#stack', label: 'Stack' },
  { href: '#architecture', label: 'Flow' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/82 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="signal-dot font-heading text-base font-bold text-white">
          Shubham<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/[0.04] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/shubhamdahiya210902-tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="magnetic-button inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-primary/60 hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:shubhamdahiya2109@gmail.com"
            aria-label="Email Shubham"
            className="magnetic-button inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-black transition hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
