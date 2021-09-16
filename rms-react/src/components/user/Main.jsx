import React from "react";
import Category from "./categories/Category";
import FeaturedJob from "./featuredjob/FeaturedJob";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Jobs from "./Jobs/Jobs";

const Main = () => {
  return (
    <>
      <Header />
      <Category />
      <FeaturedJob />
      <Jobs />
      <Footer />
    </>
  );
};

export default Main;
