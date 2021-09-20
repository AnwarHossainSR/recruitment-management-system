import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Main from "./components/user/Main";
import AllJobs from "./components/user/pages/JobPage/AllJobs";
import JobDetails from "./components/user/pages/JobPage/JobDetails";
import NotFound from "./components/user/pages/NotFound";
import Login from "./components/user/pages/Authentication/Login";
import Contact from "./components/user/pages/Contact";
import Dashboard from "./components/admin/main/dashboard/Dashboard";
import AddJob from "./components/admin/main/job/AddJob";
import JobManage from "./components/admin/main/job/JobManage";
import ManageApplication from "./components/admin/main/job/ManageApplication";
import RejectedJobs from "./components/admin/main/job/RejectedJobs";
import ManageCategory from "./components/admin/main/categories/ManageCategory";
import AddCategory from "./components/admin/main/categories/AddCategory";
import ManageTraining from "./components/admin/main/training/ManageTraining";
import ManageTrainers from "./components/admin/main/training/ManageTrainers";
import TrainDetails from "./components/admin/main/training/TrainDetails";
import SearchJob from "./components/user/pages/JobPage/SearchJob";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exatc path="/jobs">
          <AllJobs hero="jobs" />
        </Route>
        <Route exact path="/search/jobs/:search">
          <SearchJob hero="search" />
        </Route>
        <Route exact path="/job-details/:slug">
          <JobDetails hero="details" />
        </Route>
        <Route exact path="/user/sign-in">
          <Login hero="login" />
        </Route>
        <Route exact path="/contact">
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
        <Route exact path="/admin/manage-application/rejected">
          <RejectedJobs />
        </Route>
        {/* Categories */}
        <Route exact path="/admin/manage-categories">
          <ManageCategory cmp="cat" />
        </Route>
        <Route exact path="/admin/add-categories">
          <AddCategory cmp="cat" />
        </Route>
        <Route exact path="/admin/manage-training">
          <ManageTraining cmp="train" />
        </Route>
        <Route exact path="/admin/manage-training/slug">
          <TrainDetails />
        </Route>
        <Route exact path="/admin/manage-trainers">
          <ManageTrainers cmp="trainers" />
        </Route>

        <Route path="*">
          <NotFound hero="Not Found" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
