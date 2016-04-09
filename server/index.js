import koa from 'koa';
import mount from 'koa-mount';
import createFrontendHtml from './createFrontendHtml';
import createWebpackDev from './createWebpackDev';
import createStatic from './createStatic';

const app = koa();

if (app.env === 'development') {
  app.use(createWebpackDev());
}

app.use(mount('/static', createStatic()));

app.use(createFrontendHtml());


app.listen(8080);
