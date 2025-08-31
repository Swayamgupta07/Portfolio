import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Doctor Appointment Website",
    description: "Full-stack MERN application with patent-backed appointment scheduling system. Features real-time booking, patient management, and secure authentication.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/doctor-appointment",
    demo: "https://doctor-appointment-demo.com"
  },
  {
    id: 2,
    title: "Graph Builder and Visualizer",
    description: "Interactive graph visualization tool built with Brython and AI-powered search capabilities. Supports multiple graph algorithms and real-time editing.",
    tech: ["Python", "Brython", "JavaScript", "D3.js", "AI Search"],
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/graph-visualizer",
    demo: "https://graph-visualizer-demo.com"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Comprehensive e-commerce solution with Laravel backend and MySQL database. Features include product management, order processing, and payment integration.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Stripe API"],
    featured: false,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/ecommerce-platform",
    demo: "https://ecommerce-demo.com"
  }
];

const allTech = ["All", "React", "Node.js", "Laravel", "Python", "MongoDB", "MySQL"];

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects = selectedTech === "All" 
    ? projects 
    : projects.filter(project => project.tech.includes(selectedTech));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Featured Projects</h2>
        <div className={`w-20 h-1 mx-auto mb-8 ${
          isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
        }`}></div>
        <p className={`text-lg max-w-2xl mx-auto ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
        </p>
      </div>

      {/* Tech Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {allTech.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTech === tech
                ? isDarkMode 
                  ? "bg-blue-500 text-white"
                  : "bg-blue-600 text-white"
                : isDarkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {project.featured && (
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{project.title}</h3>
              <p className={`mb-4 text-sm leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 text-xs rounded-full ${
                      isDarkMode 
                        ? 'bg-blue-900 text-blue-300' 
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center px-4 py-2 border rounded-lg transition-colors text-sm ${
                    isDarkMode 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center px-4 py-2 rounded-lg transition-colors text-sm ${
                    isDarkMode 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
