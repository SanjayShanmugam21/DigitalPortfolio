import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    // Map section IDs to components
    switch (activeSection.toLowerCase()) {
      case 'about': return <Hero setActiveSection={setActiveSection} />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'experience': return <Experience />;
      case 'contact': return <Contact />;
      case 'resume': return <Resume />;
      default: return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main style={{ flex: 1, position: 'relative', overflowY: 'auto' }}>
        <div
          key={activeSection}
          style={{
            height: '100%',
            animation: 'fadeIn 0.5s ease-out forwards'
          }}
        >
          {renderSection()}
        </div>
      </main>

      {/* Hide footer on resume page for better viewing */}
      {activeSection.toLowerCase() !== 'resume' && <Footer />}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
