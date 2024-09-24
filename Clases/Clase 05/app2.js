let carrito = [];

function App3(){

    let fruta = prompt("Ingresa una Fruta:");
        carrito.push(fruta);

    while(confirm("¿Deseas Agregar otra fruta?")){

        let fruta = prompt("Ingresa una Fruta:");
        carrito.push(fruta);
    }
    
    let alerta = "Carrito: \n"
    carrito.forEach((fruta,index)=>{
        alerta += `${index+1}. ${fruta}\n`
    });
    alert(alerta);
}