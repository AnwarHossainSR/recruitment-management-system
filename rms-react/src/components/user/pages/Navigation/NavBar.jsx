import React from "react";
import Nav from "../../header/Nav";
import Hero from "../Navigation/Hero";

const NavBar = (props) => {
  return (
    <header className="header" style={{ background: "#F0F0F0" }}>
      <div className="container">
        <Nav cmp={props.cmp} />
        {props.cmp === "catjob" ? (
          <Hero job={props.job} hero={props.job.name} />
        ) : props.cmp === "alljob" ? (
          <Hero job={props.job} hero={props.hero} />
        ) : (
          <Hero hero={props.hero} />
        )}
      </div>
    </header>
  );
};

export default NavBar;
