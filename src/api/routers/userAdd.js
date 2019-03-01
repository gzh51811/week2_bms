const Router = require('koa-router');
const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx,添加管理员和用户
 */
router.post('/',async (ctx,next)=>{
//identity: "管理员"
//username: "12321321"
	console.log(ctx.request.body);
	let {username,identity} = ctx.request.body;
	let psw = username;
    let mongores = await db.insert('user',{username,psw,identity});
    //处理数据分页渲染
    let res1 = {
    	code : 0,
    	msg : '成功添加用户',
    	count : mongores.length,
    	data:''
    };
    ctx.body = res1;//把结果传给前台渲染
})

module.exports = router;