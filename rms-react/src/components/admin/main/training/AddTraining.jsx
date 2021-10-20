import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { fetchApiData, storeApiData } from "../../../../api/ApiCall";
import Loader from "../../../../services/Loader";
import { notify } from "../../../../services/Notification";
import Hedaer from "../../navigation/navbar/Hedaer";
import Sidebar from "../../navigation/sidebar/Sidebar";

const AddTraining = () => {
  const [loader, setloader] = useState(true);
  const [data, setData] = useState([]);
  const [state, setstate] = useState({
    cat_id: null,
    error: null,
  });
  const histry = useHistory();
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
    const fetch = async () => {
      const response = await fetchApiData(`admin/create/trainings`);
      if (response.status === true) {
        setData(response.data);
      } else {
        console.log(response);
        notify(response.message, "error");
      }
    };
    fetch();
  }, []);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setstate((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.cat_id !== null) {
      const store = async (formData) => {
        const response = await storeApiData("trainings", formData);
        if (response.status === true) {
          notify(response.message, "success");
          histry.push("/admin/manage-training");
        } else {
          console.log(response);
          notify(response.message, "error");
          setstate({
            error:
              response.errors !== null ? response.errors[0] : response.message,
          });
        }
      };
      store(state);
    } else {
      setstate({ error: "please select training name !" });
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
                      {state.error !== "" ? state.error : ""}
                    </h2>
                    <div className="flex-between">
                      <div className="input-row flex-item">
                        <p className="title"> Training </p>
                        <select
                          name="cat_id"
                          className="form-control"
                          onChange={handleChange}
                        >
                          <option>Please select training</option>
                          {data.categories &&
                            data.categories.map((item, i) => (
                              <option key={i} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="input-row flex-item">
                        <button className="button">Add Training</button>
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

export default AddTraining;
