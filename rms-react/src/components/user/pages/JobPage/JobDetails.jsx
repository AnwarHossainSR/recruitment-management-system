import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import JobDetailsItem from "./JobDetailsItem";
import { getData } from "../../../../api/ApiCall";

const JobDetails = (props) => {
  const { slug } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setJob(await getData(`home/${slug}`));
    };
    fetchData();
  }, [slug]);
  return (
    <>
      <NavBar job={job.job} hero={props.hero} />
      <JobDetailsItem similar={job.similar} job={job.job} />
      <Footer />
    </>
  );
};

export default JobDetails;
