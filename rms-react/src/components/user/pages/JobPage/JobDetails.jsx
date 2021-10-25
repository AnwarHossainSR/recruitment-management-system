import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../footer/Footer";
import NavBar from "../Navigation/NavBar";
import JobDetailsItem from "./JobDetailsItem";
import { fetchApiData } from "../../../../api/ApiCall";
import Loader from "../../../../services/Loader";

const JobDetails = (props) => {
  const { slug } = useParams();
  const [job, setJob] = useState([]);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await fetchApiData(`home/${slug}`);
        if (response.status === true) {
          setJob(response.data);
        } else {
          console.log(response);
        }
        setloader(false);
      };
      fetchData();
    }, 1000);
  }, [slug]);

  return (
    <>
      {(loader && <Loader />) || (
        <>
          <NavBar job={job.job} hero={props.hero} cmp="alljob" />
          <JobDetailsItem similar={job.similar} job={job.job} />
          <Footer />
        </>
      )}
    </>
  );
};

export default JobDetails;
