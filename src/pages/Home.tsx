import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { typewriterWords } from "../data/portfolioData";

interface HomeProps {
  isDarkMode: boolean;
}

export default function Home({ isDarkMode }: HomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background blobs animate slowly
      gsap.to(".blob-1", {
        x: "50px",
        y: "-30px",
        scale: 1.1,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".blob-2", {
        x: "-40px",
        y: "40px",
        scale: 0.9,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Hero entrance animations
      const tl = gsap.timeline();
      tl.fromTo(
        imageRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      );
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );
      tl.fromTo(
        ".typewriter-h2",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      );
      tl.fromTo(
        ".personal-statement",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
      tl.fromTo(
        bioRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );
      tl.fromTo(
        buttonsRef.current?.children,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.15, ease: "back.out(1.5)" },
        "-=0.3"
      );
      tl.fromTo(
        socialsRef.current?.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      );
      tl.fromTo(
        ".chevron-down",
        { opacity: 0, y: -10 },
        { opacity: 0.8, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden noise-overlay ${
        isDarkMode
          ? "bg-slate-950 text-white"
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-slate-900"
      }`}
    >
      {/* Dynamic Animated Blur Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className={`blob-1 absolute top-10 left-10 w-96 h-96 rounded-full filter blur-[100px] opacity-[0.12] ${
            isDarkMode ? "bg-purple-600" : "bg-purple-300"
          }`}
        />
        <div
          className={`blob-2 absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full filter blur-[120px] opacity-[0.12] ${
            isDarkMode ? "bg-blue-600" : "bg-blue-300"
          }`}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20 flex flex-col justify-center min-h-screen">
        <div className="mb-8">
          {/* Profile Image + Connected Green Dot */}
          <div className="relative w-fit mx-auto mt-6 mb-6 pb-2 group" ref={imageRef}>
            <img
              src="/Photo.jpg"
              width={160}
              height={160}
              alt="Swayam Gupta profile picture - Full-Stack Developer"
              className="w-36 h-36 md:w-40 md:h-40 rounded-full mx-auto shadow-2xl border-4 border-white/30 group-hover:border-green-500 transition-all duration-300 pointer-events-auto cursor-pointer"
              draggable={false}
            />
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[120%] px-3 py-1 rounded-lg bg-green-500 text-white text-xs font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200"
              style={{ pointerEvents: "none" }}
            >
              Active Now
            </span>
          </div>

          <h1
            ref={titleRef}
            className={`relative text-5xl md:text-7xl font-extrabold pb-3 mb-4 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 hover:scale-105 animate-shimmer select-none ${
              isDarkMode
                ? "from-white via-blue-200 to-purple-300"
                : "from-gray-900 via-blue-800 to-purple-800"
            }`}
            style={{
              backgroundSize: "200% 100%",
              backgroundPosition: "left center",
              animation: "shimmer 3s linear infinite",
            }}
          >
            Swayam Gupta
          </h1>
          <h2
            className={`typewriter-h2 text-xl md:text-2xl mb-6 font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <span className="mr-2 inline-block animate-bounce" aria-hidden>
              💻
            </span>
            <span>
              <Typewriter
                words={typewriterWords}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={65}
                deleteSpeed={40}
                delaySpeed={1400}
              />
            </span>
          </h2>

          <div
            className={`personal-statement text-md md:text-lg italic mb-6 ${
              isDarkMode ? "text-blue-200" : "text-blue-700"
            }`}
          >
            Living the corporate fresher life 😄 (and coding away at Wipro!)
          </div>

          <p
            ref={bioRef}
            className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Hlo! My name is <span className="font-semibold text-blue-500">Swayam Gupta</span>, and
            I am currently working as a fresher in <span className="font-semibold text-purple-500">Wipro</span>. 
            I got a role as a <span className="font-semibold text-green-500">MEAN Stack Developer</span>, but
            I also specialize in <span className="font-semibold text-blue-400">.NET Core</span>,{" "}
            <span className="font-semibold text-red-500">Angular</span>,{" "}
            <span className="font-semibold text-cyan-500">React</span>, and modern web technologies
            (both MEAN & MERN stacks). Before Wipro, I spent 8 months working full-time and 3 months
            in training (11 months total!) at <span className="font-semibold text-indigo-500">Maven Technosoft</span>,
            playing with .NET Core, Angular, and .NET MAUI. And everything before that? Well, let's
            just say it's history now!
          </p>
        </div>

        {/* Shiny Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center mb-14">
          <a
            href="#projects"
            className={`shiny-btn group px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center glow-blue ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            }`}
            aria-label="View Projects"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>View My Work</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className={`group px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-center ${
              isDarkMode
                ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-950 bg-white/5"
                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-white/30"
            }`}
            aria-label="Contact Me"
          >
            <span className="flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Get In Touch</span>
            </span>
          </a>
        </div>

        {/* Social Icons */}
        <div ref={socialsRef} className="flex justify-center space-x-8 mb-4">
          <a
            href="https://github.com/Swayamgupta07"
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
              isDarkMode
                ? "bg-slate-900/50 text-gray-300 hover:text-blue-400 hover:bg-slate-800/50 backdrop-blur-sm"
                : "bg-white/60 text-gray-600 hover:text-blue-600 hover:bg-white/80 backdrop-blur-sm border border-gray-200"
            }`}
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6 transition-transform group-hover:rotate-12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12,0C5.373,0,0,5.373,0,12c0,5.302,3.438,9.8,8.207,11.387c0.599,0.111,0.793-0.261,0.793-0.577l0-2.234c-3.338,0.726-4.033-1.416-4.033-1.416C4.42,18.61,3.633,18.241,3.633,18.241c-0.89-0.606,0.067-0.594,0.067-0.594c0.984,0.068,1.501,1.012,1.501,1.012c0.875,1.5,2.295,1.067,2.86,0.817c0.089-0.635,0.343-1.067,0.624-1.312c-2.665-0.305-5.466-1.334-5.466-5.93c0-1.311,0.469-2.381,1.236-3.221c-0.125-0.303-0.535-1.523,0.117-3.176c0,0,1.008-0.323,3.301,1.23c0.957-0.266,1.983-0.399,3.003-0.404c1.02,0.005,2.047,0.138,3.006,0.404c2.291-1.553,3.297-1.23,3.297-1.23c0.653,1.653,0.243,2.874,0.119,3.176c0.77,0.84,1.235,1.911,1.235,3.221c0,4.61-2.807,5.624-5.479,5.921c0.43,0.372,0.823,1.102,0.823,2.222l0,3.293c0,0.319,0.192,0.694,0.801,0.576C20.565,21.799,24,17.301,24,12C24,5.373,18.627,0,12,0z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/swayam-gupta07"
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
              isDarkMode
                ? "bg-slate-900/50 text-gray-300 hover:text-blue-400 hover:bg-slate-800/50 backdrop-blur-sm"
                : "bg-white/60 text-gray-600 hover:text-blue-600 hover:bg-white/80 backdrop-blur-sm border border-gray-200"
            }`}
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6 transition-transform group-hover:rotate-12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447,20.452h-3.554V14.883c0-1.328-0.027-3.037-1.852-3.037c-1.853,0-2.137,1.445-2.137,2.939v5.667H9.351V9h3.414v1.561h0.046c0.477-0.9,1.637-1.85,3.37-1.85c3.601,0,4.267,2.37,4.267,5.455V20.452z M5.337,7.433c-1.143,0-2.063-0.926-2.063-2.065c0-1.138,0.92-2.063,2.063-2.063c1.141,0,2.065,0.925,2.065,2.063C7.402,6.507,6.478,7.433,5.337,7.433z M7.119,20.452H3.555V9h3.564V20.452z" />
            </svg>
          </a>
          <button
            onClick={() => handleCopy("swayamgupta09@gmail.com")}
            className={`group p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg focus:outline-none cursor-pointer ${
              isDarkMode
                ? "bg-slate-900/50 text-gray-300 hover:text-blue-400 hover:bg-slate-800/50 backdrop-blur-sm"
                : "bg-white/60 text-gray-600 hover:text-blue-600 hover:bg-white/80 backdrop-blur-sm border border-gray-200"
            }`}
            aria-label="Copy Email"
            title="Copy Email"
          >
            <svg
              className="w-6 h-6 transition-transform group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>

        {/* Scroll indicator bouncing down */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-indicator cursor-pointer opacity-75 hidden md:block">
          <a href="#about" aria-label="Scroll Down">
            <svg
              className="w-6 h-6 text-indigo-500 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
