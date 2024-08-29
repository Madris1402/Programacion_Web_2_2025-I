function App(){

    let opciones = prompt(

        `Elige una opción
        
        1. Libros
        
        2. Películas
        
        3. Juegos`
    );

    switch(opciones){

        case "1":
            console.log("El Principito")
            break;
        case "2":
            console.log("Matrix")
            break;
        case "3":
            console.log("COD")
            break;
    }
}