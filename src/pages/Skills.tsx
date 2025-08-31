import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import SkillBadge from "../components/SkillBadge";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "C#", level: 90, icon: "🔷" },
      { name: "JavaScript", level: 85, icon: "🟨" },
      { name: "TypeScript", level: 80, icon: "🔵" },
      { name: "Python", level: 75, icon: "🐍" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: "⚡",
    skills: [
      { name: "ASP.NET Core", level: 90, icon: "⚡" },
      { name: "Angular", level: 85, icon: "🅰️" },
      { name: "React", level: 80, icon: "⚛️" },
      { name: "Laravel", level: 75, icon: "🔴" }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 85, icon: "📝" },
      { name: "Postman", level: 80, icon: "📮" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "MongoDB Atlas", level: 75, icon: "🍃" }
    ]
  },
  {
    title: "UI & Design",
    icon: "🎨",
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
    <SectionWrapper isDarkMode={isDarkMode}>
      <SectionHeader 
        title="Technical Skills"
        subtitle="A comprehensive overview of my technical expertise, proficiency levels, and the tools I use to build amazing digital experiences."
        isDarkMode={isDarkMode}
      />

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`group rounded-2xl shadow-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}
          >
            <div className="flex items-center mb-8">
              <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">{category.icon}</span>
              <h3 className={`text-xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{category.title}</h3>
            </div>
            
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{skill.icon}</span>
                      <span className={`font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{skill.name}</span>
                    </div>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                    }`}>{skill.level}%</span>
                  </div>
                  
                  <div className={`w-full rounded-full h-3 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg"
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
      <div className={`rounded-2xl shadow-lg p-8 ${
        isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
      }`}>
        <div className="text-center mb-8">
          <h3 className={`text-2xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Additional Competencies</h3>
          <p className={`${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Other skills and technologies I work with regularly
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { skill: "Agile/Scrum", icon: "🔄" },
            { skill: "RESTful APIs", icon: "🔗" },
            { skill: "Database Design", icon: "🗄️" },
            { skill: "Cloud Computing", icon: "☁️" },
            { skill: "DevOps", icon: "🚀" },
            { skill: "Testing", icon: "🧪" },
            { skill: "Security", icon: "🔒" },
            { skill: "Performance", icon: "⚡" }
          ].map((item, index) => (
            <SkillBadge
              key={index}
              skill={item.skill}
              icon={item.icon}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>

      {/* Skills Summary */}
      <div className="mt-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "4+", label: "Years of Experience", icon: "⏱️" },
            { number: "8+", label: "Technologies Mastered", icon: "🎯" },
            { number: "15+", label: "Projects Built", icon: "🏗️" }
          ].map((stat, index) => (
            <div key={index} className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
              isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-sm'
            }`}>
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className={`text-3xl font-bold mb-2 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>{stat.number}</div>
              <div className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
