interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  isDarkMode: boolean;
}

export default function SectionWrapper({ children, className = "", isDarkMode }: SectionWrapperProps) {
  return (
    <section className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    } ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
