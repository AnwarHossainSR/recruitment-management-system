import React, { useState, useEffect } from "react";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
//import "../../Layout.scss";
import "./JobManage.scss";
import Image from "../../assets/BJIT.png";
import Loader from "../../../../services/Loader";

const JobManage = (props) => {
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
                <div className="header-div">
                  <h1>Manage Jobs</h1>
                </div>
                <div className="table-wrap">
                  <table className="table">
                    <tbody>
                      <tr className="alert" role="alert">
                        <td>
                          <label className="checkbox-wrap checkbox-primary">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td>
                          <div className="outer-div">
                            <h3>Web Designer</h3>
                            <p>Dhaka, Bangladesh</p>
                          </div>
                        </td>
                        <td>
                          <span className="status">Full Time</span>
                        </td>
                        <td className="img">
                          <img src={Image} alt="" />
                        </td>
                        <td>
                          <div className="action">
                            <span aria-hidden="true">
                              <i className="fa fa-edit" />
                            </span>
                            <span
                              aria-hidden="true"
                              className="action-button close"
                            >
                              <i className="fa fa-close" />
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr className="alert" role="alert">
                        <td>
                          <label className="checkbox-wrap checkbox-primary">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td>
                          <div className="outer-div">
                            <h3>Web Designer</h3>
                            <p>Dhaka, Bangladesh</p>
                          </div>
                        </td>
                        <td>
                          <span className="status">Full Time</span>
                        </td>
                        <td className="img">
                          <img src={Image} alt="" />
                        </td>
                        <td>
                          <div className="action">
                            <span aria-hidden="true">
                              <i className="fa fa-edit" />
                            </span>
                            <span
                              aria-hidden="true"
                              className="action-button close"
                            >
                              <i className="fa fa-close" />
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr className="alert" role="alert">
                        <td>
                          <label className="checkbox-wrap checkbox-primary">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td>
                          <div className="outer-div">
                            <h3>Web Designer</h3>
                            <p>Dhaka, Bangladesh</p>
                          </div>
                        </td>
                        <td>
                          <span className="status">Full Time</span>
                        </td>
                        <td className="img">
                          <img src={Image} alt="" />
                        </td>
                        <td>
                          <div className="action">
                            <span aria-hidden="true">
                              <i className="fa fa-edit" />
                            </span>
                            <span
                              aria-hidden="true"
                              className="action-button close"
                            >
                              <i className="fa fa-close" />
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        )}

        <Sidebar cmp={props.cmp} />
      </div>
    </>
  );
};

export default JobManage;
