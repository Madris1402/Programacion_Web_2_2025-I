function App2(){

    function numeroAleatorio(min,max){
        return Math.floor( Math.random()* (max-min)+min);
    } 
    console.log(numeroAleatorio(5,15));
}


function App3(){
    
    function saluda(nombre){
        console.log("hola: "+nombre);
        
    }
    saluda("Ricardo");
}

function App4(){

    function suma (a,b){
        let resultado;
        return resultado=a+b;
    }

    let dato1 =7 + suma(5,6);
    console.log(dato1);
}