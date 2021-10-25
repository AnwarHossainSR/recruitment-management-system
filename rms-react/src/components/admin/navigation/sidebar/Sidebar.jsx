import { useState, useEffect } from "react";
import "./Sidebar.scss";
import Logo from "../../assets/BJIT.png";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../../../redux/LoginSlice";

const Sidebar = (props) => {
  const sidebarOpen = true;
  const [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("token")
  );
  const dispatch = useDispatch();
  const loggedOutHandler = () => {
    setAuthenticated("");
    dispatch(logOut());
  };
  useEffect(() => {}, [isAuthenticated]);
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={Logo} alt="logo" />
          <h1>RECRUITMENT</h1>
        </div>
        <i className="fa fa-times" id="sidebarIcon" aria-hidden="true" />
      </div>
      <div className="sidebar__menu">
        <div
          className={`sidebar__link  ${
            props.cmp === "/admin/dashboard" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-home" />
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
        </div>
        <h2>Jobs</h2>
        <div
          className={`sidebar__link  ${
            props.cmp === "/admin/add-job" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-user-secret" aria-hidden="true" />
          <NavLink to="/admin/add-job">Add Job</NavLink>
        </div>
        <div
          className={`sidebar__link ${
            props.cmp === "/admin/manage-job" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-building-o" />
          <NavLink to="/admin/manage-job">Manage Jobs</NavLink>
        </div>
        <div
          className={`sidebar__link ${
            props.cmp === "/admin/manage-application" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-wrench" />
          <NavLink to="/admin/manage-application">Manage Applications</NavLink>
        </div>
        {/* <div className="sidebar__link">
          <i className="fa fa-handshake-o" />
          <Link to="#">Contracts</Link>
        </div> */}
        <h2>Training</h2>
        <div
          className={`sidebar__link ${
            props.cmp === "/admin/manage-categories" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-question" />
          <NavLink to="/admin/manage-categories">Categories</NavLink>
        </div>
        <div
          className={`sidebar__link ${
            props.cmp === "/admin/manage-trainers" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-user" />
          <NavLink to="/admin/manage-trainers">Manage Trainers</NavLink>
        </div>
        <div
          className={`sidebar__link ${
            props.cmp === "/admin/manage-training" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-briefcase" />
          <NavLink to="/admin/manage-training">Manage Training</NavLink>
        </div>
        <div
          className={`sidebar__link ${
            props.cmp === "notifications" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-bell" />
          <Link to="/admin/notifications">Notifications</Link>
        </div>
        <div
          className={`sidebar__link ${
            props.cmp === "score" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-money" />
          <Link to="/admin/manage-score">Score</Link>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off" />
          <Link to="" onClick={loggedOutHandler}>
            Log out
          </Link>
        </div>
        {/* <h2>PAYROLL</h2>
        <div className="sidebar__link">
          <i className="fa fa-money" />
          <Link to="#">Payroll</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase" />
          <Link to="#">Paygrade</Link>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off" />
          <Link to="#">Log out</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
