import styled from "styled-components";
import breakpoints from "../../helpers/breakpoints";
import fonts from "../../helpers/fonts";
import colors from "../../helpers/colors";

const MenuBtn = styled.input`
  display: none;

  :hover {
    background-color: #f4f4f4;
  }

  :checked ~ .menu {
    max-height: 240px;
  }

  :checked ~ .menu-icon .navicon {
    background: transparent;
  }

  :checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  :checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  :checked ~ .menu-icon:not(.steps) .navicon:before,
  :checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
`;

export default MenuBtn;
