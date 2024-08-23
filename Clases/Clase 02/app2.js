// Relacionales

// let res1 =  10>5;
// console.log(res1);

// let res2 = 16 == 16;
// console.log(res2);

// let res3 = 8!=8;
// console.log(res3);

function App2(){
let valor1 = prompt("ingresa un valor binario");
let valor2 = prompt("ingresa un valor binario");

let res = parseInt(valor1) && parseInt(valor2);
let res1 = parseInt(valor1) || parseInt(valor2);

console.log(valor1);
console.log(valor2);
console.log("Resultado AND: " + res);
console.log("Resultado OR: " + res1);
}