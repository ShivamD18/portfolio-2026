// Centralized portfolio content. Edit the data here; the sections render from it.

const profile = {
  name: "Shivam Dave",
  fullName: "Shivam Alap Dave",
  role: "Mechatronics Engineering Student",
  school: "Toronto Metropolitan University",
  location: "Toronto, ON",
  email: "dave.shivam18@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivamalapdave",
  github: "https://github.com/ShivamD18",
  resume: "/Shivam_Dave_Resume.pdf",
};

const navLinks = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Certifications", link: "#certifications" },
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

// Project categories, in the order the filter buttons show them
const projectCategories = [
  "Biomedical & DSP",
  "Robotics & Controls",
  "Embedded Systems",
  "Data & Analytics",
  "Design & Simulation",
];

// Add, remove or reorder projects here. `featured` projects show before "Show all".
// `img` is optional: projects without one get a generated cover.
const projects = [
  {
    title: "ECG Signal Lab",
    category: "Biomedical & DSP",
    context: "Personal project",
    year: "2026",
    featured: true,
    img: "/images/projects/ecg-signal-lab.webp",
    imgAlt: "ECG strip with every heartbeat labelled by the classifier, above an RR-interval tachogram",
    summary:
      "An open-source Python package and in-browser teaching lab that filters real ECGs, detects every heartbeat with the Pan-Tompkins algorithm and classifies each beat with machine learning.",
    highlights: [
      "99.72% QRS sensitivity and 99.62% positive predictivity across all 48 MIT-BIH records (109,494 beats)",
      "92.5% beat-classification accuracy on 22 unseen patients, using an inter-patient split that avoids data leakage",
      "The website runs the same pipeline in the browser; 31 CI tests check Python and JavaScript give identical results",
    ],
    tags: ["Python", "NumPy", "SciPy", "Machine Learning", "JavaScript", "GitHub Actions"],
    links: [
      { label: "Live demo", href: "https://shivamd18.github.io/SignalFilteringECG/", type: "demo" },
      { label: "Code", href: "https://github.com/ShivamD18/SignalFilteringECG", type: "github" },
    ],
  },
  {
    title: "Phonoangiography DSP: Acoustic Stenosis Screening",
    category: "Biomedical & DSP",
    context: "Personal project",
    year: "2026",
    featured: true,
    img: "/images/projects/phonoangiography.webp",
    imgFit: "contain",
    imgAlt: "Streamlit telemetry dashboard showing a spectrogram of a heart sound recording",
    summary:
      "A signal-processing and machine-learning pipeline that screens heart and vascular sounds for the turbulent bruits that signal arterial stenosis, served as a Streamlit web app.",
    highlights: [
      "Zero-phase Butterworth filtering, STFT and Welch spectral estimation separate >200 Hz turbulent flow from 50–150 Hz valve sounds",
      "Sub-band energy ratios, Shannon envelopes, spectral moments and 13 MFCCs feed a calibrated random forest exported to ONNX",
      "ROC-tuned decision thresholds give separate screening and confirmation modes; packaged with Docker",
    ],
    tags: ["Python", "SciPy", "Signal Processing", "ONNX", "Streamlit", "Docker"],
    links: [
      { label: "Code", href: "https://github.com/ShivamD18/phonoangiography-dsp", type: "github" },
    ],
  },
  {
    title: "Single-Axis Solar Tracker: Simulation & Feedback Control",
    category: "Robotics & Controls",
    context: "MTE604 course project · team of 3",
    year: "2026",
    featured: true,
    img: "/images/projects/solar-tracker.webp",
    imgAlt: "Solar panel model in Gazebo next to a terminal logging tracking error",
    summary:
      "Modelled a solar panel as a rotational mass-damper system in Gazebo and tuned a Python feedback controller to follow the sun's path across the sky.",
    highlights: [
      "PD state-feedback gains (Kp = 12, Kd = 15) chosen for a critically damped (ζ = 1) closed-loop response",
      "Stress-tested against wind gusts, sensor noise and drift, actuator saturation, and a weak motor with a 10:1 gearbox",
      "Stayed stable in all five scenarios, with 0.053 rad mean absolute tracking error in the nominal case",
    ],
    tags: ["Python", "Gazebo", "MATLAB", "Control Systems"],
    links: [
      { label: "Code", href: "https://github.com/ShivamD18/SolarPanelPID", type: "github" },
    ],
  },
  {
    title: "Autonomous UR10e Pick-and-Place Trajectory Planner",
    category: "Robotics & Controls",
    context: "Personal project",
    year: "2026",
    featured: true,
    img: "/images/projects/ur10e-pick-place.webp",
    imgFit: "contain",
    imgAlt: "Universal Robots UR10e arm in a Gazebo simulation",
    summary:
      "A ROS 2 node that drives a 6-DOF Universal Robots UR10e through a multi-step pick-and-place routine in Gazebo, with no manual jogging.",
    highlights: [
      "Publishes time-parameterized JointTrajectory messages directly to the joint trajectory controller with rclpy",
      "Sequences coordinated six-joint waypoints from home through the pick and place zones",
      "Validated in a physics-enabled Gazebo world with custom workstation geometry on Ubuntu",
    ],
    tags: ["ROS 2", "Python", "Gazebo", "Linux"],
    links: [
      { label: "Code", href: "https://github.com/ShivamD18/r10e-gazebo-vision", type: "github" },
    ],
  },
  {
    title: "Autonomous Rover: Line Following & Maze Solving",
    category: "Embedded Systems",
    context: "MTE502 course project · team of 4",
    year: "2025",
    featured: true,
    img: "/images/projects/autonomous-rover.webp",
    imgAlt: "Small robot car driving through a cardboard maze",
    summary:
      "Programmed an Arduino-based smart car to follow a black-line course and then solve a walled maze on its own.",
    highlights: [
      "PID line following (Kp = 22, Kd = 10) on a five-channel IR array, with derivative smoothing and slow-down in corners",
      "Ultrasonic wall detection drives a left, right, then U-turn maze strategy",
      "Solved the maze in under 30 seconds after six tested design iterations",
    ],
    tags: ["C++", "Arduino", "PID Control", "Sensors"],
    links: [
      { label: "Code", href: "https://github.com/ShivamD18/AutonomousRover", type: "github" },
    ],
  },
  {
    title: "Supply Chain Analytics & Inventory Optimization Engine",
    category: "Data & Analytics",
    context: "Personal project",
    year: "2026",
    featured: true,
    img: "/images/projects/supply-chain.webp",
    imgFit: "contain",
    imgAlt: "Inventory policy dashboard comparing service levels across SKUs",
    summary:
      "An end-to-end analytics engine that forecasts demand, sets inventory policy and allocates purchase orders across suppliers.",
    highlights: [
      "Random-forest demand forecasting with lag and rolling features, benchmarked by MAE, RMSE and WAPE",
      "Economic order quantity, stochastic safety stock and reorder points tuned to target service levels",
      "Linear-programming supplier allocation under capacity and delay limits, surfaced in Streamlit and Power BI",
    ],
    tags: ["Python", "pandas", "SciPy", "Optimization", "Streamlit", "Power BI"],
    links: [
      { label: "Code", href: "https://github.com/ShivamD18/Supply-Chain-Optimization", type: "github" },
    ],
  },
  {
    title: "Stock Market Analysis & Quantitative Research",
    category: "Data & Analytics",
    context: "Personal project",
    year: "2025–2026",
    cover: { metric: "10+ yrs", label: "of market data · 50+ equities" },
    summary:
      "A quantitative study of more than ten years of price history across 50+ equities, comparing returns, volatility and risk-adjusted performance.",
    highlights: [
      "Evaluated performance, volatility and risk metrics such as the Sharpe ratio with pandas and NumPy",
      "Built automated SQL ETL workflows that cleaned 100,000+ data points and sped up data transformation by 30%",
    ],
    tags: ["Python", "pandas", "NumPy", "SQL", "Excel"],
    links: [],
  },
  {
    title: "Block Sorting Gantry",
    category: "Embedded Systems",
    context: "MTE301 course project",
    year: "2024",
    img: "/images/projects/block-sorter.webp",
    imgFit: "contain",
    imgAlt: "Wiring schematic of an Arduino Mega driving two stepper motors and a servo",
    summary:
      "A two-axis, stepper-driven gantry with a servo gripper that picks up blocks and sorts them automatically.",
    highlights: [
      "Arduino Mega firmware drives the X and Y stepper axes through dedicated drivers on a 12 V supply",
      "A C++ sorting algorithm plans the order of moves for each block",
      "Frame and claw designed in CAD, with the full electronics schematic",
    ],
    tags: ["C++", "Arduino", "Stepper Motors", "CAD"],
    links: [
      { label: "Code", href: "https://github.com/ShivamD18/Block-Sorting-Algorithm-and-System", type: "github" },
    ],
  },
  {
    title: "LiDAR Scanning & 3D Reconstruction",
    category: "Embedded Systems",
    img: "/images/projects/lidar-scanner.webp",
    imgAlt: "LiDAR scanner rig beside a laptop showing a 3D point-cloud scan of a hand",
    summary:
      "A 3D scanning system that pairs a LiDAR sensor with an Arduino Mega to capture spatial data and rebuild objects and spaces as 3D models.",
    highlights: [],
    tags: ["Arduino", "LiDAR", "3D Reconstruction"],
    links: [],
  },
  {
    title: "Plastic Reprocessing for 3D-Printing Filament",
    category: "Design & Simulation",
    context: "Industrial design project",
    img: "/images/projects/plastic-reprocessor.webp",
    imgFit: "contain",
    imgAlt: "CAD render of a machine that reprocesses plastic into filament",
    summary:
      "A machine design that turns post-consumer plastic waste into filament for additive manufacturing, supporting a circular economy.",
    highlights: [],
    tags: ["CAD", "Mechanical Design", "Sustainability"],
    links: [],
  },
  {
    title: "CFD Simulation of Rocket Nozzle Flow",
    category: "Design & Simulation",
    context: "Simulation project",
    img: "/images/projects/rocket-nozzle-cfd.webp",
    imgFit: "contain",
    imgAlt: "CFD contour plot of flow through a rocket nozzle with velocity profiles below",
    summary:
      "A computational fluid dynamics study of flow through a rocket nozzle, mapping pressure and velocity fields to evaluate nozzle performance.",
    highlights: [],
    tags: ["CFD", "Fluid Dynamics", "Simulation"],
    links: [],
  },
];

