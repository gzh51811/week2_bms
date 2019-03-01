(() => {

	var exit = document.getElementsByClassName('exit')[0];
	var userspan = document.getElementById('username');
	console.log(userspan,exit);
	userspan.innerHTML = cookie.get('username');
	exit.onclick = ()=>{
		cookie.remove('_id');
		cookie.remove('username');
		location.href = '../index.html';
	}
	
	
})();