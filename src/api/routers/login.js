const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */
router.post('/', async(ctx, next) => {
	// 解构
	let {
		username,
		password
	} = ctx.request.body;

	let res = await db.find('user', {
		username,
		psw:password
	});

	res = res[0];

	if(res) {
		ctx.body = {
			code: 200,
			msg: 'success',
			data: {
				_id: res._id,
				username: res.username,
				gender: res.gender,
				regtime: res.regtime
			}
		}
	} else {
		ctx.body = {
			code: 100,
			msg: 'fail'
		}
	}

	// 存入数据库

})

module.exports = router;