// Headline numbers under the hero, all taken from the resume and project results.
// `decimals` controls rounding while the number counts up.
const counterItems = [
  { value: 25, prefix: ">", suffix: "%", label: "Accuracy gain from closed-loop control in soft-robotics research" },
  { value: 99.7, decimals: 1, suffix: "%", label: "QRS detection sensitivity on 109,494 MIT-BIH heartbeats" },
  { value: 100, suffix: "K+", label: "Market data points cleaned through automated SQL ETL" },
  { value: projects.length, suffix: "", label: "Engineering and data projects, from firmware to machine learning" },
];

const focusAreas = [
  {
    title: "Biomedical Signal Processing",
    desc: "Filtering, spectral analysis and machine learning for ECGs and heart and vascular sounds.",
  },
  {
    title: "Robotics & Control",
    desc: "Closed-loop control, ROS 2 and Gazebo simulation, and soft-robotic actuation research.",
  },
  {
    title: "Embedded Systems",
    desc: "Arduino firmware, sensors, stepper and servo actuation, and real-time data acquisition.",
  },
  {
    title: "Data & Quantitative Analysis",
    desc: "Python, SQL and optimization models for forecasting, risk and decision support.",
  },
];

const education = {
  school: "Toronto Metropolitan University",
  degree: "Bachelor of Engineering, Mechatronics Engineering",
  minor: "Minor in Philosophy",
  date: "2023 – Present",
  location: "Toronto, ON",
  coursework: [
    "Control Systems",
    "Real-Time Digital Control Systems Design",
    "Sensors & Instrumentation",
    "Embedded Systems",
    "Microprocessor Systems",
    "Electromechanical System Modeling & Design",
    "Engineering Design",
    "Manufacturing Processes",
    "Numerical Analysis",
  ],
};

