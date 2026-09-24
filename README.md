# 🚀 Shivam Dave — 3D Interactive Portfolio

An immersive, high-performance personal portfolio built with **React 19**, **Three.js / React Three Fiber**, **GSAP**, and **Tailwind CSS v4**. This portfolio showcases engineering research, quantitative analytics, and software projects through interactive 3D models, smooth scroll-triggered animations, and a modern light-mode design system.

---

## 📸 Highlights & Core Features

- **Interactive 3D Hero Workstation**:
  - Isometric 3D room rendered with `@react-three/fiber` and `@react-three/drei`.
  - Realistic studio lighting, customized materials, and post-processing bloom effects.
  - Interactive `OrbitControls` allowing smooth rotation and inspection across desktop and mobile devices.
  - Floating ambient particle system with subtle motion dynamics.
- **Scroll-Driven Career Timeline**:
  - Unfolds professional experience as the visitor scrolls using GSAP `ScrollTrigger`.
  - Custom SVG badges and circular timeline nodes for:
    - **Advanced Manufacturing Soft Robotics Researcher** — *ELIXIR Lab, Toronto Metropolitan University*
    - **Emergency Department Clerical Associate** — *William Osler Health System*
    - **Lead Developer & Quantitative Analyst** — *Supply Chain Optimization & Logistics Intelligence Platform*
- **Interactive 3D Tech Stack**:
  - Floating 3D models (`.glb`) for core technologies with continuous floating animation and mouse interaction.
- **Project Showcase**:
  - Highlights flagship engineering systems:
    - **Supply Chain Optimization & Demand Forecasting Platform** (Machine learning lead-time regression, stochastic ROP, safety stock modeling, and interactive Streamlit control tower).
    - **Solar Panel Tracking PID Control Simulation** (Multi-condition closed-loop control system simulation in Python & Gazebo).
    - **Quantitative Stock Market & Financial Analysis** (Historical risk, volatility, and trend evaluation pipelines).
- **Interactive Glow Cards**:
  - Cursor-following border glow effect (`GlowCard.jsx`) driven by radial gradients and trigonometric mouse tracking (`Math.atan2`).
- **Dynamic Animated Counters**:
  - Number ticker animations triggered on scroll to display milestones and statistics.
- **Fully Functional Contact Form**:
  - Integrated with **EmailJS** for direct client and recruiter communication without requiring an external backend server.
- **Tailored Light Mode Design System**:
  - Clean slate canvas (`#f8fafc`), crisp typography (`Mona Sans`), refined card borders, and responsive glassmorphic navbar.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Framework & Build** | [React 19](https://react.dev/), [Vite 6](https://vitejs.dev/) |
| **3D & WebGL** | [Three.js](https://threejs.org/), [@react-three/fiber](https://r3f.docs.pmnd.rs/), [@react-three/drei](https://github.com/pmndrs/drei) |
| **Post-Processing** | [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) |
| **Animations** | [GSAP](https://greensock.com/gsap/), GSAP ScrollTrigger, `@gsap/react` |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), Custom CSS Properties, Mona Sans |
| **Messaging & Forms** | [EmailJS](https://www.emailjs.com/) (`@emailjs/browser`) |

---

## 📁 Project Structure

```text
3d-portfolio/
├── public/
│   ├── images/              # Icons, badges, brand SVGs, and project preview assets
│   │   ├── exp-*.svg        # Experience card horizontal badges
│   │   ├── logo-*.svg       # Timeline circular logo marks
│   │   └── bg-light.svg     # Hero background radial gradient & grid pattern
│   └── models/              # Optimized 3D assets (.glb files)
│       ├── optimized-room.glb
│       ├── computer-optimized.glb
│       └── *-transformed.glb
├── src/
│   ├── components/
│   │   ├── models/          # Three.js 3D canvas components
│   │   │   ├── hero_models/ # Room, HeroLights, Particles, HeroExperience
│   │   │   ├── tech_logos/  # TechIconCardExperience
│   │   │   └── contact/     # ContactExperience & Computer model
│   │   ├── AnimatedCounter.jsx
│   │   ├── Button.jsx
│   │   ├── GlowCard.jsx     # Mouse-tracking glowing border card
│   │   ├── NavBar.jsx       # Glassmorphic header with scroll state
│   │   └── TitleHeader.jsx
│   ├── constants/
│   │   └── index.js         # Centralized portfolio data (experience, skills, projects)
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx
│   │   ├── ShowcaseSection.jsx
│   │   ├── LogoShowcase.jsx
│   │   ├── FeatureCards.jsx
│   │   ├── Experience.jsx   # Timeline with GSAP scroll animations
│   │   ├── TechStack.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              # Root page composition
│   ├── index.css            # Tailwind v4 theme, utility classes, and custom keyframes
│   └── main.jsx             # React DOM entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚦 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended).

### 2. Installation
Clone the repository and install the project dependencies:

```bash
# Navigate to the portfolio directory
cd 3d-portfolio

# Install npm dependencies
npm install
```

### 3. Environment Variables Setup
To enable the contact form, create a `.env` file in the root of `3d-portfolio/`:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

*(You can obtain these keys by creating a free account at [emailjs.com](https://www.emailjs.com/).)*

### 4. Run Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view the application with Hot Module Replacement (HMR).

### 5. Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ Customization Guide

- **Personal Information & Experience**: Edit [`src/constants/index.js`](file:///c:/Users/daves/OneDrive/Documents/Projects/Portfolio/3d-portfolio/src/constants/index.js) to update your bio, career experiences, skills, and project descriptions.
- **Visual Theme & Colors**: Modify the `@theme` variables and utility classes in [`src/index.css`](file:///c:/Users/daves/OneDrive/Documents/Projects/Portfolio/3d-portfolio/src/index.css).
- **3D Models**: Place optimized `.glb` models into [`public/models/`](file:///c:/Users/daves/OneDrive/Documents/Projects/Portfolio/3d-portfolio/public/models) and reference them inside the corresponding R3F components.

---

## 👨‍💻 Author

**Shivam Alap Dave**
- **Degree**: Mechatronics Engineering, Toronto Metropolitan University
- **Focus Areas**: Digital Signal Processing, Embedded Firmware, Biomedical Instrumentation, Soft Robotics & Quantitative Analytics
- **Email**: [dave.shivam18@gmail.com](mailto:dave.shivam18@gmail.com)
- **LinkedIn**: [linkedin.com/in/shivam-dave-a89072209](https://linkedin.com/in/shivam-dave-a89072209)

