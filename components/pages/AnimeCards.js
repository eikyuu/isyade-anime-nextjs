import Axios from "axios";
import React, { useEffect, useState } from "react";
import animeApi from "../../services/animeApi";
import axios from "axios";

export const getStaticProps = async () => {
  const response = await axios.get("https://kitsu.io/api/edge/anime");

  return {
    props: {
      dataAnimes: response.data,
    },
  };
};

const AnimeCards = ({ dataAnimes }) => {
  const [animes, setAnimes] = useState(dataAnimes);

  console.log(animes);

  return <h1>test</h1>;
};

export default AnimeCards;
