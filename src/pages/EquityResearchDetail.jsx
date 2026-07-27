import React, { useRef, useState } from 'react';
import { ArrowLeft, ImageIcon, Calendar, Download, Loader2 } from 'lucide-react';
import { equityResearchData } from './EquityResearch';
import LazyImage from '../components/LazyImage';
import { exportElementToPdf } from '../utils/exportPdf';

const RECOMMENDATION_COLORS = {
  BUY: { bg: 'rgba(94, 234, 212, 0.14)', color: 'var(--accent-teal)', border: 'rgba(94, 234, 212, 0.35)' },
  HOLD: { bg: 'rgba(250, 204, 21, 0.14)', color: '#FACC15', border: 'rgba(250, 204, 21, 0.35)' },
  SELL: { bg: 'rgba(248, 113, 113, 0.14)', color: '#F87171', border: 'rgba(248, 113, 113, 0.35)' },
};

function RecommendationBadge({ recommendation, large }) {
  const colors = RECOMMENDATION_COLORS[recommendation] || RECOMMENDATION_COLORS.HOLD;
  return (
    <span
      className="badge"
      style={{
        background: colors.bg,
        color: colors.color,
        border: `1px solid ${colors.border}`,
        fontWeight: '700',
        letterSpacing: '0.03em',
        fontSize: large ? '0.9rem' : undefined,
        padding: large ? '6px 16px' : undefined
      }}
    >
      {recommendation}
    </span>
  );
}

// One report section: a heading + a paragraph that supports line breaks.
function ReportSection({ title, content }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '10px' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: '1.8', fontFamily: 'var(--font-sans)', whiteSpace: 'pre-line' }}>
        {content}
      </p>
    </div>
  );
}

export default function EquityResearchDetail({ setCurrentPage, selectedEquityId }) {
  const report = equityResearchData.find((r) => r.id === selectedEquityId);
  const reportRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);

  if (!report) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center', minHeight: '80vh' }}>
        <h2 style={{ color: 'var(--text-primary)' }}>Report not found</h2>
        <button onClick={() => setCurrentPage('equity-research')} className="btn-gradient" style={{ marginTop: '20px' }}>
          Back to Equity Research
        </button>
      </div>
    );
  }

  const handleDownloadPdf = async () => {
    setIsExporting(true);
    try {
      const filename = `${report.company.replace(/[^a-z0-9]+/gi, '-')}-Equity-Research.pdf`;
      await exportElementToPdf(reportRef.current, filename);
    } catch (err) {
      console.error(err);
      alert('Sorry, the PDF could not be generated. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="animate-fade-in" style={{ padding: '60px 24px', background: 'var(--bg-primary)', minHeight: '85vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('equity-research')}
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
          <ArrowLeft size={18} /> Back to Equity Research
        </button>

        {/* Download PDF button (outside the exported area itself) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', marginBottom: '20px' }}>
          <button
            onClick={handleDownloadPdf}
            disabled={isExporting}
            className="btn-gradient"
            style={{ opacity: isExporting ? 0.7 : 1, cursor: isExporting ? 'not-allowed' : 'pointer' }}
          >
            {isExporting ? (
              <>
                <Loader2 size={17} className="spin-icon" /> Generating PDF...
              </>
            ) : (
              <>
                <Download size={17} /> Download Report as PDF
              </>
            )}
          </button>
          {isExporting && (
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>
              This can take 10–20 seconds for longer reports — please don't close the tab.
            </p>
          )}
        </div>

        {/* Everything inside this div is what gets captured into the PDF */}
        <div ref={reportRef}>
          {/* Header */}
          <div style={{ textAlign: 'left', marginBottom: '32px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <RecommendationBadge recommendation={report.recommendation} large />
              <span className="badge" style={{ background: 'rgba(255,255,255,0.05)' }}>{report.ticker}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '10px', lineHeight: '1.2', whiteSpace: 'pre-line' }}>
              {report.company}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'var(--font-sans)' }}>
              <Calendar size={15} />
              <span>{report.researchDate}</span>
            </div>
          </div>

          {/* Image */}
          <div className="glass-card" style={{ padding: '16px', marginBottom: '28px', overflow: 'hidden' }}>
            {report.image ? (
              <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/9' }}>
                <LazyImage src={report.image} alt={report.company} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
                  add report cover image
                </span>
              </div>
            )}
          </div>

          {/* Price summary */}
          <div
            className="glass-card"
            style={{
              padding: '24px',
              marginBottom: '28px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '16px',
              textAlign: 'left'
            }}
          >
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Initial Price
              </p>
              <p style={{ fontSize: '1.3rem', color: 'var(--text-primary)', fontWeight: '700' }}>{report.initialPrice}</p>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Target Price
              </p>
              <p style={{ fontSize: '1.3rem', color: 'var(--accent-teal)', fontWeight: '700' }}>{report.targetPrice}</p>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Recommendation
              </p>
              <RecommendationBadge recommendation={report.recommendation} />
            </div>
          </div>

          {/* Report body */}
          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <ReportSection title="Investment Thesis" content={report.investmentThesis} />
            <ReportSection title="Industry Overview" content={report.industryOverview} />
            <ReportSection title="Income Statement" content={report.incomeStatement} />
            <ReportSection title="Balance Sheet" content={report.balanceSheet} />
            <ReportSection title="Cash Flow" content={report.cashFlow} />
            <ReportSection title="Forecast" content={report.forecast} />
            <ReportSection title="Valuation" content={report.valuation} />
            <div style={{ marginBottom: 0 }}>
              <ReportSection title="Risk" content={report.risk} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
