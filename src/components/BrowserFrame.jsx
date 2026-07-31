// BrowserFrame.jsx - minimal browser-window chrome wrapping a screenshot.
// Used instead of a phone mockup since every project here is a web app, not
// a native app - this stays honest while still giving screenshots a
// polished, consistent "device frame" treatment.
//
// Each screenshot is framed at ITS OWN real aspect ratio (landscape desktop
// shots stay wide, portrait/mobile shots stay narrow) instead of being
// force-fit into one fixed box - that's what avoids cropping content AND
// avoids ugly empty letterbox bars around mismatched screenshots.
//
// Accepts either a single `src`/`ratio`, or an `images` array of
// { src, ratio } objects to show a small gallery (dot nav + prev/next
// arrows) when a project has more than one real screenshot worth showing.

import React, { useState } from 'react';
import '../styles/BrowserFrame.css';

const FALLBACK_RATIO = 4 / 3;

function BrowserFrame({ src, ratio, images, alt, label, onClick, className = '' }) {
  const imgs = images && images.length
    ? images
    : (src ? [{ src, ratio: ratio || FALLBACK_RATIO }] : []);

  const [index, setIndex] = useState(0);
  const hasMultiple = imgs.length > 1;
  const current = imgs[index] || {};

  const goPrev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i === 0 ? imgs.length - 1 : i - 1));
  };

  const goNext = (e) => {
    e.stopPropagation();
    setIndex((i) => (i === imgs.length - 1 ? 0 : i + 1));
  };

  const goTo = (e, i) => {
    e.stopPropagation();
    setIndex(i);
  };

  return (
    <div
      className={`browser-frame ${className}`}
      onClick={onClick ? () => onClick(current.src) : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="browser-frame-bar">
        <span className="browser-frame-dot dot-red" />
        <span className="browser-frame-dot dot-yellow" />
        <span className="browser-frame-dot dot-green" />
        {label && <span className="browser-frame-url">{label}</span>}
      </div>
      <div
        className="browser-frame-body"
        style={{ aspectRatio: current.ratio || FALLBACK_RATIO }}
      >
        <img src={current.src} alt={alt} />

        {hasMultiple && (
          <>
            <button
              type="button"
              className="browser-frame-nav browser-frame-nav-prev"
              onClick={goPrev}
              aria-label="Previous screenshot"
            >
              &#8249;
            </button>
            <button
              type="button"
              className="browser-frame-nav browser-frame-nav-next"
              onClick={goNext}
              aria-label="Next screenshot"
            >
              &#8250;
            </button>
            <div className="browser-frame-dots">
              {imgs.map((img, i) => (
                <span
                  key={img.src}
                  className={`browser-frame-dot-nav${i === index ? ' active' : ''}`}
                  onClick={(e) => goTo(e, i)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BrowserFrame;
