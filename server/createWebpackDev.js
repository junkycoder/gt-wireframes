import webpack from 'webpack';
import webpackDevMiddleware from 'koa-webpack-dev-middleware';
import webpackConfig from '../webpack.config';

function createWebpackDev() {
  const {
    devServer,
    ...config
  } = webpackConfig;

  const compiler = webpack(config);

  return webpackDevMiddleware(
    compiler,
    devServer
  );
}

export default createWebpackDev;
