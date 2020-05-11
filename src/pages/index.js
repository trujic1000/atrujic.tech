import React from "react";

import Layout from "components/layout";
import SEO from "components/seo";
import { Home, About, Portfolio } from "sections";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Portfolio />
  </Layout>
);

export default IndexPage;
