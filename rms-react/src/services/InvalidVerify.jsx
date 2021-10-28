import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { notify } from "./Notification";

const InvalidVerify = () => {
  const histry = useHistory();
  useEffect(() => {
    notify("verification failed !", "error");
    setTimeout(() => {
      histry.push("/user/sign-in");
    }, 4000);
  }, [histry]);
  return (
    <div>
      <h1>You are redirecting to login page</h1>
    </div>
  );
};

export default InvalidVerify;
