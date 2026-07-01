import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../components/SocialIcons';
import { PROFILE } from '../data/portfolioData';

export default function Contact() {
  return (
    <div
      className="animate-fade-in"
      style={{ padding: '70px 24px', background: 'var(--bg-primary)', minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div className="container" style={{ maxWidth: '650px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 2.8rem)', textAlign: 'center', marginBottom: '14px' }}>
          Let's <span className="text-gradient">Connect</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '500px', margin: '0 auto 44px', fontSize: '0.98rem', fontFamily: 'var(--font-sans)' }}>
          Feel free to reach out for research collaborations, project opportunities, or just to say hello!
        </p>

        <div className="glass-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '6px' }}>Contact Channels</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontFamily: 'var(--font-sans)' }}>Direct communication details</p>
          </div>

          {/* Contact Details List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Email Channel */}
            <div className="glass-card" style={{ padding: '18px', display: 'flex', gap: '16px', alignItems: 'center', background: 'rgba(255, 255, 255, 0.01)' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(94, 234, 212, 0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-teal)',
                  flexShrink: 0
                }}
              >
                <Mail size={19} />
              </div>
              <div style={{ textAlign: 'left', minWidth: 0 }}>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Me</h4>
                <a
                  href={`mailto:${PROFILE.email}`}
                  style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', transition: 'var(--transition-smooth)', wordBreak: 'break-all' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-teal)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-primary)')}
                >
                  {PROFILE.email}
                </a>
              </div>
            </div>

            {/* Phone Channel */}
            <div className="glass-card" style={{ padding: '18px', display: 'flex', gap: '16px', alignItems: 'center', background: 'rgba(255, 255, 255, 0.01)' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(124, 158, 255, 0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-blue)',
                  flexShrink: 0
                }}
              >
                <Phone size={19} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call Me</h4>
                <a
                  href={`tel:${PROFILE.phone.replace(/[^0-9+]/g, '')}`}
                  style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', transition: 'var(--transition-smooth)' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-blue)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-primary)')}
                >
                  {PROFILE.phone}
                </a>
              </div>
            </div>

            {/* Location Channel */}
            <div className="glass-card" style={{ padding: '18px', display: 'flex', gap: '16px', alignItems: 'center', background: 'rgba(255, 255, 255, 0.01)' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(94, 234, 212, 0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-teal)',
                  flexShrink: 0
                }}
              >
                <MapPin size={19} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</h4>
                <p style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '1rem' }}>{PROFILE.location}</p>
              </div>
            </div>
          </div>

          {/* Social Connect panel */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px' }}>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '18px', fontWeight: '600', textAlign: 'center', fontFamily: 'var(--font-sans)' }}>
              Connect with me on Socials
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Row 1: LinkedIn & GitHub */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient"
                  style={{ padding: '10px 16px', fontSize: '0.87rem', flex: '1 1 200px', justifyContent: 'center' }}
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient"
                  style={{
                    padding: '10px 16px',
                    fontSize: '0.87rem',
                    flex: '1 1 200px',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-primary)',
                    boxShadow: 'none'
                  }}
                >
                  <Github size={18} /> GitHub
                </a>
              </div>

              {/* Row 2: Instagram */}
              <a
                href={PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient"
                style={{
                  padding: '10px 16px',
                  fontSize: '0.87rem',
                  justifyContent: 'center',
                  background: 'rgba(94, 234, 212, 0.12)',
                  border: '1px solid rgba(94, 234, 212, 0.3)',
                  color: 'var(--text-primary)',
                  boxShadow: 'none'
                }}
              >
                <Instagram size={18} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
