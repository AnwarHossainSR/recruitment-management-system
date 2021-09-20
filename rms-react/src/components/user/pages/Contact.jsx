import React from "react";
import Footer from "../footer/Footer";
import ContactForm from "./ContactForm";
import NavBar from "./Navigation/NavBar";
import "./Contact.scss";

const Contact = (props) => {
  return (
    <>
      <NavBar hero={props.hero} />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
