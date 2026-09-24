const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Certifications",
    link: "#certifications", // Updated to match our new section!
  },
];

const words = [
  { text: "Hardware", imgPath: "/images/ideas.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Firmware", imgPath: "/images/concepts.svg" },
  { text: "Sensors", imgPath: "/images/designs.svg" },
  { text: "Robotics", imgPath: "/images/ideas.svg" },
  { text: "Data", imgPath: "/images/concepts.svg" },
  { text: "Controls", imgPath: "/images/designs.svg" },
  { text: "DSP", imgPath: "/images/code.svg" },
];

// Updated to the custom stats we created earlier
const counterItems = [
  { value: 30, suffix: "+", label: "Engineering & Data Projects" },
  { value: 5, suffix: "", label: "System Models Simulated" },
  { value: 20, suffix: "+", label: "Softwares Known" },
  { value: 91, suffix: "%", label: "Demand Forecasting Accuracy" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
];

// Tailored to your engineering and analytical mindset
const abilities = [
  {
    imgPath: "/images/seo.png", // Feel free to update this icon image
    title: "Systems Thinking",
    desc: "Integrating hardware, software, and data to solve complex multidisciplinary engineering challenges.",
  },
  {
    imgPath: "/images/chat.png", // Feel free to update this icon image
    title: "Data-Driven Analysis",
    desc: "Using quantitative modeling and statistical tools to optimize performance and identify inefficiencies.",
  },
  {
    imgPath: "/images/time.png", // Feel free to update this icon image
    title: "Precision & Reliability",
    desc: "Maintaining strict accuracy and execution in high-pressure clinical and advanced manufacturing environments.",
  },
];

// Updated to reflect your actual tech stack
const techStackImgs = [
  {
    name: "Python & Data",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "C/C++ & Embedded",
    imgPath: "/images/logos/cplusplus.png", // Add a C++ logo to your images folder
  },
  {
    name: "React & Web",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "MATLAB & Controls",
    imgPath: "/images/logos/matlab.png", // Add a MATLAB logo
  },
  {
    name: "CAD & SolidWorks",
    imgPath: "/images/logos/solidworks.png", // Add a SolidWorks/CAD logo
  },
];

// Note: I kept your existing .glb paths so the 3D slider doesn't break, 
// but updated the names to reflect your skills!
const techStackIcons = [
  {
    name: "React & Web Dev",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python & Data Analysis",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "C++ & Firmware",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "3D Modeling & CAD",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// Pulled straight from your resume
const expCards = [
  {
    review: "Designing and evaluating soft robotic actuation systems using embedded sensing, pneumatic control, and closed-loop feedback to improve motion accuracy, repeatability, and response stability.",
    imgPath: "/images/exp-robotics.png", // Add a robotics/lab image
    logoPath: "/images/tmu-logo.png", // Add TMU logo
    title: "Advanced Manufacturing Soft Robotics Researcher",
    date: "2026 - Present",
    responsibilities: [
      "Supported development of adaptive robotic platforms by integrating embedded control and intelligent algorithms.",
      "Contributed to research workflows involving experimental testing, system tuning, and hardware integration.",
      "Developed and analyzed experimental models utilizing data-driven performance evaluation.",
    ],
  },
  {
    review: "Coordinated information flow between physicians, nurses, registration staff, and diagnostic departments to support timely clinical decision-making under high-pressure conditions.",
    imgPath: "/images/exp-medical.png", // Add a hospital/medical image
    logoPath: "/images/osler-logo.png", // Add William Osler Health logo
    title: "Emergency Department Clerical Associate",
    date: "2024 - Present",
    responsibilities: [
      "Maintained accurate real-time patient information supporting hundreds of patient encounters daily.",
      "Managed multiple concurrent requests while maintaining accuracy and confidentiality.",
      "Operated efficiently in a fast-paced environment demanding strong attention to detail and teamwork.",
    ],
  }
];

const certificationsList = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Coursera",
    description: "Comprehensive training in artificial intelligence, data analysis, and machine learning workflows.",
    imgPath: "/images/google-logo.png", // Add a Google logo
  },
  {
    title: "Financial Markets Certification",
    issuer: "Yale University Online",
    description: "In-depth study of stock analysis, quantitative modeling, financial modeling, and market operations.",
    imgPath: "/images/yale-logo.png", // Add a Yale logo
  },
  {
    title: "Member",
    issuer: "Rehabilitation Engineering & Assistive Technology Society of North America (RESNA)",
    description: "Active member contributing to the advancement of rehabilitation engineering and assistive technologies.",
    imgPath: "/images/resna.png", // Add a RESNA logo
  },
  {
    title: "Six Sigma White Belt",
    issuer: "The Council for Six Sigma Certification",
    description: "Foundational certification in process improvement, quality control, and minimizing operational defects.",
    imgPath: "/images/six-sigma-logo.png", // Add a Six Sigma logo
  },
  {
    title: "Medical Terminology Certificate",
    issuer: "Universal Class",
    description: "Certified understanding of clinical language, supporting effective communication in healthcare and biomedical environments.",
    imgPath: "/images/medical-logo.jpg", // Add a generic medical cross or Universal Class logo
  }
];

const expLogos = [
  {
    name: "TMU",
    imgPath: "/images/tmu-logo.png",
  },
  {
    name: "William Osler",
    imgPath: "/images/osler-logo.png",
  },
];

// Removed FB/Insta/Twitter and added your actual professional links
const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/shivam-dave-a89072209",
  },
  {
    name: "github",
    imgPath: "/images/github.png", // Make sure to add a github logo to your images folder
    link: "https://github.com/ShivamD18",
  },
  {
    name: "email",
    imgPath: "/images/email.png", // Make sure to add an email icon to your images folder
    link: "mailto:dave.shivam18@gmail.com",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  certificationsList,
  techStackIcons,
  techStackImgs,
  navLinks,
};