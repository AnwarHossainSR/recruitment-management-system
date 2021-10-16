import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import Loader from "../../../../services/Loader";
import ManageTrainingItem from "./ManageTrainingItem";
import { fetchApiData } from "../../../../api/ApiCall";
import { notify } from "../../../../services/Notification";

const ManageTraining = (props) => {
  const [loader, setloader] = useState(true);
  const { url } = useRouteMatch();
  const [data, setData] = useState([]);
  const fetch = async () => {
    const response = await fetchApiData(`trainings`);
    if (response.status === true) {
      setData(response.data);
    } else {
      console.log(response);
      notify(response.message, "error");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
    fetch();
  }, []);

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
                      {data &&
                        data.training.map((item, i) => (
                          <ManageTrainingItem url={url} training={item} />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        )}
        <Sidebar cmp={props.location.pathname} />
      </div>
    </>
  );
};

export default ManageTraining;
