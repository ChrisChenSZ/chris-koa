const Router = require('koa-router')
const router = new Router()
router.get('/my', (ctx, next) => {
    ctx.body = 'my'
})
.get('/next', (ctx,next) => {
    ctx.body = 'next'
})
module.exports = router