const path = require('path');

/**
 * Get path relative to static/ directory
 *
 * @param {array} nodes
 * @returns {string}
 */
function fromStatic(...nodes) {
  return `${__dirname}/static/${nodes.join('/')}`;
}

/**
 * Get path relative to static/ directory
 *
 * @param {array} nodes
 * @returns {string}
 */
function fromContent(...nodes) {
  return `${__dirname}/content/${nodes.join('/')}`;
}

const SITE_NAME = 'Gno';
const SITE_ICON = 'favicon.ico';

module.exports = {
  siteMetadata: {
    title: SITE_NAME,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-source-name`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': path.resolve(__dirname, './src'),
          '@styles': path.resolve(__dirname, './src/styles'),
          '@components': path.resolve(__dirname, './src/components'),
          '@hocs': path.resolve(__dirname, './src/hocs'),
          '@utils': path.resolve(__dirname, './src/utils'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: fromStatic('assets'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: fromContent('projects'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `updates`,
        path: fromContent('updates'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `archive`,
        path: fromContent('archive.md'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `footer`,
        path: fromContent('footer.md'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: SITE_NAME,
        short_name: SITE_NAME,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: fromStatic('assets', SITE_ICON),
      },
    },
  ],
};
