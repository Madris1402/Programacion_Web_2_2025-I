// Funciones Callback

function App1(){
    // const operacion =(num1, num2, op) =>{ // No usar la palabra callback es una mala práctica de programación
    const operacion =(num1, num2, callback) =>{ //Buena Práctica
        return console.log(callback(num1, num2));
    }
    operacion(1,3, (a,b) => a + b);
    operacion(1,3, (a,b) => a - b);
    operacion(1,3, (a,b) => a / b);
    operacion(1,3, (a,b) => a * b);
}

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

function procesarEntradaUsuario(callback){
    const nombre = prompt("Por favor ingresa tu nombre: ");
    callback(nombre);
}
// procesarEntradaUsuario(saludar);

