module.exports = {
  env: {
    development: {
      presets: ['babel-preset-gatsby'],
    },
    production: {
      presets: ['babel-preset-gatsby'],
    },
    test: {
      presets: [
        '@babel/preset-react',
        [
          '@babel/env',
          {
            targets: {
              edge: '17',
              firefox: '60',
              chrome: '67',
              safari: '11.1',
            },
          },
        ],
      ],
    },
  },
}
