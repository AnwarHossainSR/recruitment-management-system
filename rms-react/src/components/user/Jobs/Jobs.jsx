import React from "react";
import JobItem from "./JobItem";
import "./Job.scss";

const Jobs = ({ latest }) => {
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
          {latest &&
            latest.map((job, i) => (
              <JobItem
                key={i}
                title={job.title}
                type={job.type}
                company={job.company}
                slug={job.slug}
                icon={job.icon}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
