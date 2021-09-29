import React from "react";
import Search from "./Search";

const Hero = ({ job, hero }) => {
  return (
    <div className="hero_section">
      {hero === "jobs" || hero === "search" ? (
        <>
          <div className="title">
            <h1>Find Job</h1>
          </div>
          <div className="search_nav">
            <Search />
          </div>
        </>
      ) : hero === "Contact" ||
        hero === "Not Found" ||
        hero === "Forgot Password" ||
        hero === "Change Password" ||
        hero === "Login" ? (
        <>
          <div className="hero-login-data">
            <div className="center">
              <h1>{hero}</h1>
            </div>
          </div>
        </>
      ) : (
        job && (
          <div className="hero-data">
            <div className="left">
              <div className="icon">
                <img src={job.icon} alt="logo" width="100px" height="100px" />
              </div>
              <div className="details">
                <h1>{job.title}</h1>
                <div className="posted">
                  <div className="country">
                    <i className="fa fa-map-marker"></i>
                    <span>{job.company}</span>
                  </div>
                  <div className="date">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span>Posted 2nd Sep, 2021</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="amount">
                <h2>Monthly Salary</h2>
                <h2>{job.salary} TK</h2>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Hero;
