function foo() {
	console.log(this.bar);
}

var bar = 'bar1';
var o2 = { bar: 'bar2', foo: foo };
var o2 = { bar: 'bar3', foo: foo };

foo();

o2.foo();
o3.foo();

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `function foo() {
	console.log(this.bar);
}

var bar = 'bar1';
var o2 = { bar: 'bar2', foo: foo };
var o2 = { bar: 'bar3', foo: foo };

foo();

o2.foo();
o3.foo();`;

app.appendChild(pret);
