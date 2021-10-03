import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import Loader from "../../../../services/Loader";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import {
  catHandlePageClick,
  setCategoriesApplications,
} from "../../../../redux/ManageApplicationSlice";
import { notify } from "../../../../services/Notification";
import { fetchApiData } from "../../../../api/ApiCall";
import CategoryManageApplicationItem from "./CategoryManageApplicationItem";

const CategoryManageApplication = (props) => {
  const [loader, setloader] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const { categories, catPageNumber } = useSelector(
    (state) => state.application
  );
  const fetchData = async () => {
    const response = await fetchApiData(`applications?page=${catPageNumber}`);
    if (response.status === true) {
      dispatch(setCategoriesApplications(response.data.categories));
    } else {
      notify("Something is wrong! check console", "error");
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
    dispatch(catHandlePageClick(data.selected + 1));
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
                  <h1>Manage application By Jobs</h1>
                </div>
                <div className="table-wrap">
                  <table className="table">
                    <tbody>
                      {categories.data &&
                        categories.data.map((cat, i) => (
                          <CategoryManageApplicationItem
                            key={i}
                            slug={cat.slug}
                            name={cat.title}
                            status={cat.status}
                            icon={cat.icon}
                            count={cat.count}
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
                    pageCount={categories.last_page}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={categories.last_page}
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

export default CategoryManageApplication;
