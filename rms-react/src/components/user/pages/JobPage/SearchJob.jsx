import React, { useState, useEffect } from "react";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import "./AllJobs.scss";
import JobItemSection from "./JobItemSection";
import { getData } from "../../../../api/ApiCall";
import { useParams } from "react-router";
import Loader from "../../../../services/Loader";

const SearchJob = (props) => {
  const { search } = useParams();
  const [jobs, setJob] = useState([]);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        setJob(await getData(`jobs/${search}`));
        setloader(false);
      };
      fetchData();
    }, 1000);
  }, [search]);
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

export default SearchJob;
