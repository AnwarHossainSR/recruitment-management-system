import React, { useState } from "react";
import Footer from "../footer/Footer";
import ContactForm from "./ContactForm";
import NavBar from "./Navigation/NavBar";
import Loader from "../../../services/Loader";
import "./Contact.scss";

const Contact = (props) => {
  const [loader, setloader] = useState(true);
  setTimeout(() => {
    setloader(false);
  }, 1000);
  return (
    <>
      {(loader && <Loader />) || (
        <>
          <NavBar hero={props.hero} cmp="contact" />
          <ContactForm />
          <Footer />
        </>
      )}
    </>
  );
};

export default Contact;
