import React from "react";
import PropTypes from "prop-types";

import Header from "components/header";
import Footer from "components/footer";
import { GlobalStyle } from "styles";
import "../styles/theme.css";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main style={{ marginTop: 64 }}>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
