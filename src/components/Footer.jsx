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
        <FontAwesomeIcon className="icons" icon={faTwitter} />
        <FontAwesomeIcon className="icons" icon={faLinkedinIn} />
        <FontAwesomeIcon className="icons" icon={faFacebookF} />
        <FontAwesomeIcon className="icons" icon={faGithub} />
        <FontAwesomeIcon className="icons" icon={faEnvelope} />
      </div>
    </footer>
  );
};

export default Footer;
