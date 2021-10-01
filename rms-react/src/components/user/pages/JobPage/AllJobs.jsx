import React, { useState, useEffect } from "react";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import "./AllJobs.scss";
import JobItemSection from "./JobItemSection";
import { fetchApiData } from "../../../../api/ApiCall";
import Loader from "../../../../services/Loader";

const AllJobs = (props) => {
  const [jobs, setJob] = useState([]);
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await fetchApiData(`jobs`);
        if (response.status === true) {
          setJob(response.data);
        } else {
          console.log(response);
        }
        setloader(false);
      };
      fetchData();
    }, 1000);
  }, []);
  return (
    <>
      {(loader && <Loader />) || (
        <>
          <NavBar hero={props.hero} cmp="alljob" />
          <JobItemSection jobs={jobs.jobs} />
          <Footer />
        </>
      )}
    </>
  );
};

export default AllJobs;
