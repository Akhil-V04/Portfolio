// ═══════════════════════════════════════════════════════════
// constants.js — All portfolio content in one place.
// Edit text here, never inside components.
// ═══════════════════════════════════════════════════════════

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  greeting: "Hi I'm",
  firstName: "Akhil",
  lastName: "Vaddeboina",
  roles: ["Software Engineer", "Full-Stack Developer"],
  watermark: "PORTFOLIO",
  body: "I build full-stack applications with React and Node, focused on secure, production-deployed systems — currently looking for SWE Intern / Associate SWE roles.",
  ctaPrimary: { label: "Download Resume", href: "/assets/resume/resume.pdf" },
  ctaSecondary: { label: "View Projects", href: "#projects" },
  photo: "/assets/profile/photo.png",
};

export const ABOUT = {
  sectionLabel: "// about me",
  heading: "I've been building for the web since college started",
  bio: "B.Tech CSE student at Vignana Bharati Institute of Technology (2023–2027). I focus on full-stack development with an emphasis on security and clean architecture — building things that are actually deployed and used, not just tutorial projects.",
  stats: [
    { value: "3", label: "Production-deployed projects" },
    { value: "3", label: "Internships completed" },
    { value: "2027", label: "Expected graduation" },
  ],
};

export const SKILLS = [
  {
    category: "Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript", "PHP"],
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "React.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "PHP", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Security & Auth",
    items: ["JWT", "OAuth 2.0", "bcrypt", "AES-256 Encryption", "RBAC"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma", "Vercel"],
  },
];

export const PROJECTS = [
  {
    title: "EMAR",
    tagline: "Electronic Medical Access Record System",
    stack: [
      "React.js", "Node.js", "Express.js", "MongoDB",
      "JWT", "OAuth 2.0", "Blockchain", "AES-256",
    ],
    description:
      "Cloud-based medical record system with role-based access, JWT authentication, Google OAuth 2.0, AES-256 encryption, QR-based patient identification, and blockchain-based audit logging for secure, tamper-proof record management.",
    live: "https://emar-7ztj.vercel.app",
    source: "https://github.com/Akhil-V04/EMAR.git",
  },
  {
    title: "Zevent",
    tagline: "Online Event Management Platform",
    stack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Git"],
    description:
      "Production-grade event management platform with multi-role portals, QR-based ticket generation and verification, and a normalized MySQL database. Independently handled deployment and bug fixes.",
    live: "https://zevent.liveblog365.com",
    source: "https://github.com/Akhil-V04/zevent",
  },
  {
    title: "F.R.I.D.A.Y.",
    tagline: "Local AI Assistant",
    stack: ["Python", "FastAPI", "Ollama", "Whisper", "Edge TTS"],
    description:
      "Fully offline, local-first AI assistant with voice input/output, running on consumer GPU hardware — no cloud API dependency, built for privacy and low-latency interaction.",
    live: null,
    source: "https://github.com/Akhil-V04/F.R.I.D.A.Y.git",
  },
];

export const EXPERIENCE = [
  {
    role: "AI Annotation Specialist Intern",
    company: "Student Tribe (TAO Digitals)",
    date: "Jun – Jul 2026",
    description:
      "Annotated face, head, and torso keypoints across a high-volume video dataset for Apple's computer vision training pipeline, maintaining quality through strict multi-stage review.",
    logo: "/assets/logos/student-tribe.png",
    offerLetter: "/assets/offer-letters/student-tribe-offer.pdf",
    completionCert: null,
  },
  {
    role: "Web Development Intern",
    company: "InAmigos Foundation (NGO)",
    date: "May 2026",
    description:
      "Audited the organization's website end-to-end, surfacing security and UX gaps, then built and shipped an HTML/CSS awareness webpage from Figma designs.",
    logo: "/assets/logos/inamigos.png",
    offerLetter: "/assets/offer-letters/inamigos-offer.pdf",
    completionCert: "/assets/offer-letters/inamigos-completion.pdf",
  },
  {
    role: "Frontend & Design Intern",
    company: "Coding Jr",
    date: "Jul – Sep 2025",
    description:
      "Designed Figma UI assets for digital communication campaigns and translated mockups into responsive HTML/CSS components.",
    logo: "/assets/logos/coding-jr.png",
    offerLetter: "/assets/offer-letters/coding-jr-offer.pdf",
    completionCert: null,
  },
];

export const LEADERSHIP = [
  { role: "Coordinator", org: "IEEE VBITSB", period: "2025–2026" },
  {
    role: "Campus Coordinator",
    org: "Google Crowdsource VBIT",
    period: "2025–2026",
  },
  {
    role: "Student Coordinator",
    org: "StreetCause VBIT (NGO)",
    period: "2024–2026",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Python Full Stack",
    issuer: "ISO",
    file: "/assets/certifications/Python Full Stack_ISO.pdf",
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte",
    file: "/assets/certifications/Deloitte Technology Job Simulation.pdf",
  },
  {
    title: "Advance Software Job Simulation",
    issuer: "Walmart",
    file: "/assets/certifications/walmart_advance software job simulation certificate.pdf",
  },
  {
    title: "Android Developer Virtual Internship",
    issuer: "AICTE",
    file: "/assets/certifications/Android Developer Virtual Internship_AICTE.pdf",
  },
];

export const CONTACT = {
  email: "akhilvaddeboina25@gmail.com",
  linkedin: "https://www.linkedin.com/in/vaddeboina-akhil-9982b43a4?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/Akhil-V04",
  location: "Hyderabad, Telangana",
};
