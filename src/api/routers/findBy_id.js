const Router = require('koa-router');
const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */
router.get('/',async (ctx,next)=>{
	//获取前端传过来的页码page和页容量limit
//birth: "2019-02-02"
//comfirepsw: "123456"
//email: "324324323@qq.com"
//introduce: "11"
//logins: "421412"
//phonenumber: "13123434334"
//psw: "1234565"
//sex: "蔬果"
//username: "12321321"
	let {colname,_id} = ctx.request.query;
//	console.log({colname,_id});
	var ObjectID = require('mongodb').ObjectID;
    let mongores = await db.find(colname,{_id:ObjectID(_id)});
    //处理数据分页渲染
    console.log(mongores);
    let res1 = {
    	code : 0,
    	msg : '成功查询到数据',
    	count : mongores.length,
    	data: mongores
    };
    ctx.body = res1;//把结果传给前台渲染
})

module.exports = router;