import Hero from './components/Hero';
import TargetingStrip from './components/TargetingStrip';
import RecruiterSnapshot from './components/RecruiterSnapshot';
import About from './components/About';
import EvidenceMatrix from './components/EvidenceMatrix';
import ArchitectureMap from './components/ArchitectureMap';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-gray-100">
      <div className="site-grid" aria-hidden="true" />
      <ScrollProgress />
      <Nav />

      <main className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Hero />
        <TargetingStrip />
        <RecruiterSnapshot />
        <About />
        <EvidenceMatrix />
        <ArchitectureMap />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
