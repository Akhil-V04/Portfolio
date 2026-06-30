import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Experience() {
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
                <p className="timeline__date mono accent">{job.date}</p>
                <h3 className="timeline__role">{job.role}</h3>
                <p className="timeline__company mono">{job.company}</p>
                <p className="timeline__desc">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
