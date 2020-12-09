import styled from "styled-components";
import breakpoints from "../../helpers/breakpoints";
import fonts from "../../helpers/fonts";
import colors from "../../helpers/colors";

const MenuIcon = styled.label`
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

  @media (min-width: ${breakpoints.small}) {
    display: none;
  }
`;

export default MenuIcon;
