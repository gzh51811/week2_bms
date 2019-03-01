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
//"goodname":"goods-3","price":137,"num":1,"freight":8,"amount":137,"totalsum":145,"ordertime":1551321917270,"orderhoster":10001
	var ObjectID = require('mongodb').ObjectID;
	let {_id,goodname,price,num,freight,amount,totalsum,ordertime,orderhoster,orderstatus} = ctx.request.body;
    let mongores = await db.update('order',{_id:ObjectID(_id)},{"$set":{goodname,price,num,freight,amount,totalsum,ordertime,orderhoster,orderstatus}});
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