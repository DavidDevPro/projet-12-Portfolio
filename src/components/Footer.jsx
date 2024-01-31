import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="iconsContainer">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icons" icon={faTwitter} />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/david-changea-440a7945/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icons" icon={faLinkedinIn} />{" "}
        </a>
        <a
          href="https://www.facebook.com/veday.shop/?locale=fr_FR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icons" icon={faFacebookF} />{" "}
        </a>
        <a
          href="https://github.com/david-backup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icons" icon={faGithub} />{" "}
        </a>
        <a
          href="mailto:14ir155@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icons" icon={faEnvelope} />{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
