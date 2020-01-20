require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
})

const config = require('gatsby-plugin-config').default

module.exports = {
  siteMetadata: {
    title: `ginojacob.com`,
    description: `I’m a self-taught developer and above all else, an unapologetically customer-centric designer. You’d find me ballroom dancing when I’m not solving people’s problems.`,
    author: `Gino Jacob <gvjacob@outlook.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        cssLoaderOptions: {
          camelCase: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
          modules: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'TakeShape',
        fieldName: 'takeshape',
        url: config.TAKESHAPE_API_URL,
        headers: {
          Authorization: `Bearer ${config.TAKESHAPE_API_TOKEN}`,
        },
      },
    },
  ],
}
