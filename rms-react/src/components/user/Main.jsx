import React, { useEffect, useState } from "react";
import Category from "./categories/Category";
import FeaturedJob from "./featuredjob/FeaturedJob";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Jobs from "./Jobs/Jobs";
import { fetchApiData } from "../../api/ApiCall";
import Loader from "../../services/Loader";

const Main = () => {
  const [data, setData] = useState([]);
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await fetchApiData(`home`);
        if (response.status == true) {
          setData(response.data);
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
      {loader ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Category categories={data.categories} />
          <FeaturedJob featured={data.featured_job} />
          <Jobs latest={data.latest} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
