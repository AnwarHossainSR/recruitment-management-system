import React from "react";
import Swal from "sweetalert2";
import { deleteApiData } from "../../../../../api/ApiCall";

const ScoreItem = ({ exam, trainee, marks, total, fetch, sid, eslug }) => {
  const handleDelete = (id) => {
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
          const response = await deleteApiData(`scores/${id}`);
          if (response.status === true) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: response.message,
              showConfirmButton: false,
              timer: 1500,
            });
            fetch(eslug);
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
          <span
            className="action-button close"
            onClick={() => handleDelete(sid)}
          >
            <i className="fa fa-close" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default ScoreItem;
