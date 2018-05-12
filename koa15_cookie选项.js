const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const home = new Router()

home.get('/',async ctx => {
    ctx.cookies.set('namme', 'chris',{
        domain: '127.0.0.1', // 写入cookie 的哉名
        path: '/home', //写入cookie的路径
        expires: new Date('2018-12-31'), //cookies 失效时间
        httpOnly: false,// 是否只能http 请求
        overwrite: false // 是否允许重写
    })
    ctx.body = 'home'
})
router.use('/home',home.routes(),home.allowedMethods())
app.use(router.routes(),router.allowedMethods())
app.listen('3000',() => {
    console.log('3000')
})