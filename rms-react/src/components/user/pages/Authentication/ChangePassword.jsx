import React, { useState, useEffect } from "react";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import "./Auth.scss";
import Loader from "../../../../services/Loader";
import ChangePasswordItem from "./ChangePasswordItem";

const ChangePassword = (props) => {
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
          <ChangePasswordItem />
          <Footer />
        </>
      )}
    </>
  );
};

export default ChangePassword;
