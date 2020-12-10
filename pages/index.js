import React from "react";
import Head from "next/head";
import Container from "../styles/components/Container";

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Architecture de base</h1>
      </Container>
    </React.Fragment>
  );
};

export default Home;
