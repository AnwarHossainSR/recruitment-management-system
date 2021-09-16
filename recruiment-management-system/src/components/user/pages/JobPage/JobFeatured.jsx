import React from "react";
import FeaturedJobItem from "../../featuredjob/FeaturedJobItem";
const JobFeatured = () => {
  return (
    <section className="featured_job">
      <div className="container">
      <h1 className="header-text">Similar Job</h1>
        <div className="card-wrapper">
          <FeaturedJobItem />
          <FeaturedJobItem />
          <FeaturedJobItem />
        </div>
      </div>
    </section>
  );
};

export default JobFeatured;
