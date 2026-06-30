import { motion } from "framer-motion";
import { SKILLS } from "../data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        className="container"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p variants={fadeUp} className="section-label mono">
          // my skills
        </motion.p>

        <motion.h2 variants={fadeUp} className="skills__heading">
          My extensive list of skills
        </motion.h2>

        <motion.div className="skills__grid" variants={stagger}>
          {SKILLS.map((group) => (
            <motion.div key={group.category} className="card skills__card" variants={fadeUp}>
              <h3 className="skills__category mono accent">{group.category}</h3>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
