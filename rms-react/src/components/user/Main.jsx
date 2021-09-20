import React, { useEffect, useState } from "react";
import Category from "./categories/Category";
import FeaturedJob from "./featuredjob/FeaturedJob";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Jobs from "./Jobs/Jobs";
import { fetchAll } from "../../api/ApiCall";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchAll(`home`));
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Category categories={data.categories} />
      <FeaturedJob featured={data.featured} />
      <Jobs latest={data.latest} />
      <Footer />
    </>
  );
};

export default Main;
