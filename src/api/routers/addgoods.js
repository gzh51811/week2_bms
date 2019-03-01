const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();


/**
 * ctx
 */
router.post('/',async (ctx,next)=>{
    // 解构
    let {goodsname,goodstitle,nowprice,oldprice,number,file,goodsclass,close,hot,recommend,sales,describe} = ctx.request.body;
	let data = {goodsname,goodstitle,nowprice,oldprice,number,file,goodsclass,close,hot,recommend,sales,describe};
    let res = await db.insert('goods',data);
	// 存入数据库
 	ctx.body = res;
})

module.exports = router;