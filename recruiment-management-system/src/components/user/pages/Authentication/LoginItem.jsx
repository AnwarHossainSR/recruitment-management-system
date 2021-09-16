import React from "react";
import { Link } from "react-router-dom";

const LoginItem = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="auth_div">
          <div className="form">
            <h1>LOGIN</h1>
            <input
              type="email"
              className="form-control"
              placeholder="user email"
            />
            <p className="error"></p>
            <input
              type="password"
              className="form-control"
              placeholder="user password"
            />
            <p className="error"></p>
            <button className="button">Login</button>
            <Link to="forgot-password" className="forgot">
              forgot your password ?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginItem;
