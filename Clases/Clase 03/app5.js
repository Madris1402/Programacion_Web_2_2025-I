function App5(){

    let frutas = ["Manzana","Pera", "Plátano", "Jícama", "Piña"];
    console.log(frutas);

    console.log(frutas[1]);
    
    console.log(frutas[8]); // No existe el elemento 8 en el arreglo.

    console.log(frutas.length);

    for(let i=0; i<frutas.length ; i++){
        console.log("For: " + frutas[i]);
    }

    for (let fruta of frutas) { //Forof
        console.log("Forof: " + fruta);
    }

    for (let fruta in frutas) { //Forof
        console.log("Forin: " + fruta);
    }
    

}