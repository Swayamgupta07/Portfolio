import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  target: string;
  label: string;
  icon: string;
  isDarkMode: boolean;
}

export default function AnimatedCounter({ target, label, icon, isDarkMode }: AnimatedCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const numericPart = parseInt(target.replace(/[^0-9]/g, ""), 10) || 0;
    const suffix = target.replace(/[0-9]/g, "");

    const element = numberRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: numericPart,
        duration: 2.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          if (element) {
            element.textContent = `${Math.floor(obj.val)}${suffix}`;
          }
        },
        onComplete: () => {
          setHasAnimated(true);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [target]);

  return (
    <div
      ref={containerRef}
      className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl border gsap-reveal-scale ${
        isDarkMode
          ? "bg-gray-800/80 border-gray-700/60 shadow-lg/50"
          : "bg-white border-gray-200 shadow-sm"
      }`}
    >
      <div className="text-3xl mb-2 filter drop-shadow-sm select-none">{icon}</div>
      <div
        ref={numberRef}
        className={`text-3xl font-extrabold mb-2 tracking-tight ${
          isDarkMode ? "text-blue-400" : "text-indigo-600"
        }`}
      >
        0
      </div>
      <div className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
        {label}
      </div>
    </div>
  );
}
