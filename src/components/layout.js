import React from "react";
import PropTypes from "prop-types";

import Header from "components/header";
import { Container } from "components/elements";
import Footer from "components/footer";
import { GlobalStyle } from "styles";
import "../styles/theme.css";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <main style={{ marginTop: 64 }}>{children}</main>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
