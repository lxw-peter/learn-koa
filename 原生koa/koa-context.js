const koa = require('koa')
const app = new koa()

// context(ctx) 对象--Node.js 的 Request(请求) 和 Response(响应) 对象的封装
app.use(async (ctx, next) => {
  let URLInfo = {
    url: ctx.request.url,  // 请求URL
    query: ctx.request.query,  // 获取解析的查询字符串
    querystring: ctx.request.querystring  // 获取原始的查询字符串
  }
  ctx.response.type = 'text/html'
  html = '<h1>Hello World</h1>' +
    '<label>url: </label>' + URLInfo.url + '<br/>';

  for(let param in URLInfo.query) {
    html += '<label>query: </label>' + URLInfo.query[param] +  '<br/>'
  }

  html += '<label>querystring: </label>' + URLInfo.querystring + '<br/>';
  ctx.response.body = html
})

app.listen(3300, () => {
  console.log('server is running at http://localhost:3300')
})