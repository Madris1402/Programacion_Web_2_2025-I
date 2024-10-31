function App2(){

    const operacion = (num1, num2, callback) =>{
        return setTimeout(()=>{
            callback(num1, num2)
        }, 300);
    }

    operacion (1, 3, (a, b) => {
        
        console.log(a + b);
    });
}