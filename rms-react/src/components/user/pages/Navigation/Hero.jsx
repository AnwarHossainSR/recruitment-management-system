import React from "react";
import Image from "../../images/graphics.png";

const Hero = (props) => {
  return (
    <div className="hero_section">
      {props.hero === "jobs" ? (
        <>
          <div className="title">
            <h1>Find Job</h1>
          </div>
          <div className="search_nav">
            <input type="text" className="search" />
            <button>Search</button>
          </div>
        </>
      ) : props.hero === "login" ? (
        <>
          <div className="hero-login-data">
            <div className="center">
              <h1>{props.hero}</h1>
            </div>
          </div>
        </>
      ) : props.hero === "contact" || props.hero === "Not Found" ? (
        <>
          <div className="hero-login-data">
            <div className="center">
              <h1>{props.hero}</h1>
            </div>
          </div>
        </>
      ) : (
        <div className="hero-data">
          <div className="left">
            <div className="icon">
              <img src={Image} alt="" />
            </div>
            <div className="details">
              <h1>Software Engineer</h1>
              <p>BJIT</p>
              <div className="posted">
                <div className="country">
                  <i className="fa fa-map-marker"></i>
                  <span>Bangladesh</span>
                </div>
                <div className="date">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  <span>Posted 2nd Sep, 2021</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="amount">
              <h2>Yearly Salary</h2>
              <h2>35000$</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
