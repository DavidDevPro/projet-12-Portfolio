import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "navEffect" : "")}
      >
        <div>
          <span>01</span>
          <h2>Maison</h2>
        </div>
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) => (isActive ? "navEffect" : "")}
      >
        <div>
          <span>02</span>
          <h2>Compétences</h2>
        </div>
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "navEffect" : "")}
      >
        <div>
          <span>03</span>
          <h2>Projets</h2>
        </div>
      </NavLink>
      <NavLink
        to="/experience"
        className={({ isActive }) => (isActive ? "navEffect" : "")}
      >
        <div>
          <span>04</span>
          <h2>Expérience</h2>
        </div>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "navEffect" : "")}
      >
        <div>
          <span>05</span>
          <h2>Contact</h2>
        </div>
      </NavLink>
    </div>
  );
};

export default Navigation;
