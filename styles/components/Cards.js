import styled from "styled-components";
import breakpoints from "../helpers/breakpoints";

const Cards = styled.div`
  flex-wrap: wrap;
  justify-content: center;

  .cards_div {
    display: flex;
    justify-content: center;
  }

  img {
    height: 200px;
    margin: 10px 10px 0 0;
    &:hover {
      box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.75);
    }
  }

  h2 {
    margin-bottom: 25px;
  }
`;

export default Cards;
