import styled from "styled-components";
import breakpoints from "../../../helpers/breakpoints";
import fonts from "../../../helpers/fonts";
import colors from "../../../helpers/colors";

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), transparent);
  backdrop-filter: blur(1px);
  position: fixed;
  z-index: 99;
  transition: background, top 0.3s linear;
  top: auto;

  &.sticky {
    top: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
    backdrop-filter: blur(5px);
    .logoHeader {
      width: 180px;
    }
  }

  .logoHeader {
    width: 230px;
    height: 100%;
    transition: all 0.3s linear;
  }

  .navigation {
    display: flex;
    align-items: center;
    .nav_items {
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 1.5rem;
      font-family: ${fonts.light};
      cursor: pointer;

      svg {
        width: 25px;
        height: 25px;
        margin-bottom: 0.5rem;
        fill: ${colors.orange};
      }
    }
  }

  #nav_filter {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
    transition: opacity 0.3s ease-in 0s;

    &.open {
      opacity: 0.9;
      z-index: 99;
    }
  }

  .diagSearch {
    p {
      display: flex;
    }
    input {
      border: none;
      padding: 1rem;
    }
    button {
      display: flex;
      align-items: center;
      border: none;
      padding: 0 1rem;
      background-color: ${colors.orange};
    }
    svg {
      fill: #ffffff;
      width: 20px;
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    .nav_items {
      span {
        display: none;
      }
    }
    .diagSearch {
      position: absolute;
      right: 0;
      top: 13%;
    }
  }

  @media (max-width: ${breakpoints.small}) {
    padding: 1rem;
    .logoHeader {
      max-width: 100px;
    }
  }

  @media (max-width: ${breakpoints.xsmall}) {
    .navigation {
      .nav_items {
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .diagSearch {
      input {
        padding: 0.3rem;
      }
      button {
        padding: 0 0.3rem;
      }
    }
  }
`;

export default Header;
