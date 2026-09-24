import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

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
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Phonoangiography DSP: Acoustic Telemetry & Hemodynamic Flow Triage
              </h2>
              <p className="text-white-50 md:text-xl">
                An edge-deployable digital signal processing (DSP) and machine learning pipeline for real-time acoustic phonoangiography. The system characterizes vascular access patency and valvular hemodynamics by isolating turbulent flow regimes (stenotic murmurs, bruits) from laminar valve closures in phonocardiogram (PCG) recordings.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Supply Chain Analytics & 
                Inventory Optimization Engine</h2>
              <p className="text-white-50 md:text-s">
                An end-to-end data pipeline, predictive modeling engine, and interactive control tower designed to optimize enterprise logistics. This platform mitigates supplier lead-time variability, automates inventory replenishment (EOQ/ROP), and minimizes procurement costs through constrained optimization, providing actionable intelligence via Streamlit and Power BI.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>Lidar Scanning & 3D Reconstruction with Arduino Mega</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
