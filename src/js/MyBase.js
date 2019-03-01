
//封装正则
/*
 	条件：
 		用户名：3位或以上，由数字、字母、_组成，不能以数字开始
 		昵称：由汉字、字母、数字组成，数字不能开头
 		密码：有字母、数字、特殊字符（$_&）组成，6-20位
 			密码强度：分3级 有字母、数字、特殊字符其中一项为低，两项为中，三项为高
 		密码确认：和密码一样就通过；
 		邮箱：^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$
 */
var checkReg = {
	username: function(str) { //用户名
		var reg = /^[a-zA-Z_]\w{2,}$/;
		return reg.test(str);
	},
	name: function(str) { //验证昵称
		var reg = /^[\u2E80-\u9FFFa-zA-Z]+$/;
		return reg.test(str);
	},
	pword: function(str) {
		var num = 0; //实现密码强度判断  每符合一个要求，num++
		if(/[0-9]+/.test(str)) {
			num++;
		}
		if(/[a-zA-Z]+/.test(str)) {
			num++;
		}
		if(/[$_&]+/.test(str)) {
			num++;
		}
		if(str.length < 6 || str.length > 20 || /\s/g.test(str)) {
			num = 0;
		}
		return num;
	},
	checkpword: function(passw1, passw2) { //判断密码是否相同
		return passw1 == passw2
	},
	email: function(str) { //验证邮箱
		var reg = /^\w+([\-+\.]\w+)*@\w+([\-\.]\w+)*\.\w+([-.]\w+)*$/;
		return reg.test(str);
	},
	tel: function(str) { //验证电话
		var reg = /^1[3-9]\d{9}$/;
		return reg.test(str);
	},
	birthday: function(str) { //验证生日
		var reg = /^(18|19|20|21)[0-9]{2}\-?(0?[1-9]|1[0-2])\-?((0?[1-9])|((1|2)[0-9])|30|31)$/;
		return reg.test(str);
	},
	idCard: function(str, birthday) { //验证身份证
		var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/;
		//		var str2 = str.slice(6,14);
		return reg.test(str);
	}
}
/*
 * 	存 ：document.cookie = name=value[;expires=date][;path=路径][;domain=域名]
		* name=value: 为你要保存的键值对(必选)
		* expires ：失效时间，如果不设置，默认的浏览器关闭时立即失效
		* path：路径，不写默认就是该html文件存在的路径 
		* domain：域名，设置访问cookie的域名，权限
 	cookie的相关操作：var cookie = {}
	子功能：
		存 ：set
		取：get
		删：remove
		
 */
var cookie = {
	set: function(name, value, pro) {
		//name 要存储的名字  value   pro为json对象，里面有cookie一些相关属性
		var str = name + '=' + value;
		if(pro.expires) {
			str += ';expires=' + pro.expires.toUTCString(); //把时间转成字符串 toUTCString;
		}
		if(pro.path) {
			str += ';path=' + pro.path;
		}
		if(pro.domain) {
			str += ';domain=' + pro.domain;
		}
		document.cookie = str;
	},
	get: function(key) {
		//获取
		var str = document.cookie; //name=jingjing; psw=123456
		var arr = str.split('; '); //[name=jingjing , psw=123456]
		for(var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split('='); //[name,jingjing] [psw,123456]
			if(key == arr2[0]) {
				return arr2[1]; //通过键名取键值
			}
		}
	},
	remove: function(key) {
		var now = new Date();
		now.setDate(now.getDate() - 1);
		cookie.set(key, '', {
			expires: now,
			path:'/'
		});
	}
}


