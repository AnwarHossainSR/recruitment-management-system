import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchApiData } from "../../../../api/ApiCall";
import Loader from "../../../../services/Loader";
import { notify } from "../../../../services/Notification";
import Hedaer from "../../navigation/navbar/Hedaer";
import Sidebar from "../../navigation/sidebar/Sidebar";
import "./Notifications.scss";

const Notifications = () => {
  const [loader, setloader] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const fetch = async () => {
    const response = await fetchApiData("notifications");
    if (response.status === true) {
      setNotifications(response.data);
    } else {
      console.log(response);
      notify("something is wrong ! please check console", "error");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
    fetch();
  }, []);
  const markedAsRead = async () => {
    const response = await fetchApiData("notifications/marked");
    if (response.status === true) {
      fetch();
      notify("notifications cleared !", "success");
    } else {
      console.log(response);
      notify("something is wrong ! please check console", "error");
    }
  };
  return (
    <>
      <div className="admin-container">
        <Hedaer />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-main">
                <div className="header-div">
                  <h1>All Notifications for you</h1>
                  <button className="mark" onClick={markedAsRead}>
                    Marked as read
                  </button>
                </div>
                <div className="table-wrap">
                  <table className="table">
                    <tbody>
                      {notifications &&
                        notifications.map((item, i) => (
                          <tr
                            className="table_row flex justify-between"
                            key={i}
                          >
                            <td>
                              {item.type ===
                                "App\\Notifications\\JobPostNotification" && (
                                <h3 className="color-job">
                                  "New Job added , you can check from here !"
                                </h3>
                              )}
                            </td>
                            <td>
                              {item.type ===
                                "App\\Notifications\\JobPostNotification" && (
                                <Link to={`/job-details/${item.data.slug}`}>
                                  View
                                </Link>
                              )}
                            </td>
                          </tr>
                        ))}
                      {!notifications.length && (
                        <h2 className="flex content-center">
                          No notifications
                        </h2>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        )}
        <Sidebar cmp="notifications" />
      </div>
    </>
  );
};

export default Notifications;
