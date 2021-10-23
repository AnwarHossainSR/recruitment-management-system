import React, { useState, useEffect } from "react";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import "./Auth.scss";
import Loader from "../../../../services/Loader";
import { useHistory } from "react-router";
import SignUpItem from "./SignUpItem";

const SignUp = (props) => {
  const histry = useHistory();
  const [loader, setloader] = useState(true);
  if (localStorage.getItem("token")) {
    histry.push("/");
  }
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
          <SignUpItem />
          <Footer />
        </>
      )}
    </>
  );
};

export default SignUp;
