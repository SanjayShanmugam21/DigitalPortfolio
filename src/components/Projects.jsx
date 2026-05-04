import { useState } from 'react';
import Reveal from './Reveal';
import { PROJECTS } from '../data';

function ProjectCard({ project }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hov ? project.color + '44' : 'var(--border)'}`,
        borderRadius: '20px', padding: '2rem',
        transition: 'all 0.3s',
        transform: hov ? 'translateY(-4px)' : 'none',
        height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem',
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: project.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M7 8h10M7 12h10M7 16h6" />
          </svg>
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--muted)', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
        >
          Live ↗
        </a>
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7, flex: 1 }}>
        {project.desc}
      </p>

      {/* Stack badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{ fontSize: '0.75rem', padding: '3px 10px', borderRadius: '4px', background: project.color + '12', color: project.color, border: `1px solid ${project.color}28`, fontWeight: 500 }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ color: 'var(--accent)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            What I've built
          </p>
          <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', letterSpacing: '-0.03em' }}>
            Projects
          </h2>
        </div>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.15}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
