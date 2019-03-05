# 后台管理系统
基于layui 和 nodejs

### 项目演示地址：
http://101.132.180.67:1811

### github地址
https://github.com/gzh51811/week2_bms.git

### 登录账号
         管理员账号：laoxie           密码：123456
         用户账号：xiaoming           密码：xiaoming

### 项目说明：
         1.管理员登录，独有权限可以创建账户，需输入用户名和身份（管理员或用户），其它信息留给用户登录时完善，
         2.用户登录，在用户列表只能修改自身的信息，
         3.用户列表只能看到用户的信息，管理员信息保密
         4.登录后可以查看 商品/用户/订单 信息，编辑 商品/用户/订单 信息 , 添加新的商品；而添加用户要管理员身份

### 项目工具
Option|	Tools
---- | ----- 
开发环境|	nodejs
UI框架|	layui
JavaScript框架|	nodejs
开发工具|	hbuilder
包管理工具|	npm

### 目录
         \根目录

         ├── README.md	项目说明文档

         ├── package.json	Node.js模块描述文件
         
         ├── .gitignore	忽略文件目录

         └── src/	源文件
         
### 项目不足
         直接应用layui的示例，请求数据 到 渲染到表单 的等待时间过长，我们小组直接使用layui实例中的函数渲染数据，创建了相应路由，通过路由拿到mongodb中的数据
         
    
