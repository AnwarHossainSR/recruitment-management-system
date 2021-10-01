import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import Loader from "../../../../services/Loader";
import { fetchApiData } from "../../../../api/ApiCall";
import ReactPaginate from "react-paginate";
import ManageApplicationItem from "./ManageApplicationItem";
import { useDispatch, useSelector } from "react-redux";
import { errorMessage } from "../../../../redux/LoginSlice";

const ManageApplication = (props) => {
  const location = useLocation();
  const [loader, setloader] = useState(true);
  const [applications, setapplications] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { formisValid } = useSelector((state) => state.application);

  const fetchData = async () => {
    const response = await fetchApiData(
      `${
        location.pathname === "/admin/manage-application/accepted"
          ? "admin/applications/accepted"
          : location.pathname === "/admin/manage-application/rejected"
          ? "admin/applications/rejected"
          : "applications"
      }?page=${pageNumber}`
    );
    if (response.status === true) {
      setapplications(response.data.applications);
    } else {
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
    setPageNumber(data.selected + 1);
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
                  <h1>Manage Applications</h1>
                  <div className="right">
                    <Link
                      to="/admin/manage-application/accepted"
                      style={{ color: "green", marginRight: "1rem" }}
                    >
                      Accepted
                    </Link>
                    <Link to="/admin/manage-application/rejected">
                      Rejected
                    </Link>
                  </div>
                </div>
                <div className="table-wrap">
                  <table className="table">
                    <tbody>
                      {applications.data &&
                        applications.data.map((app, i) => (
                          <ManageApplicationItem
                            key={i}
                            id={app.id}
                            slug={app.slug}
                            job={app.job}
                            status={app.status}
                            email={app.email}
                            cv={app.cv}
                            applied={app.created_at}
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
