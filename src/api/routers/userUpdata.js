const Router = require('koa-router');
const db = require('../db');

// 创建路由
var router = new Router();

/**
 * ctx
 */
router.post('/',async (ctx,next)=>{
	//获取前端传过来的页码page和页容量limit
//	console.log(ctx.request.body);
	var ObjectID = require('mongodb').ObjectID;
	let {_id,username,logins,sex,birth,psw,email,phonenumber,introduce} = ctx.request.body;
    let mongores = await db.update('user',{_id:ObjectID(_id)},{"$set":{username,logins,sex,birth,psw,email,phonenumber,introduce}});
    //处理数据分页渲染
    console.log(mongores);
    if (mongores.result.n) {
    	let res1 = {
	    	code : 0,
	    	msg : '成功修改用户',
	    	count : mongores.length,
	    	data: mongores.result
	    };
	    ctx.body = res1;//把结果传给前台渲染
    }else{
    	ctx.body ={code:404,msg:'failed',count:null,data:''}
    }
    
})

module.exports = router;