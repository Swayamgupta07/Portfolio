import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const highlights = [
    { number: "15+", label: "Projects Completed", icon: "🚀" },
    { number: "3", label: "Internships", icon: "💼" },
    { number: "1", label: "Patent Pending", icon: "📋" },
    { number: "4.2", label: "Years Experience", icon: "⭐" }
  ];

  const timeline = [
    {
      year: "2025",
      title: "Full-Stack Developer",
      company: "Maven Technosoft",
      description: "Leading enterprise application development",
      current: true
    },
    {
      year: "2023",
      title: "Software Development Intern",
      company: "ISRO",
      description: "Satellite data processing systems",
      current: false
    },
    {
      year: "2022",
      title: "Web Development Intern",
      company: "Stratbeans",
      description: "Frontend development and UX optimization",
      current: false
    },
    {
      year: "2021",
      title: "Computer Science Student",
      company: "SRM University",
      description: "Pursuing Bachelor's in Computer Science",
      current: false
    }
  ];

  return (
    <SectionWrapper isDarkMode={isDarkMode} className={isDarkMode ? 'bg-gray-800' : 'bg-white'}>
      <SectionHeader 
        title="About Me"
        subtitle="Passionate full-stack developer with a love for creating innovative solutions that make a real difference in people's lives."
        isDarkMode={isDarkMode}
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="public\Photo.jpg"
              alt="Swayam Gupta"
              className="w-full h-auto transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl ${
            isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
          }`}>
            <span className="text-white text-2xl">💻</span>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Hello, I'm Swayam! 👋</h3>
            <p className={`text-lg leading-relaxed mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm a final-year Computer Science student at SRM University specializing in full-stack web development 
              with .NET Core and Angular. With hands-on experience from internships at ISRO and Stratbeans, plus a 
              patent-pending doctor appointment system, I build scalable, user-friendly tech solutions.
            </p>

            <p className={`leading-relaxed mb-8 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              My journey in technology began with curiosity about how things work behind the scenes. This led me to 
              explore various programming languages and frameworks, eventually specializing in modern web development. 
              I'm passionate about creating solutions that make a real difference in people's lives.
            </p>

            <div className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-700/50 border border-gray-600' : 'bg-blue-50 border border-blue-100'
            }`}>
              <h4 className={`font-semibold mb-2 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>Currently Working On:</h4>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Enterprise web applications at Maven Technosoft, serving 10,000+ users with cutting-edge .NET Core and Angular solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200 shadow-sm'
              }`}>
                <div className="text-2xl mb-2">{highlight.icon}</div>
                <h3 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>{highlight.number}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{highlight.label}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="/resume.pdf"
              download
              className={`inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mb-16">
        <h3 className={`text-3xl font-bold text-center mb-12 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>My Journey</h3>
        
        <div className="relative">
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}></div>
          
          {timeline.map((item, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}>
                  <div className={`text-sm font-medium mb-2 ${
                    item.current 
                      ? 'text-green-500' 
                      : isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {item.year} {item.current && '• Current'}
                  </div>
                  <h4 className={`text-lg font-bold mb-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{item.title}</h4>
                  <p className={`font-medium mb-2 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>{item.company}</p>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{item.description}</p>
                </div>
              </div>
              
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                item.current 
                  ? 'bg-green-500 border-green-300' 
                  : isDarkMode 
                    ? 'bg-blue-500 border-blue-300' 
                    : 'bg-blue-600 border-blue-300'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
