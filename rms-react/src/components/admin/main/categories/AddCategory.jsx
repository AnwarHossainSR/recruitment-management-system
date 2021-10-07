import React, { useState, useEffect } from "react";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import Loader from "../../../../services/Loader";
import {
  nameChangeHandler,
  checkForm,
  errorChangeHandler,
  statusChangeHandler,
  startChangeHandler,
  endChangeHandler,
} from "../../../../redux/CategoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { storeApiData } from "../../../../api/ApiCall";
import { notify } from "../../../../services/Notification";

const AddCategory = (props) => {
  const [loader, setloader] = useState(true);
  const histry = useHistory();
  const dispatch = useDispatch();
  const { formisValid, errorName, data } = useSelector(
    (state) => state.category
  );
  const [file, setfile] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, [loader]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkForm());
    if (formisValid) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("status", data.status);
      formData.append("period_start", data.period_start);
      formData.append("period_end", data.period_end);
      formData.append("icon", file);

      const store = async (data) => {
        const response = await storeApiData("categories", data);
        if (response.status === false) {
          dispatch(
            errorChangeHandler({
              type: "error",
              val: response.message,
            })
          );
        } else {
          notify(response.message, "success");
          histry.push("/admin/manage-categories");
        }
      };
      store(formData);
      // axios.post("categories", formData).then((response) => {
      //   if (response.data.status === false) {
      //   } else {
      //     console.log(response);
      //     histry.push("/admin/manage-categories");
      //     //notify("Category created successfully !", "success");
      //   }
      // });
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
                <h1>Create Category</h1>
                <div className="job-form">
                  <form onSubmit={handleSubmit}>
                    <div className="flex-between">
                      <div className="input-row flex-item">
                        <p className="title"> Name </p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="write category name"
                          onChange={(e) =>
                            dispatch(
                              nameChangeHandler({
                                val: e.target.value,
                              })
                            )
                          }
                        />
                        {errorName && <p className="error">{errorName}</p>}
                      </div>

                      <div className="input-row flex-item">
                        <p className="title"> Status </p>
                        <select
                          name="status"
                          className="form-control"
                          onChange={(e) =>
                            dispatch(
                              statusChangeHandler({
                                val: e.target.value,
                              })
                            )
                          }
                          defaultValue="active"
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex-between">
                      <div className="input-row flex-item">
                        <p className="title"> Start Date </p>
                        <input
                          type="date"
                          className="form-control"
                          required
                          onChange={(e) =>
                            dispatch(
                              startChangeHandler({
                                val: e.target.value,
                              })
                            )
                          }
                        />
                      </div>

                      <div className="input-row flex-item">
                        <p className="title"> End Date </p>
                        <input
                          type="date"
                          className="form-control"
                          required
                          onChange={(e) =>
                            dispatch(
                              endChangeHandler({
                                val: e.target.value,
                              })
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="flex-between">
                      <div className="input-row flex-item">
                        <p className="title"> select an icon </p>
                        <input
                          type="file"
                          className="form-control"
                          onChange={(e) => setfile(e.target.files[0])}
                        />
                      </div>
                    </div>
                    <div className="input-row">
                      <button className="button">Add Category</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )}

        <Sidebar cmp={props.location.pathname} />
      </div>
    </>
  );
};
export default AddCategory;
