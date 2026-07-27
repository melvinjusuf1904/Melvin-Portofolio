// Tiny inline-markup parser shared by the website and the PDF exporter.
//
// Supported syntax (used inside the text fields in src/data/portfolioData.js):
//   *word or phrase*      -> italic (inline, anywhere inside a line)
//   **word or phrase**    -> bold (inline, anywhere inside a line)
//   ***word or phrase***  -> bold + italic together
//   ## Some Subtitle       -> a bold subtitle on its own line, inside any
//                             section (Investment Thesis, Industry Overview,
//                             etc.) — use as many of these as you want,
//                             wherever you want, in any field.
//
// Example (in portfolioData.js):
//   industryOverview:
//     "## Struktur Industri & Rantai Nilai\n" +
//     "Industri gas bumi di Indonesia bergerak dalam struktur yang terikat ketat " +
//     "oleh regulasi (*heavily regulated*), dan **PGAS** adalah pemain dominan.\n\n" +
//     "## Kompetitor Utama\n" +
//     "PGAS dan lainnya mendominasi ..."
//
// Keep it to these simple rules — it's meant for light structure inside
// a report paragraph, not full Markdown.

const SUBTITLE_PREFIX = '## ';

// Splits a string into segments of { text, italic, bold }. Used for a
// single line / paragraph's inline formatting.
export function parseInlineMarkup(text) {
  if (!text) return [{ text: '', italic: false, bold: false }];
  // Order matters: match the longest marker (***bold italic***) before
  // **bold** before *italic*, so e.g. "***x***" isn't split into "*" + "*x*" + "*".
  const parts = String(text)
    .split(/(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g)
    .filter((p) => p !== '');
  return parts.map((part) => {
    if (part.startsWith('***') && part.endsWith('***') && part.length > 6) {
      return { text: part.slice(3, -3), italic: true, bold: true };
    }
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return { text: part.slice(2, -2), italic: false, bold: true };
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 1) {
      return { text: part.slice(1, -1), italic: true, bold: false };
    }
    return { text: part, italic: false, bold: false };
  });
}

// Splits a whole field's text into an ordered list of blocks:
//   { type: 'subtitle', text }
//   { type: 'paragraph', lines: [ [{ text, italic, bold }, ...], [...], ... ] }
//
// Rules (all work together):
//   "\n\n" (a blank line)   -> starts a new paragraph block.
//   "\n"   (a single line break, no blank line) -> a manual line break:
//           kept as its own entry in the paragraph's `lines` array, rendered
//           on its own line (not joined with a space into the line above).
//   "## "  at the start of a line -> its own subtitle block.
//   "*x*", "**x**", "***x***" inside any line -> italic / bold / bold+italic.
//
// A paragraph block's `lines` is an array of "lines", where each line is
// itself the list of { text, italic, bold } segments for that line (inline
// markup is parsed per line). Consumers render each line, then a line break,
// then the next line.
export function parseContentBlocks(text) {
  if (!text) return [];
  const rawLines = String(text).split('\n');
  const blocks = [];
  let buffer = [];

  const flush = () => {
    if (buffer.length > 0) {
      blocks.push({ type: 'paragraph', lines: buffer.map((line) => parseInlineMarkup(line)) });
      buffer = [];
    }
  };

  rawLines.forEach((rawLine) => {
    const line = rawLine.trim();
    if (line === '') {
      flush();
      return;
    }
    if (line.startsWith(SUBTITLE_PREFIX)) {
      flush();
      blocks.push({ type: 'subtitle', text: line.slice(SUBTITLE_PREFIX.length).trim() });
      return;
    }
    buffer.push(line);
  });
  flush();

  return blocks;
}
