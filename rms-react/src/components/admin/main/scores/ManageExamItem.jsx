import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteApiData } from "../../../../api/ApiCall";

const ManageExamItem = ({ exam, fetch }) => {
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
          const response = await deleteApiData(`exams/${id}`);
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
          <h3>{exam.name}</h3>
        </div>
      </td>
      <td>{/* <span className="status">{status}</span> */}</td>
      <td>
        <span>On {exam.exam_date}</span>
      </td>
      <td>
        <div className="action">
          <Link to={`/admin/manage-score/${exam.slug}`} className="action-edit">
            <i className="fa fa-eye" />
          </Link>
          <span
            className="action-button close"
            onClick={() => handleDelete(exam.id)}
          >
            <i className="fa fa-close" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default ManageExamItem;
