# Shivam Dave 3D Interactive Portfolio

An immersive, high-performance personal portfolio built with **React 19**, **Three.js / React Three Fiber**, **GSAP**, and **Tailwind CSS v4**. This portfolio showcases engineering research, quantitative analytics, and software projects through interactive 3D models, smooth scroll-triggered animations, and a modern light-mode design system.

---

## Highlights & Core Features

- **Interactive 3D hero workstation**: an isometric room rendered with `@react-three/fiber` and `@react-three/drei`, with studio lighting, selective bloom and floating particles. It rotates with the mouse on desktop and stays out of the way of scrolling on touch screens.
- **Impact stats**: résumé-backed numbers (soft-robotics accuracy gain, QRS detection sensitivity, data volume, project count) that count up on scroll.
- **Filterable project showcase**: 11 engineering and data projects with screenshots, key results, tech tags and links to code and live demos, filterable by category (Biomedical & DSP, Robotics & Controls, Embedded Systems, Data & Analytics, Design & Simulation).
- **About and education**: bio, focus areas and relevant coursework at Toronto Metropolitan University.
- **Experience timeline**: soft-robotics research at TMU's ELIXIR Lab and emergency-department work at William Osler Health System.
- **Grouped technical skills** with bundled [Devicon](https://devicon.dev/) logos.
- **Résumé download** from the navbar, hero and contact section.
- **Contact form** powered by **EmailJS**, with success and error feedback, alongside direct email, LinkedIn and GitHub links.
- **Accessible and responsive**: skip link, keyboard-friendly mobile menu, labelled controls, reduced-motion support, and layouts checked at phone, tablet and desktop widths.

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

## Project Structure

```text
portfolio-2026/
├── public/
│   ├── Shivam_Dave_Resume.pdf   # Résumé linked from the site
│   ├── icons/                   # Skill logos (Devicon, MIT licence)
│   ├── images/
│   │   ├── projects/            # Project screenshots (WebP)
│   │   ├── experience/          # Experience photos and logos (WebP)
│   │   └── textures/            # Material textures for the 3D room
│   └── models/
│       └── optimized-room.glb   # Hero 3D room
├── src/
│   ├── components/
│   │   ├── models/hero_models/  # Room, HeroLights, Particles, HeroExperience
│   │   ├── AnimatedCounter.jsx  # Count-up impact stats
│   │   ├── GlowCard.jsx         # Mouse-tracking glowing border card
│   │   ├── Icons.jsx            # Inline SVG icons
│   │   ├── NavBar.jsx           # Header with mobile menu
│   │   └── TitleHeader.jsx      # Section headings
│   ├── constants/
│   │   └── index.js             # All portfolio content: profile, projects, experience, skills
│   ├── hooks/
│   │   └── useReveal.js         # Fade-in on scroll
│   ├── sections/                # Page sections, top to bottom
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx                  # Root page composition
│   ├── index.css                # Tailwind v4 theme, component classes and keyframes
│   └── main.jsx                 # React DOM entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended).

### 2. Installation
Clone the repository and install the project dependencies:

```bash
# Clone the repository and move into it
git clone https://github.com/ShivamD18/portfolio-2026.git
cd portfolio-2026

# Install npm dependencies
npm install
```

### 3. Environment Variables Setup
To enable the contact form, create a `.env` file in the project root:

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

## Customization Guide

- **Content**: Edit [`src/constants/index.js`](src/constants/index.js) to update your profile links, projects, stats, experience, skills and certifications. Projects marked `featured: true` show before "Show all"; a project without an `img` gets a generated cover from its `cover` metric.
- **Images**: Add project screenshots to [`public/images/projects/`](public/images/projects) as WebP, about 1200px wide.
- **Résumé**: Replace [`public/Shivam_Dave_Resume.pdf`](public/Shivam_Dave_Resume.pdf), keeping the file name.
- **Visual Theme & Colors**: Modify the `@theme` variables and utility classes in [`src/index.css`](src/index.css).
- **3D Models**: Place optimized `.glb` models into [`public/models/`](public/models) and reference them inside the corresponding R3F components.

---

## Author

**Shivam Alap Dave**
- **Degree**: Mechatronics Engineering, Toronto Metropolitan University
- **Focus Areas**: Digital Signal Processing, Embedded Firmware, Biomedical Instrumentation, Soft Robotics & Quantitative Analytics
- **Email**: [dave.shivam18@gmail.com](mailto:dave.shivam18@gmail.com)
- **LinkedIn**: [linkedin.com/in/shivamalapdave](https://www.linkedin.com/in/shivamalapdave)
- **GitHub**: [github.com/ShivamD18](https://github.com/ShivamD18)

