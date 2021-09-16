import React from "react";
import Hero from "./Hero";
import Nav from "./Nav";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Nav />
        <Hero />
      </div>
    </header>
  );
};

export default Header;
