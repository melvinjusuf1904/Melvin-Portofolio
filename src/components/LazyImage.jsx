import React, { useState } from 'react';

// Drop-in replacement for <img>: shows a subtle pulsing skeleton behind
// the image until it finishes loading, then fades the image in. Keeps
// the same layout (fills its parent) so it doesn't shift surrounding content.
export default function LazyImage({ src, alt, style, className = '', ...rest }) {
  const [loaded, setLoaded] = useState(false);
  const existingTransition = style?.transition;
  const mergedTransition = existingTransition
    ? `${existingTransition}, opacity 0.4s ease`
    : 'opacity 0.4s ease';

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!loaded && (
        <div
          className="image-skeleton"
          style={{ position: 'absolute', inset: 0 }}
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        className={className}
        style={{
          ...style,
          opacity: loaded ? 1 : 0,
          transition: mergedTransition
        }}
        {...rest}
      />
    </div>
  );
}
