import React from 'react';
import { Users, ArrowRight, ImageIcon } from 'lucide-react';
import { ACTIVITIES } from '../data/portfolioData';

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

        <div className="grid-responsive" style={{ gap: '28px' }}>
          {activitiesData.map((activity) => (
            <div
              key={activity.id}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}
            >
              {/* Image header */}
              <div className="project-image-container" style={{ margin: '16px', marginBottom: '0', border: activity.images?.[0] ? 'none' : '1px dashed #2A3142' }}>
                {activity.images?.[0] ? (
                  <img src={activity.images[0]} alt={activity.org} />
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
                  <span className="badge">{activity.period}</span>
                </div>
              </div>

              {/* Details */}
              <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1, textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div
                    style={{
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
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{activity.org}</h3>
                </div>

                <p style={{ color: 'var(--accent-blue)', fontSize: '0.8rem', fontWeight: '600', marginBottom: '14px' }}>
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
          ))}
        </div>
      </div>
    </div>
  );
}
