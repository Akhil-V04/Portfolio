import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ResumeSection({ onPreview }) {
  return (
    <section id="resume" className="section">
      <motion.div
        className="container resume__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <p className="section-label">// resume</p>

        <h2 className="resume__heading">My resume</h2>

        <div className="card resume__card">
          <div
            className="resume__preview"
            onClick={() => onPreview && onPreview("/assets/resume/resume.pdf")}
            style={{ cursor: "pointer" }}
          >
            <img
              src="/assets/resume/akhil-resume-preview.png"
              alt="Akhil's resume preview"
              className="resume__img"
            />
          </div>
          <div className="resume__buttons">
            <a
              href="/assets/resume/resume.pdf"
              download
              className="btn-primary resume__btn"
            >
              Download resume
            </a>
            <button
              className="btn-outline resume__btn"
              onClick={() => onPreview && onPreview("/assets/resume/resume.pdf")}
            >
              Preview resume
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
