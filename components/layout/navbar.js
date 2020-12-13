import React from "react";
import Header from "../../styles/global/navbar/Header";
import Logo from "../../styles/global/navbar/Logo";
import Menu from "../../styles/global/navbar/Menu";
import MenuBtn from "../../styles/global/navbar/MenuBtn";
import MenuIcon from "../../styles/global/navbar/MenuIcon";

const navbar = (props) => {
  return (
    <Header>
      <div>
        <Logo href="" className="logo">
          Isyade Animes
        </Logo>
        <MenuBtn className="menu-btn" type="checkbox" id="menu-btn" />
        <MenuIcon className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </MenuIcon>
        <Menu className="menu">
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
        </Menu>
      </div>
    </Header>
  );
};

export default navbar;
