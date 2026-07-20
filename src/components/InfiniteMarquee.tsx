interface InfiniteMarqueeProps {
  items: string[];
  speed?: number;
  isDarkMode: boolean;
  reverse?: boolean;
}

export default function InfiniteMarquee({
  items,
  speed = 25,
  isDarkMode,
  reverse = false,
}: InfiniteMarqueeProps) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-3 relative select-none flex items-center">
      <div className={`absolute top-0 bottom-0 left-0 w-16 z-10 pointer-events-none bg-gradient-to-r ${
        isDarkMode ? 'from-gray-900 to-transparent' : 'from-gray-50 to-transparent'
      }`} />
      <div className={`absolute top-0 bottom-0 right-0 w-16 z-10 pointer-events-none bg-gradient-to-l ${
        isDarkMode ? 'from-gray-900 to-transparent' : 'from-gray-50 to-transparent'
      }`} />

      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={idx}
            className={`px-6 py-3 mx-3 text-sm font-semibold rounded-2xl border transition-all duration-300 flex items-center space-x-2 ${
              isDarkMode
                ? "bg-gray-800/40 border-gray-700/60 text-gray-200 hover:border-blue-400 hover:text-white"
                : "bg-white/50 border-gray-200 text-gray-700 hover:border-indigo-500 hover:text-indigo-600 shadow-sm"
            }`}
          >
            <span>⚡</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
