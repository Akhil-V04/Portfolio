import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const contentVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.92, transition: { duration: 0.2, ease: "easeIn" } },
};

function getFileType(file) {
  if (!file) return null;
  const ext = file.split(".").pop().toLowerCase();
  if (ext === "pdf") return "pdf";
  if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext)) return "image";
  return "pdf"; // default fallback
}

export default function FilePreview({ file, onClose }) {
  // Escape key handler
  useEffect(() => {
    if (!file) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [file, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (!file) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [file]);

  const fileType = getFileType(file);

  return (
    <AnimatePresence>
      {file && (
        <motion.div
          className="file-preview"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.25 }}
        >
          {/* Blurred backdrop — click to close */}
          <div className="file-preview__backdrop" onClick={onClose} />

          {/* Close button */}
          <button className="file-preview__close" onClick={onClose} aria-label="Close preview">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Content */}
          <motion.div
            className="file-preview__content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {fileType === "pdf" ? (
              <iframe
                src={file}
                className="file-preview__iframe"
                title="File Preview"
              />
            ) : (
              <img
                src={file}
                alt="Preview"
                className="file-preview__img"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
