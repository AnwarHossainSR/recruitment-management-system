import React, { useEffect, useState } from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/LoginSlice";

const Nav = () => {
  //const isAuthenticated = localStorage.getItem("token");
  const [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("token")
  );
  const dispatch = useDispatch();
  const loggedOutHandler = () => {
    dispatch(logOut());
    setAuthenticated("");
  };
  useEffect(() => {}, [isAuthenticated]);
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
        {isAuthenticated && (
          <>
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="" onClick={loggedOutHandler}>
              Logout
            </Link>
          </>
        )}
        {!isAuthenticated && <Link to="/user/sign-in">Sign in</Link>}
      </div>
    </nav>
  );
};

export default Nav;
