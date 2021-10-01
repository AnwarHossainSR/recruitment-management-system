import React, { useState, useEffect } from "react";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import Loader from "../../../../services/Loader";

const AddCategory = (props) => {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, [loader]);
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
                  <form>
                    <div className="flex-between">
                      <div className="input-row flex-item">
                        <p className="title"> Name </p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="write category name"
                        />
                      </div>

                      <div className="input-row flex-item">
                        <p className="title"> Status </p>
                        <select className="form-control" id="">
                          <option value="">Active</option>
                          <option value="">Inactive</option>
                        </select>
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
