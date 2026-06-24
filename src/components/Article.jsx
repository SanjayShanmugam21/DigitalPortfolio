import Reveal from './Reveal';
import { ARTICLES } from '../data';
import groceryImg from '../assets/grocery-article.jpg';
import webproImg from '../assets/webpro-article.jpg';
import { ExternalLink, BookOpen } from 'lucide-react';

export default function Article() {
    const images = {
        '/assets/grocery-article.jpg': groceryImg,
        '/assets/webpro-article.jpg': webproImg
    };

    return (
        <section style={{
            padding: '4rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <Reveal>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{
                        color: 'var(--accent)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem'
                    }}>
                        Case Studies & Articles
                    </p>
                    <h2 style={{
                        fontFamily: 'Syne',
                        fontWeight: 800,
                        fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                        letterSpacing: '-0.04em',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(to bottom, #fff, #a2a2a2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Expertise in Motion
                    </h2>
                    <p style={{
                        color: 'var(--muted)',
                        fontSize: '1.2rem',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        A deep dive into my journey of building modern web experiences, from structural foundations to professional digital products.
                    </p>
                </div>
            </Reveal>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '3rem',
            }}>
                {ARTICLES.map((article, index) => (
                    <Reveal key={index} delay={0.2 * index}>
                        <div style={{
                            background: 'var(--surface)',
                            borderRadius: '24px',
                            border: '1px solid var(--border)',
                            overflow: 'hidden',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = 'var(--accent)';
                                e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(0,0,0,0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.borderColor = 'var(--border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={images[article.image]}
                                    alt={article.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0, bottom: 0,
                                    background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.6))'
                                }} />
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{
                                    fontFamily: 'Syne',
                                    fontSize: '1.3rem',
                                    fontWeight: 700,
                                    marginBottom: '1rem',
                                    color: '#fff',
                                    lineHeight: 1.3
                                }}>
                                    {article.title}
                                </h3>
                                <p style={{
                                    color: 'var(--muted)',
                                    lineHeight: 1.6,
                                    fontSize: '0.95rem',
                                    marginBottom: '1.5rem',
                                    flex: 1
                                }}>
                                    {article.intro}
                                </p>
                                <div style={{ marginTop: 'auto' }}>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            color: 'var(--accent)',
                                            fontWeight: 700,
                                            fontSize: '0.9rem',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <BookOpen size={18} />
                                        Read Case Study
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            <style>{`
        @media (max-width: 480px) {
          section { padding: 4rem 1.5rem !important; }
          div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
