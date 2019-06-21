var o1 = {
	bar: 'bar1',
	foo: function() {
		console.log(this.bar);
	}
};

var o2 = { bar: 'bar2', foo: o1.foo };
var bar = 'bar3';
var foo = o1.foo;

o1.foo();
o2.foo();
foo();

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `var o1 = {
	bar: 'bar1',
	foo: function() {
		console.log(this.bar);
	}
};

var o2 = { bar: 'bar2', foo: o1.foo };
var bar = 'bar3';
var foo = o1.foo;

o1.foo();
o2.foo();
foo();`;

app.appendChild(pret);
