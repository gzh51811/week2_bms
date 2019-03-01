const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */

router.post('/',async(ctx, next) => {
	let resdata = {
		"code": 0,
		"msg": "",
		"data": {
			"src": ctx.request.files.file.path
		}
	}
	ctx.body = resdata;
})



module.exports = router;