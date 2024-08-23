// Calcular IMC
function IMC(){
    let nombre = prompt("Escribe tu nombre");
    console.log("Nombre: " + nombre);
    let edad = prompt("Ingresa tu edad en Número");
    console.log("Edad: " + edad);
    let peso = prompt("Ingresa tu peso en Kg");
    console.log("Peso: " + peso);
    let estatura = prompt("Ingrea tu estatura en Metros");
    console.log("Estatura: " + estatura);

    let IMC = parseInt(peso) / (parseInt(estatura)^2);
    parseFloat(IMC);
    console.log("Hola "+ nombre+ " tu IMC es: "+ IMC);
    alert("Hola "+ nombre+ " tu IMC es: "+ IMC);

    // IMC Nivel de peso
    // Por debajo de 18.5	Bajo peso
    // 18.5 – 24.9	Normal
    // 25.0 – 29.9	Sobrepeso
    // 30.0 o más	Obesidad
}