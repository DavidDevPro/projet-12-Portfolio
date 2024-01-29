import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="homeTitle">
        <h1>David Changea</h1>
        <span>Portfolio</span>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
