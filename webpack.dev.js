const path = require('path');
const config = require('./webpack.base');

// 開発ビルドはpublicフォルダに出力
const basePath = process.cwd();
config.output.path = `${basePath}/public`;
config.mode = 'development';

config.devServer = {
  contentBase: path.join(__dirname, 'public'),
  compress: true,
  port: 9090
}

module.exports = config;