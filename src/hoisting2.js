console.log(firstName);
var firstName = 'John';

console.log(firstName);
function firstName() {
	console.log('Function defination');
	console.log(firstName);
}

function firstName() {
	console.log('Duplicate Function defination');
	console.log(firstName);
}

// firstName();
console.log(firstName);

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `console.log(firstName);
var firstName = 'John';

console.log(firstName);
function firstName() {
	console.log('Function defination');
	console.log(firstName);
}

function firstName() {
	console.log('Duplicate Function defination');
	console.log(firstName);
}

// firstName();
console.log(firstName);`;

app.appendChild(pret);
