import koa from 'koa';
import render from './render';

function main() {
  const app = koa();

  app.use(function *(next) {
    yield next;

    if (this.status === 404) {
      this.body = render();
    }
  });

  return app;
}

export default main;
