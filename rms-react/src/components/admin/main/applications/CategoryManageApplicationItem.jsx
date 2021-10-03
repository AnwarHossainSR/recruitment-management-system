import React from "react";
import { Link } from "react-router-dom";

const CategoryManageApplicationItem = ({ slug, name, status, icon, count }) => {
  return (
    <tr className="alert">
      <td>
        <div className="outer-div">
          <h3>{name}</h3>
          <p>Dhaka, Bangladesh</p>
        </div>
      </td>
      <td>
        <span className="status">{status}</span>
      </td>
      <td>{count} Jobs</td>
      <td className="img">
        <img src={icon} alt="cat icon" width="50px" height="50px" />
      </td>
      <td>
        <div className="action">
          <Link to={`/admin/manage-application/${slug}`}>
            <i className="fa fa-eye" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default CategoryManageApplicationItem;
