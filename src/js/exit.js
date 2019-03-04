(() => {

	var exit = document.getElementsByClassName('exit')[0];
	var userspan = document.getElementById('username');
	console.log(userspan, exit);

	let user = JSON.parse(cookie.get('user'));
		console.log(user)
	if(user.data._id) {
		// 判断本地是否有token
		let xhr = new XMLHttpRequest();
		xhr.onload = () => {
			let res = JSON.parse(xhr.responseText);
			if(res.status == 200) {
				userspan.innerHTML = user.data.username;
			}
		}
		xhr.open('post', '/tokenverify', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('token=' + user.data.token)
	}
	exit.onclick = () => {
		cookie.remove('user');
		location.href = '../index.html';
	}

})();