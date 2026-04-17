import { motion } from 'framer-motion';

const skills = [
  "Python", "Java / Spring Boot", "JavaScript / TypeScript",
  "React", "Node.js", "FastAPI",
  "SQL / PostgreSQL", "AWS (EC2, S3)", "Docker & Linux",
  "TensorFlow / PyTorch", "LSTM & Transformers", "LLM Integration (Gemini)",
  "Phishing Detection", "CyberOps (CISCO)", "Secure CLI Design",
  "Git / GitHub", "Agile / Scrum", "Technical Writing"
];

export default function About() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <motion.div 
          className="md:col-span-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Engineering <br/>Across the <br/><span className="text-primary">Stack.</span></h2>
        </motion.div>

        <motion.div
          className="md:col-span-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-8 text-xl text-gray-300 leading-relaxed font-light">
            <p>
              I'm a Master's student in <b className="text-white font-medium italic">Applied Research in Computer Science</b> at Hof University, and a Research Assistant working on phishing-detection plugins for Thunderbird &amp; Outlook and AWS-hosted backend services — the kind of work that lands halfway between clean product engineering and security research.
            </p>
            <p>
              Across projects I've shipped <b className="text-white font-medium">full-stack features</b> in React / Node.js / FastAPI, trained <b className="text-white font-medium">deep-learning models</b> (LSTM, Transformers) on real-world GPS and NL-to-code datasets, and run <b className="text-white font-medium">distributed storage</b> on AWS with MariaDB Galera. My NL2Code paper was published at SmartCom 2024, and my Career-Ops CLI is MIT-licensed on GitHub — I like the full arc from research to production.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            {skills.map((skill, i) => (
              <span key={i} className="px-6 py-3 glass rounded-xl text-sm font-semibold text-gray-200 hover:border-primary/50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}