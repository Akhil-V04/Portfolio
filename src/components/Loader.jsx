import { useState, useEffect } from "react";

export default function Loader({ onFinish }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Total animation = 2.3s fill + 0.5s pause, then fade out
    const timer = setTimeout(() => {
      setHidden(true);
      // Wait for fade-out transition to complete
      setTimeout(onFinish, 600);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`loader ${hidden ? "loader--hidden" : ""}`}>
      <div className="loader__text-wrap">
        {/* Stroke-only background text */}
        <div className="loader__text-stroke" aria-hidden="true">
          AKHIL
        </div>
        {/* White fill that animates upward */}
        <div className="loader__text-fill" aria-hidden="true">
          AKHIL
        </div>
        {/* Progress bar */}
        <div className="loader__bar">
          <div className="loader__bar-fill" />
        </div>
      </div>
    </div>
  );
}
