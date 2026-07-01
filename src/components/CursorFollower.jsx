import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MAX_PARTICLES = 35;
const PARTICLE_LIFETIME = 600; // ms
const THROTTLE_MS = 30;

let particleId = 0;

export default function CursorFollower() {
  const [particles, setParticles] = useState([]);
  const [enabled, setEnabled] = useState(false);
  const lastSpawn = useRef(0);
  const rafId = useRef(null);
  const pendingPos = useRef(null);

  // Flush pending particle on next animation frame
  const flushParticle = useCallback(() => {
    rafId.current = null;
    if (!pendingPos.current) return;

    const { x, y } = pendingPos.current;
    pendingPos.current = null;

    const id = ++particleId;
    setParticles((prev) => {
      const next = [...prev, { id, x, y }];
      // Trim oldest if over limit
      return next.length > MAX_PARTICLES ? next.slice(next.length - MAX_PARTICLES) : next;
    });

    // Auto-remove after lifetime
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, PARTICLE_LIFETIME);
  }, []);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setEnabled(true);

    const handleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastSpawn.current < THROTTLE_MS) return;
      lastSpawn.current = now;

      pendingPos.current = { x: e.clientX, y: e.clientY };
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(flushParticle);
      }
    };

    const handleMouseLeave = () => setParticles([]);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [flushParticle]);

  if (!enabled) return null;

  return (
    <div className="cursor-trail" aria-hidden="true">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="cursor-trail__particle"
            style={{ left: p.x, top: p.y }}
            initial={{ opacity: 0.85, scale: 1 }}
            animate={{ opacity: 0, scale: 0.1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: PARTICLE_LIFETIME / 1000, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
