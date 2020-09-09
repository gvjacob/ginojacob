require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const postCssCalc = require('postcss-calc');

function from(dir, files) {
  const DIR = require('path').resolve(__dirname, dir);
  return files.reduce((acc, file) => `${acc}/${file}`, DIR);
}

function fromSource(...files) {
  return from('src', files);
}

function fromStatic(...files) {
  return from('static', files);
}

module.exports = {
  siteMetadata: {
    title: 'Gino Jacob',
    description: `Lucky to have built a life-saving app, democratized technology skills, and developed some really pretty websites. I'm an engineer, and above all else, an unapologetically user-centric designer.`,
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
        icon: fromStatic('assets', 'favicon.ico'),
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        postCssPlugins: [
          /*
           * Reduces nested css calcs, for ie11 compatibility.
           * https://github.com/postcss/postcss-calc
           */
          postCssCalc(),
        ],
        data: `@import 'abstracts/index';`,
        includePaths: [fromSource('styles')],
        cssLoaderOptions: {
          camelCase: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: fromSource('pages'),
      },
    },
    `gatsby-plugin-mdx`,
  ],
};
