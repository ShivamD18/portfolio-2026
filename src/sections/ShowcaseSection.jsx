import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Add, remove or reorder projects here. Nothing else needs to change.
const projects = [
  {
    img: "/images/phono.png",
    alt: "Phonoangiography Interface",
    title: "Phonoangiography DSP: Acoustic Telemetry & Hemodynamic Flow Triage",
    desc: "An edge-deployable digital signal processing (DSP) and machine learning pipeline for real-time acoustic phonoangiography. The system characterizes vascular access patency and valvular hemodynamics by isolating turbulent flow regimes (stenotic murmurs, bruits) from laminar valve closures in phonocardiogram (PCG) recordings.",
  },
  {
    img: "/images/gazebo.png",
    alt: "Autonomous UR10e Pick-and-Place Trajectory Planner",
    title: "Autonomous UR10e Pick-and-Place Trajectory Planner",
    desc: "A robust ROS 2 Python control pipeline designed to programmatically command a Universal Robots UR10e manipulator through multi-step industrial pick-and-place routines within a Gazebo simulation environment.",
  },
  {
    img: "/images/opto.png",
    alt: "Supply Chain Analytics Platform",
    title: "Supply Chain Analytics & Inventory Optimization Engine",
    desc: "An end-to-end data pipeline, predictive modeling engine, and interactive control tower designed to optimize enterprise logistics. This platform mitigates supplier lead-time variability, automates inventory replenishment (EOQ/ROP), and minimizes procurement costs through constrained optimization, providing actionable intelligence via Streamlit and Power BI.",
  },
  {
    img: "/images/project3.png",
    alt: "Lidar Scanning App",
    title: "Lidar Scanning & 3D Reconstruction with Arduino Mega",
    desc: "A 3D scanning and reconstruction system using a Lidar sensor and Arduino Mega. The system captures spatial data to create accurate 3D models of objects and environments, enabling applications in robotics, mapping, and virtual reality.",
  },
  {
    img: "/images/plasticreprocessor.png",
    alt: "Plastic Reprocessing to 3D Print Industrial Design",
    title: "Plastic Reprocessing to 3D Print Industrial Design",
    desc: "A sustainable approach to 3D printing by repurposing post-consumer plastic waste into filament for additive manufacturing, reducing environmental impact and promoting circular economy principles.",
  },
  {
    img: "/images/rocket.png",
    alt: "Computational Fluid Dynamics Simulation of Rocket Nozzle Flow",
    title: "Computational Fluid Dynamics Simulation of Rocket Nozzle Flow",
    desc: "A computational fluid dynamics simulation of rocket nozzle flow, analyzing pressure distributions and velocity fields to optimize performance and reduce drag.",
  },
];

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 }
      );

      // Each card reveals as it scrolls into view. ScrollTrigger.batch staggers
      // cards that enter together (same row) without delaying later rows.
      gsap.set(".project-card", { y: 40, opacity: 0 });
      ScrollTrigger.batch(".project-card", {
        start: "top bottom-=80",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
          }),
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className="app-showcase w-full px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="project-card flex flex-col gap-4"
          >
            {/* Fixed aspect ratio keeps every image the same height */}
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full !object-contain"
              />
            </div>

            <h2 className="text-forest-200 text-xl font-semibold leading-snug">
              {p.title}
            </h2>
            <p className="text-forest-300 text-sm leading-relaxed md:text-base">
              {p.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AppShowcase;