import styled from "styled-components";
import breakpoints from "../helpers/breakpoints";
import fonts from "../helpers/fonts";
import colors from "../helpers/colors";

const Header = styled.header`
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 3;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
    li a {
      display: block;
      padding: 20px 20px;
      border-right: 1px solid #f4f4f4;
      text-decoration: none;
    }
    :hover,
    .menu-btn:hover {
      background-color: #f4f4f4;
    }
  }

  .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
  }

  /* menu */

  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  /* menu icon */

  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
    .navicon {
      background: #333;
      display: block;
      height: 2px;
      position: relative;
      transition: background 0.2s ease-out;
      width: 18px;
    }
    .navicon:before {
      top: 5px;
    }
    .navicon:after {
      top: -5px;
    }
    .navicon:before,
    .navicon:after {
      background: #333;
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
    }
  }

  /* menu btn */

  .menu-btn {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    max-height: 240px;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  /* 48em = 768px */

  @media (min-width: 48em) {
    li {
      float: left;
    }
    li a {
      padding: 20px 30px;
    }
    .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .menu-icon {
      display: none;
    }
  }
`;

export default Header;
