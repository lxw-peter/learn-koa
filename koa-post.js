const koa = require('koa')
const app = new koa()

// context(ctx) 对象--Node.js 的 Request(请求) 和 Response(响应) 对象的封装
app.use(async ctx => {
  if (ctx.request.method === 'POST') {
    let postData = ''
    ctx.req.on('data', data => {
      postData += data
    })
    ctx.req.on('end', () => {
      console.log(postData)
    })
  } else if(ctx.request.method === 'GET'){
    if(ctx.request.path !== '/') {
      ctx.response.type = 'html'
      ctx.response.body = '<a href="/">Go To Index</a>'
    }
  } else {
    ctx.response.body = 'Hello World'
  }
})



app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})