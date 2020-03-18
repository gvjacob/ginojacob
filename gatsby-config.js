require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('gatsby-plugin-config').default;

const SRC_DIR = require('path').resolve(__dirname, 'src');
const fromSource = (...files) => files.reduce((acc, file) => `${acc}/${file}`, SRC_DIR);

module.exports = {
  siteMetadata: {
    title: 'Gino Jacob',
    description: `I’m a self-taught developer and above all else, an unapologetically user-centric designer.`,
    author: `Gino Jacob <gvjacob@outlook.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(fromSource('components', 'Layout')),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: fromSource('images'),
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
        icon: fromSource('images', 'gatsby-icon.png'),
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        data: `@import 'abstracts/index';`,
        includePaths: [fromSource('styles')],
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
};
