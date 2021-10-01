import React, { useState, useEffect } from "react";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import "./Auth.scss";
import Loader from "../../../../services/Loader";
import ForgotPassItem from "./ForgotPassItem";

const ForgotPassword = (props) => {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, []);

  return (
    <>
      {(loader && <Loader />) || (
        <>
          <NavBar hero={props.hero} cmp="login" />
          <ForgotPassItem />
          <Footer />
        </>
      )}
    </>
  );
};

export default ForgotPassword;
