import React, { useState, useEffect } from "react";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import Loader from "../../../../services/Loader";
import { success, errorChangeHandler } from "../../../../redux/CategoriesSlice";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchApiData, storeApiData } from "../../../../api/ApiCall";

const EditCategory = (props) => {
  const [loader, setloader] = useState(true);
  const histry = useHistory();
  const { slug } = useParams();
  const dispatch = useDispatch();

  const [category, setCategory] = useState(null);
  const [name, setname] = useState(category && category.name);
  const [status, setstatus] = useState(category && category.status);
  const [start, setstart] = useState(category && category.period_start);
  const [end, setend] = useState(category && category.period_end);
  const [file, setfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchApiData(`categories/${slug}`);
      if (response.status === true) {
        setCategory(response.data.category);
      }
    };
    setTimeout(() => {
      setloader(false);
    }, 1000);
    fetchData();
  }, [loader, slug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_method", "PUT");
    if (name !== null) {
      formData.append("name", name);
    }
    if (status !== null) {
      formData.append("status", status);
    }
    if (start !== null) {
      formData.append("period_start", start);
    }
    if (end !== null) {
      formData.append("period_end", end);
    }
    if (file !== null) {
      formData.append("icon", file);
    }
    const update = async (data) => {
      const response = await storeApiData(`categories/${category.id}`, data);
      console.log(response);
      if (response.status === false) {
        dispatch(
          errorChangeHandler({
            type: "error",
            val: response.message,
          })
        );
      } else {
        dispatch(success({ val: response.message }));
        histry.push("/admin/manage-categories");
      }
    };
    update(formData);
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
                          defaultValue={category.name}
                          onChange={(e) => setname(e.target.value)}
                        />
                      </div>

                      <div className="input-row flex-item">
                        <p className="title"> Status </p>
                        <select
                          name="status"
                          className="form-control"
                          onChange={(e) => setstatus(e.target.value)}
                          defaultValue={category.status}
                        >
                          <option value="active">Active</option>
                          <option value="running">Running</option>
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
                          defaultValue={category.period_start}
                          onChange={(e) => setstart(e.target.value)}
                        />
                      </div>

                      <div className="input-row flex-item">
                        <p className="title"> End Date </p>
                        <input
                          type="date"
                          className="form-control"
                          required
                          defaultValue={category.period_end}
                          onChange={(e) => setend(e.target.value)}
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
                      <div className="input-row flex-item">
                        <img
                          src={category.icon}
                          width="150px"
                          height="150px"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="input-row">
                      <button className="button">Update Category</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )}

        <Sidebar cmp="/admin/manage-categories" />
      </div>
    </>
  );
};
export default EditCategory;
