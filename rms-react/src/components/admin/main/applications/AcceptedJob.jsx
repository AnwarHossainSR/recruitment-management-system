import React from "react";

const AcceptedJob = ({ id, slug, job, status, email, cv, applied }) => {
  return (
    <tr className="alert">
      <td>
        <div className="outer-div">
          <h3>{job.title}</h3>
          <p>Dhaka, Bangladesh</p>
        </div>
      </td>
      <td>
        <span className="status">{job.status}</span>
      </td>
      <td>
        <span>{applied}</span>
      </td>
      <td className="cv">
        <span>
          <i className="fa fa-cloud-download" aria-hidden="true">
            <a href={cv}></a>
          </i>
        </span>
      </td>
      <td>
        <span className={status === "accepted" ? "status" : "status-half-time"}>
          {status}
        </span>
      </td>
      <td>
        <div className="action">
          <span aria-hidden="true">
            <i className="fa fa-check" />
          </span>
          <span aria-hidden="true" className="action-button close">
            <i className="fa fa-close" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default AcceptedJob;
