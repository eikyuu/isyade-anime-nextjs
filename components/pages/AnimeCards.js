import React from "react";
import Container from "../../styles/components/Container";

const AnimeCards = ({ animes }) => {
  return (
    <>
      {animes.map((index) => {
        return (
          <div className="card">
            <img src={index.attributes.posterImage.small} alt="Avatar" />
          </div>
        );
      })}
    </>
  );
};
export default AnimeCards;
