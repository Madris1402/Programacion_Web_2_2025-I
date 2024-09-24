function App4(){

    function crearCadenaH(caracter, cantidad) {
        let cadena = "";
    
        for (let i = 0; i < cantidad; i++) {
          cadena += caracter + " ";
        }
        return cadena;
      }
      
      const caracter = "x";
      const cantidad = 4;
      const resultado = crearCadenaH(caracter, cantidad);
      console.log(resultado);
}

function App5(){

    function crearCadenaV(caracter, cantidad) {
        let cadenaVertical = "";
      
        for (let i = 0; i < cantidad; i++) {
          cadenaVertical += caracter + "\n";
        }
      
        return cadenaVertical;
      }
      
      const caracter = "x";
      const cantidad = 4;
      const resultado = crearCadenaV(caracter, cantidad);
      console.log(resultado);
}

function App6(){

    cantidadH = parseInt(prompt("Ingresa la Cantidad Horizontal:"))
    cantidadV = parseInt(prompt("Ingresa la Cantidad Vertical:"))
    const caracter = "x";

    function crearCadena(caracter, cantidadH) {
        let cadena = "";
    
        for (let i = 0; i < cantidadH; i++) {
          cadena += caracter + " ";
        }
        return cadena;
      }
      

      function crearCadenaVertical(caracter, cantidadV) {
        let cadenaVertical = "";
      
        for (let i = 0; i < cantidadV; i++) {
          cadenaVertical += caracter + "\n";
        }
        return cadenaVertical;
      }

      const resultadoH = crearCadena(caracter, cantidadH);
      console.log(resultadoH);
      const resultadoV = crearCadenaVertical(caracter, cantidadV);
      console.log(resultadoV);
}

function App7(){

    cantidadH = 4;
    cantidadV = 4;
    const caracter = "x";

    function crearCadena(caracter, cantidadH) {
        let cadena = "";
    
        for (let i = 0; i < cantidadH; i++) {
          cadena += caracter + " ";
        }
        return cadena;
      }
      

      function crearCadenaVertical(caracter, cantidadV) {
        let cadenaVertical = "";
      
        for (let i = 0; i < cantidadV; i++) {
          cadenaVertical += resultadoH + "\n";
        }
        return cadenaVertical;
      }

      const resultadoH = crearCadena(caracter, cantidadH);
      const resultadoV = crearCadenaVertical(caracter, cantidadV);
      console.log(resultadoV);
}

function App8(){

    for (let i = 1; i <= 10; i++) {
        console.log(`Tabla del ${i}`);
        for (let j = 1; j <= 10; j++) {
          console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log();
      }
}