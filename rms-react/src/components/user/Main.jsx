import React, { useEffect, useState } from "react";
import Category from "./categories/Category";
import FeaturedJob from "./featuredjob/FeaturedJob";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Jobs from "./Jobs/Jobs";
import { fetchAll } from "../../api/ApiCall";
//import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await fetchAll(`home`));
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
