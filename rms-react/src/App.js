import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Main from "./components/user/Main";
import AllJobs from "./components/user/pages/JobPage/AllJobs";
import CatJob from "./components/user/categories/CatJob";
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
import ManageTrainers from "./components/admin/main/training/trainers/ManageTrainers";
import TrainDetails from "./components/admin/main/training/TrainDetails";
import SearchJob from "./components/user/pages/JobPage/SearchJob";
import ProtectedRoute from "./services/ProtectedRoute";
import ForgotPassword from "./components/user/pages/Authentication/ForgotPassword";
import ChangePassword from "./components/user/pages/Authentication/ChangePassword";
import CategoryManageApplication from "./components/admin/main/applications/CategoryManageApplication";
import EditCategory from "./components/admin/main/categories/EditCategory";
import EditJob from "./components/admin/main/job/EditJob";
import AddTrainer from "./components/admin/main/training/trainers/AddTrainer";
import EditTrainer from "./components/admin/main/training/trainers/EditTrainer";
import ManageProfile from "./components/admin/main/profile/ManageProfile";
import TraineeDetails from "./components/admin/main/training/Trainee/TraineeDetails";
import AddTraining from "./components/admin/main/training/AddTraining";
import AddTrainee from "./components/admin/main/training/Trainee/AddTrainee";
import SignUp from "./components/user/pages/Authentication/SignUp";
import Notifications from "./components/admin/main/notifications/Notifications";
import ManageExam from "./components/admin/main/scores/ManageExam";
import AddExam from "./components/admin/main/scores/AddExam";
import Score from "./components/admin/main/scores/scoreByExam/Score";
import AddScore from "./components/admin/main/scores/scoreByExam/AddScore";
import VerifySuccess from "./services/VerifySuccess";
import InvalidVerify from "./services/InvalidVerify";

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
        <Route exatc path="/categories/jobs/:slug">
          <CatJob hero="jobs" />
        </Route>
        <Route exact path="/search/jobs/:search">
          <SearchJob hero="search" />
        </Route>
        <Route exact path="/job-details/:slug">
          <JobDetails hero="details" />
        </Route>
        <Route exact path="/user/sign-in">
          <Login hero="Sign In" />
        </Route>
        <Route exact path="/user/sign-up">
          <SignUp hero="Sign Up" />
        </Route>
        <Route exact path="/success/verify">
          <VerifySuccess />
        </Route>
        <Route exact path="/invalid/verify">
          <InvalidVerify />
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

        <ProtectedRoute exact path="/admin/manage-job" component={JobManage} />
        <ProtectedRoute
          exact
          path="/admin/edit-job/:slug"
          component={EditJob}
        />
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
        {/* manageTraining */}
        <ProtectedRoute
          exact
          path="/admin/manage-training"
          component={ManageTraining}
        />
        <ProtectedRoute
          exact
          path="/admin/manage-training/add-training"
          component={AddTraining}
        />
        <ProtectedRoute
          exact
          path="/admin/manage-training/:catename/:slug"
          component={TrainDetails}
          cmp="train"
        />
        <ProtectedRoute
          exact
          path="/admin/manage-training/:catename/:catslug/trainee/:userslug"
          component={TraineeDetails}
          cmp="train"
        />
        <ProtectedRoute
          exact
          path="/admin/manage-training/:catename/:catslug/add-trainee"
          component={AddTrainee}
          cmp="train"
        />
        {/* end manageTraining */}
        {/* trainers */}
        <ProtectedRoute
          exact
          path="/admin/manage-trainers"
          component={ManageTrainers}
        />
        <ProtectedRoute
          exact
          path="/admin/manage-trainers/add-trainer"
          component={AddTrainer}
        />
        <ProtectedRoute
          exact
          path="/admin/manage-trainers/:id/edit"
          component={EditTrainer}
        />
        <ProtectedRoute
          exact
          path="/admin/profiles"
          component={ManageProfile}
        />
        <ProtectedRoute
          exact
          path="/admin/notifications"
          component={Notifications}
        />

        {/* Exams & scores */}
        <ProtectedRoute
          exact
          path="/admin/manage-score"
          component={ManageExam}
        />
        <ProtectedRoute exact path="/admin/add-exam" component={AddExam} />
        <ProtectedRoute
          exact
          path="/admin/manage-score/:slug"
          component={Score}
        />
        <ProtectedRoute
          exact
          path="/admin/:slug/add-marks"
          component={AddScore}
        />
        <Route path="*">
          <NotFound hero="Not Found" />
        </Route>
      </Switch>
    </>
  );
};

export default React.memo(App);
