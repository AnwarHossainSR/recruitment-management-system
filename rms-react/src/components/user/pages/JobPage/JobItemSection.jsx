import React, { useState } from "react";
import { useParams } from "react-router";
import FeaturedJobItem from "../../featuredjob/FeaturedJobItem";
import Gif from "../../images/spinner.gif";

const JobItemSection = ({ jobs }) => {
  const { search } = useParams();
  const [visible, setVisible] = useState(9);
  const [loading, setloading] = useState(false);
  const LoadMore = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setVisible((visible) => visible + 6);
    }, 2000);
  };
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
            jobs
              .slice(0, visible)
              .map((job, i) => (
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
          {(loading && (
            <img
              src={Gif}
              alt="loading..."
              width="100px"
              height="100px"
              style={{ marginTop: "1rem" }}
            />
          )) || (
            <button className="button" onClick={LoadMore}>
              Browse More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobItemSection;
