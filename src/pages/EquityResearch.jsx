import React from 'react';
import { ArrowRight, ImageIcon, Calendar } from 'lucide-react';
import { EQUITY_RESEARCH } from '../data/portfolioData';
import Reveal from '../components/Reveal';
import LazyImage from '../components/LazyImage';

// Re-exported so EquityResearchDetail.jsx can look up a report by id,
// same pattern used for Projects.jsx / ProjectDetail.jsx
export const equityResearchData = EQUITY_RESEARCH;

const RECOMMENDATION_COLORS = {
  BUY: { bg: 'rgba(94, 234, 212, 0.14)', color: 'var(--accent-teal)', border: 'rgba(94, 234, 212, 0.35)' },
  HOLD: { bg: 'rgba(250, 204, 21, 0.14)', color: '#FACC15', border: 'rgba(250, 204, 21, 0.35)' },
  SELL: { bg: 'rgba(248, 113, 113, 0.14)', color: '#F87171', border: 'rgba(248, 113, 113, 0.35)' },
};

function RecommendationBadge({ recommendation }) {
  const colors = RECOMMENDATION_COLORS[recommendation] || RECOMMENDATION_COLORS.HOLD;
  return (
    <span
      className="badge"
      style={{
        background: colors.bg,
        color: colors.color,
        border: `1px solid ${colors.border}`,
        fontWeight: '700',
        letterSpacing: '0.03em'
      }}
    >
      {recommendation}
    </span>
  );
}

export default function EquityResearch({ setCurrentPage, setSelectedEquityId }) {
  const handleViewReport = (id) => {
    setSelectedEquityId(id);
    setCurrentPage('equity-detail');
  };

  return (
    <div className="animate-fade-in" style={{ padding: '70px 24px', background: 'var(--bg-primary)', minHeight: '85vh' }}>
      <div className="container">
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 2.8rem)', textAlign: 'center', marginBottom: '14px' }}>
          Equity <span className="text-gradient">Research</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '560px', margin: '0 auto 48px', fontSize: '0.98rem', fontFamily: 'var(--font-sans)' }}>
          Fundamental research reports on publicly listed companies, covering investment thesis, financial analysis, valuation, and risk assessment.
        </p>

        <div className="grid-responsive">
          {equityResearchData.map((report, idx) => (
            <Reveal key={report.id} delayMs={(idx % 3) * 100}>
              <div
                className="glass-card"
                style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}
              >
                {/* Image top */}
                <div className="project-image-container" style={{ margin: '16px', marginBottom: '0', border: '1px dashed #2A3142' }}>
                  {report.image ? (
                    <LazyImage src={report.image} alt={report.company} />
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
                      <span style={{ fontSize: 12, color: '#3D4659', fontFamily: 'var(--font-heading)' }}>add report cover</span>
                    </div>
                  )}
                  <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2 }}>
                    <RecommendationBadge recommendation={report.recommendation} />
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1, textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '2px', whiteSpace: 'pre-line' }}>
                    {report.company}
                  </h3>
                  <p style={{ color: 'var(--accent-blue)', fontSize: '0.8rem', fontWeight: '600', marginBottom: '14px' }}>
                    {report.ticker}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '16px', fontFamily: 'var(--font-sans)' }}>
                    <Calendar size={14} />
                    <span>{report.researchDate}</span>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px',
                      marginBottom: '20px',
                      padding: '14px',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--glass-border)'
                    }}
                  >
                    <div>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Initial Price
                      </p>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: '600' }}>{report.initialPrice}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Target Price
                      </p>
                      <p style={{ fontSize: '0.95rem', color: 'var(--accent-teal)', fontWeight: '600' }}>{report.targetPrice}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleViewReport(report.id)}
                    className="btn-gradient"
                    style={{ width: '100%', justifyContent: 'center', padding: '10px 20px', fontSize: '0.87rem', marginTop: 'auto' }}
                  >
                    View Report <ArrowRight size={16} />
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
