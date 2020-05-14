import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import favicon from "images/favicons/favicon.ico";
import ogImage from "images/og.png";
import appleIcon57x57 from "images/favicons/apple-icon-57x57.png";
import appleIcon60x60 from "images/favicons/apple-icon-60x60.png";
import appleIcon72x72 from "images/favicons/apple-icon-72x72.png";
import appleIcon76x76 from "images/favicons/apple-icon-76x76.png";
import appleIcon114x114 from "images/favicons/apple-icon-114x114.png";
import appleIcon120x120 from "images/favicons/apple-icon-120x120.png";
import appleIcon144x144 from "images/favicons/apple-icon-144x144.png";
import appleIcon152x152 from "images/favicons/apple-icon-152x152.png";
import appleIcon180x180 from "images/favicons/apple-icon-180x180.png";
import androidIcon192x192 from "images/favicons/android-icon-192x192.png";
import favicon16x16 from "images/favicons/favicon-16x16.png";
import favicon32x32 from "images/favicons/favicon-32x32.png";
import favicon96x96 from "images/favicons/favicon-96x96.png";
import msIcon144x144 from "images/favicons/ms-icon-144x144.png";

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet>
      <html lang="en" />
      <title lang="en">{site.siteMetadata.title}</title>
      <link rel="shortcut icon" href={favicon} />
      <link rel="canonical" href="https://atrujic.tech" />

      <meta name="description" content={metaDescription} />

      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta
        property="og:image"
        content={`${site.siteMetadata.siteUrl}/${ogImage}`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:locale" content="en_US" />

      <meta itemProp="name" content={site.siteMetadata.title} />
      <meta itemProp="description" content={metaDescription} />
      <meta
        itemProp="image"
        content={`${site.siteMetadata.siteUrl}${ogImage}`}
      />

      <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57x57} />
      <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60x60} />
      <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72x72} />
      <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76x76} />
      <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114x114} />
      <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120x120} />
      <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144x144} />
      <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152x152} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={androidIcon192x192}
      />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="96x96" href={favicon96x96} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />

      <meta name="msapplication-TileColor" content="#121212" />
      <meta name="msapplication-TileImage" content={msIcon144x144} />
      <meta name="theme-color" content="#121212" />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
