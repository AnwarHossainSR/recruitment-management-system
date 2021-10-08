import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Main from "./components/user/Main";
import AllJobs from "./components/user/pages/JobPage/AllJobs";
import JobDetails from "./components/user/pages/JobPage/JobDetails";
import NotFound from "./components/user/pages/NotFound";
import Login from "./components/user/pages/Authentication/Login";
import Contact from "./components/user/pages/Contact";
import PrivacyPolicy from "./components/user/pages/PrivacyPolicy";
import Dashboard from "./components/admin/main/dashboard/Dashboard";
import AddJob from "./components/admin/main/job/AddJob";
import JobManage from "./components/admin/main/job/JobManage";
import ManageApplication from "./components/admin/main/applications/ManageApplication";
import ManageCategory from "./components/admin/main/categories/ManageCategory";
import AddCategory from "./components/admin/main/categories/AddCategory";
import ManageTraining from "./components/admin/main/training/ManageTraining";
import ManageTrainers from "./components/admin/main/training/ManageTrainers";
import TrainDetails from "./components/admin/main/training/TrainDetails";
import SearchJob from "./components/user/pages/JobPage/SearchJob";
import ProtectedRoute from "./services/ProtectedRoute";
import ForgotPassword from "./components/user/pages/Authentication/ForgotPassword";
import ChangePassword from "./components/user/pages/Authentication/ChangePassword";
import CategoryManageApplication from "./components/admin/main/applications/CategoryManageApplication";
import EditCategory from "./components/admin/main/categories/EditCategory";
import EditJob from "./components/admin/main/job/EditJob";

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
          <Login hero="Login" />
        </Route>
        <Route exact path="/user/forgot-password">
          <ForgotPassword hero="Forgot Password" />
        </Route>
        <Route exact path="/forgot/:token/:email">
          <ChangePassword hero="Change Password" />
        </Route>
        <Route exact path="/contact">
          <Contact hero="Contact" />
        </Route>
        <Route exact path="/privacy">
          <PrivacyPolicy hero="Provacy Policy" />
        </Route>
        {/* Admin routes */}
        <ProtectedRoute exact path="/admin/dashboard" component={Dashboard} />
        <ProtectedRoute
          exact
          path="/admin/add-job"
          component={AddJob}
          cmp="editjob"
        />
        <ProtectedRoute
          exact
          path="/admin/edit-job/:slug"
          component={EditJob}
          cmp="addjob"
        />

        <ProtectedRoute exact path="/admin/manage-job" component={JobManage} />
        <ProtectedRoute
          exact
          path="/admin/manage-application"
          component={CategoryManageApplication}
          text="app"
        />
        <ProtectedRoute
          exact
          path="/admin/manage-application/:slug"
          component={ManageApplication}
          text="app"
        />
        <ProtectedRoute
          exact
          path="/admin/manage-application/:slug/accepted"
          component={ManageApplication}
          text="accept"
        />
        <ProtectedRoute
          exact
          path="/admin/manage-application/:slug/rejected"
          component={ManageApplication}
          text="reject"
        />

        {/* Categories */}
        <ProtectedRoute
          exact
          path="/admin/manage-categories"
          component={ManageCategory}
        />
        <ProtectedRoute
          exact
          path="/admin/add-categories"
          component={AddCategory}
        />
        <ProtectedRoute
          exact
          path="/admin/edit-categories/:slug"
          component={EditCategory}
        />
        {/* endCategory */}
        <ProtectedRoute
          exact
          path="/admin/manage-training"
          component={ManageTraining}
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
        />
        <Route path="*">
          <NotFound hero="Not Found" />
        </Route>
      </Switch>
    </>
  );
};

export default React.memo(App);
