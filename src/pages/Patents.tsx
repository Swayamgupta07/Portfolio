import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";

const publications = [
  {
    id: 1,
    type: "Patent",
    title: "Intelligent Doctor Appointment Scheduling System",
    description: "A patent-pending system for optimizing doctor appointment scheduling using machine learning algorithms and real-time availability tracking. The system reduces wait times by 40% and improves patient satisfaction through intelligent scheduling optimization.",
    status: "Patent Pending",
    date: "2024",
    pdfLink: "/patent-document.pdf",
    icon: "📋",
    featured: true
  },
  {
    id: 2,
    type: "IEEE Paper",
    title: "Scalable Web Applications Using Microservices Architecture",
    description: "Research paper on implementing microservices architecture for large-scale web applications with improved performance and maintainability. The study demonstrates 60% improvement in system scalability and 35% reduction in deployment time.",
    journal: "IEEE Computer Society",
    date: "2023",
    doi: "10.1109/EXAMPLE.2023.123456",
    link: "https://ieeexplore.ieee.org/document/example",
    icon: "📄",
    featured: false
  },
  {
    id: 3,
    type: "Research Paper",
    title: "AI-Powered Graph Visualization and Analysis",
    description: "Comprehensive study on implementing artificial intelligence in graph visualization tools for enhanced data analysis and pattern recognition. The research introduces novel algorithms for automatic graph layout optimization and intelligent data clustering.",
    journal: "International Journal of Computer Science",
    date: "2023",
    doi: "10.1234/IJCS.2023.567890",
    link: "https://ijcs.example.com/article/567890",
    icon: "🔬",
    featured: false
  }
];

interface PatentsProps {
  isDarkMode: boolean;
}

export default function Patents({ isDarkMode }: PatentsProps) {
  return (
    <SectionWrapper isDarkMode={isDarkMode} className={isDarkMode ? 'bg-gray-800' : 'bg-white'}>
      <SectionHeader 
        title="Patents & Research"
        subtitle="My contributions to research and innovation in the field of computer science and software engineering, showcasing cutting-edge solutions and academic achievements."
        isDarkMode={isDarkMode}
      />

      <div className="space-y-8">
        {publications.map((publication) => (
          <div
            key={publication.id}
            className={`group rounded-2xl shadow-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}
          >
            <div className="flex items-start space-x-6">
              <div className={`text-4xl p-4 rounded-2xl ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              } group-hover:scale-110 transition-transform`}>
                {publication.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    publication.type === "Patent" 
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg" 
                      : isDarkMode
                        ? "bg-blue-900/50 text-blue-300 border border-blue-800"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                  }`}>
                    {publication.type}
                  </span>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {publication.date}
                  </span>
                  {publication.featured && (
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                <h3 className={`text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {publication.title}
                </h3>

                <p className={`mb-6 leading-relaxed text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {publication.description}
                </p>

                {publication.journal && (
                  <div className={`mb-4 p-4 rounded-xl ${
                    isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className="font-semibold">Published in:</span> {publication.journal}
                    </p>
                  </div>
                )}

                {publication.status && (
                  <div className={`mb-4 p-4 rounded-xl ${
                    isDarkMode ? 'bg-yellow-900/20 border border-yellow-800' : 'bg-yellow-50 border border-yellow-200'
                  }`}>
                    <p className={`${isDarkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
                      <span className="font-semibold">Status:</span> {publication.status}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  {publication.pdfLink && (
                    <a
                      href={publication.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View PDF
                    </a>
                  )}

                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg font-medium ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      }`}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Publication
                    </a>
                  )}

                  {publication.doi && (
                    <div className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-mono ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                        : 'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}>
                      <span className="font-semibold mr-2">DOI:</span>
                      {publication.doi}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Research Stats */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { number: "1", label: "Patent Pending", icon: "📋" },
          { number: "2", label: "Research Papers", icon: "📄" },
          { number: "3", label: "Publications Total", icon: "🏆" }
        ].map((stat, index) => (
          <div key={index} className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
            isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-sm'
          }`}>
            <div className="text-4xl mb-4">{stat.icon}</div>
            <div className={`text-4xl font-bold mb-2 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>{stat.number}</div>
            <div className={`text-sm font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>{stat.label}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
