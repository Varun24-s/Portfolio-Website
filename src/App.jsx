import React, { useEffect, useState, useRef } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Overlay from "./components/Overlay.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";

function App() {
  const { scrollYProgress } = useScroll();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isAnimationComplete && animationRef.current) {
        const progress = window.scrollY / (window.innerHeight * 2);
        if (progress >= 0.75) {
          setIsAnimationComplete(true);
          setShowOverlay(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAnimationComplete]);

  // Manage body overflow
  useEffect(() => {
    if (isAnimationComplete) {
      // Reset scroll position and briefly prevent scrolling during transition
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      
      // Re-enable scrolling after transition
      const timer = setTimeout(() => {
        document.body.style.overflow = 'visible';
      }, 1000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'visible';
      };
    }
  }, [isAnimationComplete]);

  if (!isAnimationComplete) {
    return (
      <div ref={animationRef}>
        <ScrollProgressBar />
        <div className="h-[300vh]" />
        <div className="fixed top-0 left-0 w-full">
          <Navbar scrollProgress={scrollYProgress} />
          <Home scrollProgress={scrollYProgress} isNormalView={false} />
          {showOverlay && <Overlay />}
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-0"
      >
        <ScrollProgressBar />
        <Navbar scrollProgress={scrollYProgress} />
        <main className="overflow-x-hidden">
          <motion.section 
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Home scrollProgress={scrollYProgress} isNormalView={true} />
          </motion.section>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Skills />
          </motion.div>
          
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
