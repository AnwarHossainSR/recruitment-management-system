import React from "react";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import JobDetailsItem from "./JobDetailsItem";

const JobDetails = (props) => {
  return (
    <>
      <NavBar hero={ props.hero } />
      <JobDetailsItem />
      <Footer/>
    </>
  );
};

export default JobDetails;
