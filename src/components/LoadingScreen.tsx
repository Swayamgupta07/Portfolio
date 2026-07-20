import { useEffect, useState } from "react";
import gsap from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const obj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".loading-panel-top", {
          yPercent: -100,
          duration: 0.8,
          ease: "power3.inOut",
        });
        gsap.to(".loading-panel-bottom", {
          yPercent: 100,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: onComplete,
        });
      },
    });

    tl.to(obj, {
      val: 100,
      duration: 2.0,
      ease: "power1.out",
      onUpdate: () => {
        setProgress(Math.floor(obj.val));
      },
    });

    tl.to(".loading-content", {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden select-none pointer-events-none">
      <div className="loading-panel-top absolute top-0 left-0 w-full h-1/2 bg-slate-950 pointer-events-auto border-b border-gray-800" />
      <div className="loading-panel-bottom absolute bottom-0 left-0 w-full h-1/2 bg-slate-950 pointer-events-auto border-t border-gray-800" />
      <div className="absolute inset-0 flex flex-col items-center justify-center loading-content pointer-events-auto z-10">
        <div className="absolute w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute w-72 h-72 rounded-full bg-purple-500/10 blur-3xl translate-x-12 translate-y-12" />

        <div className="text-7xl font-extrabold tracking-wider gradient-text font-sans mb-6 loading-logo select-none">
          SG
        </div>

        <div className="text-white text-sm font-semibold mb-3 tracking-widest uppercase font-mono">
          System Initializing... {progress}%
        </div>

        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative border border-gray-700/50">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-[0_0_12px_rgba(99,102,241,0.8)] rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
