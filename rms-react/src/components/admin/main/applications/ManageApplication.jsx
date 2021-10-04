import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import Loader from "../../../../services/Loader";
import { fetchApiData } from "../../../../api/ApiCall";
import ReactPaginate from "react-paginate";
import ManageApplicationItem from "./ManageApplicationItem";
import { useDispatch, useSelector } from "react-redux";
import {
  setapplications,
  handlePageClick,
  acceptHandle,
  rejectHandle,
} from "../../../../redux/ManageApplicationSlice";
import { notify } from "../../../../services/Notification";

const ManageApplication = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { slug } = useParams();
  const [loader, setloader] = useState(true);
  const { applications, pageNumber } = useSelector(
    (state) => state.application
  );

  const fetchData = async () => {
    const response = await fetchApiData(
      `${
        location.pathname === `/admin/manage-application/${slug}/accepted`
          ? `admin/applications/${slug}/accepted`
          : location.pathname === `/admin/manage-application/${slug}/rejected`
          ? `admin/applications/${slug}/rejected`
          : `admin/applications/${slug}/pending`
      }?page=${pageNumber}`
    );
    if (response.status === true) {
      dispatch(setapplications(response.data.applications));
    } else {
      notify("Something is wrong ! check console", "error");
      console.log(response);
    }
  };

  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      fetchData();
      setloader(false);
    }, 1000);
  }, [props]);

  const handlePageClick = (data) => {
    dispatch(handlePageClick(data.selected + 1));
    fetchData();
  };
  const handleAccept = (id) => {
    if (
      location.pathname === `/admin/manage-application/${slug}` ||
      location.pathname === `/admin/manage-application/${slug}/rejected`
    ) {
      dispatch(acceptHandle({ type: "pending", id: id }));
      fetchData();
    }
  };
  const handleReject = (id) => {
    if (
      location.pathname === `/admin/manage-application/${slug}` ||
      location.pathname === `/admin/manage-application/${slug}/accepted`
    ) {
      dispatch(rejectHandle({ type: "rejected", id: id }));
    } else {
      dispatch(rejectHandle({ type: "delete", id: id }));
    }
    fetchData();
  };
  return (
    <>
      <div className="admin-container">
        <Header />
        {(loader && <Loader />) || (
          <main>
            <div className="main__container">
              <div className="card-main">
                <div className="header-div">
                  <h1>Pending Applications</h1>
                  <div className="right">
                    <Link
                      to={`/admin/manage-application/${slug}/accepted`}
                      style={{ color: "green", marginRight: "1rem" }}
                    >
                      Accepted
                    </Link>
                    <Link to={`/admin/manage-application/${slug}/rejected`}>
                      Rejected
                    </Link>
                  </div>
                </div>
                <div className="table-wrap">
                  {applications.data && !applications.data.length && (
                    <div className="flex content-center items-center">
                      <h2>No data found at this moment</h2>
                    </div>
                  )}
                  <table className="table">
                    <tbody>
                      {applications.data &&
                        applications.data.map((app, i) => (
                          <ManageApplicationItem
                            key={i}
                            slug={app.slug}
                            id={app.id}
                            email={app.email}
                            cv={app.cv}
                            applied={app.applied}
                            status={app.status}
                            handleAccept={handleAccept}
                            handleReject={handleReject}
                          />
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="paginate flex content-center">
                  <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    pageCount={applications.last_page}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={applications.last_page}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
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

export default ManageApplication;
