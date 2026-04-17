import { motion } from 'framer-motion';
import { ExternalLink, Code2, Database, Shield, Zap } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const projects = [
  {
    title: "Career-Ops CLI",
    category: "AI Automation Factory",
    icon: <Zap className="w-5 h-5" />,
    desc: "Autonomous CLI powered by Google Gemini that manages the entire job application lifecycle. Features cascading scans and semantic ATS re-engineering.",
    link: "https://github.com/shubhamdahiya210902-tech/career-ops-cli",
    metrics: ["31% ATS Matcher Lift", "Zero-Repetition Logic"],
    span: "md:col-span-8"
  },
  {
    title: "NL2Code Application",
    category: "Published Research",
    icon: <Code2 className="w-5 h-5" />,
    desc: "Transformer-based architectures converting natural language to executable SQL/Python. Scholarly findings published in SmartCom 2024.",
    link: "#",
    metrics: ["15% Accuracy Lift"],
    span: "md:col-span-4"
  },
  {
    title: "Real-Time Traffic Analytics",
    category: "Deep Learning (LSTM)",
    icon: <Database className="w-5 h-5" />,
    desc: "Processing 1.2M+ GPS trajectory points to deliver 94% accuracy in real-time urban mobility forecasting.",
    link: "#",
    metrics: ["1.2M+ Data Points", "94% Precision"],
    span: "md:col-span-4"
  },
  {
    title: "Resilient Cloud Storage",
    category: "AWS & Distributed Systems",
    icon: <Shield className="w-5 h-5" />,
    desc: "High-availability infrastructure using MariaDB and Galera Cluster on AWS. Reduced manual recovery duration by 50%.",
    link: "#",
    metrics: ["99.9% Uptime", "50% Faster Recovery"],
    span: "md:col-span-8"
  },
  {
    title: "Incident Reporting App",
    category: "Full Stack & Automation",
    icon: <Code2 className="w-5 h-5" />,
    desc: "Automated processing of 500+ monthly entries, reducing research investigative reporting duration by 60%.",
    link: "#",
    metrics: ["60% Efficiency Gain", "500+ Entries/Mo"],
    span: "md:col-span-6"
  },
  {
    title: "Geospatial Data Systems",
    category: "Backend Engineer",
    icon: <Database className="w-5 h-5" />,
    desc: "Python FastAPI server-tier handling 10GB+ of historical flight information with sub-second query response times.",
    link: "#",
    metrics: ["10GB+ Dataset", "Low-Latency Indexing"],
    span: "md:col-span-6"
  },
  {
    title: "Author ID System",
    category: "BibTeX ML Analytics",
    icon: <Shield className="w-5 h-5" />,
    desc: "Large-scale textual data ingestion and identification pipeline for academic author disambiguation.",
    link: "#",
    metrics: ["Textual Analytics", "ML Identification"],
    span: "md:col-span-5"
  },
  {
    title: "Cloud Backup Engine",
    category: "Python Automation",
    icon: <Zap className="w-5 h-5" />,
    desc: "Automated recurring maintenance tasks for distributed cloud environments to improve long-term stability.",
    link: "#",
    metrics: ["Zero Downtime", "Automated Workflows"],
    span: "md:col-span-7"
  },
  {
    title: "Cloud Storage Resilience",
    category: "Research Project",
    icon: <Shield className="w-5 h-5" />,
    desc: "Evaluation of distributed storage performance under critical failure scenarios on AWS infrastructure.",
    link: "#",
    metrics: ["Fault Tolerance", "AWS Resilience"],
    span: "md:col-span-4"
  },
  {
    title: "Analytical Data Sets",
    category: "Data Pipelines",
    icon: <Database className="w-5 h-5" />,
    desc: "End-to-end pipelines for ingesting and transforming heterogeneous data into unified analytical models.",
    link: "#",
    metrics: ["4+ Data Sources", "High-Fidelity Insights"],
    span: "md:col-span-8"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tighter mb-4">
          The Deployment <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gray-700">Portfolio.</span>
        </h2>
        <p className="text-gray-500 max-w-xl text-lg font-light">
          A collection of all engineering deployments across research and production environments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            className={`glass p-8 rounded-3xl group flex flex-col justify-between hover:bg-white/10 transition-all duration-500 ${project.span}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <div className="flex gap-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                      {project.link.includes('github') ? <GithubIcon /> : <ExternalLink className="w-5 h-5" />}
                    </a>
                </div>
              </div>
              <div>
                <span className="text-primary font-heading text-xs uppercase tracking-[0.2em] mb-3 block opacity-80">{project.category}</span>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-10 font-light text-lg">
                    {project.desc}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.metrics.map((m, j) => (
                <span key={j} className="text-[10px] uppercase tracking-wider font-bold bg-white/5 px-3 py-1.5 rounded-full text-gray-300 border border-white/10">
                  {m}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}