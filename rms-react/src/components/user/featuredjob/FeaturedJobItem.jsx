import React from "react";
import { Link } from "react-router-dom";
//import Graphics from "../images/graphics.png";

const FeaturedJobItem = ({ title, type, company, slug, icon }) => {
  return (
    <>
      <div className="card">
        <div className="left">
          <img src={icon} alt="logo" width="100px" height="100px" />
        </div>
        <div className="right">
          <h1>{title}</h1>
          <p>{company}</p>
          <Link className="status" to={`/job-details/${slug}`}>
            {type}
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobItem;
