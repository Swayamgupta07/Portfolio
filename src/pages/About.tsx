import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { highlights, timeline } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Framer Motion 3D tilt controls
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade and slide left col from left
      gsap.fromTo(
        leftColRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 80%",
          },
        }
      );

      // Fade and slide right col from right
      gsap.fromTo(
        rightColRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 80%",
          },
        }
      );

      // Timeline items reveal & line draw
      const timelineLines = gsap.utils.toArray(".timeline-line");
      const timelineCards = gsap.utils.toArray(".timeline-card");

      timelineCards.forEach((card: any, idx: number) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: idx % 2 === 0 ? 50 : -50,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });

      // Draw timeline connector line
      gsap.fromTo(
        ".timeline-connector",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 70%",
            end: "bottom 85%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper
      id="about"
      isDarkMode={isDarkMode}
      className={isDarkMode ? "bg-slate-900 border-b border-gray-800" : "bg-white border-b border-gray-100"}
    >
      <div ref={containerRef}>
        <SectionHeader
          title="About Me"
          subtitle="Passionate full-stack developer with a love for creating innovative solutions that make a real difference in people's lives."
          isDarkMode={isDarkMode}
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image & Highlights */}
          <div ref={leftColRef} className="space-y-8">
            <motion.div
              style={{ rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer tilt-card select-none"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl tilt-card-inner border border-white/10 img-zoom-container">
                <img
                  src="/Photo.jpg"
                  alt="Swayam Gupta"
                  className="w-full h-auto object-cover max-h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
              </div>
              <div
    
              >
                <span className="text-3xl animate-pulse">💻</span>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border ${
                    isDarkMode
                      ? "bg-slate-800/80 border-gray-700/60 shadow-lg/50 text-white"
                      : "bg-gray-50 border-gray-200 text-slate-800"
                  }`}
                >
                  <div className="text-3xl mb-2 select-none filter drop-shadow-sm">{highlight.icon}</div>
                  <h3
                    className={`text-2xl font-extrabold mb-1 ${
                      isDarkMode ? "text-blue-400" : "text-indigo-600"
                    }`}
                  >
                    {highlight.number}
                  </h3>
                  <p className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text & Journey */}
          <div ref={rightColRef} className="space-y-8">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-bold mb-4 tracking-tight ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Hello, I'm Swayam! 👋
              </h3>
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I'm a Computer Science graduate from SRM University (2025) currently working at Wipro as a MEAN Stack Developer. 
                I specialize in full-stack web development using Angular, React, .NET Core, and .NET MAUI. I build scalable, user-friendly, and modern tech solutions.
              </p>

              <p
                className={`leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                My journey in technology began with curiosity about how things work behind the scenes. This led me to 
                explore various programming languages and frameworks, eventually specializing in modern web development. 
                I'm passionate about creating solutions that make a real difference in people's lives.
              </p>

              <div
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-slate-800/50 border-gray-700/60"
                    : "bg-blue-50/50 border-blue-100/60"
                }`}
              >
                <h4
                  className={`font-bold mb-2 tracking-tight ${
                    isDarkMode ? "text-blue-400" : "text-indigo-600"
                  }`}
                >
                  Currently Working On:
                </h4>
                <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Modern web applications at Wipro, building responsive user interfaces and scalable APIs using MongoDB, Express, Angular, and Node.js.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className={`shiny-btn inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl glow-purple ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                }`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Timeline (My Journey) */}
        <div ref={timelineRef} className="timeline-container mt-28">
          <h3
            className={`text-3xl font-extrabold text-center mb-16 tracking-tight ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            My Journey
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Center vertical connector line */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full origin-top timeline-connector ${
                isDarkMode ? "bg-slate-800" : "bg-indigo-100"
              }`}
            />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline Card Column */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-10 text-right" : "pl-10 text-left"}`}>
                  <div
                    className={`timeline-card p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      isDarkMode
                        ? "bg-slate-800/80 border-gray-700/60 text-white shadow-lg"
                        : "bg-white border-gray-200 text-slate-800 shadow-sm"
                    }`}
                  >
                    <div
                      className={`text-xs font-bold mb-2 uppercase tracking-widest ${
                        item.current
                          ? "text-green-500"
                          : isDarkMode
                          ? "text-blue-400"
                          : "text-indigo-600"
                      }`}
                    >
                      {item.year} {item.current && "• Current"}
                    </div>
                    <h4
                      className={`text-lg font-bold tracking-tight mb-1 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`font-semibold text-sm mb-3 ${
                        isDarkMode ? "text-blue-400" : "text-indigo-600"
                      }`}
                    >
                      {item.company}
                    </p>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 shadow-md transition-transform duration-300 hover:scale-125 z-10 ${
                    item.current
                      ? "bg-green-500 border-green-200"
                      : isDarkMode
                      ? "bg-blue-500 border-slate-900"
                      : "bg-indigo-600 border-white"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
