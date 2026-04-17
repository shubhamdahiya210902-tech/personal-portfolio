import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CodingCharacter from './CodingCharacter';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Hero() {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-primary font-heading font-medium tracking-[0.2em] uppercase text-xs mb-6 block">
          Software Engineer · AI · Cybersecurity
        </span>
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold leading-[0.95] text-white mb-8 tracking-tighter">
          Shubham <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">Shubham.</span>
        </h1>

        <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl font-light">
          Master's student at Hof University and Research Assistant shipping <b className="text-white font-medium italic text-primary/80">full-stack, AI, and security</b> software — from phishing-detection plugins and AWS-hosted backends to published NL-to-code research and open-source developer tooling.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a href="#projects" className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-black bg-primary rounded-full overflow-hidden transition-all hover:pr-12">
            <span className="relative z-10 flex items-center gap-2 text-base">See My Work <ArrowRight className="w-5 h-4 group-hover:translate-x-1 transition-transform" /></span>
          </a>
          
          <div className="flex gap-4 ml-2">
            <a href="https://github.com/shubhamdahiya210902-tech" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:bg-white/10 transition-all text-gray-300 hover:text-white hover:scale-110">
              <GithubIcon />
            </a>
            <a href="https://linkedin.com/in/shubham-dahiya-617532250" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:bg-white/10 transition-all text-gray-300 hover:text-white hover:scale-110">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="relative flex justify-center lg:justify-end items-center">
        <CodingCharacter />
      </div>
    </section>
  );
}