const expCards = [
  {
    title: "Advanced Manufacturing Soft Robotics Researcher",
    org: "ELIXIR Lab, Toronto Metropolitan University",
    location: "Toronto, ON",
    date: "Summer 2026",
    logoPath: "/images/experience/tmu-logo.webp",
    imgPath: "/images/experience/elixir-lab.webp",
    imgAlt: "Soft robotics test rig in the ELIXIR Lab",
    responsibilities: [
      "Engineered robotic architectures that overcome actuation limits by combining quantitative modelling, embedded hardware sensing and closed-loop PID control, improving system accuracy by more than 25% and reducing response latency.",
      "Developed 3+ experimental prototypes for dynamic robotic tasks using real-time data acquisition and kinematic evaluation, validating adaptive grasping for advanced-manufacturing applications.",
      "Documented 50+ trial iterations to pinpoint performance bottlenecks, and presented quantitative findings to cross-functional teams to guide ongoing hardware optimization.",
    ],
    tags: ["PID Control", "Embedded Sensing", "Data Acquisition", "Prototyping", "Kinematics"],
  },
  {
    title: "Emergency Department Clerical Associate",
    org: "William Osler Health System",
    location: "Brampton, ON",
    date: "2024 – Present",
    logoPath: "/images/experience/osler-logo.webp",
    imgPath: "/images/experience/william-osler.webp",
    imgAlt: "William Osler Health System hospital with an ambulance outside",
    responsibilities: [
      "Maintain accurate real-time patient information and status tracking across hospital systems during high-acuity triage, with 100% compliance across 120+ daily operations.",
      "Coordinate concurrent requests between 30+ clinical staff per shift, improving resource allocation and reducing information-retrieval delays.",
    ],
    tags: ["Clinical Workflows", "Data Integrity", "Teamwork Under Pressure"],
  },
];

