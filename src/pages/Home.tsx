import { Link } from "react-router-dom";

interface HomeProps {
  isDarkMode: boolean;
}

export default function Home({ isDarkMode }: HomeProps) {
  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      isDarkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-white to-indigo-100'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
        } animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 ${
          isDarkMode ? 'bg-purple-500' : 'bg-purple-300'
        } animate-pulse`} style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-12 animate-fade-in">
          <div className="relative mb-8">
            <img
              src="/Photo.jpg"
              width={200}
              height={200}
              alt="Swayam Gupta"
              className="w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-white/20 backdrop-blur-sm transition-transform duration-300 hover:scale-105"
            />
            <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-green-500' : 'bg-green-400'
            } shadow-lg`}>
              <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
            </div>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
            isDarkMode 
              ? 'from-white via-blue-200 to-purple-300' 
              : 'from-gray-900 via-blue-800 to-purple-800'
          }`}>
            Swayam Gupta
          </h1>
          
          <div className={`text-xl md:text-2xl mb-8 font-medium ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
          <span className="inline-block animate-bounce">💻</span>
<span className="ml-2">Full-Stack Developer | .NET Core & Angular Specialist</span>
</div>

<p className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${
  isDarkMode ? 'text-gray-400' : 'text-gray-700'
}`}>
  <span className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Full-Stack Developer</span> 
skilled in <span className={`font-semibold ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>.NET Core</span>, 
<span className={`font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}> Angular</span>, 
<span className={`font-semibold ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}> React/MERN</span>, and 
<span className={`font-semibold ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}> Laravel (PHP)</span>.

  Backed by <span className={`font-semibold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>hackathons, real-world projects, and an IEEE publication</span>,
  I thrive on building <span className={`font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>scalable & user-focused solutions</span>.
</p>
        </div>  
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Link
            to="/projects"
            className={`group px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
            }`}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>View My Work</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          
          <Link
            to="/contact"
            className={`group px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ${
              isDarkMode 
                ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 bg-white/5' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-white/50'
            }`}
          >
            <span className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Get In Touch</span>
            </span>
          </Link>
        </div>

        <div className="flex justify-center space-x-8">
          {[
            { href: "https://github.com/Swayamgupta07", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", label: "GitHub" },
            { href: "https://linkedin.com/in/swayam-gupta07", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", label: "LinkedIn" },
            { href: "mailto:swayamgupta09@gmail.com", icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email", stroke: true }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.href.startsWith('mailto:') ? undefined : "_blank"}
              rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
              className={`group p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                isDarkMode 
                  ? 'bg-gray-800/50 text-gray-400 hover:text-blue-400 hover:bg-gray-700/50 backdrop-blur-sm' 
                  : 'bg-white/50 text-gray-600 hover:text-blue-600 hover:bg-white/80 backdrop-blur-sm'
              }`}
              title={social.label}
            >
              <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill={social.stroke ? "none" : "currentColor"} stroke={social.stroke ? "currentColor" : "none"} viewBox="0 0 24 24">
                <path strokeLinecap={social.stroke ? "round" : undefined} strokeLinejoin={social.stroke ? "round" : undefined} strokeWidth={social.stroke ? 2 : undefined} d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
