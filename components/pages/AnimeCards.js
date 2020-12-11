import Axios from "axios";
import React, { useEffect, useState } from "react";
import animeApi from "../../services/animeApi";

const AnimeCards = ({ article }) => {
  // const [data, setData] = useState();

  const loadData = async () => {
    const response = await animeApi.findAll();
    // setData(response);
  };

  // useEffect(() => {
  //   loadData();
  // }, []);
  // console.log(data.data[0].attributes.canonicalTitle);
  console.log(article);
  return <h1>test</h1>;
};

export const getStaticProps = async () => {
  const result = await fetch("https://kitsu.io/api/edge/anime");
  const article = await result.json();

  return {
    props: {
      article,
    },
  };
};

export default AnimeCards;
