const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C#", level: 90, icon: "🔷" },
      { name: "JavaScript", level: 85, icon: "🟨" },
      { name: "TypeScript", level: 80, icon: "🔵" },
      { name: "Python", level: 75, icon: "🐍" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "ASP.NET Core", level: 90, icon: "⚡" },
      { name: "Angular", level: 85, icon: "🅰️" },
      { name: "React", level: 80, icon: "⚛️" },
      { name: "Laravel", level: 75, icon: "🔴" }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 85, icon: "📝" },
      { name: "Postman", level: 80, icon: "📮" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "MongoDB Atlas", level: 75, icon: "🍃" }
    ]
  },
  {
    title: "UI & Design",
    skills: [
      { name: "Bootstrap", level: 85, icon: "🎨" },
      { name: "Tailwind CSS", level: 80, icon: "💨" },
      { name: "Responsive Design", level: 85, icon: "📱" },
      { name: "UI/UX Principles", level: 75, icon: "✨" }
    ]
  }
];

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Technical Skills</h2>
        <div className={`w-20 h-1 mx-auto mb-8 ${
          isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
        }`}></div>
        <p className={`text-lg max-w-2xl mx-auto ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          A comprehensive overview of my technical expertise and proficiency levels.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h3 className={`text-xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>{category.title}</h3>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className={`font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{skill.name}</span>
                    </div>
                    <span className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{skill.level}%</span>
                  </div>
                  
                  <div className={`w-full rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills Section */}
      <div className={`mt-12 rounded-lg shadow-lg p-6 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h3 className={`text-xl font-bold mb-6 text-center ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Additional Competencies</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Agile/Scrum", "RESTful APIs", "Database Design", "Cloud Computing",
            "DevOps", "Testing", "Security", "Performance Optimization"
          ].map((skill, index) => (
            <div
              key={index}
              className={`px-3 py-2 rounded-lg text-center text-sm font-medium transition-colors ${
                isDarkMode 
                  ? 'bg-blue-900 text-blue-300 hover:bg-blue-800' 
                  : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
              }`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
