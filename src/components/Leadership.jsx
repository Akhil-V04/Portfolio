import { motion } from "framer-motion";
import { LEADERSHIP, CERTIFICATIONS } from "../data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <motion.div
        className="container"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p variants={fadeUp} className="section-label mono">
          // leadership & certs
        </motion.p>

        <motion.h2 variants={fadeUp} className="leadership__heading">
          Beyond the code
        </motion.h2>

        <div className="leadership__grid">
          <motion.div variants={fadeUp} className="leadership__col">
            <h3 className="leadership__sub mono accent">Roles</h3>
            {LEADERSHIP.map((item) => (
              <div key={item.org} className="card leadership__item">
                <p className="leadership__role">{item.role}</p>
                <p className="leadership__org mono">{item.org}</p>
                <p className="leadership__period mono accent">{item.period}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="leadership__col">
            <h3 className="leadership__sub mono accent">Certifications</h3>
            {CERTIFICATIONS.length > 0 ? (
              CERTIFICATIONS.map((cert) => (
                <a 
                  key={cert.title} 
                  href={cert.file} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="card leadership__item"
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <p className="leadership__role">{cert.title}</p>
                  <p className="leadership__org mono">{cert.issuer}</p>
                </a>
              ))
            ) : (
              <p className="muted mono" style={{ fontSize: "0.85rem" }}>
                // coming soon...
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
