import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

function createWebpackHot() {
  const {
    devServer,
    ...config
  } = webpackConfig;

  const compiler = webpack(config);
  const hotMiddleware = webpackHotMiddleware(compiler);

  return function* (next) {
    yield hotMiddleware.bind(null, this.req, this.res);
    yield next;
  }}

export default createWebpackHot;
