import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactText = () => {
  return (
    <div className="contactText">
      <h1>Contactez-moi</h1>
      <p>
        Vous avez un projet passionnant pour lequel vous avez besoin d'aide ?
      </p>
      <p>Envoyez-moi un message en passant par le formulaire de contact.</p>
      <span>
        <FontAwesomeIcon className="icon" icon={faArrowRight} />
      </span>
    </div>
  );
};

export default ContactText;
