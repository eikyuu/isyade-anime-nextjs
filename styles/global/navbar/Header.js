import styled from "styled-components";
import breakpoints from "../../helpers/breakpoints";
import fonts from "../../helpers/fonts";
import colors from "../../helpers/colors";

const Header = styled.header`
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 3;

  a {
    color: #000;
  }

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
      &:hover {
        background-color: #f4f4f4;
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
