import koa from 'koa';
import render from './render';

function main() {
  const app = koa();

  app.use(function *() {
    this.body = render();
  });

  return app;
}

export default main;
