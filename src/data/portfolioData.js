// Centralized Portfolio Data
// All editable portfolio content in one place

export const personalInfo = {
  name: "Milan Rawat",
  primaryTitle: "Full Stack Web Developer",
  rotatingTitles: [
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "React & Next.js Developer",
    "Node.js Backend Developer",
    "AI-Integrated Web Developer",
  ],
  email: "milanrawat086@gmail.com",
  phone: "+91 9528825708",
  location: "India",
  summary:
    "Full Stack Developer with 4+ years of experience building healthcare, education, e-commerce, marketplace, and travel applications using React, Next.js, Node.js, Express.js, MongoDB, and related technologies. Experienced in payment systems, real-time communication, cloud deployment, healthcare interoperability, AI integrations, and scalable REST API development.",
  summaryShort:
    "Full Stack Developer with 4+ years of experience in React, Node.js, MongoDB, payment systems, real-time communication, and cloud deployment.",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Milan-rawat",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/milan-rawat",
    icon: "linkedin",
  },
];

export const portfolioLinks = {
  resume: "https://drive.google.com/file/d/1EaLc2CGjklyUqXpwvKS0En-yj9jcFdav/view?usp=sharing",
  github: "https://github.com/Milan-rawat",
  linkedin: "https://www.linkedin.com/in/milan-rawat",
  portfolio: "https://milan-rawat.github.io",
};

export const aboutContent = {
  description: [
    "I am a Full Stack Web Developer with more than four years of experience building production applications across healthcare, education, e-commerce, marketplaces, food delivery, and travel technology.",
    "My primary expertise is in React, Next.js, TypeScript, Node.js, Express.js, MongoDB, REST APIs, real-time systems, payment integrations, authentication, and cloud deployment.",
    "I have worked on healthcare interoperability with Epic and Cerner ecosystems, Stripe and Razorpay payment systems, Socket.IO notifications and chat, Jitsi Meet integrations, Firebase notifications, AWS deployments, AI-powered chatbots, and subscription-based platforms.",
    "I enjoy transforming complex business requirements into secure, scalable, responsive, and user-friendly products.",
  ],
  services: [
    {
      icon: "💻",
      title: "Full Stack Development",
      description: "Building end-to-end web applications with React, Node.js, and MongoDB",
    },
    {
      icon: "🏗️",
      title: "Frontend Architecture",
      description: "Creating responsive, performant UIs with React, Next.js, and TypeScript",
    },
    {
      icon: "⚙️",
      title: "Backend APIs",
      description: "Designing scalable REST APIs, real-time systems, and microservices",
    },
    {
      icon: "☁️",
      title: "Cloud & Deployment",
      description: "Deploying applications on AWS EC2, Amplify, Render, and Nginx",
    },
    {
      icon: "💳",
      title: "Payment Integrations",
      description: "Implementing Stripe, Razorpay subscriptions, and webhook automation",
    },
    {
      icon: "🤖",
      title: "AI-Integrated Applications",
      description: "Building OpenAI-powered chatbots, RAG systems, and intelligent workflows",
    },
  ],
};

export const highlights = [
  { label: "Years Experience", value: "4+" },
  { label: "Professional & Personal Projects", value: "10+" },
  { label: "Development", value: "Full Stack" },
  { label: "Industry Domains", value: "Multiple" },
];

