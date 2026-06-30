import { motion } from "framer-motion";
import { PROJECTS } from "../data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        className="container"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p variants={fadeUp} className="section-label mono">
          // projects
        </motion.p>

        <motion.h2 variants={fadeUp} className="projects__heading">
          Things I've built
        </motion.h2>

        <motion.div className="projects__grid" variants={stagger}>
          {PROJECTS.map((project) => (
            <motion.div key={project.title} className="card projects__card" variants={fadeUp}>
              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__tagline mono accent">{project.tagline}</p>

              <div className="projects__stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              <p className="projects__desc">{project.description}</p>

              <div className="projects__links">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link mono accent"
                  >
                    ↗ Live demo
                  </a>
                ) : (
                  <span className="projects__link mono" style={{ opacity: 0.4 }}>
                    ⊘ Runs locally
                  </span>
                )}
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link mono accent"
                >
                  ↗ Source
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
