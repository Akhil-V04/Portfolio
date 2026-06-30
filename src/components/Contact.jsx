import { motion } from "framer-motion";
import { CONTACT } from "../data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div
        className="container contact__container"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={fadeUp} className="section-label mono">
          // contact
        </motion.p>

        <motion.h2 variants={fadeUp} className="contact__heading">
          Let's work together
        </motion.h2>

        <motion.p variants={fadeUp} className="contact__body">
          I'm currently looking for SWE Intern / Associate SWE roles. Feel
          free to reach out — I'd love to hear from you.
        </motion.p>

        <motion.div variants={fadeUp} className="contact__links">
          <a href={`mailto:${CONTACT.email}`} className="contact__link card">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4361EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="mono">{CONTACT.email}</span>
          </a>

          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link card">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4361EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span className="mono">LinkedIn</span>
          </a>

          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="contact__link card">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4361EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span className="mono">GitHub</span>
          </a>

          <div className="contact__link card">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4361EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="mono">{CONTACT.location}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
