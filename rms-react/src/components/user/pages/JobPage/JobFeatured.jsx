import React from "react";
import FeaturedJobItem from "../../featuredjob/FeaturedJobItem";
const JobFeatured = ({ similar }) => {
  return (
    <section className="featured_job">
      <div className="container">
        <h1 className="header-text">Similar Job</h1>
        <div className="card-wrapper">
          {similar &&
            similar.map((job, i) => (
              <FeaturedJobItem
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

export default JobFeatured;
