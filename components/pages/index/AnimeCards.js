import React from "react";
import Cards from "../../../styles/components/Cards";
import Container from "../../../styles/components/Container";

const AnimeCards = ({ animes }) => {
  return (
    <>
      <Container>
        <h1>En tendances cette semaine :</h1>
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
