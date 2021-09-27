import React from "react";
import { Link } from "react-router-dom";
//import Graphics from "../images/graphics.png";

const JobItem = ({ title, type, company, slug, icon }) => {
  return (
    <div className="card">
      <div className="left">
        <img src={icon} alt="logo" width="100px" height="100px" />
      </div>
      <div className="line"></div>
      <div className="right">
        <div className="part1">
          <h1>{title}</h1>
          <p>{company}</p>
          <Link className="status" to={`/job-details/${slug}`}>
            {type}
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
