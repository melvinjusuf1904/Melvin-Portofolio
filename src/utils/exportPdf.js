// Generates a downloadable PDF report entirely in the browser (no backend).
//
// This builds the PDF natively with jsPDF's own drawing API — text, shapes,
// and the cover image are placed directly as real PDF content, the same way
// the on-site "glass card" layout looks (dark background, badges, price
// summary, section headings). This replaced an earlier version that used
// html2canvas to screenshot the DOM and paste it in as one big image: that
// approach made the PDF's text un-selectable/blurry, produced a much bigger
// file, and could hang for minutes if a single lazy-loaded image was slow.
//
// jsPDF is an npm dependency, loaded on demand via dynamic import() so it's
// code-split out of the main bundle and only downloaded (once, then cached)
// the first time someone visits an Equity Research report page.

const PAGE_WIDTH = 595.28;  // A4 portrait, in points
const PAGE_HEIGHT = 841.89;
const MARGIN = 48;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

// Colors lifted straight from src/index.css so the PDF matches the site.
const COLORS = {
  bg: '#0B0E14',
  card: '#11151F',
  border: '#1E2433',
  textPrimary: '#F1F4FA',
  textSecondary: '#9AA6BC',
  teal: '#5EEAD4',
  blue: '#7C9EFF',
};

const RECOMMENDATION_COLORS = {
  BUY: { bg: '#173B36', fg: '#5EEAD4', border: '#2E5C54' },
  HOLD: { bg: '#3A331A', fg: '#FACC15', border: '#5C5226' },
  SELL: { bg: '#3A1F1F', fg: '#F87171', border: '#5C2E2E' },
};

function hexToRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

