import React from "react";
import { Link } from "react-router-dom";
import Graphics from "../images/graphics.png";

const JobItem = () => {
  return (
    <div className="card">
      <div className="left">
        <img src={Graphics} />
      </div>
      <div className="line"></div>
      <div className="right">
        <div className="part1">
          <h1>Software Engineer</h1>
          <p>BJIT</p>
          <p>Dhaka</p>
          <Link className="status" to="job-details/jobid">
            FULL TIME
          </Link>
        </div>
        <div className="part2">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
