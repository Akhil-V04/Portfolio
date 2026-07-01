import { useState, useCallback } from "react";
import "./index.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HireMePage from "./components/HireMePage";
import CursorFollower from "./components/CursorFollower";
import FilePreview from "./components/FilePreview";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showHirePage, setShowHirePage] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);

  const handleLoaderDone = useCallback(() => {
    setLoading(false);
  }, []);

  const openHirePage = useCallback(() => {
    setShowHirePage(true);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const closeHirePage = useCallback(() => {
    setShowHirePage(false);
  }, []);

  const openPreview = useCallback((file) => setPreviewFile(file), []);
  const closePreview = useCallback(() => setPreviewFile(null), []);

  return (
    <>
      {loading && <Loader onFinish={handleLoaderDone} />}
      <CursorFollower />
      <FilePreview file={previewFile} onClose={closePreview} />

      <AnimatePresence mode="wait">
        {showHirePage ? (
          <motion.div
            key="hire"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <HireMePage onClose={closeHirePage} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Navbar onHireClick={openHirePage} />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience onPreview={openPreview} />
              <Leadership onPreview={openPreview} />
              <ResumeSection onPreview={openPreview} />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      <FilePreview file={previewFile} onClose={closePreview} />
    </>
  );
}

