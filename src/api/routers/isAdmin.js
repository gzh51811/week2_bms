const Router = require('koa-router');
const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */
router.post('/', async(ctx, next) => {
	let {
		colname,
		_id
	} = ctx.request.body;
	//	console.log({colname,_id});
	var ObjectID = require('mongodb').ObjectID;
	let mongores = await db.find(colname, {
		_id: ObjectID(_id),
		identity: "管理员"
	});
	//处理数据分页渲染
	let res1;
	if(mongores.length != 0) {
		res1 = {
			code: 0,
			msg: '是管理员',
			count: mongores.length,
			data: mongores
		};
	}else{
		res1 = {
			code: 404,
			msg: '普通用户',
			count: mongores.length,
			data: mongores
		};
	}

	ctx.body = res1; //把结果传给前台渲染
})

module.exports = router;