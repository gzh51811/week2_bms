const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

// 创建路由
var router = new Router(); 

// 引入页面路由
const registryRouter = require('./registry');
const loginRouter = require('./login');
const goods = require('./goods');
const findgoods = require('./findgoods');
const deletegoods = require('./deletegoods');
const uploadp = require('./uploadp');
const addgoods = require('./addgoods');
const updatagoods = require('./updatagoods');

router.use(koaBody({
    // 支持formdata
    multipart:true,

    // 文件支持
    formidable:{
        // 指定保存路径
        uploadDir:'./uploads',
        keepExtensions:true,
        // 改文件名
        onFileBegin(filename,file){
//			console.log(file)
//			(ctx)=>{
//				ctx.body = file;
//			}
        }
    }
}));

router.use('/registry',registryRouter.routes())
router.use('/login',loginRouter.routes())
router.use('/goods',goods.routes())
router.use('/findgoods',findgoods.routes())
router.use('/deletegoods',deletegoods.routes())
router.use('/uploadp',uploadp.routes())
router.use('/addgoods',addgoods.routes())
router.use('/updatagoods',updatagoods.routes())
module.exports = router;