const experiences = [
  {
    id: 1,
    company: "Maven Technosoft",
    role: "Full-Stack Developer",
    period: "2025 - Present",
    location: "Remote",
    description: "Currently working on enterprise web applications using .NET Core and Angular.",
    achievements: [
      "Developed scalable web applications serving 10,000+ users",
      "Implemented microservices architecture reducing system downtime by 40%",
      "Led code reviews and mentored junior developers",
      "Optimized database queries improving application performance by 60%"
    ],
    current: true
  },
  {
    id: 2,
    company: "ISRO (Indian Space Research Organisation)",
    role: "Software Development Intern",
    period: "Summer 2023",
    location: "Bangalore, India",
    description: "Worked on satellite data processing systems and mission-critical applications.",
    achievements: [
      "Developed data visualization tools for satellite telemetry",
      "Contributed to mission planning software using C# and .NET",
      "Collaborated with senior engineers on space mission projects",
      "Implemented automated testing procedures for critical systems"
    ],
    current: false
  },
  {
    id: 3,
    company: "Stratbeans",
    role: "Web Development Intern",
    period: "Winter 2022",
    location: "Mumbai, India",
    description: "Focused on frontend development and user experience optimization.",
    achievements: [
      "Built responsive web interfaces using React and TypeScript",
      "Improved website loading speed by 45% through optimization",
      "Collaborated with design team to implement pixel-perfect UIs",
      "Participated in agile development processes and daily standups"
    ],
    current: false
  }
];

interface ExperienceProps {
  isDarkMode: boolean;
}

export default function Experience({ isDarkMode }: ExperienceProps) {
  return (
    <div className={`py-20 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Professional Experience</h2>
          <div className={`w-20 h-1 mx-auto mb-8 ${
            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
          }`}></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My journey through various roles has shaped my expertise in full-stack development and problem-solving.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{exp.role}</h3>
                  <p className={`text-lg font-semibold ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>{exp.company}</p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{exp.location}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    exp.current 
                      ? "bg-green-100 text-green-800" 
                      : isDarkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-800"
                  }`}>
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className={`mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>{exp.description}</p>

              <div className="space-y-2">
                <h4 className={`font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Key Achievements:</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <svg className={`w-5 h-5 mt-0.5 mr-2 flex-shrink-0 ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
