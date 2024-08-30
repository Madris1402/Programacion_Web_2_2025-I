let respuesta;
let usuario;
let guess;
let intentos;

function App(){

    random();

    intentos = 5;
    console.log("vidas restantes: " + intentos);

    guess = prompt("Intenta adivinar un número entre 1 y 10: ");
    console.log("número del Usuario: " + parseInt(guess));

    while (guess != respuesta && intentos>1){
        intentos --
        console.log("vidas restantes: " + intentos);
        guess = prompt("Intenta adivinar un número entre 1 y 10: ");
        console.log("número del Usuario: " + parseInt(guess));
    } if (guess != respuesta){
        alert("Has Perdido :c")
        console.log("Has Perdido :c")
    } else {
        alert("Has ganado :D")
        console.log("Has ganado :D")
    }

    credenciales();
}

function random(){
    respuesta = Math.floor(Math.random()*(10 - 1) + 1);
    console.log("respuesta: " + respuesta);
    return respuesta;
}

function credenciales(){
    usuario = prompt("Ingresa tu nombre de usuario: ");
    console.log("usuario:" + usuario);
}