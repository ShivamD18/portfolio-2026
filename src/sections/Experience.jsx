import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="mx-auto max-w-6xl">
      <TitleHeader title="Professional experience" sub="Career" />

      <ol className="mt-14 flex flex-col">
        {expCards.map((job, index) => (
          <li key={job.title} className="reveal grid md:grid-cols-[4rem_1fr] md:gap-8">
            {/* Timeline rail: logo with a line running down to the next role */}
            <div className="hidden md:flex flex-col items-center" aria-hidden="true">
              <div className="timeline-logo">
                <img src={job.logoPath} alt="" className="max-h-8 max-w-10 object-contain" />
              </div>
              {index < expCards.length - 1 && <div className="w-px flex-1 bg-offwhite-300 my-2" />}
            </div>

            <article className="card-border rounded-3xl overflow-hidden grid lg:grid-cols-[minmax(0,1fr)_16rem] mb-10">
              <div className="p-6 md:p-8 flex flex-col gap-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="timeline-logo md:hidden shrink-0" aria-hidden="true">
                      <img src={job.logoPath} alt="" className="max-h-7 max-w-9 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-forest-200 text-xl md:text-2xl font-semibold leading-snug text-balance">
                        {job.title}
                      </h3>
                      <p className="text-forest-300/80 mt-1">
                        {job.org} · {job.location}
                      </p>
                    </div>
                  </div>
                  <span className="chip font-semibold">{job.date}</span>
                </div>

                <ul className="flex flex-col gap-3 list-disc ps-5 marker:text-forest-100">
                  {job.responsibilities.map((point) => (
                    <li key={point} className="text-forest-300 leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2" aria-label="Skills used">
                  {job.tags.map((tag) => (
                    <li key={tag} className="chip chip-sm">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <img
                src={job.imgPath}
                alt={job.imgAlt}
                loading="lazy"
                className="hidden lg:block h-full w-full object-cover"
              />
            </article>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
