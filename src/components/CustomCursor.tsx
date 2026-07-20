import { useEffect, useRef } from "react";
import gsap from "gsap";

interface CustomCursorProps {
  isDarkMode: boolean;
}

export default function CustomCursor({ isDarkMode }: CustomCursorProps) {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    document.body.classList.add("custom-cursor-active");

    const outerEl = cursorOuterRef.current;
    const innerEl = cursorInnerRef.current;
    const glowEl = cursorGlowRef.current;

    if (!outerEl || !innerEl) return;

    const xToOuter = gsap.quickTo(outerEl, "x", {
      duration: 0.35,
      ease: "power3.out",
    });
    const yToOuter = gsap.quickTo(outerEl, "y", {
      duration: 0.35,
      ease: "power3.out",
    });

    const xToInner = gsap.quickTo(innerEl, "x", {
      duration: 0.08,
      ease: "power2.out",
    });
    const yToInner = gsap.quickTo(innerEl, "y", {
      duration: 0.08,
      ease: "power2.out",
    });

    let hasMoved = false;

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      xToOuter(x);
      yToOuter(y);
      xToInner(x);
      yToInner(y);

      if (glowEl) {
        gsap.set(glowEl, { x, y });
      }

      if (!hasMoved) {
        outerEl.classList.add("active");
        innerEl.classList.add("active");
        if (glowEl) glowEl.classList.add("active");
        hasMoved = true;
      }

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

      if (isInteractive) {
        outerEl.classList.add("hovering");
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

      if (isInteractive) {
        outerEl.classList.remove("hovering");
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div
        ref={cursorOuterRef}
        className={`cursor-outer hidden md:block ${isDarkMode ? "border-blue-400" : "border-indigo-600"}`}
      />
      <div
        ref={cursorInnerRef}
        className={`cursor-inner hidden md:block ${isDarkMode ? "bg-blue-400" : "bg-indigo-600"}`}
      />
      {isDarkMode && (
        <div
          ref={cursorGlowRef}
          className="cursor-glow hidden md:block"
        />
      )}
    </>
  );
}
