import { useEffect, useState } from "react";

interface MouseSpotlightProps {
  isDarkMode: boolean;
}

export default function MouseSpotlight({ isDarkMode }: MouseSpotlightProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isDarkMode) return;

    const updateCoords = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCoords, { passive: true });
    return () => window.removeEventListener("mousemove", updateCoords);
  }, [isDarkMode]);

  if (!isDarkMode) return null;

  return (
    <div
      className="mouse-spotlight"
      style={{
        "--mouse-x": `${coords.x}px`,
        "--mouse-y": `${coords.y}px`,
      } as React.CSSProperties}
    />
  );
}
