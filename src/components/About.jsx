import { motion } from "framer-motion";
import { ABOUT } from "../data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        className="container"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p variants={fadeUp} className="section-label mono">
          {ABOUT.sectionLabel}
        </motion.p>

        <motion.h2 variants={fadeUp} className="about__heading">
          {ABOUT.heading}
        </motion.h2>

        <div className="about__grid">
          <motion.p variants={fadeUp} className="about__bio">
            {ABOUT.bio}
          </motion.p>

          <motion.div variants={fadeUp} className="about__stats">
            {ABOUT.stats.map((stat) => (
              <div key={stat.label} className="about__stat">
                <span className="about__stat-value accent">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp}>
          <a href="#contact" className="about__link mono accent">
            More about me →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
