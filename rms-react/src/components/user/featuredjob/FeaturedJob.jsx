import React from "react";
import FeaturedJobItem from "./FeaturedJobItem";
import "./FeaturedJob.scss";

const FeaturedJob = ({ featured }) => {
  return (
    <section className="featured_job">
      <div className="container">
        <div className="featured_job-info">
          <h1 className="featured_job-heading headings">Featured Jobs</h1>
          <p className="featured_job-des">
            Hand-picked jobs featured depending on popularity and benifits
          </p>
        </div>
        <div className="card-wrapper">
          {featured &&
            featured.map((job, i) => (
              <FeaturedJobItem
                key={i}
                title={job.title}
                type={job.type}
                company={job.company}
                slug={job.slug}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJob;
