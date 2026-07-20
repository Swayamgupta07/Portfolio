import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollWidth(`${progress}%`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: scrollWidth }}
    />
  );
}
