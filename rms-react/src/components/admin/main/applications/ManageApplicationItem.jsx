import React from "react";

const ManageApplicationItem = ({ id, slug, status, email, cv, applied }) => {
  console.log(cv);
  return (
    <tr className="alert">
      <td>
        <div className="outer-div">
          <h3>{email}</h3>
        </div>
      </td>
      {/* <td>
        <span className="status">{status}</span>
      </td> */}
      <td>
        <span>{applied}</span>
      </td>
      <td className="cv">
        <span>
          <a href={cv} target="_blank">
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
          </a>
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

export default ManageApplicationItem;
