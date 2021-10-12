import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteApiData } from "../../../../../api/ApiCall";

const TrainersItem = ({ id, status, category, user }) => {
  const jobDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const callFun = async () => {
          const response = await deleteApiData(`trainers/${id}`);
          if (response.status === true) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: response.message,
              showConfirmButton: false,
              timer: 1500,
            });
            console.log(response);
          } else {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: response.message,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        };
        callFun();
      }
    });
  };
  return (
    <tr className="alert">
      <td>
        <div className="outer-div">
          <h3>{user.name}</h3>
          <p>{category.name + " trainer"}</p>
        </div>
      </td>
      <td>
        <span>{category.period_start + " to " + category.period_end}</span>
      </td>
      <td>
        <span className="status">{status}</span>
      </td>
      <td>
        <div className="action">
          <Link to={`/admin/manage-trainers/${id}/edit`} aria-hidden="true">
            <i className="fa fa-edit" />
          </Link>
          <span
            aria-hidden="true"
            className="action-button close"
            onClick={() => jobDelete(id)}
          >
            <i className="fa fa-close" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default React.memo(TrainersItem);
