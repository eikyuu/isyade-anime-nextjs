import styled from "styled-components";
import breakpoints from "../../helpers/breakpoints";
import fonts from "../../helpers/fonts";
import colors from "../../helpers/colors";

const Header = styled.header`
  background-color: ${colors.mauve};
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  z-index: 3;

  a {
    color: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: ${colors.mauve};
    li a {
      display: block;
      padding: 20px 20px;
      text-decoration: none;
      &:hover {
        color: gray;
      }
    }
  }

  @media (min-width: ${breakpoints.small}) {
    li {
      float: left;
      a {
        padding: 20px 30px;
      }
    }
  }
`;

export default Header;
