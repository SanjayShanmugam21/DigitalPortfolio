import { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { CONTACT } from '../data';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Article', 'Contact'];

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveSection(link.toLowerCase());
    setIsOpen(false);
  };

  return (
    <nav
      style={{
        zIndex: 100,
        height: '70px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 1.5rem',
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        transition: 'all 0.3s ease',
        flexShrink: 0,
        position: 'relative'
      }}
    >
      {/* Logo */}
      <a
        href="#about"
        onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}
        style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.03em', zIndex: 101 }}
      >
        <span style={{ color: 'var(--accent)' }}>S</span>anjay
        <span style={{ color: 'var(--accent)' }}>.S</span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex" style={{ gap: '2rem', alignItems: 'center' }}>
        {NAV_LINKS.map((link) => {
          const isSelected = activeSection.toLowerCase() === link.toLowerCase();
          return (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link); }}
              style={{
                fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: isSelected ? 'var(--accent)' : 'var(--muted)',
                transition: 'all 0.2s',
                position: 'relative',
                paddingBottom: '4px'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.target.style.color = isSelected ? 'var(--accent)' : 'var(--muted)')}
            >
              {link}
              {isSelected && (
                <span style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
                  background: 'var(--accent)', borderRadius: '2px',
                  animation: 'slideIn 0.3s ease-out'
                }} />
              )}
            </a>
          );
        })}
        <a
          href="#resume"
          onClick={(e) => { e.preventDefault(); setActiveSection('resume'); }}
          style={{
            marginLeft: '1rem',
            padding: '0.5rem 1.2rem',
            border: '1px solid var(--accent)',
            borderRadius: '6px',
            color: 'var(--accent)',
            fontSize: '0.8rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--accent)';
          }}
        >
          <FileText size={16} />
          Resume
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'transparent', border: 'none', color: 'var(--text)',
          cursor: 'pointer', zIndex: 101, padding: '5px'
        }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'var(--bg)', zIndex: 100,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '2.5rem',
          animation: 'fadeDown 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {NAV_LINKS.map((link) => {
            const isSelected = activeSection.toLowerCase() === link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link); }}
                style={{
                  fontSize: '1.5rem', fontFamily: 'Syne', fontWeight: 700,
                  color: isSelected ? 'var(--accent)' : 'var(--muted)',
                  transition: 'all 0.2s'
                }}
              >
                {link}
              </a>
            );
          })}
          <a
            href="#resume"
            onClick={(e) => { e.preventDefault(); handleLinkClick('resume'); }}
            style={{
              padding: '0.8rem 2rem',
              border: '1px solid var(--accent)',
              borderRadius: '8px',
              color: 'var(--accent)',
              fontSize: '1.2rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '1rem'
            }}
          >
            <FileText size={22} />
            Resume
          </a>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hidden.md\\:flex { display: none !important; }
        }
        @media (min-width: 769px) {
          .md\\:hidden { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
