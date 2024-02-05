import React from "react";
import ContactForm from "../components/ContactForm";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (
    <div className="contactContainer">
      <ContactCard />
      <ContactForm />
    </div>
  );
};

export default Contact;
