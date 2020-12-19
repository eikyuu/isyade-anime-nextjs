import React from "react";
import Head from "next/head";
import Container from "../styles/components/Container";
import AnimeCards from "../components/AnimeCards";
import animeApi from "../services/animeApi";

const Home = ({ animesTrending, animes }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Isyade Anime</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimeCards
        animes={animesTrending}
        title={"En Tendances cette semaine"}
      />
      <AnimeCards animes={animes} title="Au Top des Diffusions Anime" />
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const animesTrending = await animeApi.findTrendingAnime();
  const animes = await animeApi.findAll();
  return {
    props: {
      animesTrending,
      animes,
    },
  };
}

export default Home;
