let respuesta;
let usuario;
let guess;
let intentos;
let contador;

function App(){

    random();
    intentos = 5;
    console.log("vidas restantes: " + intentos);
    contador = 0;

    while (guess != respuesta && intentos>0){
        guess = prompt("Intenta adivinar un número entre 1 y 10: ");
        if (guess === null) {
            console.log("Juego abortado por el usuario")
            return; 
        }
        parseInt(guess)
        solonumeros();
        iteration();
        aprox();
    } 
    winloose();
    credenciales();
}

function random(){
    respuesta = Math.floor(Math.random()*(11 - 1) + 1);
    return respuesta;
}

function credenciales(){
    usuario = prompt("Ingresa tu nombre de usuario: ");
    if (usuario === null || usuario === "") {
        alert("Gracias por Jugar :3");
        console.log("Gracias por Jugar :3");
        return; 
    } else{
        alert("Gracias por Jugar " + usuario + " :3");
        console.log("Gracias por Jugar " + usuario + " :3");
    }
}

function aprox(){

    if (guess < respuesta){
        if (guess === "" || intentos < 1){
            return;
        }
        console.log("La respuesta es un número mayor");
        alert("La respuesta es un número mayor" + "\n" + "vidas restantes: "+ intentos);
    } else if (guess > respuesta){
        console.log("La respuesta es un número menor");
        alert("La respuesta es un número menor" + "\n" + "vidas restantes: "+ intentos);
    }
}

function winloose(){
    if (guess != respuesta){
        alert("Has Perdido :c" + "\n" + "la respuesta era: " + respuesta);
        console.log("Has Perdido :c");
        console.log("la respuesta era: " + respuesta);
    } else {
        alert("Has ganado :D" + "\n" + "Encontraste la respuesta en: " + contador + " intentos");
        console.log("Has ganado :D");
        console.log("Encontraste la respuesta en: " + contador + " intentos")
    }
}

function solonumeros(){
        if (isNaN(guess) || guess === ""){
            console.log("debes introducir un número");
            alert("debes introducir un número");
            intentos ++
            contador --
        } else{
            console.log("número del usuario: " + guess);
        }
}

function iteration(){

    if (guess != respuesta){
    intentos --;
    console.log("vidas restantes: " + intentos);
    contador ++;
    } else {
        contador ++;
        return;
    }
    
}