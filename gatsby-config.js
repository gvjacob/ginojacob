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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gino Jacob`,
        short_name: `Gino Jacob`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
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
  ],
};
