import React from "react";

import Layout from "components/layout";
import SEO from "components/seo";
import { Home, About, Portfolio, Contact } from "sections";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Portfolio />
    <About />
    <Contact />
  </Layout>
);

export default IndexPage;
