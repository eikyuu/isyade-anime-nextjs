import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </React.Fragment>
  );
};

export default Home;
