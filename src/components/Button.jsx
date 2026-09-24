/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // Stop the link from jumping instantly

        const target = document.getElementById("counter"); // Find the section with ID "counter"

        // Only scroll if we found the section and an ID is passed in
        // that prevents the contact button from scrolling to the top
        if (target && id) {
          const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

          // Calculate how far down the page we need to scroll
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          // Scroll smoothly to that position
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      {/* Forced the background to be dark green and removed the light border */}
      <div className="cta-button group !bg-forest-200 !border-forest-300">
        
        {/* The hover circle effect becomes a slightly darker green */}
        <div className="bg-circle !bg-forest-300" />
        
        {/* Forced the text to be off-white so it pops against the dark green */}
        <p className="text !text-offwhite-100">{text}</p>
        
        {/* The arrow container and the arrow itself */}
        <div className="arrow-wrapper !bg-forest-300">
          <img 
            src="/images/arrow-down.svg" 
            alt="arrow" 
            className="brightness-0 invert" 
            /* ^ 'brightness-0 invert' turns a black SVG into a white SVG magically! */
          />
        </div>
      </div>
    </a>
  );
};

export default Button;