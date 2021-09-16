import React, { useState } from "react";
import "./Layout.scss";
//import Dashboard from "./main/dashboard/Dashboard";

//import { Route } from "react-router";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <>
      {/* <div className="admin-container">
        <Header />
        <Route to="/dashboard">
          <Dashboard />
        </Route>
        <Sidebar />
      </div> */}
    </>
  );
};

export default Layout;
