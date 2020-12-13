import React from "react";
import Cards from "../../../styles/components/Cards";
import Container from "../../../styles/components/Container";

const AnimeCards = ({ animesTrending, animes }) => {
  return (
    <>
      <Container>
        <h2>En tendances cette semaine :</h2>
        <Cards>
          {animesTrending.map((index) => {
            return (
              <img src={index.attributes.posterImage.small} alt="Avatar" />
            );
          })}
        </Cards>
        <h2>Au Top des Diffusions Anime :</h2>
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
