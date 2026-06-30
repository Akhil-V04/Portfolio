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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#4361EE">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <div className="contact__link-content">
              <p className="contact__link-label">Email</p>
              <span className="mono">{CONTACT.email}</span>
            </div>
          </a>

          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#4361EE">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            <div className="contact__link-content">
              <p className="contact__link-label">Network</p>
              <span className="mono">LinkedIn</span>
            </div>
          </a>

          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="contact__link card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#4361EE">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.1-1.46-1.1-1.46-.93-.62.07-.6.07-.6 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.37 1.1 2.95.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
            <div className="contact__link-content">
              <p className="contact__link-label">Code</p>
              <span className="mono">GitHub</span>
            </div>
          </a>

          <div className="contact__link card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#4361EE">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
            </svg>
            <div className="contact__link-content">
              <p className="contact__link-label">Location</p>
              <span className="mono">{CONTACT.location}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
