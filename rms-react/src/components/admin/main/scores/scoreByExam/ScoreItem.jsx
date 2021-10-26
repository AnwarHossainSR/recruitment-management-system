import React from "react";
import { Link } from "react-router-dom";

const ScoreItem = ({ exam, trainee, marks, total }) => {
  return (
    <tr className="alert">
      <td>
        <div className="outer-div">
          <h3>{trainee.user.name}</h3>
        </div>
      </td>
      <td>
        <span className="status">{marks}</span>
      </td>
      <td>
        <span className="status">Out Of {total}</span>
      </td>
      <td>
        <div className="action">
          <Link to={`/admin/manage-score/${exam.slug}`} className="action-edit">
            <i className="fa fa-eye" />
          </Link>
          <span
            className="action-button close"
            // onClick={() => handleDelete(exam.id)}
          >
            <i className="fa fa-close" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default ScoreItem;
