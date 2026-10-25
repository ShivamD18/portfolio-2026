import { useState } from "react";

import TitleHeader from "../components/TitleHeader";
import {
  CheckIcon,
  ExternalLinkIcon,
  GitHubIcon,
} from "../components/Icons";
import { projectCategories, projects } from "../constants";

const ALL = "All";

// Cover for projects without a screenshot: the headline metric on a brand gradient
const GeneratedCover = ({ cover, title }) => (
  <div
    role="img"
    aria-label={title}
    className="h-full w-full flex flex-col items-center justify-center gap-1 bg-linear-to-br from-forest-200 to-forest-300 text-offwhite-100"
  >
    <span className="text-5xl md:text-6xl font-bold">{cover.metric}</span>
    <span className="text-sm md:text-base text-offwhite-100/80">{cover.label}</span>
  </div>
);

const ProjectCard = ({ project }) => {
  const { title, category, context, year, img, imgAlt, imgFit, cover, summary, highlights, tags, links } = project;

  return (
    <article className="project-card">
      <div className="project-media">
        {img ? (
          <img
            src={img}
            alt={imgAlt}
            loading="lazy"
            className={`h-full w-full ${imgFit === "contain" ? "object-contain p-4" : "object-cover object-top"}`}
          />
        ) : (
          <GeneratedCover cover={cover} title={title} />
        )}
        <span className="project-category">{category}</span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-forest-200 text-xl font-semibold leading-snug text-balance">
            {title}
          </h3>
          {(context || year) && (
            <p className="text-sm text-forest-300/70 mt-1">
              {[context, year].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>

        <p className="text-forest-300 leading-relaxed">{summary}</p>

        {highlights.length > 0 && (
          <ul className="flex flex-col gap-2">
            {highlights.map((point) => (
              <li key={point} className="flex gap-2 text-sm text-forest-300 leading-relaxed">
                <CheckIcon className="size-4 shrink-0 mt-0.5 text-forest-100" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="flex flex-wrap gap-2 mt-auto pt-2" aria-label="Technologies">
          {tags.map((tag) => (
            <li key={tag} className="chip chip-sm">
              {tag}
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {links.map(({ label, href, type }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-sm ${type === "demo" ? "btn-primary" : "btn-secondary"}`}
              >
                {type === "github" ? (
                  <GitHubIcon className="size-4" />
                ) : (
                  <ExternalLinkIcon className="size-4" />
                )}
                {label}
                <span className="sr-only"> for {title} (opens in a new tab)</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState(ALL);
  const [showAll, setShowAll] = useState(false);

  // "All" shows the featured projects until the visitor asks for the rest;
  // a category always shows every project in it.
  const inFilter = filter === ALL ? projects : projects.filter((p) => p.category === filter);
  const visible = filter === ALL && !showAll ? inFilter.filter((p) => p.featured) : inFilter;
  const hiddenCount = inFilter.length - visible.length;

  // only offer categories that have projects
  const categories = [ALL, ...projectCategories.filter((c) => projects.some((p) => p.category === c))];

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <TitleHeader
          title="Featured projects"
          sub="Selected work"
          intro="Biomedical signal processing, robotics, embedded systems and data projects, with the results and the code behind them."
        />

        <div className="reveal mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
              className="filter-btn"
            >
              {category}
            </button>
          ))}
        </div>

        {/* key on the filter so the cards replay their entrance animation when it changes */}
        <div key={filter} className="mt-10 grid gap-8 md:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {filter === ALL && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              aria-expanded={showAll}
              onClick={() => setShowAll((open) => !open)}
            >
              {showAll ? "Show featured only" : `Show all ${projects.length} projects (${hiddenCount} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
