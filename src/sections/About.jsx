import TitleHeader from "../components/TitleHeader";
import { CapIcon, MapPinIcon } from "../components/Icons";
import { education, focusAreas, profile } from "../constants";

const About = () => (
  <section id="about" className="section-padding">
    <div className="mx-auto max-w-7xl">
      <TitleHeader
        title="Engineering where hardware meets data"
        sub="About me"
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start">
        {/* Photo and quick facts */}
        <div className="reveal flex flex-col gap-6">
          <img
            src="/images/headshot.webp"
            alt={`Portrait of ${profile.name}`}
            width="720"
            height="720"
            loading="lazy"
            className="w-full max-w-md mx-auto lg:mx-0 aspect-square object-cover rounded-3xl border border-offwhite-300 shadow-sm"
          />
          <div className="card-border rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <CapIcon className="size-6 shrink-0 text-forest-100 mt-0.5" />
              <div>
                <p className="font-semibold text-forest-200">{education.school}</p>
                <p className="text-forest-300/80">{education.degree}</p>
                <p className="text-forest-300/80">
                  {education.minor} · {education.date}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-forest-300/80">
              <MapPinIcon className="size-6 shrink-0 text-forest-100" />
              {profile.location}
            </div>
          </div>
        </div>

        {/* Story, focus areas and coursework */}
        <div className="flex flex-col gap-8">
          <div className="reveal flex flex-col gap-4 text-forest-300 md:text-lg leading-relaxed text-pretty">
            <p>
              I'm a fourth-year Mechatronics Engineering student at Toronto Metropolitan
              University, and I like building systems where sensors, firmware, control and
              data all have to work together.
            </p>
            <p>
              This summer I was a soft-robotics researcher at TMU's ELIXIR Lab, where I added
              embedded sensing and closed-loop PID control to robotic prototypes and improved
              their accuracy by more than 25%. Since 2024 I've also worked in the emergency
              department at William Osler Health System, coordinating real-time patient
              information with 30+ clinical staff a shift.
            </p>
            <p>
              Right now I'm focused on biomedical signal processing: turning heart and
              vascular sounds and ECGs into objective, reproducible screening tools.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {focusAreas.map(({ title, desc }) => (
              <div key={title} className="reveal card-border rounded-2xl p-6">
                <h3 className="text-forest-200 text-lg font-semibold">{title}</h3>
                <p className="text-forest-300/80 mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal">
            <h3 className="text-forest-200 font-semibold mb-3">Relevant coursework</h3>
            <ul className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <li key={course} className="chip">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
