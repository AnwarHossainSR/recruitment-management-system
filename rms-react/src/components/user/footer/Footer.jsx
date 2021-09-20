import React from "react";
import Condition from "./Condition";
import Info from "./Info";
import Links from "./Links";
import Subscribe from "./Subscribe";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footers">
      <div className="container">
        <div className="footer">
          <Info />
          <Links />
          <Condition />
          <Subscribe />
        </div>
      </div>
    </section>
  );
};

export default Footer;
