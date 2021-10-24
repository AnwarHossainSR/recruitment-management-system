import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import Avater from "../../assets/avatar.svg";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { logOut } from "../../../../redux/LoginSlice";
import { fetchApiData } from "../../../../api/ApiCall";
import { notify } from "../../../../services/Notification";

const Hedaer = () => {
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("token")
  );
  const loggedOutHandler = () => {
    dispatch(logOut());
    setAuthenticated("");
  };
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
    fetch();
  }, [isAuthenticated]);

  return (
    <nav className="admin-navbar">
      <div className="admin-nav_icon">
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
      <div className="admin-navbar__left">
        <Link to="/">Home</Link>
        {/* <Link className="active_link" to="/">
          Admin
        </Link> */}
      </div>
      <div className="admin-navbar__right">
        <Link to="/admin/notifications" className="error">
          <i
            className={`fa fa-bell ${
              user.notifications && user.notifications.length > 0 && "error"
            }`}
            aria-hidden="true"
          ></i>
          <span className="badge">
            {user.notifications && user.notifications.length}
          </span>
        </Link>

        <div className="dropdown-container" id="menu">
          <img
            onClick={() => setMenu(menu ? false : true)}
            className="dropbtn"
            width="30px"
            height="30px"
            src={user.user && user.user.image}
            alt="user"
          />
          <div className={menu ? "dropdown-content" : "dropdown-content hide"}>
            <Link className="sub-link" to="/admin/profiles">
              Settings
            </Link>
            <Link to="" className="sub-link" onClick={loggedOutHandler}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Hedaer;
