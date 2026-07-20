import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { projects, projectStats } from "../data/portfolioData";

const allTech = ["All", "React", "Node.js", "Python", "MongoDB", "MySQL", "Angular", "TypeScript"];

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects = selectedTech === "All" 
    ? projects 
    : projects.filter(project => project.tech.includes(selectedTech));

  return (
    <SectionWrapper isDarkMode={isDarkMode}>
      <SectionHeader 
        title="Featured Projects"
        subtitle="Here are some of my recent projects that showcase my technical skills, problem-solving abilities, and passion for creating innovative solutions."
        isDarkMode={isDarkMode}
      />

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {allTech.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              selectedTech === tech
                ? isDarkMode 
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            isDarkMode={isDarkMode} 
          />
        ))}
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {projectStats.map((stat, index) => (
          <div key={index} className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
            isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-sm'
          }`}>
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className={`text-3xl font-bold mb-2 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>{stat.number}</div>
            <div className={`text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>{stat.label}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
