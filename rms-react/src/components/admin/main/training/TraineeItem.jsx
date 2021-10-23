import { Link } from "react-router-dom";

const TraineeItem = ({ trainee }) => {
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
          <span className="action-button close">
            <i className="fa fa-close" />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TraineeItem;
