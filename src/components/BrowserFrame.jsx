// BrowserFrame.jsx - minimal browser-window chrome wrapping a screenshot.
// Used instead of a phone mockup since every project here is a web app, not
// a native app - this stays honest while still giving screenshots a
// polished, consistent "device frame" treatment.

import React from 'react';
import '../styles/BrowserFrame.css';

function BrowserFrame({ src, alt, label, onClick, className = '' }) {
  return (
    <div
      className={`browser-frame ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="browser-frame-bar">
        <span className="browser-frame-dot dot-red" />
        <span className="browser-frame-dot dot-yellow" />
        <span className="browser-frame-dot dot-green" />
        {label && <span className="browser-frame-url">{label}</span>}
      </div>
      <div className="browser-frame-body">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default BrowserFrame;
