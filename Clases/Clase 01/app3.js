function App3(){
//Almacenar Variables según un Input

// Nombre, Apellido, Nacionalidad
let name = prompt("ingresa tu nombre c:")
console.log("tu nombre es: " + name);

let edad = prompt("ingresa tu edad :D");
console.log("tu edad es: " + edad);

let naci = prompt("ingresa tu nacionalidad :3");
console.log("tu nacionalidad es: " + naci);

// Sin Parsing
let numro1 = prompt("Ingresa tu primer número: ");
let numro2 = prompt("Ingresa tu segundo número: ");
let salida = numro1 + numro2;

console.log(typeof salida)
console.log("el resultado es: " + salida);
}