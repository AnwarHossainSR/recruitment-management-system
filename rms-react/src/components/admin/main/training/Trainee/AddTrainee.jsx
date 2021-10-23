import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { fetchApiData, storeApiData } from "../../../../../api/ApiCall";
import Loader from "../../../../../services/Loader";
import { notify } from "../../../../../services/Notification";
import Hedaer from "../../../navigation/navbar/Hedaer";
import Sidebar from "../../../navigation/sidebar/Sidebar";

const AddTrainee = () => {
  const [loader, setloader] = useState(true);
  const histry = useHistory();
  const { catslug: slug } = useParams();
  const [training_id, setTraining_id] = useState(null);
  const [user_id, setUser_id] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
    const fetch = async () => {
      const response = await fetchApiData(`admin/create/trainees/${slug}`);
      if (response.status === true) {
        setData(response.data);
        setTraining_id(response.data.training.id);
      } else {
        console.log(response);
        notify(response.message, "error");
      }
    };
    fetch();
  }, [slug]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user_id !== null) {
      const store = async (formData) => {
        const response = await storeApiData("trainees", {
          training_id: training_id,
          user_id: user_id,
        });
        if (response.status === true) {
          console.log(response);
          notify(response.message, "success");
          histry.goBack();
        } else {
          console.log(response);
          notify(response.message, "error");
          setError(
            response.errors !== null ? response.errors[0] : response.message
          );
        }
      };
      store();
    } else {
      setError("please select user !");
    }
  };
  return (
    <>
      <div className="admin-container">
        <Hedaer />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-main">
                <h1>Add Training</h1>
                <div className="job-form">
                  <form onSubmit={handleSubmit}>
                    <h2 className="error flex content-center items-center">
                      {error && error}
                    </h2>
                    <div className="flex-between">
                      <div className="input-row flex-item">
                        <p className="title"> Training </p>
                        <input
                          type="text"
                          name="cat_id"
                          defaultValue={data.training.category.name}
                          className="form-control"
                          onChange={(e) => setTraining_id(e.target.value)}
                          readOnly
                        />
                      </div>
                      <div className="input-row flex-item">
                        <p className="title"> User </p>
                        <select
                          name="user_id"
                          className="form-control"
                          onChange={(e) => setUser_id(e.target.value)}
                        >
                          <option>Please select training</option>
                          {data &&
                            data.users.map((item, i) => (
                              <option key={i} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="input-row flex content-center items-center">
                        <button className="button">Add Trainee</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )}

        <Sidebar cmp="/admin/manage-training" />
      </div>
    </>
  );
};
export default AddTrainee;
