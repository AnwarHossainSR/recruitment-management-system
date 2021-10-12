import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../../services/Loader";
import Hedaer from "../../navigation/navbar/Hedaer";
import Sidebar from "../../navigation/sidebar/Sidebar";
import "./Profile.scss";
import Img from "../../../user/images/anwar.jpg";

const ManageProfile = (props) => {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, [loader]);
  return (
    <>
      <div className="admin-container">
        <Hedaer />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-wraper">
                <div className="card-left">
                  <div className="card-header-left">
                    <img src={Img} alt="photo" />
                    <h2>Anwar Hossain</h2>
                    <p>Software Engineer</p>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Followers</h4>
                      <p>34543</p>
                    </div>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Followers</h4>
                      <p>34543</p>
                    </div>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Following</h4>
                      <p>34543</p>
                    </div>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Following</h4>
                      <p>34543</p>
                    </div>
                  </div>
                </div>
                <div className="card-right">
                  <div className="card-header-right">
                    <span
                      className={props.txt === "settings" ? "active_tab" : ""}
                    >
                      Settings
                    </span>
                    <span>Activity</span>
                    <span>Change Password</span>
                  </div>
                  <div className="card-body-right">
                    <div className="job-form">
                      <form onSubmit="">
                        <div className="flex-between">
                          <div className="input-row flex-item">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="write name"
                            />
                          </div>
                          <div className="input-row flex-item">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="write email"
                            />
                          </div>
                        </div>

                        <div className="flex-between">
                          <div className="input-row flex-item">
                            <textarea
                              type="text"
                              className="form-control-textarea"
                              placeholder="say something about you"
                            />
                          </div>
                        </div>
                        <div className="flex-between">
                          <div className="input-row flex-item">
                            <input type="file" className="form-control" />
                          </div>
                        </div>
                        <div className="input-row flex content-center">
                          <button className="button">Update</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}

        <Sidebar />
      </div>
    </>
  );
};

export default ManageProfile;
