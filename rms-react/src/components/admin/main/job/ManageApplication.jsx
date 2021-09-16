import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";

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
                <div className="right">
                  <Link
                    to="/admin/manage-application/rejected"
                    style={{ color: "green", marginRight: "1rem" }}
                  >
                    Accepted
                  </Link>
                  <Link to="/admin/manage-application/rejected">Rejected</Link>
                </div>
              </div>
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
                        <span>
                          <i
                            class="fa fa-cloud-download"
                            aria-hidden="true"
                          ></i>
                        </span>
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
                        <span>
                          <i
                            class="fa fa-cloud-download"
                            aria-hidden="true"
                          ></i>
                        </span>
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
                        <span>
                          <i
                            class="fa fa-cloud-download"
                            aria-hidden="true"
                          ></i>
                        </span>
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
                        <span>
                          <i
                            class="fa fa-cloud-download"
                            aria-hidden="true"
                          ></i>
                        </span>
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
                        <span>
                          <i
                            class="fa fa-cloud-download"
                            aria-hidden="true"
                          ></i>
                        </span>
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
