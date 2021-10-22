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
  const [data, setData] = useState("");

  const fetch = async () => {
    const response = await fetchApiData(`trainings`);
    if (response.status === true) {
      setData(response.data.training);
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
                      {data.length ? (
                        data.map((item, i) => (
                          <ManageTrainingItem
                            key={i}
                            url={url}
                            training={item}
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

export default ManageTraining;
