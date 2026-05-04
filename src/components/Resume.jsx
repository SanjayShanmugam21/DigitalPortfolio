import { Download } from 'lucide-react';
import resumeFile from '../assets/Sanjay-Resume.pdf';

export default function Resume() {
    return (
        <section style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
            {/* Header / Toolbar */}
            <div style={{
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'var(--surface)',
                borderBottom: '1px solid var(--border)',
                zIndex: 10
            }}>
                <div>
                    <p style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>Document</p>
                    <h2 style={{ fontFamily: 'Syne', fontSize: '1.1rem', fontWeight: 700 }}>Sanjay-Resume.pdf</h2>
                </div>

                <a
                    href={resumeFile}
                    download="Sanjay-Resume.pdf"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'var(--accent)',
                        color: '#fff',
                        padding: '0.6rem 1.4rem',
                        borderRadius: '8px',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        transition: 'all 0.3s',
                        boxShadow: '0 4px 12px rgba(79,142,247,0.3)'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(79,142,247,0.4)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(79,142,247,0.3)'; }}
                >
                    <Download size={18} />
                    Download Resume
                </a>
            </div>

            {/* PDF Viewer Container */}
            <div style={{ flex: 1, position: 'relative', background: 'var(--bg)', overflow: 'hidden' }}>
                <iframe
                    src={`${resumeFile}#view=FitH`}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    title="Resume Viewer"
                />
            </div>

            <style>{`
        @media (max-width: 640px) {
          h2 { font-size: 0.9rem !important; }
          a { padding: 0.5rem 1rem !important; font-size: 0.75rem !important; }
        }
      `}</style>
        </section>
    );
}
