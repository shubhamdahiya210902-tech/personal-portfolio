export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 font-heading text-sm uppercase tracking-wider">
          © 2026 Shubham Shubham. Engineered with AI.
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-400">
          <a href="https://github.com/shubhamdahiya210902-tech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/shubham-dahiya-617532250" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:shubhamdahiya2109@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}