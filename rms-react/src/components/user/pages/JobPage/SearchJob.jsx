import React, { useState, useEffect } from "react";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import "./AllJobs.scss";
import JobItemSection from "./JobItemSection";
import { fetchApiData } from "../../../../api/ApiCall";
import { useParams } from "react-router";
import Loader from "../../../../services/Loader";

const SearchJob = (props) => {
  const { search } = useParams();
  const [jobs, setJob] = useState([]);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await fetchApiData(`jobs/${search}/search`);
        if (response.status === true) {
          setJob(response.data);
        } else {
          console.log(response);
        }
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
