const Router = require('koa-router')
const router = new Router()
router.get('/',  async (ctx, next) => {
  let count = 1;
  let title = 'hello,chris' + count;
  await ctx.render('childrenRouterTest',{
    title
})

})
router.get('/my', async(ctx, next) => {
    // ctx.body = 'my'
    let title = 'hello,world2222'
    await ctx.render('childrenRouterTest',{
        title
    })
})
.get('/test', (ctx,next) => {
    ctx.body = [{key:123,key2:1234}];
})
module.exports = router