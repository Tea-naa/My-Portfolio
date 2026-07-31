// Spotlight.jsx - Single signature interaction: a soft glow that follows the cursor
// across the whole dark site. No canvas, no dependencies - just a CSS var updated on mousemove.

import React, { useEffect, useRef } from 'react';

function Spotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    let raf = null;

    const handleMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        node.style.setProperty('--spot-x', `${e.clientX}px`);
        node.style.setProperty('--spot-y', `${e.clientY}px`);
        raf = null;
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}

export default Spotlight;
