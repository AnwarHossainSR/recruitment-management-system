import React from "react";
import JobItem from "./JobItem";
import "./Job.scss";

const Jobs = () => {
  return (
    <section className="job">
      <div className="container">
        <div className="job-info">
          <h1 className="job-heading headings">Latest Jobs</h1>
          <p className="job-des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque
            dignissim quam et metus effici turac fringilla lorem facilisis.
          </p>
        </div>
        <div className="card-wrapper">
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
        </div>
      </div>
    </section>
  );
};

export default Jobs;
