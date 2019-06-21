console.log('Before variable declaration: ', firstName);
var firstName = 'John';
console.log('After variable initalisation: ', firstName);

function printFirstName() {
	console.log(
		'Inside printFirstName fun before variable declaration: ',
		firstName
	);
	var firstName = 'Bob';
	console.log(
		'Inside printFirstName fun after variable initialisation: ',
		firstName
	);
}

console.log(
	'Before printFirstName func call and after variable initialisation: ',
	firstName
);
printFirstName();
console.log('After printFirstName fucntion call:', firstName);

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `console.log('Before variable declaration: ', firstName);
var firstName = 'John';
console.log('After variable initalisation: ', firstName);

function printFirstName() {
	console.log(
		'Inside printFirstName fun before variable declaration: ',
		firstName
	);
	var firstName = 'Bob';
	console.log(
		'Inside printFirstName fun after variable initialisation: ',
		firstName
	);
}

console.log(
	'Before printFirstName func call and after variable initialisation: ',
	firstName
);
printFirstName();
console.log('After printFirstName fucntion call:', firstName);`;

app.appendChild(pret);
