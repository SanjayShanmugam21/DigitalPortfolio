import { useEffect, useRef, useState } from 'react';
import { Mail, FileText } from 'lucide-react';
import { CONTACT } from '../data';
import img from '../assets/sanjay.png';

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

const ROLES = ['Full Stack Developer', 'MERN Stack Developer', 'React.js Developer'];

export default function Hero({ setActiveSection }) {
  const [typed, setTyped] = useState('');
  const roleIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timer;
    const tick = () => {
      const cur = ROLES[roleIdx.current];
      if (!deleting.current) {
        setTyped(cur.slice(0, charIdx.current + 1));
        charIdx.current++;
        if (charIdx.current === cur.length) {
          deleting.current = true;
          timer = setTimeout(tick, 1800);
          return;
        }
      } else {
        setTyped(cur.slice(0, charIdx.current - 1));
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          roleIdx.current = (roleIdx.current + 1) % ROLES.length;
        }
      }
      timer = setTimeout(tick, deleting.current ? 50 : 90);
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        height: '100%', display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: '2rem',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,142,247,0.08) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,90,247,0.08) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', borderRadius: '50%', border: '1px solid rgba(79,142,247,0.06)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '900px', borderRadius: '50%', border: '1px solid rgba(79,142,247,0.03)' }} />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-[1100px] relative gap-12 lg:gap-20">

        {/* Left Content: Details */}
        <div style={{ flex: '1.2', textAlign: 'left', animation: 'fadeUp 0.8s 0.2s ease both' }}>

          {/* Badge */}
          <div style={{ animation: 'fadeUp 0.8s 0.1s ease both' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '100px', padding: '6px 16px', marginBottom: '1.5rem', fontSize: '0.78rem', color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', animation: 'pulse2 2s infinite' }} />
              Available for opportunities
            </div>
          </div>

          {/* Name */}
          <h1 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.2rem' }}>
            Hi, I'm <span style={{ color: 'var(--accent)' }}>Sanjay</span>
          </h1>

          {/* Typewriter */}
          <p style={{ fontFamily: 'Syne', fontSize: 'clamp(1rem,2.5vw,1.4rem)', fontWeight: 600, color: 'var(--muted)', marginBottom: '1.5rem', minHeight: '1.8rem' }}>
            <span style={{ color: 'var(--accent2)' }}>{typed}</span>
            <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--accent)' }}>|</span>
          </p>

          {/* Tagline */}
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '2.5rem' }}>
            Highly motivated full stack developer building innovative, user-centric web applications.
            MCA student at RVS College of Arts &amp; Science — passionate about the MERN stack and clean, maintainable code.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects"
              style={{ padding: '0.9rem 2.2rem', background: 'var(--accent)', color: '#fff', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(79,142,247,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              View Projects
            </a>
            <a href="#resume"
              onClick={(e) => { e.preventDefault(); setActiveSection('resume'); }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.9rem 2.2rem', background: 'var(--surface2)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent2)'; e.currentTarget.style.color = 'var(--accent2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.transform = 'none'; }}
            >
              <FileText size={18} />
              Resume
            </a>
            <a href="#contact"
              style={{ padding: '0.9rem 2.2rem', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.transform = 'none'; }}
            >
              Contact Me
            </a>
          </div>

          {/* Social links - Icons version */}
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem' }}>
            {[
              { icon: <Github size={22} />, href: CONTACT.github, label: 'GitHub' },
              { icon: <Linkedin size={22} />, href: CONTACT.linkedin, label: 'LinkedIn' },
              { icon: <Mail size={22} />, href: `mailto:${CONTACT.email}`, label: 'Email' },
            ].map(({ icon, href, label }) => (
              <a key={label} href={href}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '12px',
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
        </div>

        {/* Right Content: Profile Image */}
        <div style={{ flex: '0.8', display: 'flex', justifyContent: 'center', animation: 'fadeUp 0.8s 0.2s ease both' }}>
          <div style={{
            width: 'clamp(240px, 30vw, 360px)',
            height: 'clamp(240px, 30vw, 360px)',
            borderRadius: '10px 40% 10px 40%',
            padding: '8px',
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(79,142,247,0.2)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              inset: '-15px',
              borderRadius: '20px 50% 20px 50%',
              border: '2px solid rgba(79,142,247,0.15)',
              animation: 'pulse2 4s infinite'
            }} />
            <img
              src={img}
              alt="Sanjay"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '8px 38% 8px 38%',
                objectFit: 'cover',
                border: '4px solid var(--bg)',
                backgroundColor: 'var(--surface2)'
              }}
            />
          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 4rem 1.5rem !important; }
          h1 { font-size: 2.8rem !important; }
          p { font-size: 0.95rem !important; }
        }
      `}</style>
    </section>
  );
}
