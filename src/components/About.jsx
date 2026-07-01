import { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ABOUT } from "../data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedCounter({ value }) {
  const numValue = parseInt(value, 10);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView && !isNaN(numValue)) {
      const controls = animate(0, numValue, {
        duration: 1.2,
        ease: "easeOut",
        onUpdate(v) {
          setDisplayValue(Math.floor(v));
        }
      });
      return () => controls.stop();
    } else if (isNaN(numValue)) {
      setDisplayValue(value);
    }
  }, [isInView, numValue, value]);

  return <span ref={ref}>{displayValue}</span>;
}

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
                <span className="about__stat-value accent">
                  <AnimatedCounter value={stat.value} />
                </span>
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
