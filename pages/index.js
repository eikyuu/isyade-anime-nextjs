import React from "react";
import Head from "next/head";
import Container from "../styles/components/Container";
import AnimeCards from "../components/pages/AnimeCards";
import animeApi from "../services/animeApi";

const Home = ({ animes }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <AnimeCards animes={animes} />
      </Container>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const animes = await animeApi.findAll();
  return {
    props: {
      animes,
    },
  };
}

export default Home;
