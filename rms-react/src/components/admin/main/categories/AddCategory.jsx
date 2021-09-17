import React from "react";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";

const AddCategory = (props) => {
  return (
    <>
      <div className="admin-container">
        <Header />
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
        <Sidebar active={props.active} cmp={props.cmp} />
      </div>
    </>
  );
};
export default AddCategory;
