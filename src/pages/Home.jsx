import React from "react";
import HomeMain from "../components/HomeMain";
import background from "../assets/img/homeBackground.jpg";

const HomePage = () => {
  return (
    <div className="home">
      <img src={background} alt="background page d'accueil" />
      <HomeMain />
    </div>
  );
};

export default HomePage;
