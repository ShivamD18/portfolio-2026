import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  
  const phonoRef = useRef(null);
  const optoRef = useRef(null);
  const lidarRef = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);
  // 1. Add the ref for Project 6
  const project6Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // 2. Add project6Ref to the cards array so it animates
    const cards = [
      phonoRef.current, 
      optoRef.current, 
      lidarRef.current, 
      project4Ref.current, 
      project5Ref.current,
      project6Ref.current
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          
          {/* 3. Wrap the left side projects in a flex column so they stack on the left */}
          <div className="flex flex-col gap-12">
            
            {/* Original First Project */}
            <div ref={phonoRef} className="first-project-wrapper">
              <div className="image-wrapper">
                <img 
                  src="/images/phono.png" 
                  alt="Phonoangiography Interface" 
                  className="!object-contain" 
                />
              </div>
              <div className="text-content">
                <h2 className="text-forest-200">
                  Phonoangiography DSP: Acoustic Telemetry & Hemodynamic Flow Triage
                </h2>
                <p className="text-forest-300 md:text-xl">
                  An edge-deployable digital signal processing (DSP) and machine learning pipeline for real-time acoustic phonoangiography. The system characterizes vascular access patency and valvular hemodynamics by isolating turbulent flow regimes (stenotic murmurs, bruits) from laminar valve closures in phonocardiogram (PCG) recordings.
                </p>
              </div>
            </div>

            {/* 4. Add the 6th Project directly below it using the same styling */}
            <div ref={project6Ref} className="first-project-wrapper">
              <div className="image-wrapper">
                <img 
                  src="/images/gazebo.png" 
                  alt="Autonomous UR10e Pick-and-Place Trajectory Planner" 
                  className="!object-contain" 
                />
              </div>
              <div className="text-content">
                <h2 className="text-forest-200">
                  Autonomous UR10e Pick-and-Place Trajectory Planner
                </h2>
                <p className="text-forest-300 md:text-xl">
                  A robust ROS 2 Python control pipeline designed to programmatically command a Universal Robots UR10e manipulator through multi-step industrial pick-and-place routines within a Gazebo simulation environment.
                </p>
              </div>
            </div>
            
          </div>

          {/* Right Side List */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={optoRef}>
              <div className="image-wrapper">
                <img
                  src="/images/opto.png"
                  alt="Supply Chain Analytics Platform"
                  className="!object-contain"
                />
              </div>
              <h2 className="text-forest-200 mt-4">
                Supply Chain Analytics & Inventory Optimization Engine
              </h2>
              <p className="text-forest-300 text-sm mt-2">
                An end-to-end data pipeline, predictive modeling engine, and interactive control tower designed to optimize enterprise logistics. This platform mitigates supplier lead-time variability, automates inventory replenishment (EOQ/ROP), and minimizes procurement costs through constrained optimization, providing actionable intelligence via Streamlit and Power BI.
              </p>
            </div>

            <div className="project" ref={lidarRef}>
              <div className="image-wrapper">
                <img 
                  src="/images/project3.png" 
                  alt="Lidar Scanning App" 
                  className="!object-contain"
                />
              </div>
              <h2 className="text-forest-200 mt-4">
                Lidar Scanning & 3D Reconstruction with Arduino Mega
              </h2>
              <p className="text-forest-300 text-sm mt-2">
                A 3D scanning and reconstruction system using a Lidar sensor and Arduino Mega. The system captures spatial data to create accurate 3D models of objects and environments, enabling applications in robotics, mapping, and virtual reality.
              </p>
            </div>

            <div className="project" ref={project4Ref}>
              <div className="image-wrapper">
                <img 
                  src="/images/plasticreprocessor.png" 
                  alt="Plastic Reprocessing to 3D Print Industrial Design" 
                  className="!object-contain"
                />
              </div>
              <h2 className="text-forest-200 mt-4">
                Plastic Reprocessing to 3D Print Industrial Design
              </h2>
              <p className="text-forest-300 text-sm mt-2">
                A sustainable approach to 3D printing by repurposing post-consumer plastic waste into filament for additive manufacturing, reducing environmental impact and promoting circular economy principles.
              </p>
            </div>

            <div className="project" ref={project5Ref}>
              <div className="image-wrapper">
                <img 
                  src="/images/rocket.png" 
                  alt="Computational Fluid Dynamics Simulation of Rocket Nozzle Flow" 
                  className="!object-contain"
                />
              </div>
              <h2 className="text-forest-200 mt-4">
                Computational Fluid Dynamics Simulation of Rocket Nozzle Flow
              </h2>
              <p className="text-forest-300 text-sm mt-2">
                A computational fluid dynamics simulation of rocket nozzle flow, analyzing pressure distributions and velocity fields to optimize performance and reduce drag.
              </p>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;