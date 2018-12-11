const Koa =require('koa')
const app = new Koa()
const path = require('path')
const views = require('koa-views')
const router = require('./koa12_koa-router')
const routerChilrens = require('./koa12_koa-router_chilren')
const Router = require('koa-router') 
const router2 = new Router()
const nunjucks = require('nunjucks')

const static = require('koa-static');
// 配置静态web服务的中间件
app.use(static(__dirname+'./static'));

// app.use(views(path.join(__dirname, './views'), {
//     map: {njk: 'nunjucks'}
// }))
app.use(views(path.join(__dirname, 'views'), {
    extension: 'njk',
    map: { njk: 'nunjucks' },
  }));
  nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
  });

router2.use('/father',routerChilrens.routes())
// app.use(async ctx => {
//     let title = 'hello,world'
//     await ctx.render('index',{
//         title
//     })
// })
app
    .use(router.routes())
    // .use(router2.routes())
app 
    .use(router2.routes())
    .use(router2.allowedMethods());


app.listen('3000',() => {
    console.log(3000)
})