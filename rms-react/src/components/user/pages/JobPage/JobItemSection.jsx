import React from "react";
import { useParams } from "react-router";
import FeaturedJobItem from "../../featuredjob/FeaturedJobItem";

const JobItemSection = ({ jobs }) => {
  const { search } = useParams();
  return (
    <section className="featured_job ">
      <div className="container">
        {!jobs && search && (
          <h1>
            We have found <span style={{ color: "#26AE61" }}>0</span> jobs for :
            <span style={{ color: "#26AE61" }}>{search}</span>
          </h1>
        )}
        {jobs && search && (
          <h1>
            We have found{" "}
            <span style={{ color: "#26AE61" }}>{jobs.length}</span> jobs for :
            <span style={{ color: "#26AE61" }}>{search}</span>
          </h1>
        )}
        <div className="card-wrapper">
          {jobs &&
            jobs.map((job, i) => (
              <FeaturedJobItem
                title={job.title}
                type={job.type}
                company={job.company}
                slug={job.slug}
                icon={job.icon}
                key={i}
              />
            ))}
        </div>
        <div className="load-data">
          <button>Browse More</button>
        </div>
      </div>
    </section>
  );
};

export default JobItemSection;
