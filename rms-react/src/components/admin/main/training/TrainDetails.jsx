import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import "./Training.scss";
const TrainDetails = () => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  useEffect(() => {}, [toggle]);

  return (
    <>
      <div className="admin-container">
        <Header />
        <main>
          <div className="main__container">
            <div className="card-main">
              <div className="header-div">
                <div>
                  <span
                    onClick={() => setToggle(toggle ? false : true)}
                    style={{ color: "green" }}
                  >
                    Trainers
                  </span>
                </div>
                <div className="right text-red">
                  <span onClick={() => history.goBack()}>Go Back</span>
                </div>
              </div>

              {toggle && (
                <div className="table-wrap" style={{ marginBottom: "5rem" }}>
                  <table className="table">
                    <tbody>
                      <tr className="alert">
                        <td>
                          <div className="outer-div">
                            <h3>Nani Gopal</h3>
                          </div>
                        </td>
                        <td>
                          <div className="outer-div">
                            <img src="" alt="" srcset="" />
                          </div>
                        </td>
                        <td>
                          <span className="status">Web Trainer</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              <div className="table-wrap">
                <table className="table">
                  <tbody>
                    <tr className="alert">
                      <td>
                        <div className="outer-div">
                          <h3>Anwar Hossain</h3>
                        </div>
                      </td>
                      <td>
                        <span className="status">Web Training</span>
                      </td>

                      <td>
                        <span className="status">Active</span>
                      </td>
                      <td>
                        <div className="action">
                          <Link to="" aria-hidden="true">
                            <i className="fa fa-eye" />
                          </Link>
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
        <Sidebar cmp="train" />
      </div>
    </>
  );
};

export default TrainDetails;
