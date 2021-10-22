import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteApiData } from "../../../../api/ApiCall";

const ManageTrainingItem = ({ url, training, fetch }) => {
  const trainingDelete = (id) => {
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
          const response = await deleteApiData(`trainings/${id}`);
          if (response.status === true) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: response.message,
              showConfirmButton: false,
              timer: 1500,
            });
            fetch();
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
          <Link
            to={`${url}/${training.category.name.toLowerCase()}/${
              training.slug
            }`}
            aria-hidden="true"
          >
            <i className="fa fa-eye" />
          </Link>
          <span aria-hidden="true" className="action-edit">
            <i className="fa fa-edit" />
          </span>
          <span
            aria-hidden="true"
            className="action-button close"
            onClick={() => trainingDelete(training.id)}
          >
            <i className="fa fa-close" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default ManageTrainingItem;
