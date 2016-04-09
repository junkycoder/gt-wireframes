import koa from 'koa';
import serve from 'koa-static';

function createStaticServer() {
  return serve(__dirname + '/../static');
}

export default createStaticServer;
