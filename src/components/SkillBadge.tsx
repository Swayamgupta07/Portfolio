interface SkillBadgeProps {
  skill: string;
  level?: number;
  icon?: string;
  isDarkMode: boolean;
  showLevel?: boolean;
}

export default function SkillBadge({ skill, level, icon, isDarkMode, showLevel = false }: SkillBadgeProps) {
  return (
    <div className={`group px-4 py-3 rounded-xl text-center text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
      isDarkMode 
        ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700' 
        : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-200 shadow-sm'
    }`}>
      <div className="flex items-center justify-center space-x-2">
        {icon && <span className="text-lg group-hover:scale-110 transition-transform">{icon}</span>}
        <span>{skill}</span>
        {showLevel && level && (
          <span className={`text-xs px-2 py-1 rounded-full ${
            isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
          }`}>
            {level}%
          </span>
        )}
      </div>
    </div>
  );
}
