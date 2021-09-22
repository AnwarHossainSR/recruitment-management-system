import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import HeroImage from "../images/hero.svg";
import { useHistory } from "react-router";

const Hero = () => {
  const [search, setSearch] = useState("");
  const histry = new useHistory();
  useEffect(() => {}, [search]);
  const searchHandle = () => {
    if (search) {
      histry.push(`/search/jobs/${search}`);
    } else {
      alert("please type something");
    }
  };
  return (
    <div className="hero flex items-center">
      <div className="left flex-1">
        <h1 className="headings">Find The Job</h1>
        <h2 className="headings">That's Fits your life</h2>
        <p>
          Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
          condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta
          sit amet. Suspendisse et sapien varius, pellentesque dui non.
        </p>
        <div className="search-box">
          <input
            type="text"
            className="form-control"
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Find your desire job here.."
          />
          <span className="search_btn">
            <i className="fa fa-search" onClick={searchHandle} />
          </span>
        </div>
      </div>
      <div className="right">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
