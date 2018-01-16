const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();
app.use(async (ctx, next) => {
 ctx.body = 'hello,world!'
})
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);