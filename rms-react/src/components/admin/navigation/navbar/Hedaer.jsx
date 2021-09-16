import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Avater from "../../assets/avatar.svg";
import "./Header.scss";

const Hedaer = ({ sidebarOpen, openSidebar }) => {
  const [menu, setMenu] = useState(false);
  const dropdown = () => {
    setMenu(menu ? false : true);
  };
  return (
    <nav className="admin-navbar">
      <div className="admin-nav_icon">
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
      <div className="admin-navbar__left">
        <Link to="/">Home</Link>
        {/* <a className="active_link" href="#">
          Admin
        </a> */}
      </div>
      <div className="admin-navbar__right">
        <a href="#">
          <i className="fa fa-bell-o" aria-hidden="true"></i>
        </a>

        <div className="dropdown-container" id="menu">
          <img
            onClick={dropdown}
            className="dropbtn"
            width={30}
            src={Avater}
            alt="user"
          />
          <div className={menu ? "dropdown-content" : "dropdown-content hide"}>
            <a className="sub-link" href="#0">
              Settings
            </a>
            <a className="sub-link" href="#0">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Hedaer;
