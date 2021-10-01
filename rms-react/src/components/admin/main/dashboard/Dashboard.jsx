import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import axios from "axios";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import "../../Layout.scss";
import Loader from "../../../../services/Loader";
import { fetchApiData } from "../../../../api/ApiCall";

const Dashboard = (props) => {
  const [loader, setloader] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:8000/api/";
    axios.defaults.headers.common = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, [loader]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchApiData(`admin/dashboard`);
      if (response.status === true) {
        setData(response.data);
      } else {
        console.log(response);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {(loader && <Loader />) || (
        <div className="admin-container">
          <Header />
          <main>
            <div className="main__container">
              <div className="main__title">
                {/* <img src="assets/hello.svg" alt /> */}
                <div className="main__greeting">
                  <h1>Dashboard</h1>
                </div>
              </div>
              <div className="main__cards">
                <div className="dashboard-card">
                  <i
                    className="fa fa-user-o fa-2x text-lightblue"
                    aria-hidden="true"
                  />
                  <div className="card_inner">
                    <p className="text-primary-p">Applicants</p>
                    <span className="font-bold text-title">
                      {data.applicants}
                    </span>
                  </div>
                </div>
                <div className="dashboard-card">
                  <i
                    className="fa fa-calendar fa-2x text-red"
                    aria-hidden="true"
                  />
                  <div className="card_inner">
                    <p className="text-primary-p">Active Jobs</p>
                    <span className="font-bold text-title">{data.jobs}</span>
                  </div>
                </div>
                <div className="dashboard-card">
                  <i
                    className="fa fa-check fa-2x text-green"
                    aria-hidden="true"
                  ></i>
                  <div className="card_inner">
                    <p className="text-primary-p">Accepted</p>
                    <span className="font-bold text-title">
                      {data.accepted}
                    </span>
                  </div>
                </div>
                <div className="dashboard-card">
                  <i
                    className="fa fa-times fa-2x text-red"
                    aria-hidden="true"
                  />
                  <div className="card_inner">
                    <p className="text-primary-p">Rejected</p>
                    <span className="font-bold text-title">
                      {data.rejected}
                    </span>
                  </div>
                </div>
              </div>
              <div className="charts">
                <div className="charts__left">
                  <div className="charts__left__title">
                    <div>
                      <h1>Daily Reports</h1>
                      <p>Bjit, DHaka</p>
                    </div>
                    <i className="fa fa-user" aria-hidden="true" />
                  </div>
                  <div id="apex1" />
                </div>
                <div className="charts__right">
                  <div className="charts__right__title">
                    <div>
                      <h1>Stats Reports</h1>
                      <p>Bjit, Dhaka</p>
                    </div>
                    <i className="fa fa-user" aria-hidden="true" />
                  </div>
                  <div className="charts__right__cards">
                    <div className="dashboard-card1">
                      <h1>Applicants</h1>
                      <p>75,300</p>
                    </div>
                    <div className="dashboard-card2">
                      <h1>Accepted</h1>
                      <p>124,200</p>
                    </div>
                    <div className="dashboard-card3">
                      <h1>Users</h1>
                      <p>3900</p>
                    </div>
                    <div className="dashboard-card4">
                      <h1>Trainee</h1>
                      <p>1881</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Sidebar cmp={props.location.pathname} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
