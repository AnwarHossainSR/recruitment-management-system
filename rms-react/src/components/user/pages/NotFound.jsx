import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "./Navigation/NavBar";
import Loader from "../../../services/Loader";
import "./NotFound.scss";

const NotFound = (props) => {
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
          <NavBar hero={props.hero} />
          <section className="notfound">
            <div className="container">
              <div id="error-page">
                <div className="content">
                  <h2>404</h2>
                  <h4>Opps! Page not found</h4>

                  <Link className="home" to="/">
                    return home
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default NotFound;
