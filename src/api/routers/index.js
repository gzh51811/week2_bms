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
const userRouter = require('./user');//返回用户信息
const userAddRouter = require('./userAdd');//添加用户信息
const userUpdataRouter = require('./userUpdata');//修改用户信息
const findByidRouter = require('./findBy_id');//修改之前要查询根据_id信息
const orderRouter = require('./order');//返回订单信息
const deleteRouter = require('./delete');//表格删除行路由
const orderUpdataRouter = require('./orderUpdata');//修改用户信息
const isAdminRouter = require('./isAdmin');//判断权限身份

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

router.use('/user',userRouter.routes());
router.use('/userAdd',userAddRouter.routes());
router.use('/findBy_id',findByidRouter.routes());
router.use('/userUpdata',userUpdataRouter.routes());
router.use('/order',orderRouter.routes());
router.use('/delete',deleteRouter.routes());
router.use('/orderUpdata',orderUpdataRouter.routes());
router.use('/isAdmin',isAdminRouter.routes());

module.exports = router;