const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const json = require('koa-json')

router.prefix('/api')

// 第五周1-6作业
router.post('/user', async (ctx) => {
  const params = ctx.request.query
  const work = ctx.request.header
  console.log(work.role)
  console.log(params)

  // 判断过程
  if (!work.role || work.role !== 'admin') {
    ctx.body = {
      code: 401,
      msg: 'unauthorizeed post',
    }
    ctx.response.status = 401
  } else if (!params.name || !params.email) {
    ctx.body = {
      code: 404,
      msg: 'name与email不能为空',
    }
    ctx.response.status = 404
  } else {
    ctx.body = {
      code: 200,
      data: {
        name: params.name,
        email: params.email,
      },
      msg: '上传成功',
    }
    ctx.response.status = 200
  }
})

app.use(koaBody())
app.use(cors())
app.use(json({ pretty: false, param: 'pretty' }))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
