import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import "../../Layout.scss";
import { Link } from "react-router-dom";
import RejectedJobs from "./RejectedJobs";

const ManageApplication = (props) => {
  return (
    <>
      <div className="admin-container">
        <Header />
        <main>
          <div className="main__container">
            <div className="card-main">
              <div className="header-div">
                <h1>Manage Job</h1>
                <Link to="/admin/manage-job/rejected">Rejected</Link>
              </div>
              <Switch>
                <Route exact path="/admin/manage-job/rejected">
                  <RejectedJobs />
                </Route>
              </Switch>
              <div className="table-wrap">
                <table className="table">
                  <tbody>
                    <tr className="alert">
                      <td>
                        <div className="outer-div">
                          <h3>Web Designer</h3>
                          <p>Dhaka, Bangladesh</p>
                        </div>
                      </td>
                      <td>
                        <span className="status">Full Time</span>
                      </td>
                      <td>
                        <span>23rd septembor, 2021</span>
                      </td>
                      <td className="cv">
                        <Link>Download</Link>
                      </td>
                      <td>
                        <span className="status">Accepted</span>
                      </td>
                      <td>
                        <div className="action">
                          <span aria-hidden="true">
                            <i className="fa fa-check" />
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
                    <tr className="alert">
                      <td>
                        <div className="outer-div">
                          <h3>Web Designer</h3>
                          <p>Dhaka, Bangladesh</p>
                        </div>
                      </td>
                      <td>
                        <span className="status">Full Time</span>
                      </td>
                      <td>
                        <span>23rd septembor, 2021</span>
                      </td>
                      <td className="cv">
                        <Link>Download</Link>
                      </td>
                      <td>
                        <span className="status">Accepted</span>
                      </td>
                      <td>
                        <div className="action">
                          <span aria-hidden="true">
                            <i className="fa fa-check" />
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
                    <tr className="alert">
                      <td>
                        <div className="outer-div">
                          <h3>Web Designer</h3>
                          <p>Dhaka, Bangladesh</p>
                        </div>
                      </td>
                      <td>
                        <span className="status">Full Time</span>
                      </td>
                      <td>
                        <span>23rd septembor, 2021</span>
                      </td>
                      <td className="cv">
                        <Link>Download</Link>
                      </td>
                      <td>
                        <span className="status">Accepted</span>
                      </td>
                      <td>
                        <div className="action">
                          <span aria-hidden="true">
                            <i className="fa fa-check" />
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
                    <tr className="alert">
                      <td>
                        <div className="outer-div">
                          <h3>Web Designer</h3>
                          <p>Dhaka, Bangladesh</p>
                        </div>
                      </td>
                      <td>
                        <span className="status">Full Time</span>
                      </td>
                      <td>
                        <span>23rd septembor, 2021</span>
                      </td>
                      <td className="cv">
                        <Link>Download</Link>
                      </td>
                      <td>
                        <span className="status">Accepted</span>
                      </td>
                      <td>
                        <div className="action">
                          <span aria-hidden="true">
                            <i className="fa fa-check" />
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
                    <tr className="alert">
                      <td>
                        <div className="outer-div">
                          <h3>Web Designer</h3>
                          <p>Dhaka, Bangladesh</p>
                        </div>
                      </td>
                      <td>
                        <span className="status">Full Time</span>
                      </td>
                      <td>
                        <span>23rd septembor, 2021</span>
                      </td>
                      <td className="cv">
                        <Link>Download</Link>
                      </td>
                      <td>
                        <span className="status">Accepted</span>
                      </td>
                      <td>
                        <div className="action">
                          <span aria-hidden="true">
                            <i className="fa fa-check" />
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
        <Sidebar cmp={props.cmp} />
      </div>
    </>
  );
};

export default ManageApplication;
