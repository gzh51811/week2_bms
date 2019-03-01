const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */

router.post('/', async(ctx, next) => {
	let {colname,_id} = ctx.request.body; //获取的id是字符串id集合
	let idarr = _id.split(',');
	let _idarr = [];
	var ObjectID = require('mongodb').ObjectID;
	for(let i = 0; i < idarr.length; i++) {_idarr.push(ObjectID(idarr[i]));}
	let mongores = await db.delete(colname, {_id: {"$in": _idarr}});
	//处理数据分页渲染
	let res1 = {
		code: 0,
		msg: '删除成功',
		count: 1,
		data: mongores
	};
	ctx.body = mongores; //把结果传给前台渲染
})

module.exports = router;