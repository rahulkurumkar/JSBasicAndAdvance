function Foo(who) {
	this.me = who;
}

Foo.prototype.identify = function() {
	return 'I am ' + this.me;
};

function Bar(who) {
	Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
	alert('Hello, ' + this.identify() + '.');
};

var b1 = new Bar('b1');
var b2 = new Bar('b2');

b1.speak();
b2.speak();

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `function Foo(who) {
	this.me = who;
}

Foo.prototype.identify = function () {
	return "I am " + this.me;
}

function Bar(who) {
	Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function () {
	alert("Hello, " + this.identify() + ".");
}

var b1 = new Bar("b1");
var b2 = new Bar("b2");


b1.speak();
b2.speak();`;

app.appendChild(pret);
