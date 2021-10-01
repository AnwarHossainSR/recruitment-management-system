import React, { useEffect, useState } from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/LoginSlice";

const Nav = ({ cmp }) => {
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
        <Link to="/" className={cmp === "home" ? "active_menu" : ""}>
          Home
        </Link>
        <Link to="/jobs" className={cmp === "alljob" ? "active_menu" : ""}>
          Browse Job
        </Link>
        <Link to="/blogs" className={cmp === "blogs" ? "active_menu" : ""}>
          Blog
        </Link>
        <Link to="/contact" className={cmp === "contact" ? "active_menu" : ""}>
          Contact
        </Link>
        {isAuthenticated && (
          <>
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="" onClick={loggedOutHandler}>
              Logout
            </Link>
          </>
        )}
        {!isAuthenticated && (
          <Link
            to="/user/sign-in"
            className={cmp === "login" ? "active_menu" : ""}
          >
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
