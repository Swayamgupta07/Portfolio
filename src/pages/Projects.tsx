import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";

const projects = [
  {
    id: 1,
    title: "Doctor Appointment Website",
    description: "Full-stack MERN application with patent-backed appointment scheduling system. Features real-time booking, patient management, and secure authentication with advanced ML algorithms for optimal scheduling.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "ML"],
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/doctor-appointment",
    demo: "https://doctor-appointment-demo.com"
  },
  {
    id: 2,
    title: "Graph Builder and Visualizer",
    description: "Interactive graph visualization tool built with Brython and AI-powered search capabilities. Supports multiple graph algorithms, real-time editing, and advanced data analysis features.",
    tech: ["Python", "Brython", "JavaScript", "D3.js", "AI Search"],
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/graph-visualizer",
    demo: "https://graph-visualizer-demo.com"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Comprehensive e-commerce solution with Laravel backend and MySQL database. Features include product management, order processing, payment integration, and advanced analytics dashboard.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Stripe API"],
    featured: false,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/ecommerce-platform",
    demo: "https://ecommerce-demo.com"
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative task management application with real-time updates, team collaboration features, advanced project tracking capabilities, and integrated time tracking.",
    tech: ["React", "TypeScript", "Node.js", "Socket.io", "PostgreSQL"],
    featured: false,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/task-management",
    demo: "https://task-management-demo.com"
  },
  {
    id: 5,
    title: "Weather Analytics Dashboard",
    description: "Real-time weather analytics dashboard with data visualization, forecasting, and historical weather data analysis using machine learning algorithms for accurate predictions.",
    tech: ["Angular", "TypeScript", "Python", "Flask", "Chart.js"],
    featured: false,
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/weather-dashboard",
    demo: "https://weather-dashboard-demo.com"
  },
  {
    id: 6,
    title: "Social Media Analytics Tool",
    description: "Comprehensive social media analytics platform with sentiment analysis, engagement tracking, automated reporting features, and AI-powered insights for social media optimization.",
    tech: ["Vue.js", "Python", "Django", "Redis", "Celery"],
    featured: false,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/social-analytics",
    demo: "https://social-analytics-demo.com"
  }
];

const allTech = ["All", "React", "Node.js", "Laravel", "Python", "MongoDB", "MySQL", "Angular", "TypeScript"];

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

      {/* Tech Filter */}
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

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            isDarkMode={isDarkMode} 
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { number: "15+", label: "Projects Completed", icon: "🚀" },
          { number: "3", label: "Internships", icon: "💼" },
          { number: "1", label: "Patent Pending", icon: "📋" },
          { number: "10K+", label: "Users Served", icon: "👥" }
        ].map((stat, index) => (
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
