import styled from "styled-components";
import breakpoints from "../helpers/breakpoints";
import fonts from "../helpers/fonts";
import colors from "../helpers/colors";

const FooterStyle = styled.footer`
  width: 100%;
  height: auto;
  background-color: #070617;
  display: flex;
  justify-content: center;

  .col {
    width: 190px;
    height: auto;
    float: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 20px 20px 20px;
    h1 {
      margin: 0;
      padding: 0;
      font-family: inherit;
      font-size: 12px;
      line-height: 17px;
      padding: 20px 0px 5px 0px;
      color: rgba(255, 255, 255, 0.2);
      font-weight: normal;
      text-transform: uppercase;
      letter-spacing: 0.25em;
    }
  }
  .col ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      color: #999999;
      font-size: 14px;
      font-family: inherit;
      font-weight: bold;
      padding: 5px 0px 5px 0px;
      cursor: pointer;
      transition: 0.2s;
      -webkit-transition: 0.2s;
      -moz-transition: 0.2s;
      &:hover {
        color: #ffffff;
        transition: 0.1s;
        -webkit-transition: 0.1s;
        -moz-transition: 0.1s;
      }
    }
  }

  .social ul li {
    display: inline-block;
    padding-right: 5px !important;
  }

  .clearfix {
    clear: both;
  }

  @media only screen and (max-width: 1139px) {
    .social {
      width: 1000px;
      display: block;
    }
    .social h1 {
      margin: 0px;
    }
  }
  @media only screen and (max-width: ${breakpoints.medium}) {
    .col {
      width: 33%;
    }
    .col h1 {
      font-size: 14px;
    }
    .col ul li {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 500px) {
    .col {
      width: 50%;
    }
    .col h1 {
      font-size: 14px;
    }
    .col ul li {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: ${breakpoints.xsmall}) {
    .col {
      width: 100%;
    }
  }
`;

export default FooterStyle;
