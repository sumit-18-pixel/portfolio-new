export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories?: ("Frontend" | "Backend" | "Fullstack")[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
};

export type FreelanceProject = {
  title: string;
  category: string;
  description: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
  fullStack: string[];
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export type OpenSourceContribution = {
  title: string;
  repo: string;
  prNumber: number;
  url: string;
  status: "Merged";
  description: string;
  technologies: string[];
};

export const site = {
  // =========================================================
  // PERSONAL INFORMATION
  // =========================================================

  name: "Sumit Kohli",

  firstName: "Sumit",

  url: "https://sumit-portfolio.vercel.app",

  quote: {
    text: "Security is not a product, but a process.",
    author: "Bruce Schneier",
  },

  profileImages: [
    "/profile.webp",
  ],

  bannerImage: "/social-banner.gif",

  socialBannerImage: "/social-banner.gif",

  initials: "SK",

  role: "Web Developer & Cybersecurity Enthusiast",

  location: "Pithoragarh, Uttarakhand, India",

  timezone: "Asia/Kolkata",

  email: "sumitkingkohlisk@gmail.com",

  greeting: "Hey, I'm Sumit", 

  tagline:
    "Building Modern Web Experiences, Automating Real-World Solutions & Exploring Cybersecurity.",

  // =========================================================
  // ABOUT
  // =========================================================

  about: [
    "I'm Sumit Kohli, a third-year Computer Science Engineering student passionate about Web Development, Cybersecurity, and Automation. I enjoy building modern, responsive, and user-friendly web applications that solve real-world problems.",

    "My technical interests include frontend and backend development, database management, and developing automation solutions. I have hands-on experience working with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.",

    "Apart from development, I'm enthusiastic about Ethical Hacking, Linux, Network Security, and Capture The Flag (CTF) challenges. I believe in continuous learning, experimenting with new technologies, and building practical projects that strengthen my technical skills.",
  ],

  tldr: [
    "Building modern web applications.",
    "Developing automation bots & backend solutions.",
    "Exploring Ethical Hacking & Cybersecurity.",
    "Passionate about Linux, Networking & CTFs.",
  ],

  // =========================================================
  // CURRENT STATUS
  // =========================================================

  status: {
    available: true,

    availableText: "open to web development & cybersecurity opportunities",

    nowLearning:
      "Cybersecurity • Ethical Hacking • Network Security • CTFs",

    nowBuilding:
      "Telegram automation bots & web apps",

    nowListening:
      "focus playlists",
  },

  // =========================================================
  // SOCIAL LINKS
  // =========================================================

  socials: {
    github:
      "https://github.com/sumit-18-pixel",

    twitter:
      "https://x.com/SumitKohi1818",

    linkedin:
      "https://www.linkedin.com/in/sumit-kohli-199681379/",

    email:
      "mailto:sumitkingkohlisk@gmail.com",

    resume:
      "#",

    discord:
      "https://discord.com/users/sumitkohli2817",

    medium:
      "",
  },

  // =========================================================
  // EXPERIENCE
  // =========================================================

  experience: [
    {
      company: "Independent Projects & Engineering Practice",
      role: "Full Stack & Automation Developer",
      period: "2024 – Present",
      blurb:
        "Building automated bots, web applications, and backend services. Developed a Telegram-based Gym Management & Automation Bot using Node.js and MongoDB to streamline member subscriptions, payments, and automated alerts.",
      url: "https://github.com/sumit-18-pixel",
    },
    {
      company: "Cybersecurity & CTF Practice",
      role: "Security & Networking Enthusiast",
      period: "2024 – Present",
      blurb:
        "Actively working with Linux and Kali Linux environments, exploring network protocols, ethical hacking workflows, and solving CTF (Capture The Flag) challenges to develop offensive and defensive security skills.",
      url: "https://github.com/sumit-18-pixel",
    },
  ] as Job[],

  // =========================================================
  // FREELANCE PROJECTS
  // =========================================================

  freelanceProjects: [] as FreelanceProject[],

  // =========================================================
  // PROJECTS
  // =========================================================

  projects: [
    {
      title: "Gym Management & Automation Bot",

      blurb:
        "A Telegram-based Gym Management & Automation Bot designed to simplify gym operations, member subscriptions, and automated fee reminders.",

      story:
        "A Telegram-based Gym Management & Automation Bot designed to simplify gym operations and help gym owners efficiently manage their members, subscriptions, and payments.\n\nKey Features:\n• Member registration and profile management.\n• Membership subscription and expiry tracking.\n• Paid and unpaid fee management.\n• Automated expiry notifications and reminders directly via Telegram.\n• Centralized member information management for gym owners to reduce administrative friction.",

      stack: [
        "Node.js",
        "Telegram Bot API",
        "MongoDB",
        "Express.js",
        "Automation",
        "REST APIs",
      ],

      year: "2026",

      links: {
        source: "https://github.com/sumit-18-pixel",
      },

      featured: true,

      image: "/project-images/bidding-wars.webp",

      categories: [
        "Fullstack",
        "Backend",
      ],
    },

    {
      title: "Personal Portfolio Website",

      blurb:
        "A personal portfolio website built to showcase professional identity, technical skills, projects, and social presence through a modern and responsive interface.",

      story:
        "A personal portfolio website built to showcase professional identity, technical skills, projects, and social presence through a modern and responsive interface.\n\nFeatures include smooth animations, interactive components, command palette, live GitHub contribution heatmaps, dark aesthetic, and optimized responsive layouts for mobile, tablet, and desktop.",

      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Vite",
        "Git",
        "GitHub",
      ],

      year: "2026",

      links: {
        live: "http://localhost:3000",
        source: "https://github.com/sumit-18-pixel",
      },

      featured: true,

      image: "/project-images/linkshub.webp",

      categories: [
        "Frontend",
        "Fullstack",
      ],
    },
  ] as Project[],

  // =========================================================
  // SKILLS
  // =========================================================

  skills: [
    // Languages & Web
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",

    // Backend & Database
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",

    // Tools & DevOps
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "Kali Linux",
    "n8n",

    // Areas of Interest
    "Cybersecurity",
    "Ethical Hacking",
    "CTF",
    "Networking",
    "Automation",
  ],

  // =========================================================
  // WRITING
  // =========================================================

  writing: [] as Post[],

  // =========================================================
  // OPEN SOURCE
  // =========================================================

  openSourceContributions: [] as OpenSourceContribution[],

  // =========================================================
  // GITHUB
  // =========================================================

  github: {
    username: "sumit-18-pixel",

    contributionsLastYear: "Active",
  },

  // =========================================================
  // FOOTER
  // =========================================================

  footerNote: "Built by Sumit Kohli",
} as const;

export type Site = typeof site;
