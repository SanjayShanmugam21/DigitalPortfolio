import Reveal from './Reveal';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT } from '../data';

const Github = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section style={{ padding: '4rem 2rem', maxWidth: '700px', margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
      <Reveal>
        <p style={{ color: 'var(--accent)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
          Get in touch
        </p>
        <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', letterSpacing: '-0.03em', marginBottom: '1.2rem' }}>
          Let's Work Together
        </h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2.5rem', fontSize: '1rem' }}>
          I'm currently open to internship and full-time opportunities. Whether you have a project in mind or just want to connect — my inbox is always open.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <a
          href={`mailto:${CONTACT.email}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', padding: '1rem 2.5rem', background: 'linear-gradient(135deg, var(--accent), var(--accent2))', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.02em', transition: 'all 0.3s', boxShadow: '0 4px 24px rgba(79,142,247,0.25)' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(79,142,247,0.4)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(79,142,247,0.25)'; }}
        >
          Say Hello 👋
        </a>
      </Reveal>

      <Reveal delay={0.2}>
        <div style={{ marginTop: '3.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { icon: <Github size={20} />, href: CONTACT.github, label: 'GitHub' },
            { icon: <Linkedin size={20} />, href: CONTACT.linkedin, label: 'LinkedIn' },
            { icon: <Phone size={20} />, href: `tel:${CONTACT.phone}`, label: 'Phone' },
            { icon: <MapPin size={20} />, href: '#', label: 'Location' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '10px',
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
                color: 'var(--muted)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = 'rgba(79, 142, 247, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--muted)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.background = 'var(--surface2)';
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </Reveal>
      <style>{`
        @media (max-width: 640px) {
          section { padding: 3rem 1.5rem !important; }
          h2 { font-size: 2.2rem !important; }
        }
      `}</style>
    </section>
  );
}
