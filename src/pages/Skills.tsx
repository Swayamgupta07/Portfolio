import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import SkillBadge from "../components/SkillBadge";
import InfiniteMarquee from "../components/InfiniteMarquee";
import AnimatedCounter from "../components/AnimatedCounter";
import { skillCategories, additionalCompetencies, skillStats } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const marqueeSkillsRow1 = [
    "React",
    "Angular",
    ".NET Core",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Python",
    "GSAP",
  ];
  const marqueeSkillsRow2 = [
    "Next.js",
    "SQL Server",
    "C#",
    "Express.js",
    "Tailwind CSS",
    "OpenCV",
    "HTML5",
    "CSS3",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger category cards
      gsap.fromTo(
        ".skill-category-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skill-categories-grid",
            start: "top 80%",
          },
        }
      );

      // Animate progress bar widths on scroll
      const fillBars = gsap.utils.toArray(".skill-bar-fill");
      fillBars.forEach((bar: any) => {
        const targetWidth = bar.getAttribute("data-width") || "0%";
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: targetWidth,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            },
          }
        );
      });

      // Stagger additional competencies badges
      gsap.fromTo(
        ".competency-badge",
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".competencies-container",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="skills" isDarkMode={isDarkMode}>
      <div ref={containerRef}>
        <SectionHeader
          title="Technical Skills"
          subtitle="A comprehensive overview of my technical expertise, proficiency levels, and the tools I use to build amazing digital experiences."
          isDarkMode={isDarkMode}
        />

        {/* Double Row Infinite Scrolling Marquee */}
        <div className="mb-16 space-y-4">
          <InfiniteMarquee items={marqueeSkillsRow1} speed={25} isDarkMode={isDarkMode} />
          <InfiniteMarquee items={marqueeSkillsRow2} speed={30} isDarkMode={isDarkMode} reverse />
        </div>

        {/* Core Skill Categories Grid */}
        <div className="skill-categories-grid grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`skill-category-card group rounded-2xl shadow-lg p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border ${
                isDarkMode
                  ? "bg-slate-800/80 border-gray-700/60 text-white shadow-lg"
                  : "bg-white border-gray-200 text-slate-800 shadow-sm"
              }`}
            >
              <div className="flex items-center mb-8 select-none">
                <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <h3
                  className={`text-xl font-bold tracking-tight ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 select-none">
                        <span className="text-xl">{skill.icon}</span>
                        <span
                          className={`font-semibold text-sm ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          isDarkMode
                            ? "bg-blue-900/50 text-blue-300 border border-blue-800/30"
                            : "bg-blue-50 text-blue-700 border border-blue-100/30"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    <div
                      className={`w-full rounded-full h-3 relative ${
                        isDarkMode ? "bg-slate-700" : "bg-gray-200"
                      }`}
                    >
                      {/* GSAP animated width bar */}
                      <div
                        className="skill-bar-fill absolute top-0 left-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 h-full rounded-full shadow-md"
                        data-width={`${skill.level}%`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div
          className={`competencies-container rounded-2xl shadow-lg p-8 border ${
            isDarkMode ? "bg-slate-800/80 border-gray-700/60" : "bg-white border-gray-200"
          }`}
        >
          <div className="text-center mb-8">
            <h3
              className={`text-2xl font-bold mb-4 tracking-tight ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Additional Competencies
            </h3>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Other skills and technologies I work with regularly
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalCompetencies.map((item, index) => (
              <div key={index} className="competency-badge">
                <SkillBadge skill={item.skill} icon={item.icon} isDarkMode={isDarkMode} />
              </div>
            ))}
          </div>
        </div>

        {/* Skill Stats section using Animated Counters */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillStats.map((stat, index) => (
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
      </div>
    </SectionWrapper>
  );
}
