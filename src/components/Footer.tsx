export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="font-heading text-sm text-gray-500">
          (c) 2026 Shubham.
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-400">
          <a href="https://github.com/shubhamdahiya210902-tech" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/shubham-dahiya-617532250" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
          <a href="mailto:shubhamdahiya2109@gmail.com" className="transition-colors hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
