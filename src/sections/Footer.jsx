import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map(({ name, imgPath, link }) => (
            <a
              key={name}
              href={link}
              className="icon"
              aria-label={name}
              // open web profiles in a new tab, but let mailto links open the mail app
              {...(link.startsWith("http") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <img src={imgPath} alt="" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Shivam Dave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
