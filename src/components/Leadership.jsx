import { motion } from "framer-motion";
import { LEADERSHIP, CERTIFICATIONS } from "../data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardHover = {
  rest: { scale: 1, borderColor: "rgba(22,32,51,1)" },
  hover: {
    scale: 1.03,
    borderColor: "rgba(67,97,238,0.35)",
    transition: { duration: 0.25 },
  },
};

export default function Leadership({ onPreview }) {
  return (
    <section id="leadership" className="section">
      <motion.div
        className="container"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* ── Giant heading ── */}
        <motion.h2 variants={fadeUp} className="btc__heading">
          Beyond the{" "}
          <span className="btc__heading-accent">Code</span>
        </motion.h2>

        {/* ── Roles ── */}
        <motion.h3 variants={fadeUp} className="btc__sub-heading mono">
          Roles
        </motion.h3>

        <motion.div
          className="btc__roles-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {LEADERSHIP.map((item) => (
            <motion.div
              key={item.org}
              className="btc__role-card card"
              variants={fadeUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div variants={cardHover} className="btc__role-card-inner">
                <div className="btc__role-text">
                  <p className="btc__role-title">{item.role}</p>
                  <p className="btc__role-org mono">{item.org}</p>
                  <p className="btc__role-period mono">{item.period}</p>
                </div>
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={`${item.org} logo`}
                    className="btc__role-logo"
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Certifications ── */}
        <motion.h3 variants={fadeUp} className="btc__sub-heading mono">
          Certifications
        </motion.h3>

        <motion.div
          className="btc__certs-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.title}
              className="btc__cert-card card"
              variants={fadeUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div variants={cardHover} className="btc__cert-card-inner">
                <div className="btc__cert-text">
                  <p className="btc__cert-title">{cert.title}</p>
                  <p className="btc__cert-issuer mono">{cert.issuer}</p>
                  <button
                    className="btc__cert-btn"
                    onClick={() => onPreview?.(cert.file)}
                  >
                    View Certificate →
                  </button>
                </div>
                {cert.logo && (
                  <img
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    className="btc__cert-logo"
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
