function foo() {
	console.log(bar);
}

function baz() {
	var bar = 'bar';
	foo();
}

baz();

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `function foo() {
	console.log(bar);
}

function baz() {
	var bar = 'bar';
	foo();
}

baz();`;

app.appendChild(pret);
