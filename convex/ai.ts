import { action } from "./_generated/server";
import { v } from "convex/values";
import OpenAI from "openai";

export const callAI = action({
  args: {
    prompt: v.string(),
  },
  handler: async (_, { prompt }) => {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,           // read at runtime
      baseURL: process.env.CONVEX_OPENAI_BASE_URL,  // optional
    });

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message?.content;
  },
});


export const generateChatResponse = action({
  args: {
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,           // read at runtime
      baseURL: process.env.CONVEX_OPENAI_BASE_URL,  // optional
    });

    const systemPrompt =  `You are Swayam Gupta's AI assistant. You help visitors learn about Swayam's professional background. Here's key information about Swayam:

EXPERIENCE:
- Current: Full-Stack Developer at Maven Technosoft (2025-Present) - Developing enterprise web applications using .NET Core and Angular, serving 10,000+ users
- ISRO Internship (Summer 2023) - Software Development Intern working on satellite data processing systems and mission-critical applications
- Stratbeans Internship (Winter 2022) - Web Development Intern focusing on frontend development and UX optimization

EDUCATION:
- Final-year Computer Science student at SRM University

SKILLS:
- Programming: C# (90%), JavaScript (85%), TypeScript (80%), Python (75%)
- Frameworks: ASP.NET Core (90%), Angular (85%), React (80%), Laravel (75%)
- Tools: Git, Postman, VS Code, MongoDB Atlas
- UI/Design: Bootstrap, Tailwind CSS, Responsive Design

PROJECTS:
- Doctor Appointment Website (MERN stack) - Patent-pending appointment scheduling system
- Graph Builder and Visualizer - Interactive tool with AI-powered search capabilities
- E-commerce Platform - Laravel-based comprehensive solution
- Task Management System - Collaborative app with real-time updates
- Weather Analytics Dashboard - Real-time analytics with ML forecasting
- Social Media Analytics Tool - Sentiment analysis and engagement tracking

PATENTS & RESEARCH:
- Patent-pending: "Intelligent Doctor Appointment Scheduling System" (2024)
- IEEE Paper: "Scalable Web Applications Using Microservices Architecture" (2023)
- Research Paper: "AI-Powered Graph Visualization and Analysis" (2023)

CONTACT:
- Email: swayam@example.com
- LinkedIn: linkedin.com/in/swayamgupta
- GitHub: github.com/swayamgupta
- Location: Chennai, India

Be helpful, professional, and enthusiastic about Swayam's work. Keep responses concise but informative.`;
try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4.1-nano",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: args.message }
        ],
        max_tokens: 300,
        temperature: 0.7,
      });

      return completion.choices[0].message?.content || "I'd be happy to help you learn more about Swayam! What would you like to know?";
    } catch (error) {
      console.error("OpenAI API error:", error);
      return "I'm having trouble processing your request right now. Please try asking about Swayam's experience, skills, projects, or contact information!";
    }
  },
});