function App4(){

    // Programa de rangos

    let valor3 = prompt("ingresa un valor entre 1 y 10 c:");
    let parse_valor3 = parseInt(valor3);
    if (parse_valor3 > 10 || parse_valor3 < 1){
        console.log("Fuera de Rango");
    } else {
        console.log("Valor en el rango :D");
    }

}