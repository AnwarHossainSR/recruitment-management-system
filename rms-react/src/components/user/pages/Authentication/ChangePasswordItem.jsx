import React, { useEffect, useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { storeApiData } from "../../../../api/ApiCall";
import { notify } from "../../../../services/Notification";
import { useHistory } from "react-router";

const passwordReducer = (state, action) => {
  if (action.val.length === 0) {
    return {
      value: action.val,
      type: "Password is required",
      isValid: false,
    };
  }
  if (action.val.length < 6) {
    return {
      value: action.val,
      type: "password must be grater than 6",
      isValid: false,
    };
  }

  return { value: action.val, isValid: true, type: action.type };
};
const confirmPasswordReducer = (state, action) => {
  if (action.val !== action.passVal) {
    return {
      value: action.val,
      type: "confirm password is not matched with new password",
      isValid: false,
    };
  }

  return { value: action.val, isValid: true, type: action.type };
};
const ChangePasswordItem = () => {
  const [error, setError] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const { token, email } = useParams();
  const histry = useHistory();

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
    type: "",
  });
  const [confirmPasswordState, dispatchConfirmPassword] = useReducer(
    confirmPasswordReducer,
    {
      value: "",
      isValid: false,
      type: "",
    }
  );
  const { isValid: passwordIsValid } = passwordState;
  const { isValid: confirmPasswordIsValid } = confirmPasswordState;
  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: "password",
      val: event.target.value,
    });
  };
  const confirmPasswordChangeHandler = (event) => {
    dispatchConfirmPassword({
      type: "conpassword",
      val: event.target.value,
      passVal: passwordState.value,
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setFormIsValid(passwordIsValid && confirmPasswordIsValid);
    }, 500);
  }, [passwordIsValid, confirmPasswordIsValid]);
  const handleSUbmit = async (e) => {
    e.preventDefault();
    if (!formIsValid) {
      setError("please provide valid password !");
    } else {
      const data = {
        password: passwordState.value,
        token: token,
        email: email,
      };
      setTimeout(() => {
        const fetchData = async () => {
          const response = await storeApiData(`updatepass`, data);
          if (response.status === true) {
            console.log(response);
            notify(response.message, "success");
            histry.push("/");
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
                  type="password"
                  className="form-control"
                  onChange={passwordChangeHandler}
                  placeholder="new password"
                />
                {passwordState.isValid && (
                  <h3 className="error">{passwordState.isValid}</h3>
                )}
              </div>
              <div>
                <input
                  type="password"
                  className="form-control"
                  onChange={confirmPasswordChangeHandler}
                  placeholder="confirm password"
                />
                {confirmPasswordState.isValid && (
                  <h3 className="error">{confirmPasswordState.isValid}</h3>
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

export default ChangePasswordItem;
