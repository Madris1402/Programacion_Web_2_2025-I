function App6(){

    let frutas = ["manzana","pera","Sandia"];

    frutas.forEach(valor => console.log(valor));
}

function App7(){
    
    let frutas = ["manzana","pera","Sandia"];
    frutas.forEach ( (valor, indice, vector)=>{
        // console.log(valor);
        //console.log(indice);
        console.log(vector);
    });
}