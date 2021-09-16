import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";

const ManageCategory = (props) => {
  return (
    <>
      <div className="admin-container">
        <Header />
        <main>
          <div className="main__container">
            <div className="card-main">
              <div className="header-div">
                <h1>Manage Categories</h1>
                <div className="right">
                  <Link
                    to="/admin/add-categories"
                    style={{ color: "green", marginRight: "1rem" }}
                  >
                    Add
                  </Link>
                </div>
              </div>
              <div className="table-wrap">
                <table className="table">
                  <tbody>
                    <tr className="alert">
                      <td>
                        <div className="outer-div">
                          <h3>Web</h3>
                        </div>
                      </td>
                      <td>
                        <span className="status">Running</span>
                      </td>
                      <td>
                        <span>23rd sep,21 - 23rd dec,21</span>
                      </td>
                      <td>
                        <span className="status">21 trainee</span>
                      </td>
                      <td>
                        <div className="action">
                          <span>
                            <i className="fa fa-eye" />
                          </span>
                          <span className="action-edit">
                            <i className="fa fa-edit" />
                          </span>
                          <span className="action-button close">
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

export default ManageCategory;
