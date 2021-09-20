import React from "react";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div className="quick_links">
      <h1>Subscribe Now</h1>
      <p>Sed consequat sapien faus quam bibendum convallis.</p>
      <div className="input_subscriber">
        <input type="text" className="input" />
        <button className="button-footer">Submit</button>
      </div>
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
