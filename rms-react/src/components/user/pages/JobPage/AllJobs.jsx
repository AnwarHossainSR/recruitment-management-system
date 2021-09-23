import React, { useState, useEffect } from "react";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import "./AllJobs.scss";
import JobItemSection from "./JobItemSection";
import { fetchAll } from "../../../../api/ApiCall";
import Loader from "../../../../services/Loader";

const AllJobs = (props) => {
  const [jobs, setJob] = useState([]);
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        setJob(await fetchAll(`jobs`));
        setloader(false);
      };
      fetchData();
    }, 1000);
  }, []);
  return (
    <>
      {(loader && <Loader />) || (
        <>
          <NavBar hero={props.hero} />
          <JobItemSection jobs={jobs.jobs} />
          <Footer />
        </>
      )}
    </>
  );
};

export default AllJobs;
