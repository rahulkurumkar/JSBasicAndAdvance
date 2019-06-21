console.log(foo);

var foo = 'bar';
console.log(foo);

function bar() {
	console.log(foo);
	var foo = 'baz';
	console.log(foo);

	function baz(foo) {
		console.log(foo);
		foo = 'bam';
		bam = 'yay';
		console.log(foo);
		console.log(bam);
	}

	console.log(foo);
	baz();
	console.log(foo);
}

console.log(foo);

bar();

console.log(foo);

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `console.log(foo);

var foo = 'bar';
console.log(foo);

function bar() {
	console.log(foo);
	var foo = 'baz';
	console.log(foo);

	function baz(foo) {
		console.log(foo);
		foo = 'bam';
		bam = 'yay';
		console.log(foo);
		console.log(bam);
	}

	console.log(foo);
	baz();
	console.log(foo);
}

console.log(foo);

bar();

console.log(foo);`;

app.appendChild(pret);
