import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import ContactPage from "./pages/Contact";
import ChatBot from "./components/ChatBot";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import ParticlesBackground from "./components/ParticlesBackground";
import MouseSpotlight from "./components/MouseSpotlight";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    } else {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const gsapTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(gsapTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(gsapTicker);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div
        className={`min-h-screen relative transition-colors duration-300 ${
          isDarkMode ? "bg-slate-950 text-white" : "bg-gray-50 text-slate-900"
        }`}
      >
        <ScrollProgress />
        <CustomCursor isDarkMode={isDarkMode} />
        <ParticlesBackground isDarkMode={isDarkMode} />
        <MouseSpotlight isDarkMode={isDarkMode} />

        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <main className="relative z-10">
          <Home isDarkMode={isDarkMode} />
          <About isDarkMode={isDarkMode} />
          <Projects isDarkMode={isDarkMode} />
          <Experience isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
          <ContactPage isDarkMode={isDarkMode} />
        </main>

        <ChatBot isDarkMode={isDarkMode} />
        <ScrollToTop isDarkMode={isDarkMode} />
        <Toaster theme={isDarkMode ? "dark" : "light"} />
      </div>
    </>
  );
}
