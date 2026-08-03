import React from 'react';
import { Users, ArrowRight, ImageIcon, Crown, Star, Clock } from 'lucide-react';
import { ACTIVITIES } from '../data/portfolioData';
import { ORGANIZATION_ROSTER } from '../data/organizationRoster';
import Reveal from '../components/Reveal';
import LazyImage from '../components/LazyImage';

// Classifies a role string into a visual tone so the roster reads at a glance:
// leadership roles get a warm gold gradient, coordination roles a blue gradient,
// and general membership a teal gradient — every icon stays vivid, none go flat/grey.
function getRoleMeta(role) {
  const r = (role || '').toLowerCase();
  if (/chair|head|president|founder|ketua/.test(r)) {
    return {
      Icon: Crown,
      iconColor: '#241A05',
      gradient: 'linear-gradient(135deg, #FDE68A, #F59E0B)',
      glow: 'rgba(245, 158, 11, 0.35)',
      badgeColor: '#F59E0B',
      badgeBg: 'rgba(245, 158, 11, 0.14)',
      badgeBorder: 'rgba(245, 158, 11, 0.35)'
    };
  }
  if (/lead|coordinator|manager|committee|activist/.test(r)) {
    return {
      Icon: Star,
      iconColor: '#FFFFFF',
      gradient: 'linear-gradient(135deg, #93A9FF, #5B7FE0)',
      glow: 'rgba(124, 158, 255, 0.4)',
      badgeColor: 'var(--accent-blue)',
      badgeBg: 'rgba(124, 158, 255, 0.14)',
      badgeBorder: 'rgba(124, 158, 255, 0.35)'
    };
  }
  return {
    Icon: Users,
    iconColor: '#062E29',
    gradient: 'linear-gradient(135deg, #99F6E4, #34D399)',
    glow: 'rgba(94, 234, 212, 0.4)',
    badgeColor: 'var(--accent-teal)',
    badgeBg: 'rgba(94, 234, 212, 0.14)',
    badgeBorder: 'rgba(94, 234, 212, 0.35)'
  };
}

// Re-exported so ActivityDetail.jsx can look up an activity by id,
// same pattern used in myportofolio's Activities.jsx / ActivityDetail.jsx
export const activitiesData = ACTIVITIES;

export default function Activities({ setCurrentPage, setSelectedActivityId }) {
  const handleViewDetails = (id) => {
    setSelectedActivityId(id);
    setCurrentPage('activity-detail');
  };

  return (
    <div className="animate-fade-in" style={{ padding: '70px 24px', background: 'var(--bg-primary)', minHeight: '85vh' }}>
      <div className="container">
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 2.8rem)', textAlign: 'center', marginBottom: '14px' }}>
          My <span className="text-gradient">Activities & Organizations</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '560px', margin: '0 auto 48px', fontSize: '0.98rem', fontFamily: 'var(--font-sans)' }}>
          Highlighting my leadership roles, financial operations, competition involvement, and community contributions.
        </p>

        <Reveal>
          <div
            className="glass-card"
            style={{
              marginBottom: '48px',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, rgba(124,158,255,0.03), rgba(255,255,255,0.01))'
            }}
          >
            <div style={{ padding: '22px 26px 18px', borderBottom: '1px solid var(--glass-border)' }}>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  color: 'var(--accent-teal)',
                  marginBottom: '4px'
                }}
              >
                ORGANIZATION MEMBERSHIPS
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>
                Organizations where I actively participate and contribute.
              </p>
            </div>

            {ORGANIZATION_ROSTER.map((entry, idx) => {
              const { Icon, iconColor, gradient, glow, badgeColor, badgeBg, badgeBorder } = getRoleMeta(entry.role);
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '18px 26px',
                    borderBottom: idx === ORGANIZATION_ROSTER.length - 1 ? 'none' : '1px solid var(--glass-border)',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  {/* Org logo (custom image) or role icon fallback */}
                  {entry.logo ? (
                    <div
                      style={{
                        flexShrink: 0,
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid var(--glass-border)',
                        background: '#fff'
                      }}
                    >
                      <img
                        src={entry.logo}
                        alt={entry.org}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        flexShrink: 0,
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        background: gradient,
                        boxShadow: `0 4px 14px ${glow}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: iconColor
                      }}
                    >
                      <Icon size={18} strokeWidth={2.4} fill={iconColor} />
                    </div>
                  )}

                  {/* Org name + duration */}
                  <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <p style={{ fontSize: '0.96rem', color: 'var(--text-primary)', fontWeight: '600', whiteSpace: 'pre-line', marginBottom: '3px' }}>
                      {entry.org}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={12} color="var(--text-secondary)" />
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)', letterSpacing: '0.01em' }}>
                        {entry.period}
                      </span>
                    </div>
                  </div>

                  {/* Role badge */}
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: '0.78rem',
                      fontWeight: '600',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      background: badgeBg,
                      color: badgeColor,
                      border: `1px solid ${badgeBorder}`,
                      whiteSpace: 'pre-line',
                      textAlign: 'right',
                      maxWidth: '48%'
                    }}
                  >
                    {entry.role}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className="grid-responsive" style={{ gap: '28px' }}>
          {activitiesData.map((activity, idx) => (
            <Reveal key={activity.id} delayMs={(idx % 3) * 100}>
            <div
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}
            >
              {/* Image header */}
              <div className="project-image-container" style={{ margin: '16px', marginBottom: '0', border: activity.images?.[0] ? 'none' : '1px dashed #2A3142' }}>
                {activity.images?.[0] ? (
                  <LazyImage src={activity.images[0]} alt={activity.org} />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      background: 'linear-gradient(135deg, #11151F, #161B26)'
                    }}
                  >
                    <ImageIcon size={26} color="#3D4659" />
                    <span style={{ fontSize: 12, color: '#3D4659', fontFamily: 'var(--font-heading)' }}>add activity photo</span>
                  </div>
                )}
                <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2 }}>
                  <span
                    className="badge"
                    style={{ background: 'rgba(11, 14, 20, 0.85)', backdropFilter: 'blur(4px)' }}
                  >
                    {activity.period}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1, textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  {activity.logo ? (
                    <div
                      style={{
                        flexShrink: 0,
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: '1px solid var(--glass-border)',
                        background: '#fff'
                      }}
                    >
                      <img
                        src={activity.logo}
                        alt={activity.org}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        flexShrink: 0,
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: 'rgba(124, 158, 255, 0.10)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-blue)'
                      }}
                    >
                      <Users size={18} />
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', whiteSpace: 'pre-line' }}>{activity.org}</h3>
                </div>

                <p style={{ color: 'var(--accent-blue)', fontSize: '0.8rem', fontWeight: '600', marginBottom: '14px', whiteSpace: 'pre-line' }}>
                  {activity.role}
                </p>

                <ul className="custom-list" style={{ flexGrow: 1, fontSize: '0.87rem', marginBottom: '20px', fontFamily: 'var(--font-sans)' }}>
                  {activity.points.slice(0, 2).map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>

                <button
                  onClick={() => handleViewDetails(activity.id)}
                  className="btn-gradient"
                  style={{ width: '100%', justifyContent: 'center', padding: '10px 20px', fontSize: '0.87rem' }}
                >
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
