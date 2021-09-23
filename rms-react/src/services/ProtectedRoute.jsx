import React from "react";
import { Redirect, Route } from "react-router-dom";
import { notify } from "./Notification";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <>
      <Route
        {...restOfProps}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <>
              {notify("login first", "error")}
              <Redirect to="/user/sign-in" />
            </>
          )
        }
      />
    </>
  );
};

export default ProtectedRoute;
