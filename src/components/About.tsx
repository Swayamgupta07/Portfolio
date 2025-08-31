interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>About Me</h2>
        <div className={`w-20 h-1 mx-auto ${
          isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
        }`}></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/Photo.jpg"
            alt="Swayam Gupta"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div className="space-y-6">
          <p className={`text-lg leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I'm Swayam Gupta, a final-year Computer Science student at SRM University 
            specializing in full-stack web development with .NET Core and Angular. 
            With hands-on experience, internships at ISRO and Stratbeans, and a 
            patent-pending doctor appointment system, I build scalable, user-friendly 
            tech solutions.
          </p>

          <p className={`leading-relaxed ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My journey in technology began with a curiosity about how things work 
            behind the scenes. This led me to explore various programming languages 
            and frameworks, eventually specializing in modern web development. 
            I'm passionate about creating solutions that make a real difference 
            in people's lives.
          </p>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className={`p-4 rounded-lg ${
              isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
            }`}>
              <h3 className={`text-2xl font-bold ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>15+</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Projects Completed</p>
            </div>
            <div className={`p-4 rounded-lg ${
              isDarkMode ? 'bg-gray-700' : 'bg-blue-50'
            }`}>
              <h3 className={`text-2xl font-bold ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>3</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Internships</p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="/resume.pdf"
              download
              className={`inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl ${
                isDarkMode 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
