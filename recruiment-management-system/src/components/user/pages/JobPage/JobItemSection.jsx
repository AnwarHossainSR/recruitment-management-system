import React from "react";
import FeaturedJobItem from '../../featuredjob/FeaturedJobItem'

const JobItemSection = () => {
  return (
    <section className="featured_job ">
      <div className="container">
        <div className="card-wrapper">
          <FeaturedJobItem />
          <FeaturedJobItem />
          <FeaturedJobItem />
          <FeaturedJobItem />
          <FeaturedJobItem />
          <FeaturedJobItem /> 
        </div>
        <div className="load-data">
            <button>Browse More</button>
          </div>
      </div>
    </section>
  );
};

export default JobItemSection;
