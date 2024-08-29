function App7(){
    saludar();
    despedida("Madris");
    console.log(retorno("Madris"));
}

function saludar(){
    console.log("activada la función: saluar");
    alert("Hola");
}

function despedida(nombreUsuario){
    console.log("Adiós: " + nombreUsuario);
}

function retorno(nombreUsuario){
    return "Adiós desde retorno: " + nombreUsuario;
}