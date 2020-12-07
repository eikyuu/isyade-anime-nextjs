import React, { useEffect } from "react";
import Header from "../../styles/pages/home/hero/Header";

const navbar = (props) => {
  //   useEffect(() => {
  //     function myFunction() {
  //       var x = document.getElementById("navbarId");
  //       if (x.className === "navbar") {
  //         x.className += " responsive";
  //       } else {
  //         x.className = "navbar";
  //       }
  //     }
  //   });

  return (
    <Header className="navigation" id="navbarId">
      <a href="#home" className="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="javascript:void(0);" className="icon" onclick="myFunction()">
        <i className="fa fa-bars"></i>
      </a>
    </Header>
  );
};

export default navbar;
