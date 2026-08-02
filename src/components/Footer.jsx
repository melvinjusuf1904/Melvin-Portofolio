import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { PROFILE } from '../data/portfolioData';

export default function Footer({ setCurrentPage }) {
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      background: 'rgba(11, 14, 20, 0.9)',
      padding: '36px 32px',
      marginTop: 'auto',
      backdropFilter: 'blur(8px)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px'
      }}>
        {/* Info */}
        <div style={{ textAlign: 'left' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '4px', fontSize: 16 }}>
            {PROFILE.name}
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Computer Science Student @ BINUS University | AI, Machine Learning, and Trading Enthusiast
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-line"
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <Github size={18} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-line"
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="glow-line"
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="container" style={{
        marginTop: '20px',
        textAlign: 'center',
        color: '#3D4659',
        fontSize: '0.78rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        paddingTop: '16px'
      }}>
        © {new Date().getFullYear()} {PROFILE.name}.
      </div>
    </footer>
  );
}
