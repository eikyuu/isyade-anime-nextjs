import React from "react";
import Cards from "../styles/components/Cards";
import Container from "../styles/components/Container";

const AnimeCards = ({ animes, title }) => {
  return (
    <>
      <Container>
        <h2>{title}</h2>
        <Cards>
          {animes.map((index) => {
            return (
              <img src={index.attributes.posterImage.small} alt="Avatar" />
            );
          })}
        </Cards>
      </Container>
    </>
  );
};
export default AnimeCards;
