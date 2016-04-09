import webpack from 'webpack';
import webpackMiddleware from 'koa-webpack-dev-middleware';
import webpackConfig from '../webpack.config';

function createDevMiddleware() {
  const {
    devServer,
    ...config
  } = webpackConfig;

  return webpackMiddleware(
    webpack(config),
    devServer
  );
}

export default createDevMiddleware;
