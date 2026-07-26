import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

// Wrap any block of content with <Reveal> to have it fade+slide in once
// it scrolls into view. Pass delayMs to stagger multiple items (e.g. cards
// in a grid) so they animate in sequence instead of all at once.
export default function Reveal({ children, delayMs = 0, as: Tag = 'div', style, className = '', ...rest }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: isVisible ? `${delayMs}ms` : '0ms', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
