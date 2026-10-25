import { navLinks, profile } from "../constants";
import { ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";

const socials = [
  { label: "GitHub", href: profile.github, icon: <GitHubIcon /> },
  { label: "LinkedIn", href: profile.linkedin, icon: <LinkedInIcon /> },
  { label: "Email", href: `mailto:${profile.email}`, icon: <MailIcon /> },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="mx-auto max-w-7xl flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-xl font-semibold text-forest-200">{profile.name}</p>
            <p className="text-forest-300/80 mt-1">
              {profile.role} · {profile.school}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="icon-btn"
                aria-label={label}
                // open web profiles in a new tab, but let mailto links open the mail app
                {...(href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 border-t border-offwhite-300 pt-6 text-sm text-forest-300/80">
          <p>© {new Date().getFullYear()} {profile.name}. Built with React, Three.js and GSAP.</p>
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navLinks.map(({ name, link }) => (
              <a key={name} href={link} className="hover:text-forest-200 transition-colors">
                {name}
              </a>
            ))}
            <a href="#hero" className="inline-flex items-center gap-1 font-semibold text-forest-200">
              Back to top
              <ArrowUpIcon className="size-4" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
