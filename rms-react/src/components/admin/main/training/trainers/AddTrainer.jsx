import React, { useState, useEffect } from "react";
import Sidebar from "../../../navigation/sidebar/Sidebar";
import Header from "../../../navigation/navbar/Hedaer";
import Loader from "../../../../../services/Loader";
import { fetchApiData, storeApiData } from "../../../../../api/ApiCall";
import { notify } from "../../../../../services/Notification";
import { useHistory } from "react-router";

const AddTrainer = (props) => {
  const [loader, setloader] = useState(true);
  const [data, setData] = useState([]);
  const [state, setstate] = useState({
    cat_id: null,
    user_id: null,
    error: null,
  });
  const histry = useHistory();
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
    const fetch = async () => {
      const response = await fetchApiData(`admin/create/trainer`);
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
    if (state.user_id !== null || state.cat_id !== null) {
      const store = async (formData) => {
        const response = await storeApiData("trainers", formData);
        if (response.status === true) {
          notify(response.message, "success");
          histry.push("/admin/manage-trainers");
        } else {
          console.log(response.message);
          notify(response.message, "error");
          setstate({
            error:
              response.errors !== null ? response.errors[0] : response.message,
          });
        }
      };
      store(state);
    } else {
      setstate({ error: "please select all field !" });
    }
  };
  return (
    <>
      <div className="admin-container">
        <Header />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-main">
                <h1>Add Trainer</h1>
                <div className="job-form">
                  <form onSubmit={handleSubmit}>
                    <h2 className="error flex content-center items-center">
                      {state.error !== "" ? state.error : ""}
                    </h2>
                    <div className="flex-between">
                      <div className="input-row flex-item">
                        <p className="title"> user </p>
                        <select
                          name="user_id"
                          className="form-control"
                          onChange={handleChange}
                        >
                          <option>Please select employee</option>
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
                        >
                          <option>Please select training</option>
                          {data.categories &&
                            data.categories.map((item, i) => (
                              <option key={i} value={item.category.id}>
                                {item.category.name}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className="input-row flex content-center items-center">
                      <button className="button">Add Trainer</button>
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
export default AddTrainer;
