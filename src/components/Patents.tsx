const publications = [
  {
    id: 1,
    type: "Patent",
    title: "Intelligent Doctor Appointment Scheduling System",
    description: "A patent-pending system for optimizing doctor appointment scheduling using machine learning algorithms and real-time availability tracking.",
    status: "Patent Pending",
    date: "2024",
    pdfLink: "/patent-document.pdf",
    icon: "📋"
  },
  {
    id: 2,
    type: "IEEE Paper",
    title: "Scalable Web Applications Using Microservices Architecture",
    description: "Research paper on implementing microservices architecture for large-scale web applications with improved performance and maintainability.",
    journal: "IEEE Computer Society",
    date: "2023",
    doi: "10.1109/EXAMPLE.2023.123456",
    link: "https://ieeexplore.ieee.org/document/example",
    icon: "📄"
  }
];

interface PatentsProps {
  isDarkMode: boolean;
}

export default function Patents({ isDarkMode }: PatentsProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Patents & Research</h2>
        <div className={`w-20 h-1 mx-auto mb-8 ${
          isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
        }`}></div>
        <p className={`text-lg max-w-2xl mx-auto ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          My contributions to research and innovation in the field of computer science and software engineering.
        </p>
      </div>

      <div className="space-y-8">
        {publications.map((publication) => (
          <div
            key={publication.id}
            className={`rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="text-3xl">{publication.icon}</div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    publication.type === "Patent" 
                      ? "bg-yellow-100 text-yellow-800" 
                      : isDarkMode
                        ? "bg-blue-900 text-blue-300"
                        : "bg-blue-100 text-blue-800"
                  }`}>
                    {publication.type}
                  </span>
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{publication.date}</span>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {publication.title}
                </h3>

                <p className={`mb-4 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {publication.description}
                </p>

                {publication.journal && (
                  <p className={`mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <span className="font-semibold">Published in:</span> {publication.journal}
                  </p>
                )}

                {publication.status && (
                  <p className={`mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <span className="font-semibold">Status:</span> {publication.status}
                  </p>
                )}

                <div className="flex flex-wrap gap-3">
                  {publication.pdfLink && (
                    <a
                      href={publication.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${
                        isDarkMode 
                          ? 'bg-blue-500 text-white hover:bg-blue-600' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Publication
                    </a>
                  )}

                  {publication.doi && (
                    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-sm ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      DOI: {publication.doi}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
