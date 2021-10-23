import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { fetchApiData } from "../../../../../api/ApiCall";
import Loader from "../../../../../services/Loader";
import { notify } from "../../../../../services/Notification";
import Header from "../../../navigation/navbar/Hedaer";
import Sidebar from "../../../navigation/sidebar/Sidebar";
import DetailsTab from "./DetailsTab";
import TrainingActivityTab from "./TrainingActivityTab";
import "./Trainee.scss";

const TraineeDetails = () => {
  const [loader, setloader] = useState(true);
  const history = useHistory();
  const [activeTab, setActiveTab] = useState("details");
  const [data, setData] = useState([]);
  const { userslug } = useParams();
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
    const fetch = async () => {
      const response = await fetchApiData(`trainees/${userslug}`);
      if (response.status === true) {
        setData(response.data);
      } else {
        notify(response.message);
        console.log(response);
      }
    };
    fetch();
  }, [userslug]);
  return (
    <>
      <div className="admin-container">
        <Header />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-wraper">
                <div className="card-left">
                  <div className="card-header-left">
                    <img src={data && data.trainees[0].user.image} alt="user" />
                    <h2>{data && data.trainees[0].user.name}</h2>
                    <p>Software Engineer</p>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Joined at </h4>
                      <p className="success">
                        {data && data.trainees[0].user.created_at}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Current Status</h4>
                      <p className="success">
                        {data && data.trainees[0].user.status}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Following</h4>
                      <p className="success">34543</p>
                    </div>
                  </div>
                </div>
                <div className="card-right">
                  <div className="card-header-right flex justify-between">
                    <div>
                      <span
                        className={activeTab === "details" ? "active_tab" : ""}
                        onClick={() => setActiveTab("details")}
                      >
                        Details
                      </span>
                      <span
                        className={activeTab === "activity" ? "active_tab" : ""}
                        onClick={() => setActiveTab("activity")}
                      >
                        Training Activity
                      </span>
                    </div>
                    <div>
                      <span onClick={() => history.goBack()}>Go Back</span>
                    </div>
                  </div>
                  <div className="card-body-right">
                    {activeTab === "details" && (
                      <DetailsTab
                        trainee={data && data.trainees[0]}
                        trainers={data && data.trainer}
                      />
                    )}
                    {activeTab === "activity" && <TrainingActivityTab />}
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}

        <Sidebar cmp="/admin/manage-training" />
      </div>
    </>
  );
};

export default TraineeDetails;
