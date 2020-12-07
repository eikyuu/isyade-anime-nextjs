import React from "react";
// import FooterContainer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Layout;
