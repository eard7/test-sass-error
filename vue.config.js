var path = require('path');
var webpack = require('webpack');

const vueConfig = {};

// Workaround for test mode because the css loaderOptions config strangely doesn't work
if (process.env.NODE_ENV === 'test') {
  vueConfig.configureWebpack = {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          sass: {
            data: '@import "./src/styles/main.scss";'
          }
        }
      })
    ]
  }
} else {
  vueConfig.css = {
      loaderOptions: {
        sass: {
          data: '@import "~@/styles/main";'
        }
      }
  }
}

module.exports = vueConfig;
