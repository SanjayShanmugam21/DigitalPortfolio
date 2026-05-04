import Reveal from './Reveal';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data';

function TimelineItem({ exp, index }) {
  return (
    <Reveal delay={index * 0.15}>
      <div className="timeline-item" style={{ paddingLeft: '48px', marginBottom: '2.5rem', position: 'relative' }}>
        {/* Dot */}
        <div style={{ position: 'absolute', left: '6px', top: '6px', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.5rem' }}>
          {/* Header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.8rem' }}>
            <div>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: '2px' }}>{exp.role}</h3>
              <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 500 }}>{exp.company} · {exp.location}</p>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--muted)', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', whiteSpace: 'nowrap' }}>
              {exp.period}
            </span>
          </div>

          {/* Points */}
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {exp.points.map((pt) => (
              <li key={pt} style={{ display: 'flex', gap: '10px', fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }}>›</span>
                <span>
                  {pt.split(/(\*\*.*?\*\*)/g).map((part, i) =>
                    part.startsWith('**') && part.endsWith('**')
                      ? <strong key={i} style={{ color: 'var(--text)', fontWeight: 700 }}>{part.slice(2, -2)}</strong>
                      : part
                  )}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section className="exp-section" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ color: 'var(--accent)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            Where I've worked
          </p>
          <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', letterSpacing: '-0.03em' }}>
            Experience
          </h2>
        </div>
      </Reveal>

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: '15px', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, var(--accent), var(--accent2), transparent)' }} />
        {EXPERIENCE.map((exp, i) => <TimelineItem key={exp.company} exp={exp} index={i} />)}
      </div>

      {/* Certifications */}
      <Reveal delay={0.2}>
        <div style={{ marginTop: '3rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent2)' }} />
            <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>Certifications</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {CERTIFICATIONS.map((cert) => (
              <div key={cert} style={{ display: 'flex', gap: '12px', padding: '10px 14px', background: 'var(--surface2)', borderRadius: '10px', fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: '1px' }}>✓</span>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Education */}
      <Reveal delay={0.3}>
        <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {EDUCATION.map((ed) => (
            <div key={ed.degree} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px', padding: '1.2rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: ed.color, marginBottom: '0.8rem' }} />
              <p style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text)', marginBottom: '4px' }}>{ed.degree} — {ed.college}</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{ed.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 640px) {
          .exp-section { padding: 3rem 1.2rem !important; }
          .timeline-item { padding-left: 32px !important; }
        }
      `}</style>
    </section>
  );
}
