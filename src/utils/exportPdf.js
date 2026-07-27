// Exports a DOM element to a downloadable multi-page PDF, entirely in the
// browser (no backend). html2canvas + jsPDF are npm dependencies, code-split
// via dynamic import() so they only get downloaded (once, then cached by the
// browser) the first time someone actually visits an Equity Research report
// page — not on every page load, and not from a third-party CDN.

const IMAGE_TIMEOUT_MS = 8000; // never wait more than this for a single image

// Waits for every <img> inside the element to finish loading before we
// screenshot it — otherwise html2canvas can stall on (or skip) images
// that are still lazy-loading, which is one of the main causes of a
// slow/unpredictable export. Each image gets:
//   1) an eager reload nudge, in case the browser deferred it via
//      loading="lazy" and it never entered the viewport long enough to fire
//   2) a hard timeout, so one broken/slow image can't hang the export forever
function waitForImages(element) {
  const images = Array.from(element.querySelectorAll('img'));
  return Promise.all(
    images.map((img) => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();

      // Force the browser to prioritize this image right now instead of
      // waiting on native lazy-load heuristics.
      if (img.loading === 'lazy') img.loading = 'eager';

      return new Promise((resolve) => {
        const timer = setTimeout(resolve, IMAGE_TIMEOUT_MS);
        const done = () => {
          clearTimeout(timer);
          resolve();
        };
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
        // Re-trigger loading if the src was set but the fetch stalled.
        if (!img.src && img.dataset.src) img.src = img.dataset.src;
      });
    })
  );
}

export async function exportElementToPdf(element, filename = 'report.pdf') {
  if (!element) throw new Error('exportElementToPdf: element not found');

  // Loaded on demand (not on initial page load) and served from our own
  // bundle, so this doesn't depend on a third-party CDN being fast/reachable.
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf')
  ]);

  await waitForImages(element);

  // scale 1.5 is a good balance: still sharp enough to read on screen/print,
  // but noticeably faster than scale 2 (which renders ~1.8x more pixels).
  const canvas = await html2canvas(element, {
    scale: 1.5,
    useCORS: true,
    backgroundColor: '#0B0E14',
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
    logging: false
  });

  const imgData = canvas.toDataURL('image/jpeg', 0.92);

  // A4 page, in points (pt), portrait.
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // Scale the captured image to fit the PDF's page width, then slice it
  // into as many pages as needed so long reports don't get cut off.
  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save(filename);
}
