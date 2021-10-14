import React from "react";
import { Link } from "react-router-dom";

const ManageTrainingItem = ({ url, training }) => {
  return (
    <tr className="alert">
      <td>
        <div className="outer-div">
          <h3>{training.category.name} Training</h3>
        </div>
      </td>
      <td>
        <span>
          {training.category.period_start} to {training.category.period_end}
        </span>
      </td>

      <td>
        <span className="status">{training.status}</span>
      </td>
      <td>
        <div className="action">
          <Link to={`${url}/${training.slug}`} aria-hidden="true">
            <i className="fa fa-eye" />
          </Link>
          <span aria-hidden="true" className="action-edit">
            <i className="fa fa-edit" />
          </span>
          <span aria-hidden="true" className="action-button close">
            <i className="fa fa-close" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default ManageTrainingItem;