// `icon` points to a file in public/icons; skills without one show as plain chips
const skillGroups = [
  {
    title: "Programming & Data",
    skills: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "C / C++", icon: "/icons/cplusplus.svg" },
      { name: "MATLAB", icon: "/icons/matlab.svg" },
      { name: "NumPy", icon: "/icons/numpy.svg" },
      { name: "pandas", icon: "/icons/pandas.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "SciPy" },
      { name: "SQL" },
    ],
  },
  {
    title: "Signal Processing & Machine Learning",
    skills: [
      { name: "Streamlit", icon: "/icons/streamlit.svg" },
      { name: "Digital Filter Design" },
      { name: "STFT & Welch PSD" },
      { name: "Pan-Tompkins QRS Detection" },
      { name: "Feature Extraction (MFCCs)" },
      { name: "Random Forests & Gradient Boosting" },
      { name: "ONNX Runtime" },
      { name: "Semantic Segmentation" },
    ],
  },
  {
    title: "Robotics, Controls & Embedded",
    skills: [
      { name: "ROS 2", icon: "/icons/ros.svg" },
      { name: "Arduino", icon: "/icons/arduino.svg" },
      { name: "Gazebo" },
      { name: "PID & State-Feedback Control" },
      { name: "Sensors & Instrumentation" },
      { name: "Stepper & Servo Actuation" },
      { name: "Real-Time Data Acquisition" },
    ],
  },
  {
    title: "CAD, Simulation & Tools",
    skills: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "Linux / Ubuntu", icon: "/icons/ubuntu.svg" },
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "SolidWorks" },
      { name: "Fusion 360" },
      { name: "AutoCAD" },
      { name: "Inventor" },
      { name: "Revit" },
      { name: "CFD" },
      { name: "Power BI" },
      { name: "Excel" },
    ],
  },
];

const certificationsList = [
  {
    title: "IEEE Student Member",
    issuer: "IEEE",
    description: "Active membership in the Institute of Electrical and Electronics Engineers, participating in technical events and networking opportunities.",
    imgPath: "/images/ieee.svg",
  },
  {
    title: "Google AI Professional Certificate",
    issuer: "Google · Coursera",
    description: "Training in artificial intelligence, data analysis and machine learning workflows.",
    imgPath: "/images/google-logo.png",
  },
  {
    title: "Financial Markets Certification",
    issuer: "Yale University Online",
    description: "Study of stock analysis, quantitative and financial modelling, and how markets operate.",
    imgPath: "/images/yale-logo.png",
  },
  {
    title: "Member",
    issuer: "Rehabilitation Engineering & Assistive Technology Society of North America (RESNA)",
    description: "Member of the society advancing rehabilitation engineering and assistive technologies.",
    imgPath: "/images/resna.png",
  },
  {
    title: "Six Sigma White Belt",
    issuer: "The Council for Six Sigma Certification",
    description: "Foundational certification in process improvement, quality control and reducing operational defects.",
    imgPath: "/images/six-sigma-logo.png",
  },
  {
    title: "Medical Terminology Certificate",
    issuer: "Universal Class",
    description: "Certified understanding of clinical language, supporting clear communication in healthcare and biomedical settings.",
    imgPath: "/images/medical-logo.jpg",
  },
];

export {
  profile,
  navLinks,
  words,
  projectCategories,
  projects,
  counterItems,
  focusAreas,
  education,
  expCards,
  skillGroups,
  certificationsList,
};
