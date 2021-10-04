import React, { useState } from "react";
import Footer from "../footer/Footer";
import ContactForm from "./ContactForm";
import NavBar from "./Navigation/NavBar";
import Loader from "../../../services/Loader";
import "./Contact.scss";
import { storeApiData } from "../../../api/ApiCall";
import { notify } from "../../../services/Notification";

const Contact = (props) => {
  const [loader, setloader] = useState(true);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (
      inputs.name === "" ||
      inputs.email === "" ||
      inputs.subject === "" ||
      inputs.message === ""
    ) {
      setError("please provide all input fields!");
      notify("all fields are require", "error");
    } else {
      const response = await storeApiData("contact", inputs);
      if (response.status === true) {
        notify(response.message, "success");
      }
    }
  };
  setTimeout(() => {
    setloader(false);
  }, 1000);

  return (
    <>
      {(loader && <Loader />) || (
        <>
          <NavBar hero={props.hero} cmp="contact" />
          <ContactForm
            handleSubmit={handleSubmitForm}
            handleChange={handleChange}
            inputs={inputs}
            error={error}
          />
          <Footer />
        </>
      )}
    </>
  );
};

export default Contact;
