export interface Highlight {
  number: string;
  label: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  current: boolean;
}

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  current: boolean;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tech: string[];
  featured: boolean;
  image: string;
  github: string;
  demo: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Competency {
  skill: string;
  icon: string;
}

export interface PublicationItem {
  id: number;
  type: string;
  title: string;
  description: string;
  status?: string;
  journal?: string;
  date: string;
  pdfLink?: string;
  doi?: string;
  link?: string;
  icon: string;
  featured: boolean;
}

export const highlights: Highlight[] = [
  { number: "15+", label: "Projects Completed", icon: "🚀" },
  { number: "3", label: "Internships", icon: "💼" },
  { number: "1", label: "Patent Pending", icon: "📋" },
  { number: "4.2", label: "Years Experience", icon: "⭐" }
];

export const timeline: TimelineItem[] = [
  {
    year: "2025",
    title: "Full-Stack Developer",
    company: "Maven Technosoft",
    description: "Leading enterprise application development",
    current: true
  },
  {
    year: "2023",
    title: "Software Development Intern",
    company: "ISRO",
    description: "Satellite data processing systems",
    current: false
  },
  {
    year: "2022",
    title: "Web Development Intern",
    company: "Stratbeans",
    description: "Frontend development and UX optimization",
    current: false
  },
  {
    year: "2021",
    title: "Computer Science Student",
    company: "SRM University",
    description: "Pursuing Bachelor's in Computer Science",
    current: false
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Maven Technosoft",
    role: "Full-Stack Developer",
    period: "2025 - Present",
    location: "Remote",
    description: "Currently working on enterprise web applications using .NET Core and Angular.",
    achievements: [
      "Developed scalable web applications serving 10,000+ users",
      "Implemented microservices architecture reducing system downtime by 40%",
      "Led code reviews and mentored junior developers",
      "Optimized database queries improving application performance by 60%"
    ],
    current: true
  },
  {
    id: 2,
    company: "ISRO (Indian Space Research Organisation)",
    role: "Software Development Intern",
    period: "Summer 2023",
    location: "Bangalore, India",
    description: "Worked on satellite data processing systems and mission-critical applications.",
    achievements: [
      "Developed data visualization tools for satellite telemetry",
      "Contributed to mission planning software using C# and .NET",
      "Collaborated with senior engineers on space mission projects",
      "Implemented automated testing procedures for critical systems"
    ],
    current: false
  },
  {
    id: 3,
    company: "Stratbeans",
    role: "Web Development Intern",
    period: "Winter 2022",
    location: "Mumbai, India",
    description: "Focused on frontend development and user experience optimization.",
    achievements: [
      "Built responsive web interfaces using React and TypeScript",
      "Improved website loading speed by 45% through optimization",
      "Collaborated with design team to implement pixel-perfect UIs",
      "Participated in agile development processes and daily standups"
    ],
    current: false
  }
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Doctor Appointment Website",
    description: "Full-stack MERN application with patent-backed appointment scheduling system. Features real-time booking, patient management, and secure authentication with advanced ML algorithms for optimal scheduling.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "ML"],
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/doctor-appointment",
    demo: "https://doctor-appointment-demo.com"
  },
  {
    id: 2,
    title: "Graph Builder and Visualizer",
    description: "Interactive graph visualization tool built with Brython and AI-powered search capabilities. Supports multiple graph algorithms, real-time editing, and data analysis features.",
    tech: ["Python", "Brython", "JavaScript", "D3.js", "AI Search"],
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/graph-visualizer",
    demo: "https://graph-visualizer-demo.com"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Comprehensive e-commerce solution with Laravel backend and MySQL database. Features include product management, order processing, payment integration, and advanced analytics dashboard.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Stripe API"],
    featured: false,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/ecommerce-platform",
    demo: "https://ecommerce-demo.com"
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative task management application with real-time updates, team collaboration features, project tracking capabilities, and integrated time tracking.",
    tech: ["React", "TypeScript", "Node.js", "Socket.io", "PostgreSQL"],
    featured: false,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/task-management",
    demo: "https://task-management-demo.com"
  },
  {
    id: 5,
    title: "Weather Analytics Dashboard",
    description: "Real-time weather analytics dashboard with data visualization, forecasting, and historical weather data analysis using machine learning algorithms for predictions.",
    tech: ["Angular", "TypeScript", "Python", "Flask", "Chart.js"],
    featured: false,
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/weather-dashboard",
    demo: "https://weather-dashboard-demo.com"
  },
  {
    id: 6,
    title: "Social Media Analytics Tool",
    description: "Social media analytics platform with sentiment analysis, engagement tracking, automated reporting features, and AI-powered insights for optimization.",
    tech: ["Vue.js", "Python", "Django", "Redis", "Celery"],
    featured: false,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
    github: "https://github.com/swayamgupta/social-analytics",
    demo: "https://social-analytics-demo.com"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "C#", level: 90, icon: "🔷" },
      { name: "JavaScript", level: 85, icon: "🟨" },
      { name: "TypeScript", level: 80, icon: "🔵" },
      { name: "Python", level: 75, icon: "🐍" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: "⚡",
    skills: [
      { name: "ASP.NET Core", level: 90, icon: "⚡" },
      { name: "Angular", level: 85, icon: "🅰️" },
      { name: "React", level: 80, icon: "⚛️" },
      { name: "Laravel", level: 75, icon: "🔴" }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 85, icon: "📝" },
      { name: "Postman", level: 80, icon: "📮" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "MongoDB Atlas", level: 75, icon: "🍃" }
    ]
  },
  {
    title: "UI & Design",
    icon: "🎨",
    skills: [
      { name: "Bootstrap", level: 85, icon: "🎨" },
      { name: "Tailwind CSS", level: 80, icon: "💨" },
      { name: "Responsive Design", level: 85, icon: "📱" },
      { name: "UI/UX Principles", level: 75, icon: "✨" }
    ]
  }
];

export const additionalCompetencies: Competency[] = [
  { skill: "Agile/Scrum", icon: "🔄" },
  { skill: "RESTful APIs", icon: "🔗" },
  { skill: "Database Design", icon: "🗄️" },
  { skill: "Cloud Computing", icon: "☁️" },
  { skill: "DevOps", icon: "🚀" },
  { skill: "Testing", icon: "🧪" },
  { skill: "Security", icon: "🔒" },
  { skill: "Performance", icon: "⚡" }
];

export const skillStats: Highlight[] = [
  { number: "4+", label: "Years of Experience", icon: "⏱️" },
  { number: "8+", label: "Technologies Mastered", icon: "🎯" },
  { number: "15+", label: "Projects Built", icon: "🏗️" }
];

export const publications: PublicationItem[] = [
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

export const projectStats: Highlight[] = [
  { number: "15+", label: "Projects Completed", icon: "🚀" },
  { number: "3", label: "Internships", icon: "💼" },
  { number: "1", label: "Patent Pending", icon: "📋" },
  { number: "10K+", label: "Users Served", icon: "👥" }
];
