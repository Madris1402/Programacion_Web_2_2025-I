//Importar el módulo hhtp que viene incluido en Node.js
const http = require('http');

//Definimos el puerto que va a correr el servidor
const port = 3009;

//crear servidor
const server = http.createServer((req, res)=>{

    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hola mundo');
});

//Escuchar el puerto específico
server.listen(port, ()=>{

    console.log(`El servidor está funcionando por medio de http://localhost:${port}`)
});
