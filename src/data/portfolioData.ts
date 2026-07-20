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

export const typewriterWords = [
  "MEAN Stack Developer",
  "Wipro Engineer",
  ".NET Core & MAUI Builder",
  "Angular & React Specialist",
  "Full-Stack Developer",
];

export const highlights: Highlight[] = [
  { number: "15+", label: "Projects Completed", icon: "🚀" },
  { number: "1", label: "Patent Pending (Hold)", icon: "📋" },
  { number: "1+", label: "Year Experience", icon: "⭐" }
];

export const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: "MEAN Stack Developer",
    company: "Wipro",
    description: "Joined as a fresher, building modern web applications using MongoDB, Express, Angular, and Node.js.",
    current: true
  },
  {
    year: "2025 - 2026",
    title: "Full-Stack Developer",
    company: "Maven Technosoft",
    description: "Full-stack development with .NET Core, Angular, and cross-platform mobile apps with .NET MAUI (8 months full-time, 3 months training).",
    current: false
  },
  {
    year: "2021 - 2025",
    title: "Computer Science Student",
    company: "SRM University",
    description: "Graduated with a Bachelor's in Computer Science, laying a strong foundation in software engineering.",
    current: false
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Wipro",
    role: "MEAN Stack Developer",
    period: "2026 - Present",
    location: "Pune, India",
    description: "Working as a MEAN stack fresher developer, designing robust APIs and modern responsive web interfaces.",
    achievements: [
      "Collaborating on enterprise-level MEAN Stack application development flows",
      "Designing schemas and performance-oriented queries in MongoDB",
      "Building modular, scalable components in Angular and connecting them with Node/Express backends"
    ],
    current: true
  },
  {
    id: 2,
    company: "Maven Technosoft",
    role: "Full-Stack Developer",
    period: "2025 - 2026 (11 Months)",
    location: "Hybrid / Noida",
    description: "Worked as a full-stack developer (8 months full-time, preceded by 3 months of rigorous training) creating enterprise desktop, mobile, and web applications.",
    achievements: [
      "Developed cross-platform mobile app modules using .NET MAUI",
      "Built scalable web APIs using .NET Core and dynamic web screens with Angular",
      "Participated in database schema migrations and query optimizations"
    ],
    current: false
  }
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Yummy Food Restaurant System",
    description: "A modern restaurant ordering system designed for browsing menus, selecting items, and handling restaurant transactions with interactive cart flows. Based on the TruYum concept.",
    tech: ["MongoDB", "Express.js", "Angular", "Node.js", "MEAN Stack"],
    featured: true,
    image: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdHVyYW50fGVufDB8fDB8fHww",
    github: "https://github.com/Swayamgupta07/YummyFood-Resturant-System",
    demo: "https://truyum.vercel.app/"
  },
  {
    id: 2,
    title: "Employee Management System",
    description: "Full-featured employee portal to manage workspace records, track active employee details, and administer organizational workflows.",
    tech: ["C#", ".NET Core", "Angular", "MySQL"],
    featured: true,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=300&fit=crop",
    github: "https://github.com/Swayamgupta07/Employee_Management_System",
    demo: "https://employee-management-system-swayam.vercel.app"
  },
  {
    id: 3,
    title: "eCart",
    description: "A robust shopping platform built fully on the MEAN Stack. Features product listings, reactive cart state management, checkout processes, and administrative controls.",
    tech: ["MongoDB", "Express.js", "Angular", "Node.js", "MEAN Stack"],
    featured: true,
    image: "https://plus.unsplash.com/premium_vector-1682301669172-2fe738999891?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/Swayamgupta07/eCart_MEAN_Stack",
    demo: "https://ecart-mean-stack-1.onrender.com"
  },
  {
    id: 4,
    title: "Automated Face Recognition Attendance System",
    description: "Smart attendance software utilizing AI and Computer Vision. Captures and identifies faces automatically to mark class/employee attendance, exporting details securely.",
    tech: ["Python", "OpenCV", "face-recognition", "Numpy", "Pandas"],
    featured: false,
    image: "https://media.istockphoto.com/id/2187996563/photo/facial-recognition-security-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=XtHDxuQ2D3v1qYj2Ph7T9McGBsRYjYRIkQLuX00dP2c=",
    github: "https://github.com/Swayamgupta07/Automated-Face-Recognition-Attendance-System",
    demo: ""
  },
  {
    id: 5,
    title: "Task Management System",
    description: "A productive checklist and task manager app for creating, assigning, organizing, and tracking tasks across teams, preventing project delays.",
    tech: ["Angular", "HTML5", "CSS3", "TypeScript"],
    featured: false,
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=500&h=300&fit=crop",
    github: "https://github.com/Swayamgupta07/Task-Management-System",
    demo: ""
  },
  {
    id: 6,
    title: "Discord-Colored-Generator",
    description: "A fun and handy utility tool for Discord users to generate custom colored markdown texts to use within Discord chats.",
    tech: ["Next.js", "React", "Mantine", "TypeScript", "CSS3"],
    featured: false,
    image: "/discord.png",
    github: "https://github.com/Swayamgupta07/Discord-Colored-Generator",
    demo: "https://discord-colored-text-generator-49e7txa51.vercel.app"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "MEAN & MERN Full-Stack",
    icon: "⚡",
    skills: [
      { name: "Angular", level: 90, icon: "🅰️" },
      { name: "React.js & Next.js", level: 85, icon: "⚛️" },
      { name: "Node.js & Express", level: 85, icon: "🟢" },
      { name: "MongoDB & SQL Server", level: 80, icon: "🗄️" }
    ]
  },
  {
    title: "Microsoft Tech Stack",
    icon: "🔷",
    skills: [
      { name: "C# Programming", level: 90, icon: "🔷" },
      { name: "ASP.NET Core", level: 85, icon: "⚡" },
      { name: ".NET MAUI (Mobile)", level: 80, icon: "📱" }
    ]
  },
  {
    title: "Python, AI & Data Science",
    icon: "🐍",
    skills: [
      { name: "Python", level: 80, icon: "🐍" },
      { name: "OpenCV & Face Recognition", level: 80, icon: "📷" },
      { name: "Numpy & Pandas", level: 75, icon: "📊" }
    ]
  },
  {
    title: "Design & Languages",
    icon: "🎨",
    skills: [
      { name: "TypeScript & JavaScript", level: 85, icon: "🔵" },
      { name: "Mantine & Tailwind CSS", level: 85, icon: "💨" },
      { name: "Responsive Layouts", level: 90, icon: "📱" }
    ]
  }
];

export const additionalCompetencies: Competency[] = [
  { skill: "Agile/Scrum", icon: "🔄" },
  { skill: "RESTful APIs", icon: "🔗" },
  { skill: "Database Design", icon: "🗄️" },
  { skill: "Cross-Platform Mobile Dev", icon: "📱" },
  { skill: "DevOps Basics", icon: "🚀" },
  { skill: "Automated Testing", icon: "🧪" },
  { skill: "Git Flow", icon: "🐙" },
  { skill: "UI/UX Principles", icon: "✨" }
];

export const skillStats: Highlight[] = [
  { number: "1+", label: "Year Experience", icon: "⏱️" },
  { number: "10+", label: "Technologies Mastered", icon: "🎯" },
  { number: "15+", label: "Projects Built", icon: "🏗️" }
];

export const projectStats: Highlight[] = [
  { number: "15+", label: "Projects Completed", icon: "🚀" },
  { number: "2", label: "Company Exposures", icon: "💼" },
  { number: "1", label: "Patent Pending (Hold)", icon: "📋" },
  { number: "5K+", label: "Users Served", icon: "👥" }
];
