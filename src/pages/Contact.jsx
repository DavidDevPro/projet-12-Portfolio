import React from "react";
import ContactForm from "../components/ContactForm";
import ContactText from "../components/ContactText";

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="contactContainer">
        <ContactText />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
