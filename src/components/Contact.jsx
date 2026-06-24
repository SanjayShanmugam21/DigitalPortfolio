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
    <section id="contact" style={{
      padding: '6rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decor */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(79,142,247,0.15) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: -1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,255,255,0.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: -1
      }} />

      <div className="contact-container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '4rem',
        alignItems: 'start',
        position: 'relative'
      }}>
        {/* Left Section: Header & Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <Reveal>
            <div style={{ textAlign: 'left' }}>
              <p style={{
                color: 'var(--accent)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                display: 'inline-block',
                padding: '4px 12px',
                background: 'rgba(79,142,247,0.1)',
                borderRadius: '6px',
                border: '1px solid rgba(79,142,247,0.2)'
              }}>
                Get in Touch
              </p>
              <h2 style={{
                fontFamily: 'Syne',
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 6vw, 3.8rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                background: 'linear-gradient(to bottom, #fff, #a2a2a2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Let's Work Together
              </h2>
              <p style={{
                color: 'var(--muted)',
                lineHeight: 1.6,
                fontSize: '1.1rem',
                maxWidth: '500px',
                borderLeft: '2px solid var(--accent)',
                paddingLeft: '1.5rem'
              }}>
                I specialize in building high-performance, pixel-perfect frontend experiences. Whether you're looking for a dedicated collaborator or a skilled developer for your next big project — I'm ready to dive in.
              </p>
            </div>
          </Reveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}>
            {[
              { icon: <Mail size={22} />, label: 'Email', value: CONTACT.email, color: '#4f8ef7' },
              { icon: <Phone size={22} />, label: 'Phone', value: CONTACT.phone, color: '#22c55e' },
              { icon: <Linkedin size={22} />, label: 'LinkedIn', value: 'sanjay-s-5873b2293', color: '#0077b5' },
              { icon: <Github size={22} />, label: 'GitHub', value: 'SanjayShanmugam21', color: '#fff' },
              { icon: <MapPin size={22} />, label: 'Location', value: CONTACT.location, color: '#ef4444' }
            ].map(({ icon, label, value, color }, i) => (
              <Reveal key={label} delay={0.1 + (i * 0.1)}>
                <div
                  className="contact-card"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = color + '40';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = `0 15px 30px -10px ${color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: color + '15',
                    color: color,
                    boxShadow: `0 0 15px ${color}10`,
                    border: `1px solid ${color}20`
                  }}>
                    {icon}
                  </div>
                  <div>
                    <h4 style={{
                      margin: 0,
                      fontSize: '0.75rem',
                      color: 'var(--muted)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>
                      {label}
                    </h4>
                    <p style={{
                      margin: '0.15rem 0 0 0',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: '#fff',
                      opacity: 0.9
                    }}>
                      {value}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Section: Map Iframe */}
        <Reveal delay={0.4}>
          <div style={{
            width: '100%',
            borderRadius: '32px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            height: '550px',
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.4)',
            position: 'relative',
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(20px)'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.411603588!2d78.0963568!3d11.2166683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab038318f7a635%3A0xc811c7501a35715a!2sNamakkal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1719209569000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) opacity(0.8)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Namakkal Location"
            ></iframe>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        @media (max-width: 900px) {
          .contact-container { gap: 3rem !important; }
          section { padding: 4rem 1.5rem !important; }
        }
        @media (max-width: 640px) {
          h2 { font-size: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
