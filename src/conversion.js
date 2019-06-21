var number1 = 2;
var number2 = 5;
var stringNumber = '7';
var message1 = 'Hi';
var message2 = 'Bye';
console.log(
	'number1:',
	number1,
	' number2:',
	number2,
	'stringNumber:',
	stringNumber,
	'message1:',
	message1,
	'message2:',
	message2
);
console.log('number1 + number2: ', number1 + number2);
console.log('number1 + message1: ', number1 + message1);
console.log('message1 + number1: ', message1 + number1);
console.log('message1 + message2: ', message1 + message2);
console.log('number1 * number2: ', number1 * number2);

console.log('stringNumber * number1: ', stringNumber * number1);

console.log('stringNumber + number1: ', stringNumber + number1);

console.log('number1 + stringNumber: ', number1 + stringNumber);
console.log('+stringNumber + number2: ', +stringNumber + number2);

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `var number1 = 2;
var number2 = 5;
var stringNumber = '7';
var message1 = 'Hi';
var message2 = 'Bye';
console.log(
	'number1:',
	number1,
	' number2:',
	number2,
	'stringNumber:',
	stringNumber,
	'message1:',
	message1,
	'message2:',
	message2
);
console.log('number1 + number2: ', number1 + number2);
console.log('number1 + message1: ', number1 + message1);
console.log('message1 + number1: ', message1 + number1);
console.log('message1 + message2: ', message1 + message2);
console.log('number1 * number2: ', number1 * number2);

console.log('stringNumber * number1: ', stringNumber * number1);

console.log('stringNumber + number1: ', stringNumber + number1);

console.log('number1 + stringNumber: ', number1 + stringNumber);
console.log('+stringNumber + number2: ', +stringNumber + number2);`;

app.appendChild(pret);
