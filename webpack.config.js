require('dotenv').config();
require('babel-register')({
  cache: true,
  plugins: ['transform-es2015-modules-commonjs']
});

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./webpack/config.dev')
} else {
  module.exports = require('./webpack/config.dev')
}
