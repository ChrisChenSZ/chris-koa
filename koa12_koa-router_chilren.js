const Router = require('koa-router')
const router = new Router()
router.get('/my', (ctx, next) => {
    ctx.body = 'my'
})
.get('/test', (ctx,next) => {
    ctx.body = 'next'
})
module.exports = router