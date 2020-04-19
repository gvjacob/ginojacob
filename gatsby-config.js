require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

function fromSource(...files) {
  const SRC_DIR = require('path').resolve(__dirname, 'src');
  return files.reduce((acc, file) => `${acc}/${file}`, SRC_DIR);
}

function fromStatic(...files) {
  const STATIC_DIR = require('path').resolve(__dirname, 'static');
  return files.reduce((acc, file) => `${acc}/${file}`, STATIC_DIR);
}

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_ENVIRONMENT,
} = require('gatsby-plugin-config').default;

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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        environment: CONTENTFUL_ENVIRONMENT,
      },
    },
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
        icon: fromStatic('assets', 'favicon.ico'),
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
