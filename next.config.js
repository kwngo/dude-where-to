require('dotenv').config()

const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass')
const path = require('path')
const Dotenv = require('dotenv-webpack')


module.exports = withCss(withSass({
  webpack(config, options) {

    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config


  }
}));
