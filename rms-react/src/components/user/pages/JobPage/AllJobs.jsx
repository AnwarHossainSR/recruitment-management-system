import React, { useState, useEffect } from "react";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import "./AllJobs.scss";
import JobItemSection from "./JobItemSection";
import { fetchAll } from "../../../../api/ApiCall";

const AllJobs = (props) => {
  const [jobs, setJob] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setJob(await fetchAll(`jobs`));
    };
    fetchData();
  }, []);
  return (
    <>
      <NavBar hero={props.hero} />
      <JobItemSection jobs={jobs.jobs} />
      <Footer />
    </>
  );
};

export default AllJobs;
