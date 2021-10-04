import React, { useState } from "react";
import { Link } from "react-router-dom";
import { storeApiData } from "../../../api/ApiCall";
import { notify } from "../../../services/Notification";

const Subscribe = () => {
  const [email, setemail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      notify("provide an email", "error");
    } else {
      const response = await storeApiData("subscribe", { email: email });
      if (response.status === true) {
        notify(response.message, "success");
      } else {
        notify(response.errors.email[0], "error");
      }
    }
  };
  return (
    <div className="quick_links">
      <h1>Subscribe Now</h1>
      <p>Sed consequat sapien faus quam bibendum convallis.</p>
      <form onSubmit={submitHandler}>
        <div className="input_subscriber">
          <input
            type="text"
            className="input"
            onChange={(e) => setemail(e.target.value)}
          />
          <button className="button-footer">Submit</button>
        </div>
      </form>
      <div className="social">
        <Link to="/">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </Link>
        <Link to="/">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </Link>
        <Link to="/">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
};

export default Subscribe;
