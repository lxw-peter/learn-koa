const Koa = require('koa')
const app = new Koa()

/* app.use(async function (ctx, next){  <1>
  console.log(ctx.method, ctx.host + ctx.url)
  await next()
  ctx.body = 'Hello World'
}) */

/* <1>中间件改造 */
const logger = async function (ctx, next){
  console.log(ctx.method, ctx.host + ctx.url)
  await next()
  ctx.body = 'Hello World'
}
// app.use(logger)
// app.use(async function(ctx, next) {
//   ctx.body = 'Hello World'
// })

app.use(async function (ctx, next) {
  console.log('one start');
  await next()
  console.log('one end');
})

app.use(async function (ctx, next) {
  console.log('two start');
  ctx.body = 'two'
  await next()
  console.log('two end');
})

app.use(async function (ctx, next) {
  console.log('three start');
  await next()
  console.log('three end');
})

app.listen(3300, () => {
  console.log('http://localhost:3300');
})