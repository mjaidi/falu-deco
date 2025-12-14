require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `B2R Solution`,
    description: `B2R Solution est un spécialiste de l'amménagement intérieur, façades, menuiserie métallurgique et enseignes en tout genre.`,
    author: `@mjaidi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `11333072412`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quicksand\:300,400,500,700`,
          `PT Sans\:300,400,500,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        manualInit: true,
        enableIdentityWidget: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/home`,
        name: `home`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/services`,
        name: `services`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-153657442-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `B2R Solution Site Web`,
        short_name: `B2R Solution`,
        start_url: `/`,
        background_color: `#DA241C`,
        theme_color: `#DA241C`,
        display: `minimal-ui`,
        icon: `content/assets/logo-square.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/contact/`, `/services/*`, "/projects/", "index"],
      },
    },
  ],
}
