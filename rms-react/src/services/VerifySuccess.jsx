import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { notify } from "./Notification";

const VerifySuccess = () => {
  const histry = useHistory();
  useEffect(() => {
    notify("verification success !", "success");
    setTimeout(() => {
      histry.push("/user/sign-in");
    }, 5000);
  }, [histry]);
  return (
    <div>
      <h1>You are redirecting to login page</h1>
    </div>
  );
};

export default VerifySuccess;
