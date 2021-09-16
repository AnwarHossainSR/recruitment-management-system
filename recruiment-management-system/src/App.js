import React from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/user/Main";
import AllJobs from "./components/user/pages/JobPage/AllJobs";
import JobDetails from "./components/user/pages/JobPage/JobDetails";
import NotFound from "./components/user/pages/NotFound";
import Login from "./components/user/pages/Authentication/Login";
import Contact from "./components/user/pages/Contact";
//admin
//import Layout from "./components/admin/Layout";
import Dashboard from "./components/admin/main/dashboard/Dashboard";
import AddJob from "./components/admin/main/job/AddJob";
import JobManage from "./components/admin/main/job/JobManage";
import ManageApplication from "./components/admin/main/job/ManageApplication";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/jobs">
          <AllJobs hero="jobs" />
        </Route>
        <Route path="/job-details/:slug">
          <JobDetails hero="details" />
        </Route>
        <Route path="/user/sign-in">
          <Login hero="login" />
        </Route>
        <Route path="/contact">
          <Contact hero="contact" />
        </Route>
        {/* Admin routes */}
        <Route exact path="/admin/dashboard">
          <Dashboard cmp="dashboard" />
        </Route>
        <Route exact path="/admin/add-job">
          <AddJob cmp="addjob" />
        </Route>
        <Route exact path="/admin/manage-job">
          <JobManage cmp="mngjob" />
        </Route>
        <Route exact path="/admin/manage-application">
          <ManageApplication cmp="application" />
        </Route>
        <Route path="*">
          <NotFound hero="Not Found" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
