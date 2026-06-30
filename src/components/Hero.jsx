import { motion } from "framer-motion";
import { HERO } from "../data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Photo — absolutely positioned, large, centered */}
      <div className="hero__photo-wrap">
        <img
          src={HERO.photo}
          alt="Akhil Vaddeboina"
          className="hero__photo"
        />
      </div>

      {/* Overlay text — sits on top of the photo */}
      <div className="container hero__content">
        <div className="hero__overlay">
          {/* ── Left: Text ── */}
          <div className="hero__left">
            <motion.p
              className="hero__greeting"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              {HERO.greeting}
            </motion.p>

            <motion.h1
              className="hero__firstname"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              {HERO.firstName}
            </motion.h1>

            <motion.p
              className="hero__lastname"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              {HERO.lastName}
            </motion.p>

            <motion.p
              className="hero__body"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
            >
              {HERO.body}
            </motion.p>

            <motion.div
              className="hero__buttons"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
            >
              <a
                href={HERO.ctaPrimary.href}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {HERO.ctaPrimary.label}
              </a>
              <a href={HERO.ctaSecondary.href} className="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                {HERO.ctaSecondary.label}
              </a>
            </motion.div>
          </div>

          {/* ── Right: Role titles ── */}
          <div className="hero__right">
            <motion.p
              className="hero__role-small"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
            >
              {HERO.roles[0]}
            </motion.p>
            <motion.p
              className="hero__role-big"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
            >
              {HERO.roles[1].split(" ").map((word, i) => (
                <span key={i} style={{ display: "block" }}>{word}</span>
              ))}
            </motion.p>
          </div>
        </div>
      </div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="#8a8f98" strokeWidth="1.5" />
            <circle cx="10" cy="8" r="2" fill="#8a8f98" />
          </svg>
        </motion.div>
    </section>
  );
}
