const Koa =require('koa')
const app = new Koa()
const path = require('path')
const views = require('koa-views')
const static = require('koa-static')
const staticPatch = './static'
app.use(static(path.join(__dirname, staticPatch)))
app.use(views(path.join(__dirname, './static/views'), {
    extension: 'ejs'
}))

app.use(async ctx => {
    let title = 'hello,world'
    await ctx.render('index',{
        title
    })
})
app.listen('3000',() => {
    console.log(3000)
})