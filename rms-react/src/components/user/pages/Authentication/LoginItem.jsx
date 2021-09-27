import React, { useEffect, useReducer, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  errorMessage,
  loginFail,
  loginSuccess,
} from "../../../../redux/LoginSlice";
import axios from "../../../../config";

const emailReducer = (state, action) => {
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  if (action.val.length === 0) {
    return {
      value: action.val,
      isValid: false,
      type: action.type,
      msg: "email is required !",
    };
  }
  if (!pattern.test(action.val)) {
    return {
      value: action.val,
      isValid: false,
      type: action.type,
      msg: "provide a valid email address !",
    };
  }
  return { value: action.val, isValid: true, type: action.type };
};

const passwordReducer = (state, action) => {
  if (action.val.length === 0) {
    return {
      value: action.val,
      msg: "Password is required",
      type: action.type,
      isValid: false,
    };
  }
  if (action.val.length < 6) {
    return {
      value: action.val,
      msg: "password must be grater than 6",
      type: action.type,
      isValid: false,
    };
  }

  return { value: action.val, isValid: true, type: action.type };
};

const LoginItem = () => {
  const dispatch = useDispatch();
  const histry = useHistory();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
    type: "",
    msg: "",
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
    type: "",
    msg: "",
  });
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "email", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "password", val: event.target.value });
  };
  useEffect(() => {
    setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
  }, [emailIsValid, passwordIsValid]);
  useEffect(() => {}, [isAuth]);

  const handleSUbmit = async (e) => {
    e.preventDefault();
    if (!formIsValid) {
      dispatch(errorMessage());
    } else {
      const data = {
        email: emailState.value,
        password: passwordState.value,
      };
      axios
        .post("auth/login", data)
        .then((response) => {
          const data = response.data;
          if (data.status === true) {
            localStorage.setItem("token", data.data);
            dispatch(loginSuccess(data.message));
            setTimeout(() => {
              if (localStorage.getItem("token")) {
                histry.push("/");
              }
            }, 2000);
          } else {
            dispatch(loginFail(data.message));
          }
        })
        .catch((error) => {
          console.error(error.data);
        });
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
              )) || <h1>LOGIN</h1>}
              <div>
                <input
                  type="email"
                  className="form-control"
                  value={emailState.value}
                  onChange={emailChangeHandler}
                  placeholder="user email"
                />
                {emailState.msg && <h3 className="error">{emailState.msg}</h3>}
              </div>
              <div>
                <input
                  type="password"
                  className="form-control"
                  value={passwordState.value}
                  onChange={passwordChangeHandler}
                  placeholder="user password"
                />
                {passwordState.msg && (
                  <h3 className="error">{passwordState.msg}</h3>
                )}
              </div>
              <button className="button">
                {(isLoading && "loading..") || "Login"}
              </button>
              <Link to="forgot-password" className="forgot">
                forgot your password ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginItem;
