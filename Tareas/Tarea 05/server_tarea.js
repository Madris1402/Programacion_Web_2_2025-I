//Importar el módulo hhtp que viene incluido en Node.js
const http = require('http');

//Definimos el puerto que va a correr el servidor
const port = 5008;

//crear servidor
const server = http.createServer((req, res)=>{

    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Nombre: Madrigal Urencio Ricardo \n Numero de Cuenta: 319328013');
});

//Escuchar el puerto específico
server.listen(port, ()=>{

    console.log(`El servidor está funcionando por medio de http://localhost:${port}`)
});
