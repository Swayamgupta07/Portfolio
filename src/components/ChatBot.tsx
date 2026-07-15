import { useState } from "react";

interface ChatBotProps {
  isDarkMode: boolean;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatBot({ isDarkMode }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Swayam's assistant. Ask me anything about his experience, skills, projects, patents, or background!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage("");
    setIsLoading(true);

    // Simulate typing delay for a natural feel
    setTimeout(() => {
      const botResponse = generateLocalResponse(currentMessage);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 600);
  };

  const generateLocalResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("experience") || lowerQuestion.includes("work") || lowerQuestion.includes("job") || lowerQuestion.includes("intern") || lowerQuestion.includes("company")) {
      return "Swayam has impressive experience! He's currently a Full-Stack Developer at Maven Technosoft working on enterprise applications serving 10,000+ users. He also did a Software Development Internship at ISRO (working on satellite data processing systems) and a Web Development Internship at Stratbeans (focusing on frontend development and UX optimization).";
    }
    
    if (lowerQuestion.includes("skills") || lowerQuestion.includes("technology") || lowerQuestion.includes("tech") || lowerQuestion.includes("languages")) {
      return "Swayam specializes in .NET Core (ASP.NET Core), Angular, React/MERN stack, and Laravel (PHP). His core programming skills include C#, JavaScript, TypeScript, and Python. He is also proficient in tools like Git, Postman, MongoDB Atlas, and CSS frameworks like Tailwind CSS & Bootstrap.";
    }
    
    if (lowerQuestion.includes("project") || lowerQuestion.includes("portfolio") || lowerQuestion.includes("built")) {
      return "Swayam has built several featured projects: \n1. A Doctor Appointment Website using the MERN stack with a patent-pending appointment scheduling system.\n2. A Graph Builder and Visualizer with AI-powered search (built with Brython & Python).\n3. An E-commerce Platform built with Laravel & MySQL.\n4. A collaborative Task Management System.";
    }
    
    if (lowerQuestion.includes("education") || lowerQuestion.includes("university") || lowerQuestion.includes("study") || lowerQuestion.includes("college")) {
      return "Swayam is in his final year of pursuing a Bachelor's degree in Computer Science at SRM University. His studies are complemented by strong practical experience from high-profile internships and hackathons.";
    }
    
    if (lowerQuestion.includes("patent") || lowerQuestion.includes("research") || lowerQuestion.includes("ieee") || lowerQuestion.includes("paper")) {
      return "Swayam has a patent-pending 'Intelligent Doctor Appointment Scheduling System' that uses machine learning algorithms for optimized scheduling. He is also an IEEE published author, with contributions to scalable web applications and AI-powered graph visualization.";
    }
    
    if (lowerQuestion.includes("contact") || lowerQuestion.includes("reach") || lowerQuestion.includes("email") || lowerQuestion.includes("linkedin") || lowerQuestion.includes("github")) {
      return "You can reach Swayam in the following ways:\n- Email: swayamgupta09@gmail.com\n- LinkedIn: linkedin.com/in/swayam-gupta07\n- GitHub: github.com/Swayamgupta07\n- Or you can leave a message on the Contact Page!";
    }
    
    if (lowerQuestion.includes("hello") || lowerQuestion.includes("hi") || lowerQuestion.includes("hey") || lowerQuestion.includes("greetings")) {
      return "Hello! I'm Swayam's helper bot. Ask me anything about his experience, skills, projects, patents, or how to contact him. What would you like to know?";
    }
    
    return "That's a great question! Swayam is a skilled developer specializing in .NET Core and Angular with real-world experience at ISRO and Maven Technosoft. Feel free to ask about his 'experience', 'skills', 'projects', 'patent', 'education', or 'contact' details.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg transition-all duration-300 z-50 ${
          isDarkMode 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 right-6 w-80 h-96 rounded-lg shadow-2xl z-50 flex flex-col ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          {/* Header */}
          <div className={`p-4 border-b rounded-t-lg ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600' 
              : 'bg-blue-600 border-blue-700'
          }`}>
            <h3 className="text-white font-semibold">Chat with Swayam's AI</h3>
            <p className="text-blue-100 text-sm">Ask me anything about Swayam!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isUser
                      ? isDarkMode
                        ? 'bg-blue-500 text-white'
                        : 'bg-blue-600 text-white'
                      : isDarkMode
                        ? 'bg-gray-700 text-gray-200'
                        : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'
                }`}>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${
            isDarkMode ? 'border-gray-600' : 'border-gray-200'
          }`}>
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Swayam..."
                className={`flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 ${
                  isDarkMode 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
