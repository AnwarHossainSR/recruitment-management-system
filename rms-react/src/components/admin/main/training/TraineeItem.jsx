import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteApiData } from "../../../../api/ApiCall";

const TraineeItem = ({ trainee, slug, fetchDatas }) => {
  const traineeDelete = (id) => {
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
          const response = await deleteApiData(`trainees/${id}`);
          if (response.status === true) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: response.message,
              showConfirmButton: false,
              timer: 1500,
            });
            fetchDatas(slug);
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
        <span className="status">{trainee.training.category.name} Trainee</span>
      </td>
      <td>
        <span className="status">{trainee.training.status}</span>
      </td>
      <td>
        <div className="action">
          <Link
            to={`/admin/manage-training/${trainee.training.category.name.toLowerCase()}/${
              trainee.training.slug
            }/trainee/${trainee.user.slug}`}
          >
            <i className="fa fa-eye" />
          </Link>
          <span
            className="action-button close"
            onClick={() => traineeDelete(trainee.id)}
          >
            <i className="fa fa-close" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TraineeItem;
