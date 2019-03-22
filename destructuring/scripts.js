// atribuição por array
const arr = [1,2,3,4,5];
let [a,b,c,d,e] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5

// atribuição por objeto
const obj = {
    nome: 'Matheus',
    sobrenome: 'Battisti',
    idade: 28,
    pais: 'Brasil'
}

let {nome: n, sobrenome: s, idade: i, pais: p} = obj

console.log(`${n} ${s} tem ${i} e mora no ${p}.`) // Matheus Battisti tem 28 e mora no Brasil.

let {nome, sobrenome} = obj

console.log(`${nome} ${sobrenome}`) // Matheus Battisti

// atribuição por função
function numeros() {
    return [5, 10];
}

let [num1, num2] = numeros();

console.log(num1); // 5
console.log(num2); // 10

// ignorando elementos
const lista = ['Maçã', 'Laranja', 'Banana', 'Caqui'];

let[, , ,caqui] = lista

console.log(caqui); // Caqui

// funciona com qualquer coisa que pode ser iterada
let [x,y,z] = 'xyz';

console.log(x); // x
console.log(y); // y
console.log(z); // z