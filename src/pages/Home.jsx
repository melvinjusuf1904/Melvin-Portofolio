import React, { useState } from 'react';
import { GraduationCap, Search, Award, ArrowRight } from 'lucide-react';
import melvinPhoto from '../assets/melvinfoto.jpg';
import { PROFILE, EDUCATION, CERTS, AWARDS, PARTICLES } from '../data/portfolioData';
import { SKILL_TABS } from '../data/skillTabs';

export default function Home({ setCurrentPage }) {
  const [certSearch, setCertSearch] = useState('');
  const [activeTab, setActiveTab] = useState(Object.keys(SKILL_TABS)[0]);

  const filteredCerts = CERTS.filter(
    (c) =>
      c.name.toLowerCase().includes(certSearch.toLowerCase()) ||
      c.issuer.toLowerCase().includes(certSearch.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          padding: '100px 24px',
          backgroundImage:
            'radial-gradient(circle at 15% 15%, rgba(124,158,255,0.16), transparent 42%), radial-gradient(circle at 88% 25%, rgba(94,234,212,0.13), transparent 40%), radial-gradient(circle at 50% 90%, rgba(124,158,255,0.08), transparent 50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '85vh',
          overflow: 'hidden'
        }}
      >
        {/* floating particles - kept from Melvin Portfolio's original design */}
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: i % 2 === 0 ? 'var(--accent-teal)' : 'var(--accent-blue)',
              opacity: 0.55,
              boxShadow: `0 0 ${p.size * 3}px ${i % 2 === 0 ? 'var(--accent-teal)' : 'var(--accent-blue)'}`,
              animation: `float ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
              pointerEvents: 'none'
            }}
          />
        ))}

        <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Hero Left: Glass Card */}
          <div className="glass-card hero-glass-card">
            <span
              style={{
                color: 'var(--accent-teal)',
                fontFamily: 'var(--font-heading)',
                fontWeight: '700',
                fontSize: '0.9rem',
                letterSpacing: '0.15em',
                display: 'block',
                marginBottom: '14px'
              }}
            >
              HELLO! I AM
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.1rem, 5vw, 3.5rem)',
                lineHeight: '1.1',
                marginBottom: '22px'
              }}
            >
              <span className="text-gradient">{PROFILE.name}</span>
            </h1>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                lineHeight: '1.75',
                marginBottom: '32px',
                fontFamily: 'var(--font-sans)'
              }}
            >
              {PROFILE.role}
            </p>
            <button onClick={() => setCurrentPage('projects')} className="btn-gradient">
              Check Out my Portfolio! <ArrowRight size={18} />
            </button>
          </div>

          {/* Hero Right: Profile Picture with Halo */}
          <div className="hero-image-container">
            <div className="profile-image-wrapper">
              <div
                className="profile-image"
                role="img"
                aria-label={PROFILE.name}
                style={{
                  backgroundImage: `url(${melvinPhoto})`,
                  backgroundSize: '230%',
                  backgroundPosition: 'center 12%',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Summary & Education Section */}
      <section style={{ padding: '70px 24px', background: 'rgba(11, 14, 20, 0.6)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center' }}>
          {/* Summary Box */}
          <div className="glass-card home-info-card">
            <h2 style={{ fontSize: '1.7rem', marginBottom: '20px', position: 'relative' }}>
              Summary
              <span
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '0',
                  width: '46px',
                  height: '3px',
                  background: 'var(--accent-gradient)',
                  borderRadius: '4px'
                }}
              ></span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', fontFamily: 'var(--font-sans)' }}>
              {PROFILE.bio}
            </p>
          </div>

          {/* Education Box */}
          <div className="glass-card home-info-card">
            <h2 style={{ fontSize: '1.7rem', marginBottom: '20px', position: 'relative' }}>
              Education
              <span
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '0',
                  width: '46px',
                  height: '3px',
                  background: 'var(--accent-gradient)',
                  borderRadius: '4px'
                }}
              ></span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '14px' }}>
                  <div
                    style={{
                      marginTop: '2px',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(94, 234, 212, 0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-teal)',
                      flexShrink: 0
                    }}
                  >
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: '600', fontFamily: 'var(--font-sans)' }}>
                      {edu.school}
                    </h3>
                    <p style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: '500' }}>{edu.degree}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', margin: '4px 0' }}>{edu.period}</p>
                    {edu.grade && <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', margin: 0 }}>{edu.grade}</p>}
                    {edu.activities && (
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', margin: '4px 0 0' }}>{edu.activities}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ padding: '70px 24px', background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '14px' }}>
            My <span className="text-gradient">Skills</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '540px', margin: '0 auto 40px', fontFamily: 'var(--font-sans)' }}>
            A comprehensive overview of my technical capabilities, leadership experience, and languages.
          </p>

          {/* Skill Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
            {Object.keys(SKILL_TABS).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`nav-link skill-tab-btn ${activeTab === tab ? 'active' : ''}`}
                style={{
                  border: 'none',
                  background: activeTab === tab ? undefined : 'rgba(255, 255, 255, 0.04)'
                }}
              >
                {tab === 'Technical Skills' ? (
                  <>
                    <span className="hidden-mobile">Technical Skills</span>
                    <span className="visible-mobile">Technical</span>
                  </>
                ) : tab === 'Management & Leadership' ? (
                  <>
                    <span className="hidden-mobile">Management & Leadership</span>
                    <span className="visible-mobile">Management</span>
                  </>
                ) : (
                  'Languages'
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid-responsive">
            {SKILL_TABS[activeTab].map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <div key={idx} className="glass-card" style={{ padding: '28px', textAlign: 'left' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(124, 158, 255, 0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-blue)',
                      marginBottom: '18px'
                    }}
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '10px' }}>{skill.group}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontFamily: 'var(--font-sans)' }}>
                    {skill.items.join(', ')}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications and Achievements Section */}
      <section style={{ padding: '70px 24px', background: 'rgba(11, 14, 20, 0.6)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
          {/* Certifications Card */}
          <div className="glass-card" style={{ flex: '1 1 480px', padding: '36px', textAlign: 'left' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                gap: '16px'
              }}
            >
              <h2 style={{ fontSize: '1.6rem' }}>Certifications</h2>
              {/* Search Certs */}
              <div style={{ position: 'relative', flex: '1 1 200px', maxWidth: '300px' }}>
                <input
                  type="text"
                  placeholder="Search certificates..."
                  className="form-input"
                  value={certSearch}
                  onChange={(e) => setCertSearch(e.target.value)}
                  style={{ padding: '10px 16px 10px 38px', fontSize: '0.82rem' }}
                />
                <Search
                  size={15}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-secondary)'
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                maxHeight: '420px',
                overflowY: 'auto',
                paddingRight: '8px'
              }}
            >
              {filteredCerts.length > 0 ? (
                filteredCerts.map((cert, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '14px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid #1A1F2B',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px'
                    }}
                  >
                    <div>
                      <h4 style={{ color: 'var(--text-primary)', fontSize: '0.92rem', fontWeight: '500', fontFamily: 'var(--font-sans)' }}>
                        {cert.name}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>{cert.issuer}</p>
                    </div>
                    <span className="badge" style={{ flexShrink: 0 }}>{cert.year}</span>
                  </div>
                ))
              ) : (
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '24px', fontFamily: 'var(--font-sans)' }}>
                  No certifications found matching "{certSearch}"
                </p>
              )}
            </div>
          </div>

          {/* Honors and Awards Card */}
          <div className="glass-card" style={{ flex: '1 1 420px', padding: '36px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '20px' }}>Honors & Awards</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {AWARDS.map((award, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      marginTop: '2px',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(124, 158, 255, 0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-blue)',
                      flexShrink: 0
                    }}
                  >
                    <Award size={16} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: '600', fontFamily: 'var(--font-sans)' }}>
                      {award.title}
                    </h4>
                    <p style={{ color: 'var(--accent-teal)', fontSize: '0.8rem', fontWeight: '500', marginTop: '2px' }}>{award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
