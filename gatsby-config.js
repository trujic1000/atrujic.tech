module.exports = {
  siteMetadata: {
    title: `Aleksandar Trujic | Front-End Developer`,
    description: `Personal website`,
    author: `Aleksandar Trujic`,
    siteUrl: `https://atrujic.tech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "4y6jno17",
        dataset: "production",
        watchMode: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AleksandarTrujic`,
        short_name: `AT`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#121212`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
