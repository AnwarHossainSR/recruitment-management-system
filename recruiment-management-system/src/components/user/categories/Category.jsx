import React from "react";
import "./Category.scss";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <section className="category">
      <div className="container">
        <div className="category-info">
          <h1 className="category-heading headings">Browse Categories</h1>
          <p className="category-des">
            Most popular categories of portal, sorted by popularity
          </p>
        </div>
        <div className="card-wrapper">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
    </section>
  );
};

export default Category;
