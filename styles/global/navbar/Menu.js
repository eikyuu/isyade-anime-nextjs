import styled from "styled-components";
import breakpoints from "../../helpers/breakpoints";
import fonts from "../../helpers/fonts";
import colors from "../../helpers/colors";

const Menu = styled.ul`
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;

  @media (min-width: ${breakpoints.small}) {
    clear: none;
    float: right;
    max-height: none;
  }
`;

export default Menu;
