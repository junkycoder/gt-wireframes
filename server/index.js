import koa from 'koa';
import createDevMiddleware from './createDevMiddleware';

const app = koa();

if (app.env === 'development') {
  app.use(createDevMiddleware());
}

console.log('server');

app.listen(8080);
