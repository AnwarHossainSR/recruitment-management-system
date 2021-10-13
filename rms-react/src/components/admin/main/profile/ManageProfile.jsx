import React, { useEffect, useState } from "react";
import Loader from "../../../../services/Loader";
import Hedaer from "../../navigation/navbar/Hedaer";
import Sidebar from "../../navigation/sidebar/Sidebar";
import "./Profile.scss";
import Img from "../../../user/images/anwar.jpg";
import SettingsTab from "./tabs/SettingsTab";
import ChangePasswordTab from "./tabs/ChangePasswordTab";
import ActivityTab from "./tabs/ActivityTab";
import { fetchApiData } from "../../../../api/ApiCall";
import { notify } from "../../../../services/Notification";

const ManageProfile = () => {
  const [loader, setloader] = useState(true);
  const [activeTab, setActiveTab] = useState("settings");
  const [user, setUser] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
    const fetch = async () => {
      const response = await fetchApiData(`user`);
      if (response.status === true) {
        setUser(response.data);
      } else {
        console.log(response);
        notify(response.message, "error");
      }
    };
    fetch();
  }, [loader]);
  return (
    <>
      <div className="admin-container">
        <Hedaer />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-wraper">
                <div className="card-left">
                  <div className="card-header-left">
                    <img src={Img} alt="user" />
                    <h2>Anwar Hossain</h2>
                    <p>Software Engineer</p>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Followers</h4>
                      <p>34543</p>
                    </div>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Followers</h4>
                      <p>34543</p>
                    </div>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Following</h4>
                      <p>34543</p>
                    </div>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Following</h4>
                      <p>34543</p>
                    </div>
                  </div>
                </div>
                <div className="card-right">
                  <div className="card-header-right">
                    <span
                      className={activeTab === "settings" ? "active_tab" : ""}
                      onClick={() => setActiveTab("settings")}
                    >
                      Settings
                    </span>
                    <span
                      className={activeTab === "activity" ? "active_tab" : ""}
                      onClick={() => setActiveTab("activity")}
                    >
                      Activity
                    </span>
                    <span
                      className={activeTab === "password" ? "active_tab" : ""}
                      onClick={() => setActiveTab("password")}
                    >
                      Change Password
                    </span>
                  </div>
                  <div className="card-body-right">
                    {activeTab === "settings" && <SettingsTab user={user} />}
                    {activeTab === "activity" && <ActivityTab />}
                    {activeTab === "password" && <ChangePasswordTab />}
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}

        <Sidebar />
      </div>
    </>
  );
};

export default React.memo(ManageProfile);
