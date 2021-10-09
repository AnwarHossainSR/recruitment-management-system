import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import "./JobManage.scss";
import Loader from "../../../../services/Loader";
import { fetchApiData } from "../../../../api/ApiCall";
import ReactPaginate from "react-paginate";
import JobManageItem from "./JobManageItem";
import { notify } from "../../../../services/Notification";

const JobManage = (props) => {
  const [loader, setloader] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetch = useCallback(() => {
    const fetchData = async () => {
      const response = await fetchApiData(`jobs?page=${pageNumber}`);
      if (response.status === true) {
        setJobs(response.data.main_jobs);
      } else {
        console.log(response);
        notify(response.message);
      }
    };
    fetchData();
  }, [pageNumber]);
  useEffect(() => {
    setTimeout(() => {
      fetch();
      setloader(false);
    }, 1000);
    return () => {};
  }, [jobs, fetch]);

  const handlePageClick = (data) => {
    setPageNumber(data.selected + 1);
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
                  <h1>Manage Jobs</h1>
                </div>
                <div className="table-wrap">
                  <table className="table">
                    <tbody>
                      {jobs.data &&
                        jobs.data.map((job, i) => (
                          <JobManageItem
                            key={i}
                            slug={job.slug}
                            id={job.id}
                            title={job.title}
                            location={job.location}
                            type={job.type}
                            icon={job.icon}
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
                    pageCount={jobs.last_page}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={jobs.last_page}
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

export default JobManage;
