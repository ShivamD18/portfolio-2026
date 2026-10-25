import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  // track if the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${scrolled || menuOpen ? "scrolled" : "not-scrolled"}`}
    >
      <div className="inner">
        
        {/* Updated Logo Section */}
        <a href="#hero" className="logo flex items-center gap-3">
          {/* Headshot Image */}
          <img 
            src="/images/HeadshotNoTie.jpg" 
            alt="Shivam Dave" 
            className="w-13 h-13 md:w-15 md:h-15 rounded-full object-cover border-2 border-forest-300 shadow-sm transition-transform duration-300 hover:scale-105"
          />
          {/* Enlarged Name */}
          <span className="text-2xl md:text-3xl font-bold text-forest-200">
            Shivam Dave
          </span>
        </a>

        <nav className="desktop">
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
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>

          {/* Menu button, only shown below the lg breakpoint where the desktop nav is hidden */}
          <button
            type="button"
            className="menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <img src="/images/menu.svg" alt="" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="mobile">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                {/* close the menu once a section is picked */}
                <a href={link} onClick={() => setMenuOpen(false)}>
                  {name}
                </a>
              </li>
            ))}
            {/* the Contact me button is hidden on phones, so link it here */}
            <li className="sm:hidden">
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;