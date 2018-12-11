const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const fs = require('fs');
app.use(static(__dirname + '/views'));
app.use(bodyParser());
console.log(__dirname + '/views');
app.use(views(__dirname + '/views', {}));
app.use(async ctx => {
  // if (ctx.request.method === 'GET') {
  //   ctx.response.type = 'html';
  //   ctx.response.body = fs.createReadStream('./views/index.html');
  // }
});
app.listen('3001', () => {
  console.log('监听3001');
});

// const Koa = require('koa');c
// const app = new Koa();
// app.use(async ctx => {
//   let url = ctx.url;
//   let request = ctx.request;
//   let req_query = request.query;
//   let req_querystring = request.querystring;

//   ctx.body = {
//     url,
//     req_query,
//     req_querystring
//   };
// });
// app.listen(3001);
// 使用http://127.0.0.1:3000?user=jspang&age=18来访问
