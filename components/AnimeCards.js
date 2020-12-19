import React from "react";
import Cards from "../styles/components/Cards";
import Container from "../styles/components/Container";

const AnimeCards = ({ animes, title }) => {
  return (
    <>
      <Container>
        <Cards>
          <h2>{title}</h2>
          <div className="cards_div">
            {animes.map((index) => {
              return (
                <img src={index.attributes.posterImage.small} alt="Avatar" />
              );
            })}
          </div>
        </Cards>
      </Container>
    </>
  );
};
export default AnimeCards;
