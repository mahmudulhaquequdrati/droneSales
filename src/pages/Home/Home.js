import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import HomeProducts from "./HomeProducts/HomeProducts";
import OurSpeciality from "./OurSpeciality/OurSpeciality";
import Review from "./Review/Review";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <TopBanner></TopBanner>
      <OurSpeciality></OurSpeciality>
      <HomeProducts></HomeProducts>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
