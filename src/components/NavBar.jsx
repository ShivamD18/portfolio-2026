import { useState, useEffect } from "react";
import { navLinks, profile } from "../constants";
import { CloseIcon, DownloadIcon, MenuIcon } from "./Icons";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  // track if the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close the mobile menu with the Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar ${scrolled || menuOpen ? "scrolled" : "not-scrolled"}`}
    >
      <div className="inner">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <img
            src="/images/headshot-sm.webp"
            alt=""
            width="48"
            height="48"
            className="size-11 md:size-12 rounded-full object-cover border-2 border-forest-200"
          />
          <span>{profile.name}</span>
        </a>

        <nav className="desktop" aria-label="Main">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary hidden sm:inline-flex"
          >
            <DownloadIcon className="size-4" />
            Résumé
          </a>
          <a href="#contact" className="btn btn-primary hidden sm:inline-flex">
            Contact me
          </a>

          {/* Menu button, only shown below the xl breakpoint where the desktop nav is hidden */}
          <button
            type="button"
            className="menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="mobile" aria-label="Main">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a href={link} onClick={closeMenu}>
                  {name}
                </a>
              </li>
            ))}
            {/* the header buttons are hidden on phones, so link them here */}
            <li className="sm:hidden">
              <a href="#contact" onClick={closeMenu}>
                Contact me
              </a>
            </li>
            <li className="sm:hidden">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Download résumé
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
