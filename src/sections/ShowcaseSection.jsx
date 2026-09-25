import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  
  // Renamed refs to match your actual projects
  const phonoRef = useRef(null);
  const optoRef = useRef(null);
  const lidarRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [phonoRef.current, optoRef.current, lidarRef.current];

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
          
          <div ref={phonoRef} className="first-project-wrapper">
            <div className="image-wrapper">
              {/* Added !object-contain here so the image scales to fit perfectly without cropping */}
              <img 
                src="/images/phono.png" 
                alt="Phonoangiography Interface" 
                className="!object-contain" 
              />
            </div>
            <div className="text-content">
              {/* Updated to forest green colors */}
              <h2 className="text-forest-200">
                Phonoangiography DSP: Acoustic Telemetry & Hemodynamic Flow Triage
              </h2>
              <p className="text-forest-300 md:text-xl">
                An edge-deployable digital signal processing (DSP) and machine learning pipeline for real-time acoustic phonoangiography. The system characterizes vascular access patency and valvular hemodynamics by isolating turbulent flow regimes (stenotic murmurs, bruits) from laminar valve closures in phonocardiogram (PCG) recordings.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={optoRef}>
              {/* Swapped pastel backgrounds for light mode off-white */}
              <div className="image-wrapper bg-offwhite-200 border border-offwhite-300">
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
              <div className="image-wrapper bg-offwhite-200 border border-offwhite-300">
                <img 
                  src="/images/project3.png" 
                  alt="Lidar Scanning App" 
                  className="!object-contain"
                />
              </div>
              <h2 className="text-forest-200 mt-4">
                Lidar Scanning & 3D Reconstruction with Arduino Mega
              </h2>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;