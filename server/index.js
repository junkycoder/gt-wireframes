import koa from 'koa';
import mount from 'koa-mount';
import createHtml from './html';
import createStatic from './static';
import createDevel from './devel';

function server ({ port }) {
  const app = koa();

  if (app.env === 'development') {
    app.use(createDevel());
  }

  app.use(mount('/static', createStatic()));

  app.use(mount('/', createHtml()));

  app.listen(port);
}

export default server;
