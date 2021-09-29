import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { storeApiData } from "../../../../api/ApiCall";
import { notify } from "../../../../services/Notification";

const emailReducer = (state, action) => {
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  if (action.val.length === 0) {
    return {
      value: action.val,
      isValid: "email is required !",
      type: action.type,
    };
  }
  if (!pattern.test(action.val)) {
    return {
      value: action.val,
      isValid: "email is not valid !",
      type: action.type,
    };
  }
  return { value: action.val, isValid: true, type: action.type };
};
const ForgotPassItem = () => {
  const [error, setError] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
    type: "",
  });
  const { isValid: emailIsValid } = emailState;
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "email", val: event.target.value });
  };
  useEffect(() => {
    setTimeout(() => {
      setFormIsValid(emailIsValid);
    }, 500);
  }, [emailIsValid]);
  const handleSUbmit = async (e) => {
    e.preventDefault();
    if (!formIsValid) {
      setError("please provide valid input");
    } else {
      const data = {
        email: emailState.value,
      };
      setTimeout(() => {
        const fetchData = async () => {
          const response = await storeApiData(`forgot`, data);
          if (response.status === true) {
            notify(response.message, "success");
            //dispatchEmail({ type: "email", val: "" });
          } else {
            notify(response.message, "error");
          }
        };
        fetchData();
      }, 1000);
    }
  };
  return (
    <section className="login">
      <div className="container">
        <div className="auth_div">
          <form onSubmit={handleSUbmit}>
            <div className="form">
              {(error && (
                <h3 className="error">
                  {error} <br />
                </h3>
              )) || <h1>Forgot Password</h1>}
              <div>
                <input
                  type="email"
                  className="form-control"
                  value={emailState.value}
                  onChange={emailChangeHandler}
                  placeholder="user email"
                />
                {emailState.isValid && (
                  <h3 className="error">{emailState.isValid}</h3>
                )}
              </div>
              <button className="button">Send</button>
              <Link to="/user/sign-in" className="forgot">
                Go to sign-in page
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassItem;
