import styled from "styled-components";
import breakpoints from "../helpers/breakpoints";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  padding: 2rem;
  box-sizing: border-box;
  z-index: 200;

  @media screen and (max-width: ${breakpoints.small}) {
    padding: 0.5rem;
  }
`;

export default Container;