import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../components/ProjectCard";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import AnimatedCounter from "../components/AnimatedCounter";
import { projects, projectStats } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const allTech = ["All", "React", "Node.js", "Python", "MongoDB", "MySQL", "Angular", "TypeScript"];

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const [selectedTech, setSelectedTech] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(selectedTech));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".filter-btn",
        { opacity: 0, scale: 0.8, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".filter-buttons-container",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".project-card-wrapper",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [selectedTech]); 

  return (
    <SectionWrapper id="projects" isDarkMode={isDarkMode}>
      <div ref={containerRef}>
        <SectionHeader
          title="Featured Projects"
          subtitle="Here are some of my recent projects that showcase my technical skills, problem-solving abilities, and passion for creating innovative solutions."
          isDarkMode={isDarkMode}
        />

        <div className="filter-buttons-container flex flex-wrap justify-center gap-3 mb-16 select-none">
          {allTech.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`filter-btn px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                selectedTech === tech
                  ? isDarkMode
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/10"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/10"
                  : isDarkMode
                  ? "bg-slate-800 text-gray-300 hover:bg-slate-700 border border-gray-700/60"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card-wrapper h-full">
              <ProjectCard project={project} isDarkMode={isDarkMode} />
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {projectStats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              target={stat.number}
              label={stat.label}
              icon={stat.icon}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
