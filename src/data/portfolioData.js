export const personalInfo = {
  name: "Abishek",
  fullName: "Muthu Abishek M",
  role: "Full-Stack Developer",
  profileImage: "/abishek.png", // Replace with your image path (e.g. "/profile.jpg" or URL)
  tagline: "Turning ideas into modern, user-friendly web and mobile experiences with React, Flutter, Python and AI.",
  location: "Chennai, Tamil Nadu, India",
  email: "abishek16@gmail.com",
  phone: "+91 79041 58951",
  available: true,
  status: "Open to internships, freelance projects & collaborations",
  bio: "I'm a Bachelor of Computer Applications (BCA) student at Avichi College of Arts and Science, Chennai, affiliated with the University of Madras. I enjoy building modern, user-friendly applications and solving real-world problems through technology — working hands-on with React.js, Flutter, Python, FastAPI, Firebase and database technologies.",
  yearsExperience: "2+",
  projectsCompleted: "10+",
  satisfactionRate: "100%",
  github: "https://github.com/abishek16-coder",
  linkedin: "https://www.linkedin.com/in/muthuabishek",
  twitter: "https://twitter.com",
};

export const stats = [
  { value: "10+", label: "Projects Built", suffix: "" },
  { value: "2", label: "Internships", suffix: "" },
  { value: "4", label: "Department Roles", suffix: "" },
  { value: "2027", label: "Expected Graduation", suffix: "" }
];

export const skillCategories = [
  {
    name: "Frontend & Mobile",
    skills: [
      { name: "React.js", level: 88, icon: "Code2" },
      { name: "JavaScript", level: 85, icon: "FileCode2" },
      { name: "HTML5 & CSS3", level: 90, icon: "Palette" },
      { name: "Tailwind CSS & Bootstrap", level: 85, icon: "Palette" },
      { name: "Next.js", level: 76, icon: "Layers" },
      { name: "Flutter & Dart", level: 82, icon: "Boxes" }
    ]
  },
  {
    name: "Backend & Databases",
    skills: [
      { name: "Python / FastAPI", level: 85, icon: "Terminal" },
      { name: "Node.js & Express", level: 78, icon: "Server" },
      { name: "Flask", level: 74, icon: "Server" },
      { name: "REST APIs", level: 86, icon: "Network" },
      { name: "PostgreSQL", level: 75, icon: "Database" },
      { name: "MongoDB", level: 78, icon: "Database" },
      { name: "Firebase", level: 82, icon: "Database" },
      { name: "Prisma ORM", level: 72, icon: "Layers" }
    ]
  },
  {
    name: "AI & Developer Tools",
    skills: [
      { name: "Google Gemini API", level: 82, icon: "Sparkles" },
      { name: "Hugging Face", level: 76, icon: "Cpu" },
      { name: "AI API Integration", level: 80, icon: "Zap" },
      { name: "Git & GitHub", level: 88, icon: "GitBranch" },
      { name: "VS Code", level: 90, icon: "TerminalSquare" },
      { name: "Postman", level: 85, icon: "Globe" },
      { name: "Figma", level: 78, icon: "Boxes" },
      { name: "Streamlit & Vercel", level: 84, icon: "Cloud" }
    ]
  }
];

