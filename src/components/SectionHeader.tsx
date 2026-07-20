import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  isDarkMode: boolean;
}

export default function SectionHeader({ title, subtitle, isDarkMode }: SectionHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.children,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef} className="text-center mb-16">
      <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 tracking-tight ${
        isDarkMode ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      <div className={`w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r ${
        isDarkMode 
          ? 'from-blue-400 to-purple-500' 
          : 'from-blue-600 to-purple-600'
      }`}></div>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
