import React, { useState, useEffect } from "react";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import "./AllJobs.scss";
import JobItemSection from "./JobItemSection";
import { getData } from "../../../../api/ApiCall";
import { useParams } from "react-router";

const SearchJob = (props) => {
  const { search } = useParams();
  const [jobs, setJob] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setJob(await getData(`jobs/${search}`));
    };
    fetchData();
  }, [search]);
  console.log(jobs);
  return (
    <>
      <NavBar hero={props.hero} />
      <JobItemSection jobs={jobs.jobs} />
      <Footer />
    </>
  );
};

export default SearchJob;
