const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */

router.post('/', async(ctx, next) => {
	
	let {_id} = ctx.request.body;
		
	var ObjectID = require('mongodb').ObjectID;
	let id = ObjectID(_id);
	let res = await db.find('goods', {_id:id});
//	
	let resdata = {
		"code": 1,
		"msg": "",
		"count": res.length,
		"data": res
	}
	ctx.body = resdata;
})

module.exports = router;