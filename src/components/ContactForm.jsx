import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const firstname = formData.get("firstname");
    const surname = formData.get("surname");
    const email = formData.get("email");
    const message = formData.get("message");

    form.reset();

    alert(
      `Firstname: ${firstname} Surname: ${surname}Email: ${email} Message: ${message} `
    );
  };

  return (
    <div className="formulaire">
      <form onSubmit={handleSubmit}>
        <div className="boxContent">
          <div className="content">
            <label htmlFor="firstname">
              {" "}
              <FontAwesomeIcon className="icons" icon={faShare} /> Votre prénom
            </label>
            <input name="firstname" type="text" id="firstname" />
          </div>

          <div className="content">
            <label htmlFor="surname">
              <FontAwesomeIcon className="icons" icon={faShare} /> Votre nom
            </label>
            <input name="surname" type="text" id="surname" />
          </div>
        </div>
        <label htmlFor="email">
          <FontAwesomeIcon className="icons" icon={faShare} /> Votre e-mail
        </label>
        <input name="email" type="text" id="email" />
        <label htmlFor="message">
          <FontAwesomeIcon className="icons" icon={faShare} /> Entrez votre
          message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Votre message . . ."
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
