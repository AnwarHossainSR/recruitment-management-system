import React from "react";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import "./AllJobs.scss";
import JobItemSection from "./JobItemSection";

const AllJobs = (props) => {
  return (
    <>
      <NavBar hero={props.hero}/>
      <JobItemSection />
      <Footer />
    </>
  );
};

export default AllJobs;