const Router = require('koa-router')
const router = new Router()
router.get('/my', async(ctx, next) => {
    // ctx.body = 'my'
    let title = 'hello,world2222'
    await ctx.render('childrenRouterTest',{
        title
    })
})
.get('/test', (ctx,next) => {
    ctx.body = 'next'
})
module.exports = router