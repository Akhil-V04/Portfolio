import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* Small eye icon used inside action buttons */
function EyeIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function Experience({ onPreview }) {
  return (
    <section id="experience" className="section">
      <motion.div
        className="container"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p variants={fadeUp} className="section-label mono">
          // experience
        </motion.p>

        <motion.h2 variants={fadeUp} className="experience__heading">
          Where I've worked
        </motion.h2>

        <div className="timeline">
          {EXPERIENCE.map((job, i) => (
            <motion.div key={i} className="timeline__item" variants={fadeUp}>
              <div className="timeline__dot" />
              <div className="timeline__content card">
                <div className="timeline__card-inner">
                  {/* Left — text content */}
                  <div className="timeline__text">
                    <p className="timeline__date mono accent">{job.date}</p>
                    <h3 className="timeline__role">{job.role}</h3>
                    <p className="timeline__company mono">{job.company}</p>
                    <p className="timeline__desc">{job.description}</p>
                  </div>

                  {/* Right — company logo */}
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="timeline__logo"
                    />
                  )}
                </div>

                {/* Action buttons row */}
                <div className="timeline__actions">
                  <button
                    type="button"
                    className="timeline__action-btn"
                    onClick={() => onPreview?.(job.offerLetter)}
                  >
                    <EyeIcon />
                    View Offer Letter
                  </button>

                  {job.completionCert && (
                    <button
                      type="button"
                      className="timeline__action-btn"
                      onClick={() => onPreview?.(job.completionCert)}
                    >
                      <EyeIcon />
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
