import React from 'react';
import { ArrowLeft, ExternalLink, ImageIcon, CheckCircle2 } from 'lucide-react';
import { Github } from '../components/SocialIcons';
import { projectsData } from './Projects';

// Menerima link YouTube dalam berbagai format (watch?v=, youtu.be/, embed/)
// dan mengubahnya jadi URL embed yang valid untuk <iframe>.
function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

export default function ProjectDetail({ currentPage, setCurrentPage, selectedProjectId }) {
  const project = projectsData.find((p) => p.id === selectedProjectId);

  if (!project) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center', minHeight: '80vh' }}>
        <h2 style={{ color: 'var(--text-primary)' }}>Project not found</h2>
        <button onClick={() => setCurrentPage('projects')} className="btn-gradient" style={{ marginTop: '20px' }}>
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ padding: '60px 24px', background: 'var(--bg-primary)', minHeight: '85vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('projects')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            fontSize: '0.95rem',
            fontWeight: '600',
            marginBottom: '28px',
            transition: 'var(--transition-smooth)'
          }}
          onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
          onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
        >
          <ArrowLeft size={18} /> Back to Projects
        </button>

        {/* Header */}
        <div style={{ textAlign: 'left', marginBottom: '32px' }}>
          <span className="badge" style={{ marginBottom: '12px' }}>{project.category}</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '10px', lineHeight: '1.2' }}>{project.title}</h1>
          <p style={{ color: 'var(--accent-blue)', fontSize: '1rem', fontWeight: '500', fontFamily: 'var(--font-sans)' }}>{project.subtitle}</p>
        </div>

        {/* Media */}
        <div className="glass-card" style={{ padding: '16px', marginBottom: '36px', overflow: 'hidden' }}>
          {project.youtube ? (
            <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/9' }}>
              <iframe
                src={getYouTubeEmbedUrl(project.youtube)}
                title={project.title}
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : project.image ? (
            <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/9' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ) : (
            <div
              style={{
                aspectRatio: '16/9',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #11151F, #161B26)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'var(--text-secondary)',
                gap: '14px',
                padding: '40px',
                border: '1px dashed #2A3142'
              }}
            >
              <ImageIcon size={40} style={{ color: 'var(--accent-blue)' }} />
              <span style={{ fontSize: '0.85rem', textAlign: 'center', fontFamily: 'var(--font-heading)', color: '#3D4659' }}>
                add image, screenshot, or video embed
              </span>
            </div>
          )}
        </div>

        {/* Description & Details */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', textAlign: 'left', marginBottom: '32px' }}>
          {/* Main write-up */}
          <div className="glass-card" style={{ flex: '1 1 500px', padding: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '14px' }}>Project Overview</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', fontFamily: 'var(--font-sans)' }}>
              {project.overview}
            </p>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '28px', marginBottom: '14px' }}>
              Key Technologies & Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.techs.map((tech, idx) => (
                <span key={idx} className="badge" style={{ fontSize: '0.78rem', padding: '5px 12px' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar Metadata */}
          <div style={{ flex: '1 1 240px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {/* Actions glass card */}
            <div className="glass-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '6px' }}>Project Links</h4>

              <a
                href={project.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient"
                style={{
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-primary)',
                  boxShadow: 'none'
                }}
              >
                <Github size={18} /> GitHub Repository
              </a>

              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-gradient" style={{ justifyContent: 'center' }}>
                  <ExternalLink size={18} /> Live Deployment
                </a>
              )}
            </div>

            {/* Quality badge card */}
            <div className="glass-card" style={{ padding: '22px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <CheckCircle2 size={26} style={{ color: project.verified ? 'var(--accent-teal)' : '#3D4659', flexShrink: 0 }} />
              <div>
                <h5 style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                  {project.verified ? 'Verified Project' : 'Not yet verified'}
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>Part of Academic Portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
