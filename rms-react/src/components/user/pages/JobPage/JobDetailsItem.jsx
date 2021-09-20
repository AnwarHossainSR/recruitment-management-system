import React from "react";
import { Link } from "react-router-dom";
import JobFeatured from "./JobFeatured";

const JobDetailsItem = ({ job, similar }) => {
  return (
    <section className="details_info">
      <div className="container">
        <div className="row">
          <div className="left">
            <h1>Job Description</h1>
            <p>{job && job.description}</p>
            <Link to="/" className="button">
              apply job
            </Link>
          </div>
          <div className="right">
            <h1>Job Location</h1>
            <div className="location-map">Map will be rendered</div>
          </div>
        </div>
        <JobFeatured similar={similar} />
      </div>
    </section>
  );
};

export default JobDetailsItem;
