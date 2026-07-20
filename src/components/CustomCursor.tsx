import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface CustomCursorProps {
  isDarkMode: boolean;
}

export default function CustomCursor({ isDarkMode }: CustomCursorProps) {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    setIsVisible(true);
    document.body.classList.add("custom-cursor-active");

    const xToOuter = gsap.quickTo(cursorOuterRef.current, "x", {
      duration: 0.35,
      ease: "power3.out",
    });
    const yToOuter = gsap.quickTo(cursorOuterRef.current, "y", {
      duration: 0.35,
      ease: "power3.out",
    });

    const xToInner = gsap.quickTo(cursorInnerRef.current, "x", {
      duration: 0.08,
      ease: "power2.out",
    });
    const yToInner = gsap.quickTo(cursorInnerRef.current, "y", {
      duration: 0.08,
      ease: "power2.out",
    });

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      xToOuter(x);
      yToOuter(y);
      xToInner(x);
      yToInner(y);

      document.documentElement.style.setProperty("--mouse-x", `${x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${y}px`);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-magnetic]") ||
        target.classList.contains("cursor-pointer");

      if (isInteractive && cursorOuterRef.current) {
        cursorOuterRef.current.classList.add("hovering");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-magnetic]") ||
        target.classList.contains("cursor-pointer");

      if (isInteractive && cursorOuterRef.current) {
        cursorOuterRef.current.classList.remove("hovering");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorOuterRef}
        className={`cursor-outer ${isDarkMode ? "border-blue-400" : "border-indigo-600"}`}
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={cursorInnerRef}
        className={`cursor-inner ${isDarkMode ? "bg-blue-400" : "bg-indigo-600"}`}
        style={{ transform: "translate(-50%, -50%)" }}
      />
      {isDarkMode && (
        <div
          className="cursor-glow hidden md:block"
          style={{
            transform: "translate(-50%, -50%)",
            left: "var(--mouse-x)",
            top: "var(--mouse-y)",
          }}
        />
      )}
    </>
  );
}
