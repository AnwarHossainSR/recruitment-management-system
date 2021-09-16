import React from "react";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./JobManage.scss";

const AddJob = (props) => {
  return (
    <>
      <div className="admin-container">
        <Header />
        <main>
          <div className="main__container">
            <div className="card-main">
              <h1>Post a new Job</h1>
              <div className="job-form">
                <form>
                  <div className="input-row">
                    <p className="title"> Job Title </p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="write job title"
                    />
                  </div>

                  <div className="input-row">
                    <p className="title"> Company </p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="write company name"
                    />
                  </div>
                  <div className="input-row">
                    <p className="title"> Location </p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="write location name"
                    />
                  </div>
                  <div className="input-row">
                    <p className="title"> Application email / URL </p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="write email or website url"
                    />
                  </div>
                  <div className="input-row">
                    <p className="title"> Job Tags (optional) </p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="write some tag for this job"
                    />
                  </div>
                  <div className="input-row">
                    <p className="title"> Closing Date (optional) </p>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="write email or website url"
                    />
                  </div>
                  <div className="input-row">
                    <p className="title"> Category </p>
                    <select className="form-control" id="">
                      <option value="">Software Engineer</option>
                      <option value="">Java Developer</option>
                      <option value="">Laravel Developer</option>
                    </select>
                  </div>
                  <div className="input-row">
                    <p className="title"> Description </p>
                    {/* <textarea
                      className="form-control-textarea"
                      id=""
                      cols="87"
                      rows="10"
                    ></textarea> */}
                    <CKEditor editor={ClassicEditor} />
                  </div>
                  <div className="input-row">
                    <p className="title"> Select Icon </p>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="input-row">
                    <button className="button">Add Job</button>
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

export default AddJob;
