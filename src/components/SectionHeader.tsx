interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  isDarkMode: boolean;
}

export default function SectionHeader({ title, subtitle, isDarkMode }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
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
