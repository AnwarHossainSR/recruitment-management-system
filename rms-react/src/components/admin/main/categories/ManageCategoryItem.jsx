import React from "react";

const ManageCategoryItem = ({
  id,
  name,
  icon,
  status,
  start,
  end,
  handleDelete,
}) => {
  return (
    <table className="table">
      <tbody>
        <tr className="alert">
          <td>
            <div className="outer-div">
              <h3>{name}</h3>
            </div>
          </td>
          <td>
            <span className="status">{status}</span>
          </td>
          <td>
            <span>
              {start} - {end}
            </span>
          </td>
          <td className="img">
            <img src={icon} alt="cat icon" width="50px" height="50px" />
          </td>
          <td>
            <div className="action">
              <span className="action-edit">
                <i className="fa fa-edit" />
              </span>
              <span
                className="action-button close"
                onClick={() => handleDelete(id)}
              >
                <i className="fa fa-close" />
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ManageCategoryItem;
