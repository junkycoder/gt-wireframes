import koa from 'koa';
import serve from 'koa-static';

function main() {
  const app = koa();

  app.use(serve(__dirname + '/../../static'));

  return app;
}

export default main;

