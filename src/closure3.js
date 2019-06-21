for (var i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(i);
	}, 1000);
}

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `for (var i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(i);
	}, 1000);
}`;

app.appendChild(pret);
