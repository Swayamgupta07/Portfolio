import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { experiences } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceProps {
  isDarkMode: boolean;
}

export default function Experience({ isDarkMode }: ExperienceProps) {
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".experience-card");
      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, cardsContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper
      id="experience"
      isDarkMode={isDarkMode}
      className={isDarkMode ? "bg-slate-900/50 border-b border-gray-800" : "bg-gray-50 border-b border-gray-100"}
    >
      <SectionHeader
        title="Professional Experience"
        subtitle="My journey through various roles has shaped my expertise in full-stack development and problem-solving."
        isDarkMode={isDarkMode}
      />

      <div ref={cardsContainerRef} className="space-y-8 max-w-4xl mx-auto relative">

        <div
          className={`absolute left-8 top-4 bottom-4 w-[2px] hidden md:block ${
            isDarkMode ? "bg-slate-800" : "bg-indigo-100"
          }`}
        />

        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`experience-card relative rounded-2xl shadow-lg p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border md:pl-16 ${
              isDarkMode
                ? "bg-slate-800/80 border-gray-700/60 shadow-lg/50 text-white"
                : "bg-white border-gray-200 text-slate-800"
            }`}
          >
            <div
              className={`absolute left-7 top-[44px] -translate-x-1/2 w-4 h-4 rounded-full border-4 hidden md:block ${
                exp.current
                  ? "bg-green-500 border-green-200 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                  : isDarkMode
                  ? "bg-blue-500 border-slate-900"
                  : "bg-indigo-600 border-white"
              }`}
            />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3
                  className={`text-xl font-bold tracking-tight ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {exp.role}
                </h3>
                <p
                  className={`text-lg font-semibold ${
                    isDarkMode ? "text-blue-400" : "text-indigo-600"
                  }`}
                >
                  {exp.company}
                </p>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  📍 {exp.location}
                </p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase ${
                    exp.current
                      ? "bg-green-500/10 text-green-500 border border-green-500/20"
                      : isDarkMode
                      ? "bg-slate-700/60 text-gray-300 border border-gray-600/30"
                      : "bg-indigo-50/60 text-indigo-700 border border-indigo-100/30"
                  }`}
                >
                  {exp.period}
                </span>
              </div>
            </div>

            <p className={`mb-6 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              {exp.description}
            </p>

            <div className="space-y-3">
              <h4
                className={`font-bold text-sm uppercase tracking-widest ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Key Achievements:
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${
                        isDarkMode ? "text-blue-400" : "text-indigo-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
