import React from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center fixed-top justify-between">
      <div className="left flex items-center">
        <div className="branding">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/jobs">Browse Job</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/sign-in">Sign in</Link>
        <Link to="/admin/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Nav;
