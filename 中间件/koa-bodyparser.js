const koa = require('koa')
const app = new koa()

app.use( async (ctx) => {
  if(ctx.url === '/' && ctx.method === 'GET') {
    ctx.type = 'html'
    let html = `
      <h1>登录</h1>
      <form method="POST" action="/">
        <p>用户名</p>
        <input name="password" type="password" /><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  } else if(ctx.url === '/' && ctx.method === 'POST') {
    let postData = ctx.request.body
    ctx.body = postData
  }
})

app.listen(3600, () => {
  console.log('http:localhost:3600');
  
})