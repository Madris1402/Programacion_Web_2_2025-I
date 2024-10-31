const miPromesa = new Promise((resolve, reject) => {
    //Simulamos una operación asíncrona
    setTimeout(() => {
        const exito = true;
        if(exito){
            resolve("Operación Exitosa");
        }else{
            reject("Hubo un error en la operación");
        }
    },300);
});
