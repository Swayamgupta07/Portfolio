import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { typewriterWords } from "../data/portfolioData";

interface HomeProps {
  isDarkMode: boolean;
}

export default function Home({ isDarkMode }: HomeProps) {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const [dotHovered, setDotHovered] = useState(false);

  return (
    <div
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-100"
      }`}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10 blur-2xl ${
            isDarkMode ? "bg-purple-500" : "bg-purple-300"
          }`}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-12 animate-fade-in">
          {/* Profile Image + Connected Green Dot */}
          <div className="relative w-fit mx-auto mt-10 mb-6 pb-4 group">
            <img
              src="/Photo.jpg"
              width={200}
              height={200}
              alt="Swayam Gupta profile picture - Full-Stack Developer"
              className="w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-white/30 group-hover:border-green-500 transition-all duration-300"
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
            className={`relative text-5xl md:text-7xl font-bold mb-4
              bg-gradient-to-r bg-clip-text text-transparent
              transition-all duration-300 hover:scale-105
              animate-shimmer
              ${
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
            className={`text-xl md:text-2xl mb-6 font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
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
            className={`text-md md:text-lg italic mb-6 ${isDarkMode ? "text-blue-200" : "text-blue-700"}`}
          >
            Living the corporate fresher life 😄 (and coding away at Wipro!)
          </div>

          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Hlo! My name is{" "}
            <span className="font-semibold text-blue-500">Swayam Gupta</span>,
            and I am currently working as a fresher in{" "}
            <span className="font-semibold text-purple-500">Wipro</span>. I got
            a role as a{" "}
            <span className="font-semibold text-green-500">
              MEAN Stack Developer
            </span>
            , but I also specialize in{" "}
            <span className="font-semibold text-blue-400">.NET Core</span>,
            <span className="font-semibold text-red-500">Angular</span>,{" "}
            <span className="font-semibold text-cyan-500">React</span>, and
            modern web technologies (both MEAN & MERN stacks). Before Wipro, I
            spent 8 months working full-time and 3 months in training (11 months
            total!) at{" "}
            <span className="font-semibold text-indigo-500">
              Maven Technosoft
            </span>
            , playing with .NET Core, Angular, and .NET MAUI. And everything
            before that? Well, let's just say it's history now!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-14">
          <Link
            to="/projects"
            className={`group px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
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
          </Link>
          <Link
            to="/contact"
            className={`group px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ${
              isDarkMode
                ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 bg-white/5"
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
          </Link>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          {/* GitHub */}
          <a
            href="https://github.com/Swayamgupta07"
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
              isDarkMode
                ? "bg-gray-800/50 text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 backdrop-blur-sm"
                : "bg-white/60 text-gray-600 hover:text-blue-600 hover:bg-white/80 backdrop-blur-sm"
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
                ? "bg-gray-800/50 text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 backdrop-blur-sm"
                : "bg-white/60 text-gray-600 hover:text-blue-600 hover:bg-white/80 backdrop-blur-sm"
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
          {/* Email with copy-to-clipboard */}
          <button
            onClick={() => handleCopy("swayamgupta09@gmail.com")}
            className={`group p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg focus:outline-none ${
              isDarkMode
                ? "bg-gray-800/50 text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 backdrop-blur-sm"
                : "bg-white/60 text-gray-600 hover:text-blue-600 hover:bg-white/80 backdrop-blur-sm"
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
        <div
          className={`text-xs text-center ${isDarkMode ? "text-gray-600" : "text-gray-400"} mt-6 opacity-80`}
        >
          &copy; {new Date().getFullYear()} Swayam Gupta. Portfolio.
        </div>
      </div>
    </div>
  );
}
