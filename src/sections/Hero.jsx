import AnimatedCounter from "../components/AnimatedCounter";
import { profile, words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
} from "../components/Icons";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10" aria-hidden="true">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero content */}
        <header className="flex flex-col justify-center w-full xl:w-1/2 md:px-20 px-5 xl:pr-6">
          <div className="flex flex-col gap-6">
            <p className="hero-animate hero-badge" style={{ "--i": 0 }}>
              <span className="size-2 rounded-full bg-forest-100" aria-hidden="true" />
              {profile.role} · {profile.school}
            </p>

            <div className="hero-text hero-animate" style={{ "--i": 1 }}>
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
                          alt=""
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-offwhite-200"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <p className="h1-line">into Real Projects</p>
            </div>

            <p className="hero-animate text-forest-300 md:text-xl leading-relaxed max-w-2xl xl:pr-10 text-pretty" style={{ "--i": 2 }}>
              I'm <span className="font-semibold text-forest-200">{profile.name}</span>, a
              4th-year Mechatronics Engineering student building at the intersection of
              embedded systems, control and biomedical signal processing, from soft-robotics
              research at TMU's ELIXIR Lab to machine-learning pipelines that read heart
              and vascular sounds.
            </p>

            <p className="hero-animate text-forest-300 leading-relaxed max-w-2xl xl:pr-10 border-l-4 border-forest-100 pl-4" style={{ "--i": 3 }}>
              <span className="font-semibold text-forest-200">Currently working on: </span>
              phonoangiography signal processing, building filtering and spectral-analysis
              pipelines that detect the acoustic bruits of arterial stenosis non-invasively.
            </p>

            <div className="hero-animate flex flex-wrap items-center gap-3 pt-2" style={{ "--i": 4 }}>
              <a href="#projects" className="btn btn-primary btn-lg">
                View my projects
                <ArrowRightIcon className="size-5" />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                <DownloadIcon className="size-5" />
                Download résumé
              </a>
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="GitHub profile"
                >
                  <GitHubIcon />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D room */}
        <figure className="w-full xl:w-1/2 xl:h-full mt-10 xl:mt-0" aria-label="Interactive 3D model of a workstation">
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
