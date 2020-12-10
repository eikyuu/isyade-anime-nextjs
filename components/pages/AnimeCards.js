import React, { useEffect, useState } from "react";
import animeApi from "../../services/animeApi";

const AnimeCards = () => {
  const [data, setData] = useState();

  const loadData = async () => {
    const response = await animeApi.findAll();
    setData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(data[0].attributes);
  return <h1>test</h1>;
};

export default AnimeCards;
