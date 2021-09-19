import React from "react";

const CategoryItem = ({ name, icon, count }) => {
  return (
    <div className="card">
      <span>
        <i className="fa fa-home"></i>
      </span>
      <a>
        <h1>{name}</h1>
      </a>
      <p>({count})</p>
    </div>
  );
};

export default CategoryItem;
