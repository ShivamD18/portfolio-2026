import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
            </div>

{/* Added max-w-2xl and xl:max-w-3xl to keep the text on the left side */}
            <p className="text-forest-300 md:text-xl relative z-10 pointer-events-none leading-relaxed max-w-2xl xl:max-w-3xl xl:pr-10 mt-6">
              I am a Mechatronics Engineering student focused on digital signal processing, embedded systems, and biomedical instrumentation, building at the intersection of low-level firmware and clinical sensor technology.
              <br className="hidden md:block" /><br className="hidden md:block" />
              <span className="font-semibold text-forest-200">Currently working on: </span> 
              Phonoangiography digital signal processing (DSP)—developing filtering and spectral analysis pipelines for acoustic vascular bruits to identify arterial stenosis non-invasively.
            </p>

            {/* Make sure your Button component accepts text color overrides, or update it inside the Button.jsx file */}
            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12 mt-8 text-white bg-forest-200 hover:bg-forest-300"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
