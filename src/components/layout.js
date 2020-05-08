import React from "react";
import PropTypes from "prop-types";

import Header from "components/header";
import { Container } from "components/elements";
import { GlobalStyle } from "styles";
import "../styles/theme.css";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <main style={{ marginTop: 64 }}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
