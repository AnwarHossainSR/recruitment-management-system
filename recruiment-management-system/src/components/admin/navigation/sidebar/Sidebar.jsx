import React from "react";
import "./Sidebar.scss";
import Logo from "../../assets/BJIT.png";
import { Link, NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const sidebarOpen = true;
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
            props.cmp == "dashboard" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-home" />
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
        </div>
        <h2>Jobs</h2>
        <div
          className={`sidebar__link  ${
            props.cmp == "addjob" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-user-secret" aria-hidden="true" />
          <NavLink to="/admin/add-job">Add Job</NavLink>
        </div>
        <div
          className={`sidebar__link ${
            props.cmp == "mngjob" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-building-o" />
          <NavLink to="/admin/manage-job">Manage Jobs</NavLink>
        </div>
        <div
          className={`sidebar__link ${
            props.cmp == "application" ? "active_menu_link" : ""
          }`}
        >
          <i className="fa fa-wrench" />
          <NavLink to="/admin/manage-application">Manage Applications</NavLink>
        </div>
        {/* <div className="sidebar__link">
          <i className="fa fa-handshake-o" />
          <a href="#">Contracts</a>
        </div> */}
        <h2>Training</h2>
        <div className="sidebar__link">
          <i className="fa fa-question" />
          <a href="#">Category</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out" />
          <a href="#">Manage Training</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user" />
          <a href="#">Manage Trainers</a>
        </div>
        <div className="sidebar__link">
          {/* <i className="fa fa-files-o" /> */}
          <i className="fa fa-calendar-check-o" />
          <a href="#">Link</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off" />
          <a href="#">Log out</a>
        </div>
        {/* <h2>PAYROLL</h2>
        <div className="sidebar__link">
          <i className="fa fa-money" />
          <a href="#">Payroll</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase" />
          <a href="#">Paygrade</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off" />
          <a href="#">Log out</a>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
