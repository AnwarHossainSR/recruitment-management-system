import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../navigation/sidebar/Sidebar";
import Header from "../../../navigation/navbar/Hedaer";
import Loader from "../../../../../services/Loader";
import { fetchApiData } from "../../../../../api/ApiCall";
import { notify } from "../../../../../services/Notification";
import TrainersItem from "./TrainersItem";

const ManageTrainers = (props) => {
  const [loader, setloader] = useState(true);
  const [trainers, settrainers] = useState("");
  const fetch = async () => {
    const response = await fetchApiData(`trainers`);
    if (response !== "undefined") {
      if (response.status === true) {
        settrainers(response.data.trainers);
      } else {
        notify("Something is wrong! check console", "error");
        console.log(response);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetch();
      setloader(false);
    }, 1000);
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
                  <h1>Manage Trainers</h1>
                  <div className="right">
                    <Link
                      to="/admin/manage-trainers/add-trainer"
                      style={{ color: "green", marginRight: "1rem" }}
                    >
                      Add
                    </Link>
                  </div>
                </div>
                <div className="table-wrap">
                  <table className="table">
                    <tbody>
                      {trainers.length ? (
                        trainers.map((item, i) => (
                          <TrainersItem
                            key={i}
                            id={item.id}
                            status={item.status}
                            category={item.category}
                            user={item.user}
                            fetch={fetch}
                          />
                        ))
                      ) : (
                        <tr>
                          <td>
                            <h2 className="flex content-center item-center">
                              no data found
                            </h2>
                          </td>
                        </tr>
                      )}
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

export default ManageTrainers;
