import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ name, icon, count }) => {
  return (
    <div className="card">
      <span>
        <i className="fa fa-home"></i>
      </span>
      <Link to="/">
        <h1>{name}</h1>
      </Link>
      <p>({count})</p>
    </div>
  );
};

export default CategoryItem;
