function foo() {
	var bar = 'bar';
	function baz() {
		console.log(bar);
	}

	bam(baz);
}

function bam(baz) {
	baz();
}

foo();

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `function foo() {
	var bar = 'bar';
	function baz() {
		console.log(bar);
	}

	bam(baz);
}

function bam(baz) {
	baz();
}

foo();`;

app.appendChild(pret);
