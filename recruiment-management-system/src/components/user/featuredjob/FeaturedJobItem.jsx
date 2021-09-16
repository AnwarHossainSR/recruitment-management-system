import React from "react";
import { Link } from "react-router-dom";
import Graphics from "../images/graphics.png";

const FeaturedJobItem = () => {
  return (
    <>
      <div className="card">
        <div className="left">
          <img src={Graphics} />
        </div>
        <div className="right">
          <h1>Software Engineer</h1>
          <p>BJIT</p>
          <p>Dhaka</p>
          <Link className="status" to="/job-details/jobid">
            FULL TIME
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobItem;
