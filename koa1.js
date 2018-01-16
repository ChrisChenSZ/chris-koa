const Koa = require('koa')
const app = new Koa()
app.use(async(ctx) => {
    let url =ctx.url;
    let request =ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;

    ctx.body={
        url,
        req_query,
        req_querystring
    }
})
app.listen(3000)
// 使用http://127.0.0.1:3000?user=jspang&age=18来访问