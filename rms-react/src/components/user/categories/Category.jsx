import React from "react";
import "./Category.scss";
import CategoryItem from "./CategoryItem";

const Category = ({ categories }) => {
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
          {categories &&
            categories.map((category, i) => (
              <CategoryItem
                key={i}
                name={category.name}
                icon={category.icon}
                count={category.job_count}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
