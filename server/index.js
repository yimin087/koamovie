const Koa = require('koa')
const KoaViews = require('koa-views')
const {resolve} = require('path')
// const Ejs = require('ejs')
// const Pug = require('pug')
// const {htmlTpl, ejsTpl, pugTpl} = require('./tpl')

const app = new Koa()

app.use(
	KoaViews(resolve(__dirname, './view'), {
		extension: 'pug'
	})
)

app.use(async (ctx, next) => {
	// ctx.type = 'text/html; charset=utf-8'
	// ctx.body = Pug.render(pugTpl, {
	// 	name: '哈哈哈',
	// 	text: '测试测试文案'
	// })
	await ctx.render('index', {
		name: '哈哈哈',
		text: '测试sss测试文案'
	})
})

app.listen(2345)
