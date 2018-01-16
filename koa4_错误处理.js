const Koa = require('koa')
const app = new Koa()
app.use(async ctx => {
    ctx.body='hello,world'
})
app.on('error', (err, ctx) => {
    console.error('server error', err,ctx)
})
app.listen('3000',() => {
    console.log('开启3000')
})