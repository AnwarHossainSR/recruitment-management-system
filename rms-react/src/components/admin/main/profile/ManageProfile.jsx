import React, { useEffect, useState } from "react";
import Loader from "../../../../services/Loader";
import Hedaer from "../../navigation/navbar/Hedaer";
import Sidebar from "../../navigation/sidebar/Sidebar";
import "./Profile.scss";
import SettingsTab from "./tabs/SettingsTab";
import ChangePasswordTab from "./tabs/ChangePasswordTab";
import ActivityTab from "./tabs/ActivityTab";
import { fetchApiData, storeApiData } from "../../../../api/ApiCall";
import { notify } from "../../../../services/Notification";

const ManageProfile = () => {
  const [loader, setloader] = useState(true);
  const [activeTab, setActiveTab] = useState("settings");
  const [user, setUser] = useState({});
  const [updateData, setUpdateData] = useState({});

  const fetch = async () => {
    const response = await fetchApiData(`user`);
    if (response.status === true) {
      setUser(response.data);
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
  }, [loader]);

  const handleChange = (event) => {
    const name = event.target.name;
    if (name === "image") {
      var value = event.target.files[0];
    } else {
      value = event.target.value;
    }
    setUpdateData((values) => ({ ...values, [name]: value }));
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(updateData).length > 0) {
      var formData = new FormData();
      for (var key in updateData) {
        formData.append(key, updateData[key]);
      }
      const response = await storeApiData(`admin/update-profile`, formData);
      if (response.status === true) {
        notify(response.message, "success");
        setUpdateData({});
        fetch();
      } else {
        console.log(response);
        notify(response.message, "error");
      }
    } else {
      notify("change data to update !", "error");
      setUpdateData({ error: "change data to update !" });
    }
  };
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
                    <img src={user.user.image} alt="user" />
                    <h2>Anwar Hossain</h2>
                    <p>Software Engineer</p>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Joined at </h4>
                      <p>{user.user.created_at}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Current Status</h4>
                      <p>{user.user.status}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="card-body-left">
                    <div className="item-pro flex justify-between">
                      <h4>Followers</h4>
                      <p>0</p>
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
                    {updateData.error && (
                      <div className="flex items-center content-center">
                        <h2 className="error">{updateData.error}</h2>
                      </div>
                    )}
                    {activeTab === "settings" && (
                      <SettingsTab
                        user={user.user}
                        onsubmit={onsubmit}
                        handleChange={handleChange}
                      />
                    )}
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

export default ManageProfile;
