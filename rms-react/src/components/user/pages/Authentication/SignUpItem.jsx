import React, { useEffect, useReducer, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  errorMessage,
  loginPending,
  loginFail,
  loginSuccess,
} from "../../../../redux/LoginSlice";
import { storeApiData } from "../../../../api/ApiCall";
import Gif from "../../images/spinner.gif";

const nameReducer = (state, action) => {
  if (action.val.length === 0) {
    return {
      value: action.val,
      msg: "name is required",
      type: action.type,
      isValid: false,
    };
  }

  return { value: action.val, isValid: true, type: action.type };
};
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
const confirmPasswordReducer = (state, action) => {
  if (action.val !== action.password) {
    return {
      value: action.val,
      msg: "Not matched with passwod",
      type: action.type,
      isValid: false,
    };
  }

  return { value: action.val, isValid: true, type: action.type };
};

const SignUpItem = () => {
  const dispatch = useDispatch();
  const histry = useHistory();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);
  const [formIsValid, setFormIsValid] = useState(false);
  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: false,
    type: "",
    msg: "",
  });
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
  const [confirmPasswordState, dispatchConfirmPassword] = useReducer(
    confirmPasswordReducer,
    {
      value: "",
      isValid: false,
      type: "",
      msg: "",
      password: null,
    }
  );
  const { isValid: nameIsValid } = nameState;
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const { isValid: confirmPasswordIsValid } = confirmPasswordState;

  const nameChangeHandler = (event) => {
    dispatchName({ type: "name", val: event.target.value });
  };
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "email", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "password", val: event.target.value });
  };
  const confirmPasswordChangeHandler = (event) => {
    dispatchConfirmPassword({
      type: "cpassword",
      val: event.target.value,
      password: passwordState.value,
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setFormIsValid(
        nameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid
      );
    }, 500);
  }, [emailIsValid, passwordIsValid, confirmPasswordIsValid, nameIsValid]);
  useEffect(() => {}, [isAuth]);

  const handleSUbmit = async (e) => {
    e.preventDefault();
    if (!formIsValid) {
      dispatch(errorMessage());
    } else {
      dispatch(loginPending(true));
      const data = {
        name: nameState.value,
        email: emailState.value,
        password: passwordState.value,
        password_confirmation: confirmPasswordState.value,
      };

      const fetchData = async () => {
        const response = await storeApiData("auth/register", data);
        if (response.status === true) {
          dispatch(loginSuccess(response.message));
          setTimeout(() => {
            dispatch(loginPending(false));
          }, 2000);
          histry.push("/user/sign-in");
        } else {
          dispatch(
            loginFail(
              response.errors ? response.errors.email : response.message
            )
          );
        }
      };
      fetchData();
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
              )) || <h1>Sign Up</h1>}
              <div>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={nameState.value}
                  onChange={nameChangeHandler}
                  placeholder="user name"
                />
                {nameState.msg && <h3 className="error">{nameState.msg}</h3>}
              </div>
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
              <div>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPasswordState.value}
                  onChange={confirmPasswordChangeHandler}
                  placeholder="Confirm password"
                />
                {confirmPasswordState.msg && (
                  <h3 className="error">{confirmPasswordState.msg}</h3>
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
                    <span>Sign up</span>
                  </div>
                )) ||
                  "Sign up"}
              </button>
              <Link to="/user/sign-in" className="forgot">
                Already have an account ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpItem;
