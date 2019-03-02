// arrow function vários parâmetros
var x = 10;
var y = 5;

var soma = (num1, num2) => num1 + num2;

console.log(soma(x, y)); // 15

// arrow function um parâmetro
var frase = 'Estou vendo como criar arrow functions!';

var fraseToArray = (frase) => frase.split(' ');

console.log(fraseToArray(frase)); // (6) ["Estou", "vendo", "como", "criar", "arrow", "functions!"]

// arrow function sem parâmetro
var semArg = () => console.log('Teste arrow function');

semArg();