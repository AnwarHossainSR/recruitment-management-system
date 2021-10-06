import React from "react";
import { deleteApiData } from "../../../../api/ApiCall";
import Swal from "sweetalert2";

const JobManageItem = ({ slug, id, title, location, type, icon }) => {
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
          const response = await deleteApiData(`jobs/${id}`);
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
        <label className="checkbox-wrap checkbox-primary">
          <input type="checkbox" defaultChecked />
          <span className="checkmark" />
        </label>
      </td>
      <td>
        <div className="outer-div">
          <h3>{title}</h3>
          <p>Dhaka, Bangladesh</p>
        </div>
      </td>
      <td>
        <span className={type === "full time" ? "status" : "status-half-time"}>
          {type}
        </span>
      </td>
      <td className="img">
        <img src={icon} alt="job icon" />
      </td>
      <td>
        <div className="action">
          <span aria-hidden="true">
            <i className="fa fa-edit" />
          </span>
          <span aria-hidden="true" className="action-button close">
            <i className="fa fa-close" onClick={() => jobDelete(id)} />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default JobManageItem;
