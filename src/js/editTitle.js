(() => {
	/*
	 * 修改页面导航信息标题
	 */
	//找到导航信息节点
	var alist = document.getElementsByClassName('navtitle');
	//获取当前是什么页面
	var url = location.href;
	if(url.search(/user/g)>0) {
		alist[1].innerHTML = '用户管理';
		if(url.search(/Add/g)>0) {
			alist[2].innerHTML = '用户添加';
		} else if(url.search(/Edit/g)>0) {
			alist[2].innerHTML = '修改用户信息';
		}else{
			alist[2].style.display = 'none';
		}
	} else if(url.search(/order/g)>0) {
		alist[1].innerHTML = '订单管理';
		if(url.search(/list/g)>0) {
			alist[2].innerHTML = '订单列表';
		} else if(url.search(/Edit/g)>0) {
			alist[2].innerHTML = '订单状态修改';
		}else{
			alist[2].style.display = 'none';
		}
	} else if(url.search(/goods/g)>0) {
		alist[1].innerHTML = '所有商品';
		if(url.search(/Add/g)>0) {
			alist[2].innerHTML = '商品列表';
		} else if(url.search(/Edit/g)>0) {
			alist[2].innerHTML = '商品管理';
		}else{
			alist[2].style.display = 'none';
		}
	}
})();