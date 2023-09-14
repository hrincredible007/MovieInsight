import React from "react";
import "./style.scss";
import Trending from "./trending/Trending";
import HeroBanner from "./heroBanner/HeroBanner";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <HeroBanner></HeroBanner>
        <Trending></Trending>
      </div>
    </>
  );
};

export default Home;
