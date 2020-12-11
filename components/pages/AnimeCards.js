import React from "react";

const AnimeCards = ({ animes }) => {
  return (
    <ul>
      {animes.map((index) => {
        return <h1>{index.attributes.canonicalTitle}</h1>;
      })}
    </ul>
  );
};
export default AnimeCards;
