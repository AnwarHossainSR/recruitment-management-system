import React, { useEffect, useState } from "react";
import Loader from "../../../services/Loader";
import { fetchApiData } from "../../../api/ApiCall";
import NavBar from "../pages/Navigation/NavBar";
import JobItemSection from "../pages/JobPage/JobItemSection";
import Footer from "../footer/Footer";
import { useParams } from "react-router";

const CatJob = (props) => {
  const [jobs, setJob] = useState([]);
  const { slug } = useParams();
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await fetchApiData(`categories/cat-jobs/${slug}`);
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
          <NavBar job={jobs.category} cmp="catjob" />
          <JobItemSection jobs={jobs.jobs} />
          <Footer />
        </>
      )}
    </>
  );
};

export default CatJob;
