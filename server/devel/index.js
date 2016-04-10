import compose from 'koa-compose';
import webpack from 'webpack';
import webpackDev from 'koa-webpack-dev-middleware';
import webpackHot from 'koa-webpack-hot-middleware';
import config from '../../webpack.config';

function createCompiler(config) {
  return webpack(config);
}

function createWebpackDev(compiler, config) {
  return webpackDev(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  });
}

function createWebpackHot(compiler) {
  return webpackHot(compiler);
}

function main() {
  const compiler = createCompiler(config);

  return compose([
    createWebpackDev(compiler, config),
    createWebpackHot(compiler)
  ]);
}

export default main;

