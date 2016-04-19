import koa from 'koa';
import mount from 'koa-mount';
import createHtml from './html';
import createStatic from './static';

function server () {
  const app = koa();

  app.use(mount('/static', createStatic()));

  app.use(mount('/', createHtml()));

  return app;
}

export default server;
