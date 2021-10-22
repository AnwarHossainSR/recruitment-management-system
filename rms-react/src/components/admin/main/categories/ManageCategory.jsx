import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../navigation/sidebar/Sidebar";
import Header from "../../navigation/navbar/Hedaer";
import Loader from "../../../../services/Loader";
import ManageCategoryItem from "./ManageCategoryItem";
import { fetchApiData } from "../../../../api/ApiCall";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

import {
  handleCategories,
  handlePageClick,
  handleDeleteCat,
} from "../../../../redux/CategoriesSlice";

const ManageCategory = (props) => {
  const dispatch = useDispatch();
  const [loader, setloader] = useState(true);
  const { categories, pageNumber } = useSelector((state) => state.category);
  const fetch = useCallback(() => {
    const fetchData = async () => {
      const response = await fetchApiData(`categories?page=${pageNumber}`);
      console.log(response);
      if (response.status === true) {
        dispatch(handleCategories(response.data.categories));
      } else {
        console.log(response);
      }
    };
    fetchData();
  }, [pageNumber, dispatch]);
  useEffect(() => {
    fetch();
    setTimeout(() => {
      setloader(false);
    }, 1000);
    return () => {};
  }, [props, fetch]);

  const pageClick = (data) => {
    dispatch(handlePageClick(data.selected + 1));
    fetch();
  };
  const handleDelete = (id) => {
    dispatch(handleDeleteCat(id));
    fetch();
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
                  <h1>Manage Categories</h1>
                  <div className="right">
                    <Link
                      to="/admin/add-categories"
                      style={{ color: "green", marginRight: "1rem" }}
                    >
                      Add
                    </Link>
                  </div>
                </div>
                <div className="table-wrap">
                  {categories.data &&
                    categories.data.map((cat, i) => (
                      <ManageCategoryItem
                        key={i}
                        id={cat.id}
                        slug={cat.slug}
                        name={cat.name}
                        status={cat.status}
                        icon={cat.icon}
                        start={cat.period_start}
                        end={cat.period_end}
                        handleDelete={handleDelete}
                      />
                    ))}
                </div>
                <div className="paginate flex content-center">
                  <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    pageCount={categories.last_page}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={categories.last_page}
                    onPageChange={pageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
                </div>
              </div>
            </div>
          </main>
        )}

        <Sidebar cmp="/admin/manage-categories" />
      </div>
    </>
  );
};

export default ManageCategory;
