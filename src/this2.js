// Explicit binding
function foo() {
	console.log(this.bar);
}

var obj = { bar: 'bar2', foo: foo };

foo.call(obj);

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `// Explicit binding
function foo() {
	console.log(this.bar);
}

var obj = { bar: 'bar2', foo: foo };

foo.call(obj);`;

app.appendChild(pret);
