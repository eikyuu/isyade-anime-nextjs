import React from "react";
import Head from "next/head";
import Container from "../styles/components/Container";
import AnimeCards from "../components/pages/index/AnimeCards";
import animeApi from "../services/animeApi";

const Home = ({ animesTrending, animes }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Isyade Anime</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimeCards animesTrending={animesTrending} animes={animes} />
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
