import TitleHeader from "../components/TitleHeader";
import { skillGroups } from "../constants";

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="mx-auto max-w-7xl">
      <TitleHeader
        title="Technical skills"
        sub="Toolkit"
        intro="The languages, methods and tools I've used across research, coursework and personal projects."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {skillGroups.map(({ title, skills }) => (
          <div key={title} className="reveal card-border rounded-3xl p-6 md:p-8">
            <h3 className="text-forest-200 text-xl font-semibold">{title}</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {skills.map(({ name, icon }) => (
                <li key={name} className="skill-chip">
                  {icon && <img src={icon} alt="" className="size-5" loading="lazy" />}
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
