import React, { useState, useEffect } from "react";
import Sidebar from "../../../navigation/sidebar/Sidebar";
import Header from "../../../navigation/navbar/Hedaer";
import Loader from "../../../../../services/Loader";
import { fetchApiData, storeApiData } from "../../../../../api/ApiCall";
import { notify } from "../../../../../services/Notification";
import { useHistory, useParams } from "react-router";

const EditTrainer = (props) => {
  const [loader, setloader] = useState(true);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [state, setstate] = useState({});
  const histry = useHistory();
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
    const fetch = async () => {
      const response = await fetchApiData(`trainers/${id}`);
      if (response.status === true) {
        setData(response.data);
        setstate({
          user_id: response.data.trainer.user_id,
          cat_id: response.data.trainer.cat_id,
          status: response.data.trainer.status,
          _method: "PUT",
        });
      } else {
        console.log(response);
        notify(response.message, "error");
      }
    };
    fetch();
  }, [id]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setstate((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const store = async (fData) => {
      const response = await storeApiData(`trainers/${id}`, fData);
      if (response.status === true) {
        notify(response.message, "success");
        histry.push("/admin/manage-trainers");
      } else {
        console.log(response);
        notify(response.message, "error");
        setstate({
          error: response.message,
        });
      }
    };
    store(state);
  };

  return (
    <>
      <div className="admin-container">
        <Header />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-main">
                <h1>Update Trainer</h1>
                <div className="job-form">
                  <form onSubmit={handleSubmit}>
                    <h2 className="error flex content-center items-center">
                      {state.error && state.error !== "" ? state.error : ""}
                    </h2>
                    <div className="flex-between">
                      <div className="input-row flex-item">
                        <p className="title"> user </p>
                        <select
                          name="user_id"
                          className="form-control"
                          onChange={handleChange}
                          defaultValue={data.trainer.user_id}
                        >
                          {data.users &&
                            data.users.map((item, i) => (
                              <option key={i} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="input-row flex-item">
                        <p className="title"> Training </p>
                        <select
                          name="cat_id"
                          className="form-control"
                          onChange={handleChange}
                          defaultValue={data.trainer.cat_id}
                        >
                          {data.categories &&
                            data.categories.map((item, i) => (
                              <option key={i} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex-between">
                      <div className="input-row flex-item">
                        <p className="title"> Status </p>
                        <select
                          name="status"
                          className="form-control"
                          onChange={handleChange}
                          defaultValue={data.trainer.status}
                        >
                          <option value="inactive">Inactive</option>
                          <option value="active">Active</option>
                        </select>
                      </div>
                    </div>

                    <div className="input-row flex content-center items-center">
                      <button className="button ">Update Trainer</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )}

        <Sidebar cmp="/admin/manage-trainers" />
      </div>
    </>
  );
};
export default React.memo(EditTrainer);
