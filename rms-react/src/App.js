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
import ProtectedRoute from "./services/ProtectedRoute";

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
        <ProtectedRoute
          exact
          path="/admin/dashboard"
          component={Dashboard}
          cmp="dashboard"
        />
        <ProtectedRoute
          exact
          path="/admin/add-job"
          component={AddJob}
          cmp="addjob"
        />

        <ProtectedRoute
          exact
          path="/admin/manage-job"
          component={JobManage}
          cmp="mngjob"
        />
        <ProtectedRoute
          exact
          path="/admin/manage-application"
          component={ManageApplication}
          cmp="application"
        />
        <ProtectedRoute
          exact
          path="/admin/manage-application/rejected"
          component={RejectedJobs}
          cmp="application"
        />

        {/* Categories */}
        <ProtectedRoute
          exact
          path="/admin/manage-categories"
          component={ManageCategory}
          cmp="cat"
        />
        <ProtectedRoute
          exact
          path="/admin/add-categories"
          component={AddCategory}
          cmp="cat"
        />
        <ProtectedRoute
          exact
          path="/admin/manage-training"
          component={ManageTraining}
          cmp="train"
        />
        <ProtectedRoute
          exact
          path="/admin/manage-training/slug"
          component={TrainDetails}
          cmp="train"
        />
        <ProtectedRoute
          exact
          path="/admin/manage-trainers"
          component={ManageTrainers}
          cmp="trainers"
        />
        <Route path="*">
          <NotFound hero="Not Found" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
