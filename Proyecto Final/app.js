const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

/* Instanciar */
const app = express();

/* Puerto */
const port = 3008;

app.use(bodyParser.urlencoded({extend:false})); /* analizar los datos del cuerpo de las solicitudes HTTP,
    especificamente los datos que provienen de formulario HTML enviados atraves de propiedad POST y GET*/

app.set('view engine', 'ejs'); // Es un motor de plantillas //Permite generar cambios en HTML de manera dinámica


/* Crear Usuario en MySQL
CREATE USER 'progweb2'@'localhost' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON node_crud.* TO 'progweb2'@'localhost';
*/

const db = mysql.createConnection({
    host: 'localhost',
    user: 'progweb2',
    password: '123456',
    database: 'node_crud',
    port: '3306'
});


// conexion db
db.connect(err => {
    if(err){
        console.log(`Error al momento de hacer conexion con la BD`);
    } else{
        console.log(`Conexion Realizada con Exito`);
    }

});

//server inicio
app.listen(port,()=>{
    console.log(`El server esta en escucha desde http://localhost:${port}`);
});

//Mostrar lista de usuarios

app.get('/', (req, res) => {
    //Consulta a la base de datos
    const query = 'select * from user';
    //Trabajar con la conexion
    db.query(query, (err, results) => {
        if(err){
            //Mensaje de Error para el usuario
            console.error(`Error al recupear los datos. Codigo de error: ${err}`)
            res.send('Error al recuperar los datos');
        } else{
            res.render('index',{users: results});
        }
    });
});

// Agregar Usuario

app.post('/add', (req, res) => {

    const {nombre, email} = req.body;
    const query = 'insert into users (nombre, email) value (?,?)';
    db.query(query,[nombre, email], (err) => {
        if(err){
            console.error(`Error al insertar datos en la tabla de usuarios. Codigo de error: ${err}}`);
            res.send(`Error al insertar datos en la tabla de usuarios.`)
        } else{
            res.redirect('/');
        }
    });
});