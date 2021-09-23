import React, { useState } from "react";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import "./Auth.scss";
import LoginItem from "./LoginItem";
import Loader from "../../../../services/Loader";

const Login = (props) => {
  const [loader, setloader] = useState(true);
  setTimeout(() => {
    setloader(false);
  }, 1000);
  return (
    <>
      {(loader && <Loader />) || (
        <>
          <NavBar hero={props.hero} />
          <LoginItem />
          <Footer />
        </>
      )}
    </>
  );
};

export default Login;
