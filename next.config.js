const withSass = require('@zeit/next-sass');
const withTM = require('next-transpile-modules');

module.exports = withTM(withSass({
  transpileModules: ['react-bulma-components'],
  sassLoaderOptions: {
    includePaths: ['./styles'],
  },
}));