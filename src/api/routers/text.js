const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */

router.get('/', async(ctx, next) => {
//	let {gid} = ctx.query;
	let resdata = await db.delete('goods', {gid:2});
	ctx.body = resdata;
})

module.exports = router;