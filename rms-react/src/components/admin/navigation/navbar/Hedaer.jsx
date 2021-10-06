import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { useState } from "react/cjs/react.development";
import Avater from "../../assets/avatar.svg";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { logOut } from "../../../../redux/LoginSlice";

const Hedaer = ({ sidebarOpen, openSidebar }) => {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("token")
  );
  const dropdown = () => {
    setMenu(menu ? false : true);
  };
  const loggedOutHandler = () => {
    dispatch(logOut());
    setAuthenticated("");
  };
  useEffect(() => {}, [isAuthenticated]);

  return (
    <nav className="admin-navbar">
      <div className="admin-nav_icon">
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
      <div className="admin-navbar__left">
        <Link to="/">Home</Link>
        {/* <Link className="active_link" to="/">
          Admin
        </Link> */}
      </div>
      <div className="admin-navbar__right">
        <Link to="/">
          <i className="fa fa-bell-o" aria-hidden="true"></i>
        </Link>

        <div className="dropdown-container" id="menu">
          <img
            onClick={dropdown}
            className="dropbtn"
            width={30}
            src={Avater}
            alt="user"
          />
          <div className={menu ? "dropdown-content" : "dropdown-content hide"}>
            <Link className="sub-link" to="#0">
              Settings
            </Link>
            <Link to="" className="sub-link" onClick={loggedOutHandler}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Hedaer;
