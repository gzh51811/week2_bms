const Router = require('koa-router');
const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */
router.get('/',async (ctx,next)=>{
	//获取前端传过来的页码page和页容量limit
	let {page,limit} = ctx.request.query;
	let start = (page-1)*limit;
    let mongores = await db.find('user',{"identity" : "用户"});//只能查看用户信息
    //处理数据分页渲染
    let res = mongores.slice(start,limit*page);
    let res1 = {
    	code : 0,
    	msg : '',
    	count : mongores.length,
    	data:res
    };
    ctx.body = res1;//把结果传给前台渲染
})

module.exports = router;