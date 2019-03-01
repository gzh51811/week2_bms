const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */

router.get('/', async(ctx, next) => {
	let {page,limit} = ctx.request.query;
	let start = (page-1)*limit;
	let res = await db.find('goods', {});
	let res2 = res.slice(start,limit*page);
	let resdata = {
		"code": 0,
		"msg": "",
		"count": res.length,
		"data": res2
	}
	ctx.body = resdata;
})

module.exports = router;