import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="homeTitle">
        <span>Portfolio</span>
      </div>
      <div className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "navEffect" : "")}
          alt="Accueil"
        >
          <div>
            <span>01</span>
            <h2>Accueil</h2>
          </div>
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "navEffect" : "")}
          alt="Compétences"
        >
          <div>
            <span>02</span>
            <h2>Compétences</h2>
          </div>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "navEffect" : "")}
          alt="Projets"
        >
          <div>
            <span>03</span>
            <h2>Projets</h2>
          </div>
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) => (isActive ? "navEffect" : "")}
          alt="Expérience"
        >
          <div>
            <span>04</span>
            <h2>Expérience</h2>
          </div>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "navEffect" : "")}
          alt="Contact"
        >
          <div>
            <span>05</span>
            <h2>Contact</h2>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
