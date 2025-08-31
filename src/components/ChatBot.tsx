import { useState } from "react";
import { useMutation, useAction } from "convex/react";
import { api } from "../../convex/_generated/api";

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
      text: "Hi! I'm Swayam's AI assistant. Ask me anything about his experience, skills, projects, or background!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const saveChatMessage = useMutation(api.portfolio.saveChatMessage);
  const generateChatResponse = useAction(api.ai.generateChatResponse);

  const handleSendMessage = async () => {
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

    try {
      // Generate AI response using OpenAI
      const response = await generateChatResponse({ message: currentMessage });
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      
      // Save to database
      await saveChatMessage({
        message: currentMessage,
        response: response
      });
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Fallback response
      const fallbackResponse = generateFallbackResponse(currentMessage);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: fallbackResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const generateFallbackResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("experience") || lowerQuestion.includes("work") || lowerQuestion.includes("job")) {
      return "Swayam has extensive experience including his current role as a Full-Stack Developer at Maven Technosoft, an internship at ISRO working on satellite data processing systems, and another internship at Stratbeans focusing on frontend development. He's worked on enterprise applications serving 10,000+ users and contributed to mission-critical space applications.";
    }
    
    if (lowerQuestion.includes("skills") || lowerQuestion.includes("technology") || lowerQuestion.includes("tech")) {
      return "Swayam specializes in .NET Core (90%), Angular (85%), React (80%), and TypeScript (80%). He's also proficient in C#, JavaScript, Python, Laravel, and various tools like Git, Postman, and MongoDB Atlas. His expertise spans full-stack development, microservices architecture, and responsive design.";
    }
    
    if (lowerQuestion.includes("project") || lowerQuestion.includes("portfolio")) {
      return "Swayam has built several impressive projects including a patent-pending Doctor Appointment Website using MERN stack, a Graph Builder and Visualizer with AI-powered search, an E-commerce Platform with Laravel, and various other applications. His featured project is the Doctor Appointment system which showcases his full-stack capabilities.";
    }
    
    if (lowerQuestion.includes("education") || lowerQuestion.includes("university") || lowerQuestion.includes("study")) {
      return "Swayam is a final-year Computer Science student at SRM University. His academic journey has been complemented by practical experience through internships and real-world projects, giving him a strong foundation in both theoretical concepts and practical application.";
    }
    
    if (lowerQuestion.includes("patent") || lowerQuestion.includes("research")) {
      return "Swayam has a patent-pending 'Intelligent Doctor Appointment Scheduling System' that uses machine learning algorithms for optimizing appointment scheduling. He's also published research papers on scalable web applications using microservices architecture and AI-powered graph visualization.";
    }
    
    if (lowerQuestion.includes("contact") || lowerQuestion.includes("reach") || lowerQuestion.includes("email")) {
      return "You can reach Swayam at swayam@example.com, connect with him on LinkedIn at linkedin.com/in/swayamgupta, or check out his GitHub at github.com/swayamgupta. He's based in Chennai, India and typically responds within 24 hours.";
    }
    
    if (lowerQuestion.includes("hello") || lowerQuestion.includes("hi") || lowerQuestion.includes("hey")) {
      return "Hello! I'm here to help you learn more about Swayam Gupta. He's a passionate full-stack developer with experience at ISRO, expertise in .NET Core and Angular, and a patent-pending appointment system. What would you like to know about him?";
    }
    
    return "That's a great question! Swayam is a full-stack developer specializing in .NET Core and Angular, with experience at ISRO and several innovative projects. You can ask me about his experience, skills, projects, education, research, or how to contact him. What specific aspect interests you most?";
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
