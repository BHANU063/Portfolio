export const profile = {
  name: "Bhanu Reddy.M",
  role: "B.E. CSE Student | Generative AI Enthusiast | Blockchain Developer",
  summary:
    "B.E. Computer Science candidate specialized in Generative AI and Secure Distributed Systems. Proficient in Python and Java with hands-on experience building HybridChain Supply Management System (Blockchain/Web3) and user-centric AI solutions. Passionate about FinTech, data-driven security, and enterprise-grade platforms.",
  contact: {
    email: "bhanureddym635@gmail.com",
    phone: "+91 7483400810",
    location: "Bengaluru, India",
    linkedin: "https://www.linkedin.com/in/bhanu-reddy-a4780b26",
    github: "https://github.com/BHANU063",
  },
  education: [
    {
      school: "New Horizon College Of Engineering",
      degree: "Bachelor of Engineering (B.E.) in Computer Science",
      period: "Sep 2023 – Mar 2027",
      details: "GPA: 8.61",
    },
  ],
  projects: [
    {
      title: "HybridChain Supply Management System",
      stack: ["Python", "Flask", "Web3.py", "Solidity", "SQLite"],
      bullets: [
        "Engineered an enterprise-grade Hybrid Supply Chain System with dual data model for blockchain security and Flask performance.",
        "Built and deployed immutable smart contracts (Solidity) on Ganache for transparent record keeping and auditable traceability.",
        "Integrated via Flask API using Web3.py for signed, secure, transactional communication and user authentication.",
        "Delivered a responsive web interface validating 100% of data integrity and providing a verifiable digital audit trail.",
      ],
    },
    {
      title: "Platera: Generative AI Recipe & Sommelier App",
      stack: ["Generative AI", "JavaScript", "Tailwind CSS"],
      bullets: [
        "Built a generative cooking assistant for AI-crafted recipes, pairing, and ingredient adaptation.",
        "Integrated a scalable prompt pipeline; engineered responsive UI with Tailwind and vanilla JS.",
        "Developed a Generative AI application that transforms ingredients into complex recipes, featuring an integrated AI Sommelier.",
        "Engineered the core functionality using direct API key integration with the Google Gemini API to handle all recipe and wine-pairing generation requests.",
        "The frontend was engineered for responsiveness using Tailwind CSS and pure JavaScript to deliver fast, dynamic, and user-centric results.",
      ],
    },
    {
      title: "PeerShare: Generative Q&A and Collaboration App",
      stack: ["Next.js", "TypeScript", "Tailwind", "Summarization"],
      bullets: [
        "Designed collaborative note-sharing with AI Q&A and summarization.",
      ],
    },
  ],
  skills: {
    languages: ["Python", "Java", "C++", "C", "HTML", "CSS", "JavaScript", "Shell Script"],
    frameworks: ["Pandas", "NumPy"],
    devtools: ["VS Code", "Jupyter", "PyCharm", "Git"],
    software: ["Agile", "CI/CD", "Resiliency", "Secure Coding"],
    cloudData: ["Microsoft Azure (Certified)", "MySQL", "Big Data"],
    blockchain: ["Web3", "DeFi", "Smart Contracts", "FinTech"],
    soft: ["Problem Solving", "Technical Writing", "Teamwork", "Research", "Adaptability"],
    genai: ["GitHub Copilot", "ChatGPT", "Prompt Engineering", "Machine Learning"],
  },
  certificates: [
    "Prompt Engineering for ChatGPT",
    "Microsoft Certified: Azure Fundamentals",
    "Introduction to Generative AI",
    "Create Generative AI Apps on Google Cloud",
    "HackerRank Certified: Java",
  ],
  languages: [
    { name: "English", level: "Advanced" },
    { name: "Hindi", level: "Novice" },
    { name: "Spanish", level: "Intermediate" },
  ],
} as const;
