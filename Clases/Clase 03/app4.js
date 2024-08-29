function App4(){

    let respuesta = Math.floor(Math.random()*(10 - 1) + 1);
    console.log("respuesta: " + respuesta);

    let intentos = 5;
    console.log("vidas restantes: " + intentos);

    let Usuario = prompt("Ingresa tu nombre de usuario: ");
    console.log("usuario:" + Usuario);

    let guess = prompt("Intenta adivinar un número entre 1 y 10: ");
    console.log("número del Usuario: " + parseInt(guess));

    while (guess != respuesta && intentos>1){
        intentos --
        console.log("vidas restantes: " + intentos);
        let guess = prompt("Intenta adivinar un número entre 1 y 10: ");
        console.log("número del Usuario: " + parseInt(guess));
    } if (guess != respuesta){
        prompt("Has Perdido :c")
        console.log("Has Perdido :c")
    } else {
        prompt("Has ganado :D")
        console.log("Has ganado :D")
    }

}