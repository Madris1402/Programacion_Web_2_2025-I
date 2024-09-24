let frutas = ["manzana", "sandía", "pera"];

function App(){
    frutas.forEach(frutas => console.log(frutas));

    frutas.forEach((frutas,index,array) => {
        console.log(index);
        console.log(array);
        console.log(frutas);
    });
}

function App2(){

    frutas.forEach((frutas,index,array) => {
        console.log(`Fruta (${index + 1}).- ${frutas}`);
    });
}

