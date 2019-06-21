for (var i = 0; i < 50000; i++) {
	// 2 min/iteration
}

(function() {
	for (var i = 0; i < 50000; i++) {
		// 2 min/iteration
	}
})();

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `for (var i = 0; i < 50000; i++) {
	// 2 min/iteration
}

(function() {
	for (var i = 0; i < 50000; i++) {
		// 2 min/iteration
	}
})();;

app.appendChild(pret);
