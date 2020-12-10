import React from "react";
import Head from "next/head";
import Container from "../styles/components/Container";
import AnimeCards from "../components/pages/AnimeCards";

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <AnimeCards />
      </Container>
    </React.Fragment>
  );
};

export default Home;
