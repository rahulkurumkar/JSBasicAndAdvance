var name;

try {
	name.length;
} catch (err) {
	console.log(err);
}

console.log('err', err);

var app = document.getElementById('app');
var pret = document.createElement('pre');

pret.innerHTML = `var name;

try {
	name.length;
} catch (err) {
	console.log(err);
}

console.log('err', err);`;

app.appendChild(pret);