export const projects = [
  {
    id: "doc-gen-pro",
    title: "Doc Gen Pro",
    tagline: "Document Automation System",
    category: "Full Stack",
    description: "A web application that automates document creation, helping users generate structured, ready-to-use documents efficiently through a clean and guided interface.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-purple-600 to-indigo-600",
    tags: ["React.js", "Python", "FastAPI", "REST APIs"],
    metrics: "Live on Vercel • Automates document workflows",
    featured: true,
    github: "https://github.com/abishek16-coder",
    live: "https://doc-gen-pro.vercel.app/"
  },
  {
    id: "ngo-portal",
    title: "NGO Portal",
    tagline: "Community & Volunteer Management Platform",
    category: "Full Stack",
    description: "A portal for an NGO to share updates, manage activities and communicate with volunteers online — built for simplicity, clarity and easy access for everyone.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-cyan-600 to-blue-600",
    tags: ["React.js", "JavaScript", "REST APIs", "Responsive UI"],
    metrics: "Live at ncvorg.com",
    featured: true,
    github: "https://github.com/abishek16-coder",
    live: "https://ncvorg.com"
  },
  {
    id: "inbox-guardian",
    title: "Inbox Guardian",
    tagline: "AI Email Spam Detection",
    category: "AI / ML",
    description: "An AI-focused tool that identifies suspicious and unwanted emails, helping users confidently distinguish spam from legitimate messages using machine-learning techniques.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-emerald-600 to-teal-600",
    tags: ["Python", "Gmail API", "OAuth 2.0", "Machine Learning"],
    metrics: "AI-powered spam classification",
    featured: true,
    github: "https://github.com/abishek16-coder",
    live: "https://github.com/abishek16-coder"
  },
  {
    id: "medqube",
    title: "MedQube",
    tagline: "Hybrid Quantum ML Disease Analysis",
    category: "AI / ML",
    description: "A hybrid quantum machine-learning platform designed for disease analysis by combining classical ML models with quantum computing techniques.",
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-rose-600 to-pink-600",
    tags: ["Python", "Quantum ML", "Machine Learning", "Streamlit"],
    metrics: "Hybrid classical + quantum ML",
    featured: false,
    github: "https://github.com/abishek16-coder",
    live: "https://github.com/abishek16-coder"
  },
  {
    id: "pos-table-ordering",
    title: "POS & Table Ordering App",
    tagline: "Flutter Point-of-Sale Prototype",
    category: "Mobile",
    description: "A Flutter-based point-of-sale and table-ordering application built during my internship at Petpooja, focused on smooth ordering flows for restaurant staff.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-amber-600 to-orange-600",
    tags: ["Flutter", "Dart", "Mobile UI", "POS"],
    metrics: "Internship project at Petpooja",
    featured: false,
    github: "https://github.com/abishek16-coder",
    live: "https://github.com/abishek16-coder"
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio",
    tagline: "Personal Portfolio Website",
    category: "Frontend",
    description: "This interactive portfolio built with React, Vite and Tailwind CSS — featuring animated particle backgrounds, smooth motion effects and a fully responsive layout.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-violet-600 to-cyan-600",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
    metrics: "Responsive • Animated UI",
    featured: false,
    github: "https://github.com/abishek16-coder",
    live: "#"
  }
];

export const experiences = [
  {
    period: "2026 — Present",
    role: "President — BCA Department",
    company: "Avichi College of Arts and Science",
    location: "Chennai, India",
    description: "Leading the BCA department as elected President in my third year, coordinating student activities, events and department initiatives.",
    achievements: [
      "Served as Joint Secretary of the BCA Department in the second year (2025 — 2026)",
      "Organized and participated in college ideathons and hackathons",
      "Led team coordination and student engagement activities"
    ],
    technologies: ["Leadership", "Teamwork", "Event Coordination"]
  },
  {
    period: "2025",
    role: "Flutter App Development Intern",
    company: "Petpooja",
    location: "Chennai, India",
    description: "Professional exposure to mobile application development, contributing to a point-of-sale (POS) and table-ordering system built with Flutter.",
    achievements: [
      "Built and refined Flutter UI screens for POS and table-ordering flows",
      "Collaborated with the development team to test and improve app usability",
      "Strengthened practical skills in Dart, Flutter widgets and app state management"
    ],
    technologies: ["Flutter", "Dart", "Mobile UI", "Git"]
  },
  {
    period: "2024",
    role: "Email & Chat Process",
    company: "Clinch Soft Bridge",
    location: "Chennai, India",
    description: "Developed professional communication skills through email handling and chat-based work processes in a fast-paced support environment.",
    achievements: [
      "Handled email and chat-based communication with accuracy and professionalism",
      "Improved attention to detail, responsiveness and client communication"
    ],
    technologies: ["Email Handling", "Chat Support", "Communication"]
  }
];

export const services = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web applications built with React, Node.js and Python/FastAPI — from responsive interfaces to reliable REST API backends.",
    icon: "Layers",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile apps with Flutter and Dart, focused on clean UI, smooth navigation and real-world usability.",
    icon: "Cpu",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "AI Integration & Automation",
    description: "Integrating AI services like Google Gemini and Hugging Face to add smart capabilities — detection, generation and workflow automation.",
    icon: "Sparkles",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "APIs & Database Solutions",
    description: "Well-structured REST APIs and database design with PostgreSQL, MongoDB, Firebase and Prisma, powering modern applications reliably.",
    icon: "Server",
    color: "from-rose-500 to-pink-500"
  }
];

export const testimonials = [
  {
    name: "Project Mentor",
    role: "Faculty",
    company: "BCA Department",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    content: "Muthu Abishek is a curious and dependable student who consistently turns concepts into working projects. His willingness to learn new technologies quickly stands out in the department."
  },
  {
    name: "Internship Guide",
    role: "Engineering Team",
    company: "Petpooja",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    content: "During his internship, Abishek picked up Flutter quickly and contributed meaningfully to our POS and table-ordering screens. He is proactive, focused and eager to improve."
  },
  {
    name: "Hackathon Teammate",
    role: "Collaborator",
    company: "College Ideathon",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    content: "Working with Abishek on our ideathon project was smooth — he communicates clearly, stays calm under deadlines and always helps the team move forward."
  }
];