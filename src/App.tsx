import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Patents from "./pages/Patents";
import Contact from "./pages/Contact";
import ChatBot from "./components/ChatBot";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <Header 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
            <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
            <Route path="/experience" element={<Experience isDarkMode={isDarkMode} />} />
            <Route path="/skills" element={<Skills isDarkMode={isDarkMode} />} />
            <Route path="/patents" element={<Patents isDarkMode={isDarkMode} />} />
            <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
          </Routes>
        </main>

        <ChatBot isDarkMode={isDarkMode} />
        <Toaster theme={isDarkMode ? 'dark' : 'light'} />
        
        {/* Dark Mode Card Effect */}
        {isDarkMode && (
          <div className="fixed top-4 left-4 z-40">
            <div className="card">
              <div className="card2"></div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}
