import React, { useState } from 'react';
import { ArrowLeft, ImageIcon, ListChecks, Maximize2, Paperclip, FileSpreadsheet, FileText, Eye, Download } from 'lucide-react';
import { activitiesData } from './Activities';
import LazyImage from '../components/LazyImage';

// Reads a file entry which can be either a plain string path
// (e.g. "/files/business-case-competition/proposal.pdf") or an object
// { url, name, label }. Works with both Excel (.xlsx/.xls/.csv) and PDF files.
// This mirrors the pattern used in EquityResearchDetail.jsx so the same
// "attach an Excel/PDF file" behavior is available on Activities too.
function getActivityFileMeta(file) {
  if (!file) return null;
  const url = typeof file === 'string' ? file : file.url;
  if (!url) return null;
  const name = (typeof file === 'object' && file.name) || url.split('/').pop();
  const label = (typeof file === 'object' && file.label) || name;
  const ext = url.split('.').pop().toLowerCase();
  return {
    url,
    name,
    label,
    isExcel: ['xlsx', 'xls', 'csv'].includes(ext),
    isPdf: ext === 'pdf',
  };
}

// Attachment card for a single Excel/PDF file linked to an activity.
// Renders nothing if the file entry is empty/invalid, so activities that
// don't have files yet simply show no attachments section.
function ActivityFileAttachment({ file }) {
  const meta = getActivityFileMeta(file);
  if (!meta) return null;

  return (
    <div
      className="glass-card"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px',
        padding: '12px 16px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
        {meta.isExcel ? (
          <FileSpreadsheet size={19} style={{ color: 'var(--accent-teal)', flexShrink: 0 }} />
        ) : (
          <FileText size={19} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
        )}
        <span
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {meta.label}
        </span>
      </div>
      <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
        {meta.isPdf && (
          <a
            href={meta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient"
            style={{ padding: '6px 14px', fontSize: '0.78rem' }}
          >
            <Eye size={14} /> View
          </a>
        )}
        <a
          href={meta.url}
          download={meta.name}
          className="btn-gradient"
          style={{ padding: '6px 14px', fontSize: '0.78rem', opacity: meta.isPdf ? 0.85 : 1 }}
        >
          <Download size={14} /> Download
        </a>
      </div>
    </div>
  );
}

export default function ActivityDetail({ setCurrentPage, selectedActivityId }) {
  const activity = activitiesData.find((a) => a.id === selectedActivityId);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [lastActivityId, setLastActivityId] = useState(selectedActivityId);

  if (selectedActivityId !== lastActivityId) {
    setLastActivityId(selectedActivityId);
    setActiveImageIndex(0);
  }

  if (!activity) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center', minHeight: '80vh' }}>
        <h2 style={{ color: 'var(--text-primary)' }}>Activity not found</h2>
        <button onClick={() => setCurrentPage('activities')} className="btn-gradient" style={{ marginTop: '20px' }}>
          Back to Activities
        </button>
      </div>
    );
  }

  const allImages = activity.images || [];
  const explanationText = activity.notes || activity.points.join('\n\n');

  return (
    <div className="animate-fade-in" style={{ padding: '60px 24px', background: 'var(--bg-primary)', minHeight: '85vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('activities')}
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
          <ArrowLeft size={18} /> Back to Activities
        </button>

        {/* Header */}
        <div style={{ textAlign: 'left', marginBottom: '36px' }}>
          <span className="badge" style={{ marginBottom: '12px' }}>{activity.period}</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '10px', lineHeight: '1.2', whiteSpace: 'pre-line' }}>{activity.org}</h1>
          <p style={{ color: 'var(--accent-blue)', fontSize: '1rem', fontWeight: '500', fontFamily: 'var(--font-sans)', whiteSpace: 'pre-line' }}>{activity.role}</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', textAlign: 'left' }}>
          {/* Left Column: Image Gallery */}
          <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-card" style={{ padding: '22px' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ImageIcon size={17} style={{ color: 'var(--accent-blue)' }} /> Activity Gallery
              </h3>

              {/* Main Featured Showcase */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: allImages.length ? '1px solid var(--glass-border)' : '1px dashed #2A3142',
                  cursor: allImages.length ? 'pointer' : 'default',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => allImages.length && setIsLightboxOpen(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {allImages.length > 0 ? (
                  <>
                    <LazyImage
                      src={allImages[activeImageIndex]}
                      alt={`${activity.org} gallery showcase`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                        transition: 'var(--transition-smooth)'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.4)',
                        opacity: isHovered ? 1 : 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        transition: 'var(--transition-smooth)',
                        backdropFilter: 'blur(2px)'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Maximize2 size={16} /> Click to expand
                      </span>
                    </div>
                  </>
                ) : (
                  <div style={{ color: '#3D4659', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <ImageIcon size={30} style={{ opacity: 0.6 }} />
                    No images available
                  </div>
                )}
              </div>

              {/* Thumbnails Row */}
              {allImages.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {allImages.map((img, idx) => {
                    const isSelected = idx === activeImageIndex;
                    return (
                      <div
                        key={idx}
                        style={{
                          position: 'relative',
                          width: '56px',
                          height: '56px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          border: isSelected ? '2px solid var(--accent-teal)' : '1px solid var(--glass-border)',
                          boxShadow: isSelected ? '0 0 10px rgba(94, 234, 212, 0.4)' : 'none',
                          transition: 'var(--transition-smooth)'
                        }}
                        onClick={() => setActiveImageIndex(idx)}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Explanation & Notes */}
          <div style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              className="glass-card"
              style={{ padding: '32px', border: '1px solid rgba(94,234,212,0.35)', boxShadow: '0 0 0 1px rgba(94,234,212,0.10), 0 0 30px rgba(94,234,212,0.10)' }}
            >
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <ListChecks size={17} style={{ color: 'var(--accent-teal)' }} /> Explanation & Notes
              </h3>

              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '22px', fontFamily: 'var(--font-sans)', whiteSpace: 'pre-line' }}>
                {explanationText}
              </p>

              {activity.focusAreas && activity.focusAreas.length > 0 && (
                <>
                  <p style={{ margin: '0 0 10px', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-sans)' }}>
                    Key Focus Areas:
                  </p>
                  <ul className="custom-list" style={{ margin: 0 }}>
                    {activity.focusAreas.map((f, i) => (
                      <li key={i} style={{ fontSize: '0.85rem', fontFamily: 'var(--font-sans)' }}>{f}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Documents / Attachments (Excel or PDF). Only shows up when an
                activity has a non-empty `files` array — see src/data/activities/_template.js */}
            {activity.files && activity.files.length > 0 && (
              <div className="glass-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                  <Paperclip size={17} style={{ color: 'var(--accent-blue)' }} /> Documents
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activity.files.map((f, i) => (
                    <ActivityFileAttachment key={i} file={f} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && allImages.length > 0 && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 6, 10, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.85)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)')}
          >
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>✕</span>
          </button>

          {/* Left Navigation Arrow */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
              }}
              style={{
                position: 'absolute',
                left: '24px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-teal)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)')}
            >
              <span style={{ fontSize: '24px', fontWeight: 'bold', transform: 'translateX(-1px)' }}>⟨</span>
            </button>
          )}

          {/* Expanded Image */}
          <img
            src={allImages[activeImageIndex]}
            alt={`${activity.org} gallery zoom`}
            style={{
              maxWidth: '85vw',
              maxHeight: '75vh',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 24px 50px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Right Navigation Arrow */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
              }}
              style={{
                position: 'absolute',
                right: '24px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-teal)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)')}
            >
              <span style={{ fontSize: '24px', fontWeight: 'bold', transform: 'translateX(1px)' }}>⟩</span>
            </button>
          )}

          {/* Index indicator */}
          <div
            style={{
              marginTop: '20px',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              background: 'rgba(0,0,0,0.5)',
              padding: '6px 16px',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            {activeImageIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
