import React from "react";
import GlobalStyles from "../styles/global/GlobalStyles";
import Layout from "../components/layout/layout";
import Container from "../styles/components/Container";

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div id="modalRoot" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};

export default MyApp;
