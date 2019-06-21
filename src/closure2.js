function foo() {
	var bar = 'bar';
	setTimeout(function() {
		console.log(bar);
	}, 1000);
}

foo();

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `function foo() {
	var bar = 'bar';
	setTimeout(function() {
		console.log(bar);
	}, 1000);
}

foo();`;

app.appendChild(pret);