export const experienceData = [
  {
    id: 1,
    company: "RTE Softwares",
    role: "Full Stack Developer",
    location: "Ludhiana",
    startDate: "Sep 2022",
    endDate: "Present",
    image: "/images/experience/rte.jpg",
    website: "https://rtesoftwares.com",
    projects: [
      {
        name: "BeekHealth",
        website: "", // TODO: Add verified website URL
        responsibilities: [
          "Led the migration from 1UP to Fasten, enabling secure healthcare interoperability with Epic and Cerner EHR ecosystems.",
          "Developed an OpenAI-powered chatbot for provider and laboratory queries.",
          "Implemented Stripe subscription billing and webhook-based payment lifecycle automation.",
          "Integrated LogRocket for production monitoring, issue diagnosis, and debugging.",
          "Implemented laboratory order creation, tracking, and report-delivery workflows.",
        ],
        technologies: ["React", "Next.js", "Django", "OpenAI API", "Stripe", "LogRocket", "Healthcare APIs"],
      },
      {
        name: "Cheetah Learning",
        website: "", // TODO: Add verified website URL
        responsibilities: [
          "Built advanced search and filtering capabilities in Django Admin.",
          "Improved management workflows for student, examination, and class records.",
          "Developed end-to-end online examination workflows.",
          "Implemented examination delivery, submission processing, result generation, and performance tracking.",
        ],
        technologies: ["Django", "Python", "Django Admin", "JavaScript", "Online Examination"],
      },
      {
        name: "Geeker",
        website: "", // TODO: Add verified website URL
        responsibilities: [
          "Improved Jitsi Meet session management and authentication workflows.",
          "Optimized Socket.IO real-time notifications for session requests, status changes, and technician availability.",
          "Redesigned technician onboarding and registration workflows.",
          "Improved Stripe payment workflows and webhook reliability.",
        ],
        technologies: ["React", "Node.js", "Socket.IO", "Jitsi Meet", "Stripe", "WebSockets"],
      },
    ],
  },
  {
    id: 2,
    company: "Freelancer",
    role: "Full Stack Developer",
    location: "",
    startDate: "Mar 2022",
    endDate: "Aug 2022",
    image: "/images/experience/freelance.png",
    projects: [
      {
        name: "MyZon",
        responsibilities: [
          "Developed scalable Node.js APIs.",
          "Implemented Firebase-powered notifications.",
          "Enabled real-time order tracking and customer communication.",
          "Integrated ShipRocket logistics workflows.",
          "Automated shipment processing, fulfilment, and delivery tracking.",
        ],
        technologies: ["Node.js", "Express.js", "Firebase", "ShipRocket", "REST APIs"],
      },
      {
        name: "Samonn",
        responsibilities: [
          "Developed backend APIs and business logic for restaurants, riders, customers, and orders.",
          "Supported end-to-end food ordering and delivery workflows.",
          "Built a React.js admin panel for restaurant, rider, order, and customer management.",
        ],
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Admin Dashboard"],
      },
    ],
  },
  {
    id: 3,
    company: "Applore Technologies",
    role: "MERN Stack Developer Intern",
    location: "",
    startDate: "Aug 2021",
    endDate: "Feb 2022",
    image: "/images/experience/applore.jpg",
    website: "https://www.apploretechnologies.com",
    projects: [
      {
        name: "Adorae",
        responsibilities: [
          "Built scalable Node.js APIs for user-generated content.",
          "Optimized MongoDB data models and retrieval workflows.",
          "Designed a custom search engine using optimized indexing strategies.",
          "Integrated AWS-based media storage and content delivery.",
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "AWS", "Search", "REST APIs"],
      },
      {
        name: "Unlimit.it",
        responsibilities: [
          "Developed a role-based backend platform with secure authentication and authorization.",
          "Built scalable REST APIs supporting multiple user roles.",
          "Built a React.js admin panel for products, users, and order management.",
          "Improved API and database query performance.",
          "Implemented product tagging and search functionality.",
        ],
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Authentication", "REST APIs"],
      },
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    name: "TrippinBuddy",
    subtitle: "Premium Travel Social Networking Platform",
    description:
      "TrippinBuddy is a production-ready travel social networking platform where users can create trips, join trips created by other travellers, discover compatible travel partners, manage trip requests, and communicate through real-time messaging.",
    startDate: "Oct 2025",
    endDate: "Present",
    status: "Active Development",
    technologies: [
      "React.js", "TypeScript", "Vite", "Redux Toolkit", "Tailwind CSS",
      "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Socket.IO",
      "Razorpay", "Mapbox GL", "Multer", "AWS EC2", "AWS Amplify", "Nginx",
    ],
    features: [
      "Secure JWT authentication",
      "Role-based authorization",
      "Trip creation and management",
      "Join-trip request workflow",
      "Traveller discovery",
      "Real-time messaging",
      "Notifications",
      "Responsive mobile-first UI",
      "Image uploads",
      "Razorpay recurring subscriptions",
      "Webhook verification",
      "Mapbox destination search and map visualization",
      "AWS production deployment",
    ],
    githubUrl: "https://github.com/Milan-rawat",
    liveUrl: "https://master.d1ax62wsl9bxf4.amplifyapp.com",
    image: "/images/projects/trippinbuddy.png",
    featured: true,
  },
  {
    id: 2,
    name: "Natours",
    subtitle: "Full Stack Tour Booking Platform",
    description:
      "A full-stack tour booking platform with secure authentication, payments, booking management, interactive maps, reviews, image processing, email workflows, and production-focused security.",
    startDate: "Feb 2021",
    endDate: "Jul 2026",
    technologies: [
      "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Stripe",
      "Mapbox GL", "Multer", "Sharp", "SendGrid", "Render",
    ],
    features: [
      "JWT authentication",
      "Role-based access control",
      "Password reset",
      "Stripe Checkout",
      "Webhook-based booking confirmation",
      "Transactional emails",
      "Interactive Mapbox maps",
      "Ratings and review aggregation",
      "Image upload and optimization",
      "Helmet, rate limiting, CORS",
      "NoSQL injection sanitization",
      "XSS protection",
    ],
    githubUrl: "https://github.com/Milan-rawat",
    liveUrl: "https://natours-4q96.onrender.com",
    image: "/images/projects/natours.png",
    featured: true,
  },
];

export const professionalProjects = [
  {
    id: 3,
    name: "BeekHealth",
    subtitle: "Healthcare Interoperability Platform",
    description: "Healthcare platform connecting providers with Epic and Cerner EHR ecosystems, featuring AI-powered chatbot and Stripe billing.",
    technologies: ["React", "Next.js", "Django", "OpenAI API", "Stripe", "LogRocket"],
    category: "Professional Work",
  },
  {
    id: 4,
    name: "Cheetah Learning",
    subtitle: "EdTech Examination Platform",
    description: "Education platform with advanced search, filtering, and end-to-end online examination workflows.",
    technologies: ["Django", "Python", "Django Admin", "JavaScript"],
    category: "Professional Work",
  },
  {
    id: 5,
    name: "Geeker",
    subtitle: "Real-Time Tech Support Platform",
    description: "Tech support marketplace with Jitsi Meet video sessions, Socket.IO notifications, and Stripe payments.",
    technologies: ["React", "Node.js", "Socket.IO", "Jitsi Meet", "Stripe"],
    category: "Professional Work",
  },
  {
    id: 6,
    name: "MyZon",
    subtitle: "E-Commerce & Logistics Platform",
    description: "E-commerce platform with Firebase notifications, ShipRocket logistics, and real-time order tracking.",
    technologies: ["Node.js", "Express.js", "Firebase", "ShipRocket"],
    category: "Professional Work",
  },
  {
    id: 7,
    name: "Samonn",
    subtitle: "Food Delivery Platform",
    description: "End-to-end food ordering and delivery platform with restaurant, rider, and customer management.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    category: "Professional Work",
  },
];
