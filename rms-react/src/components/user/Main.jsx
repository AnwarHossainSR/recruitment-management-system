import React, { useEffect, useState } from "react";
import Category from "./categories/Category";
import FeaturedJob from "./featuredjob/FeaturedJob";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Jobs from "./Jobs/Jobs";
import { fetchAll } from "../../api/ApiCall";
import Loader from "../../services/Loader";

const Main = () => {
  const [data, setData] = useState([]);
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        setData(await fetchAll(`home`));
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
          <FeaturedJob featured={data.featured} />
          <Jobs latest={data.latest} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
