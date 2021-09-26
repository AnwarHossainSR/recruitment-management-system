import React, { useState, useEffect } from "react";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import "./Auth.scss";
import LoginItem from "./LoginItem";
import Loader from "../../../../services/Loader";
import { useHistory } from "react-router";

const Login = (props) => {
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
          <NavBar hero={props.hero} />
          <LoginItem />
          <Footer />
        </>
      )}
    </>
  );
};

export default Login;
