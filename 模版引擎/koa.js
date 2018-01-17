const Koa =require('koa')
const app = new Koa()
const path = require('path')
const views = require('koa-views')
app.use(views(path.join(__dirname, './views'), {
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