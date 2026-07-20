import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ScrollToTopProps {
  isDarkMode: boolean;
}

export default function ScrollToTop({ isDarkMode }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className={`fixed bottom-[100px] right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md border z-50 cursor-pointer ${
            isDarkMode
              ? "bg-gray-800/80 border-gray-700 text-blue-400 hover:text-blue-300"
              : "bg-white/80 border-gray-200 text-indigo-600 hover:text-indigo-700"
          }`}
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
