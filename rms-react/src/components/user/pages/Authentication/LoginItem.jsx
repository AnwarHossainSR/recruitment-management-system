import React, { useEffect, useReducer, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  errorMessage,
  loginPending,
  loginFail,
  loginSuccess,
} from "../../../../redux/LoginSlice";
import { fetchApiData, storeApiData } from "../../../../api/ApiCall";
import Gif from "../../images/spinner.gif";
import github from "../../images/github.svg";
import google from "../../images/google.svg";
import { notify } from "../../../../services/Notification";

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
      dispatch(loginPending(true));
      const data = {
        email: emailState.value,
        password: passwordState.value,
      };

      const fetchData = async () => {
        const response = await storeApiData("auth/login", data);
        console.log(response.data);
        if (response.status === true) {
          if (response.data.user.is_admin === 1) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("type", response.data.user.is_admin);
            dispatch(loginSuccess(response.message));
            setTimeout(() => {
              //var admin = JSON.parse(localStorage.getItem("is_admin"));
              histry.push("/admin/dashboard");
              dispatch(loginPending(false));
            }, 2000);
          } else {
            notify("you have not permission to access admin page !");
          }
        } else {
          dispatch(loginFail(response.message));
        }
      };
      fetchData();
    }
  };
  const socialAuth = async () => {
    const response = await fetchApiData(`auth/github`);
    console.log(response);
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
                {(isLoading && (
                  <div>
                    <img
                      src={Gif}
                      alt="loading..."
                      width="15px"
                      height="15px"
                    />
                    <span>Login</span>
                  </div>
                )) ||
                  "Login"}
              </button>
              <div className="flex justify-between">
                <Link to="/user/sign-up" className="forgot">
                  don't have any account ?
                </Link>
                <Link to="/user/forgot-password" className="forgot">
                  forgot your password ?
                </Link>
              </div>
              <div className="flex content-center social">
                <img src={github} alt="github logo" onClick={socialAuth} />
                <img src={google} alt="google logo" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginItem;
