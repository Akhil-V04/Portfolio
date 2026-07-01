import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "../data/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const slideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const SERVICES = [
  "Full-Stack Development",
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "Consulting",
  "Other",
];

export default function HireMePage({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build mailto link
    const subject = encodeURIComponent(
      `Hire Me — ${formData.service || "General Inquiry"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.open(
      `mailto:${CONTACT.email}?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="hire-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Back button */}
        <motion.button
          className="hire-page__back"
          onClick={onClose}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          whileHover={{ x: -4 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back
        </motion.button>

        <div className="hire-page__container">
          {/* Left — Photo & Info */}
          <motion.div
            className="hire-page__left"
            variants={slideIn}
            initial="hidden"
            animate="visible"
          >
            <div className="hire-page__photo-wrapper">
              <img
                src="/photo.jpg"
                alt="Akhil Vaddeboina"
                className="hire-page__photo"
              />
              <div className="hire-page__photo-glow" />
            </div>
            <motion.div
              className="hire-page__info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="hire-page__status">
                <span className="hire-page__status-dot" />
                Available for hire
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="hire-page__right"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <motion.h1
              className="hire-page__heading"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              CONNECT WITH ME!
            </motion.h1>

            <motion.p
              className="hire-page__subtext"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              Let's build something impactful together — whether it's your
              brand, your website, or your next big idea.
            </motion.p>

            {submitted ? (
              <motion.div
                className="hire-page__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4361ee"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3>Message Opened!</h3>
                <p>
                  Your email client should have opened. If not, reach me at{" "}
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </p>
                <button
                  className="btn-outline"
                  onClick={() => {
                    setFormData({ ...formData, service: "", message: "" });
                    setSubmitted(false);
                  }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                className="hire-page__form"
                onSubmit={handleSubmit}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.4}
              >
                <div className="hire-page__row">
                  <div className="hire-page__field">
                    <label className="hire-page__label">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Akhil Vaddeboina"
                      value={formData.name}
                      onChange={handleChange}
                      className="hire-page__input"
                      required
                    />
                  </div>
                  <div className="hire-page__field">
                    <label className="hire-page__label">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="hire-page__input"
                      required
                    />
                  </div>
                </div>

                <div className="hire-page__field">
                  <label className="hire-page__label">Service Needed ?</label>
                  <div className="hire-page__select-wrap">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="hire-page__select"
                      required
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="hire-page__select-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                <div className="hire-page__field">
                  <label className="hire-page__label">
                    How Can I Help You...
                  </label>
                  <textarea
                    name="message"
                    placeholder="Hello, I'd like to enquire about..."
                    value={formData.message}
                    onChange={handleChange}
                    className="hire-page__textarea"
                    rows={5}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="hire-page__submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SUBMIT
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
