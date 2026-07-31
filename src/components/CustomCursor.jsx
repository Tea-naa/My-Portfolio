// CustomCursor.jsx - a small comet trail of gold dots follows the cursor
// (lerp-chased, so each dot chases the one ahead of it), brightens on hover
// instead of ballooning into a circle, and throws a quick spark burst on
// click. Off on touch devices and when the user prefers reduced motion.

import React, { useEffect, useRef } from "react";
import "../styles/CustomCursor.css";

const TRAIL_COUNT = 6;
const INTERACTIVE_SELECTOR = "a, button, .work-row, .social-link, input, textarea, [role='button']";

function CustomCursor() {
  const containerRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarsePointer || prefersReducedMotion) return undefined;

    document.body.classList.add("custom-cursor-active");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const positions = Array.from({ length: TRAIL_COUNT }, () => ({ x: mouse.x, y: mouse.y }));
    let hovering = false;
    let raf = null;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseOver = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE_SELECTOR)) hovering = true;
    };

    const onMouseOut = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE_SELECTOR)) hovering = false;
    };

    const spawnSparkBurst = (x, y) => {
      const container = containerRef.current;
      if (!container) return;
      const sparkCount = 6;
      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement("span");
        spark.className = "cursor-spark";
        const angle = (Math.PI * 2 * i) / sparkCount + Math.random() * 0.5;
        const distance = 22 + Math.random() * 18;
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
        spark.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
        container.appendChild(spark);
        setTimeout(() => spark.remove(), 550);
      }
    };

    const onMouseDown = (e) => spawnSparkBurst(e.clientX, e.clientY);

    const render = () => {
      positions[0].x += (mouse.x - positions[0].x) * 0.35;
      positions[0].y += (mouse.y - positions[0].y) * 0.35;
      for (let i = 1; i < TRAIL_COUNT; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.35;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.35;
      }
      dotsRef.current.forEach((el, i) => {
        if (!el) return;
        el.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px) translate(-50%, -50%)`;
        el.classList.toggle("hovering", hovering);
      });
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("mousedown", onMouseDown);
    raf = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("mousedown", onMouseDown);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={containerRef} className="custom-cursor-container" aria-hidden="true">
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="cursor-trail-dot"
          style={{
            width: `${14 - i * 1.6}px`,
            height: `${14 - i * 1.6}px`,
            opacity: 1 - i * 0.14,
          }}
        />
      ))}
    </div>
  );
}

export default CustomCursor;
