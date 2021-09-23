import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import Loader from "../../../../services/Loader";

const ManageTraining = (props) => {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, [loader]);
  const { url } = useRouteMatch();
  return (
    <>
      <div className="admin-container">
        <Header />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-main">
                <div className="header-div">
                  <h1>Manage Training</h1>
                  <div className="right">
                    <Link to={`${url}/add-training`} style={{ color: "green" }}>
                      Add Training
                    </Link>
                  </div>
                </div>
                <div className="table-wrap">
                  <table className="table">
                    <tbody>
                      <tr className="alert">
                        <td>
                          <div className="outer-div">
                            <h3>Web Training</h3>
                          </div>
                        </td>
                        <td>
                          <span className="status">Full Time</span>
                        </td>
                        <td>
                          <span>23rd sep,21 - 23rd dec,21</span>
                        </td>

                        <td>
                          <span className="status">Active</span>
                        </td>
                        <td>
                          <div className="action">
                            <Link to={`${url}/slug`} aria-hidden="true">
                              <i className="fa fa-eye" />
                            </Link>
                            <span aria-hidden="true" className="action-edit">
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

export default ManageTraining;
