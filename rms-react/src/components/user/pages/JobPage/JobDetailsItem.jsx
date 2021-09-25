import React, { useState } from "react";
import { Link } from "react-router-dom";
import JobFeatured from "./JobFeatured";
import JobModal from "./modal/JobModal";

const JobDetailsItem = ({ job, similar }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="details_info">
      <div className="container">
        <div className="row">
          <div className="left">
            {modalOpen && (
              <JobModal jobId={job.id} setOpenModal={setModalOpen} />
            )}
            <h1>Job Description</h1>
            <p>{job && job.description}</p>
            <Link
              to="/"
              className="button"
              onClick={(e) => {
                e.preventDefault();
                setModalOpen(true);
              }}
            >
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