// Fetches an image (same-origin, e.g. /images/xxx.jpg) and returns a data URL
// plus its natural width/height, so we can lay it out at the right aspect ratio.
function loadImageAsDataUrl(src) {
  return new Promise((resolve) => {
    if (!src) return resolve(null);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    const timer = setTimeout(() => resolve(null), 8000); // never hang forever
    img.onload = () => {
      clearTimeout(timer);
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        resolve({
          dataUrl: canvas.toDataURL('image/jpeg', 0.9),
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      } catch {
        resolve(null); // e.g. tainted canvas — skip the image, don't fail the export
      }
    };
    img.onerror = () => {
      clearTimeout(timer);
      resolve(null);
    };
    img.src = src;
  });
}

export async function exportReportToPdf(report, filename = 'report.pdf') {
  if (!report) throw new Error('exportReportToPdf: report not found');

  const [{ jsPDF }, imageInfo] = await Promise.all([
    import('jspdf'),
    loadImageAsDataUrl(report.image),
  ]);

  const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
  let y = MARGIN;

  const newPage = () => {
    pdf.addPage();
    paintPageBackground();
    y = MARGIN;
  };

  const ensureSpace = (needed) => {
    if (y + needed > PAGE_HEIGHT - MARGIN) newPage();
  };

  const paintPageBackground = () => {
    const [r, g, b] = hexToRgb(COLORS.bg);
    pdf.setFillColor(r, g, b);
    pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, 'F');
  };

  const drawBadge = (text, x, colorSet, fontSize = 9) => {
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(fontSize);
    const paddingX = 10;
    const textWidth = pdf.getTextWidth(text);
    const w = textWidth + paddingX * 2;
    const h = 20;
    const [bgR, bgG, bgB] = hexToRgb(colorSet.bg);
    const [brR, brG, brB] = hexToRgb(colorSet.border);
    const [fgR, fgG, fgB] = hexToRgb(colorSet.fg);
    pdf.setFillColor(bgR, bgG, bgB);
    pdf.setDrawColor(brR, brG, brB);
    pdf.roundedRect(x, y, w, h, 4, 4, 'FD');
    pdf.setTextColor(fgR, fgG, fgB);
    pdf.text(text, x + paddingX, y + h / 2 + fontSize * 0.35);
    return w;
  };

  const drawWrappedText = (text, options = {}) => {
    const {
      fontSize = 9.3,
      color = COLORS.textSecondary,
      lineHeight = 14,
      font = 'helvetica',
      style = 'normal',
    } = options;
    pdf.setFont(font, style);
    pdf.setFontSize(fontSize);
    const [r, g, b] = hexToRgb(color);
    pdf.setTextColor(r, g, b);

    // Preserve the paragraph breaks (\n\n) from the source data.
    const paragraphs = String(text).split('\n\n');
    paragraphs.forEach((para, i) => {
      const lines = pdf.splitTextToSize(para.replace(/\n/g, ' '), CONTENT_WIDTH);
      lines.forEach((line) => {
        ensureSpace(lineHeight);
        pdf.text(line, MARGIN, y);
        y += lineHeight;
      });
      if (i < paragraphs.length - 1) y += 8;
    });
  };

  const drawSection = (title, content) => {
    ensureSpace(28);
    y += 6;
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(12.5);
    const [r, g, b] = hexToRgb(COLORS.textPrimary);
    pdf.setTextColor(r, g, b);
    pdf.text(title, MARGIN, y);
    y += 18;
    drawWrappedText(content);
    y += 8;
  };

  const drawCard = (drawInner, minHeight) => {
    ensureSpace(minHeight);
    const startY = y;
    const [r, g, b] = hexToRgb(COLORS.card);
    const [br, bg, bb] = hexToRgb(COLORS.border);
    pdf.setFillColor(r, g, b);
    pdf.setDrawColor(br, bg, bb);
    pdf.roundedRect(MARGIN, startY, CONTENT_WIDTH, minHeight, 8, 8, 'FD');
    y = startY + 16;
    drawInner();
    y = startY + minHeight + 16;
  };

  // ---- page background ----
  paintPageBackground();

  // ---- header: badges, company name, date ----
  const rec = report.recommendation || 'HOLD';
  const recColors = RECOMMENDATION_COLORS[rec] || RECOMMENDATION_COLORS.HOLD;
  const badgeW = drawBadge(rec, MARGIN, recColors);
  drawBadge(report.ticker || '', MARGIN + badgeW + 8, { bg: '#161B26', fg: COLORS.textPrimary, border: COLORS.border });
  y += 34;

  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(21);
  const [tR, tG, tB] = hexToRgb(COLORS.textPrimary);
  pdf.setTextColor(tR, tG, tB);
  const titleLines = pdf.splitTextToSize(report.company || '', CONTENT_WIDTH);
  titleLines.forEach((line) => {
    pdf.text(line, MARGIN, y);
    y += 25;
  });
  y += 2;

  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9.5);
  const [sR, sG, sB] = hexToRgb(COLORS.textSecondary);
  pdf.setTextColor(sR, sG, sB);
  pdf.text(report.researchDate || '', MARGIN, y);
  y += 26;

  // ---- cover image card ----
  if (imageInfo) {
    const imgAreaW = CONTENT_WIDTH - 32;
    const imgAreaH = (imgAreaW * 9) / 16;
    drawCard(() => {
      pdf.addImage(imageInfo.dataUrl, 'JPEG', MARGIN + 16, y, imgAreaW, imgAreaH);
    }, imgAreaH + 32);
  }

  // ---- price summary card ----
  const colW = (CONTENT_WIDTH - 32) / 3;
  drawCard(() => {
    const labels = ['INITIAL PRICE', 'TARGET PRICE', 'RECOMMENDATION'];
    const startX = MARGIN + 16;
    labels.forEach((label, i) => {
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(7.5);
      pdf.setTextColor(sR, sG, sB);
      pdf.text(label, startX + colW * i, y);
    });
    y += 20;
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(13);
    pdf.setTextColor(tR, tG, tB);
    pdf.text(report.initialPrice || '', startX, y);
    const [teR, teG, teB] = hexToRgb(COLORS.teal);
    pdf.setTextColor(teR, teG, teB);
    pdf.text(report.targetPrice || '', startX + colW, y);
    const badgeY = y - 14;
    const savedY = y;
    y = badgeY;
    drawBadge(rec, startX + colW * 2, recColors, 8.5);
    y = savedY;
  }, 76);

  // ---- report body sections ----
  const fields = [
    ['Investment Thesis', 'investmentThesis'],
    ['Industry Overview', 'industryOverview'],
    ['Income Statement', 'incomeStatement'],
    ['Balance Sheet', 'balanceSheet'],
    ['Cash Flow', 'cashFlow'],
    ['Forecast', 'forecast'],
    ['Valuation', 'valuation'],
    ['Risk', 'risk'],
  ];
  fields.forEach(([title, key]) => {
    if (report[key]) drawSection(title, report[key]);
  });

  pdf.save(filename);
}
