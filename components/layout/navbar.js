import React from "react";
import Header from "../../styles/global/Header";

const navbar = (props) => {
  return (
    <Header>
      <a href="" className="logo">
        Navbar
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#work">base navbar</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Header>
  );
};

export default navbar;
