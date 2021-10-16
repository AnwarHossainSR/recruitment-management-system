import React from "react";
import { Link } from "react-router-dom";

const TraineeItem = ({ trainer, training }) => {
  return (
    <tr className="alert">
      <td>
        <div className="outer-div">
          <h3>Anwar Hossain</h3>
        </div>
      </td>
      <td>
        <span className="status">{training.category.name} Trainee</span>
      </td>

      <td>
        <span className="status">Active</span>
      </td>
      <td>
        <div className="action">
          <Link to="" aria-hidden="true">
            <i className="fa fa-eye" />
          </Link>
          <span aria-hidden="true" className="action-button close">
            <i className="fa fa-close" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TraineeItem;
