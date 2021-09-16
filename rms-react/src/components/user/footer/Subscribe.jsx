import React from "react";

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
        <a href="#">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Subscribe;
