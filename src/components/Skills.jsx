import { useState } from 'react';
import Reveal from './Reveal';
import { SKILLS } from '../data';

function SkillBadge({ name }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-block', padding: '6px 14px', borderRadius: '6px',
        fontSize: '0.82rem', fontWeight: 500, cursor: 'default',
        background: hov ? 'rgba(79,142,247,0.15)' : 'var(--surface2)',
        border: `1px solid ${hov ? 'rgba(79,142,247,0.4)' : 'var(--border)'}`,
        color: hov ? 'var(--accent)' : 'var(--muted)',
        transition: 'all 0.2s',
      }}
    >
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ color: 'var(--accent)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            What I work with
          </p>
          <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', letterSpacing: '-0.03em' }}>
            Technical Skills
          </h2>
        </div>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        {Object.entries(SKILLS).map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.1}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.5rem', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <h3 style={{ fontFamily: 'Syne', fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--text)' }}>
                  {category}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {items.map((skill) => <SkillBadge key={skill} name={skill} />)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          section { padding: 3rem 1.2rem !important; }
          .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
